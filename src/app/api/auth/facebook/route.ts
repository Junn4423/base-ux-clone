import { NextRequest, NextResponse } from "next/server";

const normalizeApiUrl = (url?: string) => {
  if (!url) return "";
  return url.replace(/\\/g, "/");
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const accessToken = body?.accessToken as string | undefined;

    if (!accessToken) {
      return NextResponse.json(
        { success: false, message: "Thiếu access token từ Facebook" },
        { status: 400 }
      );
    }

    const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
    const appSecret = process.env.FACEBOOK_APP_SECRET;

    if (!appId || !appSecret) {
      return NextResponse.json(
        {
          success: false,
          message: "Chưa cấu hình NEXT_PUBLIC_FACEBOOK_APP_ID hoặc FACEBOOK_APP_SECRET",
        },
        { status: 500 }
      );
    }

    const apiUrl = normalizeApiUrl(process.env.NEXT_PUBLIC_API_URL);
    if (!apiUrl) {
      return NextResponse.json(
        { success: false, message: "Thiếu NEXT_PUBLIC_API_URL" },
        { status: 500 }
      );
    }

    const appAccessToken = `${appId}|${appSecret}`;
    const debugUrl = `https://graph.facebook.com/debug_token?input_token=${encodeURIComponent(
      accessToken
    )}&access_token=${encodeURIComponent(appAccessToken)}`;

    const debugRes = await fetch(debugUrl);
    const debugText = await debugRes.text();
    let debugJson: any = {};
    try {
      debugJson = debugText ? JSON.parse(debugText) : {};
    } catch (e) {
      debugJson = {};
    }

    const debugData = debugJson?.data;
    if (!debugRes.ok || !debugData?.is_valid || debugData?.app_id !== appId) {
      return NextResponse.json(
        {
          success: false,
          message: "Token Facebook không hợp lệ",
          detail: debugData?.error || debugText || "Invalid token",
        },
        { status: 401 }
      );
    }

    const userId = debugData?.user_id as string | undefined;
    if (!userId) {
      return NextResponse.json(
        {
          success: false,
          message: "Không lấy được user_id Facebook",
          detail: debugText,
        },
        { status: 400 }
      );
    }

    const profileUrl = `https://graph.facebook.com/${userId}?fields=id,name,email,picture.type(large)&access_token=${encodeURIComponent(
      accessToken
    )}`;
    const profileRes = await fetch(profileUrl);
    const profileText = await profileRes.text();
    let profile: any = {};
    try {
      profile = profileText ? JSON.parse(profileText) : {};
    } catch (e) {
      profile = {};
    }

    if (!profile?.id) {
      return NextResponse.json(
        {
          success: false,
          message: "Không lấy được thông tin người dùng Facebook",
          detail: profileText,
        },
        { status: 502 }
      );
    }

    const email = (profile?.email as string | undefined) || "";
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "Facebook không trả về email, không thể tiếp tục",
        },
        { status: 400 }
      );
    }

    const name = (profile?.name as string | undefined) || email;
    const avatar = (profile?.picture?.data?.url as string | undefined) || "";

    let backendRes: Response;
    try {
      backendRes = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-SOF-USER-TOKEN": process.env.NEXT_PUBLIC_API_TOKEN || "",
        },
        body: JSON.stringify({
          method: "facebookLogin",
          email,
          name,
          phone: "",
          facebookId: profile.id,
          avatar,
        }),
      });
    } catch (err: any) {
      return NextResponse.json(
        {
          success: false,
          message: "Không kết nối được backend ERP",
          detail: err?.message,
          apiUrl,
        },
        { status: 500 }
      );
    }

    const backendText = await backendRes.text();
    let backendJson: any;
    try {
      backendJson = backendText ? JSON.parse(backendText) : {};
    } catch (e) {
      backendJson = {
        success: false,
        message: "Server backend trả về dữ liệu không hợp lệ",
        raw: backendText,
      };
    }

    return NextResponse.json(backendJson, { status: backendRes.status });
  } catch (error: any) {
    console.error("Facebook auth error", error);
    return NextResponse.json(
      {
        success: false,
        message: "Đăng nhập Facebook thất bại, vui lòng thử lại",
        detail: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
