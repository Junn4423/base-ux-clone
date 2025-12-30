
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Config: Prefer Env vars, fallback to hardcoded strings
        const TARGET_URL = process.env.NEXT_PUBLIC_API_URL || "http://192.168.1.96/erpdung-hao/services/erpv1/services.sof.vn/index.php";
        const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || "SOF2025DEVELOPER";

        console.log("Proxy Request to:", TARGET_URL);
        // console.log("Proxy Body:", JSON.stringify(body)); // Uncomment if deep debug needed

        const response = await fetch(TARGET_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-SOF-USER-TOKEN": API_TOKEN,
            },
            body: JSON.stringify(body),
        });

        console.log("Backend Response Status:", response.status);

        // Read text first to debug if not JSON
        let responseText = await response.text();
        const originalText = responseText; // Keep for debug

        // 1. Clean whitespace
        responseText = responseText.trim();

        // 2. Remove BOM (Byte Order Mark) if present (common in PHP)
        if (responseText.charCodeAt(0) === 0xFEFF) {
            responseText = responseText.slice(1);
        }

        try {
            const data = JSON.parse(responseText);
            return NextResponse.json(data);
        } catch (jsonError) {
            console.warn("Standard JSON parse failed, attempting extraction...");

            // 3. Last Resort: Try to find the first complete JSON object "{...}"
            // This handles cases like: "[warning] {...} []" or "{...}garbage"
            try {
                const jsonMatch = responseText.match(/(\{[\s\S]*\})/);
                if (jsonMatch) {
                    const potentialJson = jsonMatch[0];
                    // Careful: greedy regex might match too much if multiple objects. 
                    // Let's try a simpler approach: parse from first '{' to last '}'
                    const firstOpen = responseText.indexOf('{');
                    const lastClose = responseText.lastIndexOf('}');

                    if (firstOpen !== -1 && lastClose !== -1 && lastClose > firstOpen) {
                        const extracted = responseText.substring(firstOpen, lastClose + 1);
                        const data = JSON.parse(extracted);
                        return NextResponse.json(data);
                    }
                }
            } catch (e) {
                // Ignore extraction error, stick to original error
            }

            console.error("Backend response is not JSON:", originalText);
            return NextResponse.json(
                {
                    success: false,
                    message: "Server backend trả về dữ liệu không hợp lệ (không phải JSON)",
                    debug_text: originalText.substring(0, 500) // Increase debug length
                },
                { status: 500 }
            );
        }

    } catch (error: any) {
        console.error("Proxy Error Details:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Lỗi kết nối đến server backend",
                error_detail: error.message
            },
            { status: 500 }
        );
    }
}
