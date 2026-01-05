declare global {
  interface Window {
    FB?: any;
    fbAsyncInit?: () => void;
  }
}

const FACEBOOK_SCRIPT_ID = "facebook-jssdk";
const FACEBOOK_SDK_SRC = "https://connect.facebook.net/en_US/sdk.js";
const FACEBOOK_SDK_VERSION = "v19.0";

const loadFacebookSdk = (appId: string): Promise<void> => {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Facebook SDK chỉ chạy trên trình duyệt"));
  }

  if (window.FB) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    window.fbAsyncInit = () => {
      try {
        window.FB?.init({
          appId,
          cookie: true,
          xfbml: false,
          version: FACEBOOK_SDK_VERSION,
        });
        resolve();
      } catch (err: any) {
        reject(err);
      }
    };

    const existingScript = document.getElementById(FACEBOOK_SCRIPT_ID);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve());
      existingScript.addEventListener("error", () => reject(new Error("Không thể tải Facebook SDK")));
      return;
    }

    const script = document.createElement("script");
    script.id = FACEBOOK_SCRIPT_ID;
    script.src = FACEBOOK_SDK_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Không thể tải Facebook SDK"));
    document.body.appendChild(script);
  });
};

export type FacebookAuthResult = {
  accessToken: string;
  userID: string;
  expiresIn?: number;
};

export const getFacebookAuthToken = async (): Promise<FacebookAuthResult> => {
  const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID;
  if (!appId) {
    throw new Error("Thiếu NEXT_PUBLIC_FACEBOOK_APP_ID");
  }

  await loadFacebookSdk(appId);

  return new Promise((resolve, reject) => {
    if (!window.FB) {
      reject(new Error("Facebook SDK chưa sẵn sàng"));
      return;
    }

    window.FB.login(
      (response: any) => {
        const auth = response?.authResponse;
        if (response?.status === "connected" && auth?.accessToken && auth?.userID) {
          resolve({
            accessToken: auth.accessToken,
            userID: auth.userID,
            expiresIn: auth.expiresIn,
          });
        } else {
          reject(new Error("Không nhận được token Facebook"));
        }
      },
      {
        scope: "email,public_profile",
        return_scopes: true,
      }
    );
  });
};
