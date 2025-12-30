import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quên mật khẩu | SOF.COM.VN - Lấy lại mật khẩu",
    description: "Đặt lại mật khẩu tài khoản SOF.COM.VN của bạn một cách an toàn. Hệ thống bảo mật đa lớp giúp bảo vệ tài khoản của bạn.",
    keywords: ["quên mật khẩu SOF.COM.VN", "reset password", "lấy lại mật khẩu", "forgot password SOF.COM.VN"],
    openGraph: {
        title: "Quên mật khẩu | SOF.COM.VN",
        description: "Đặt lại mật khẩu tài khoản SOF.COM.VN của bạn một cách an toàn",
        type: "website",
    },
};

export default function ForgotPasswordLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
