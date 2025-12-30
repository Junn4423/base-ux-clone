import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng nhập | SOF.COM.VN - Phần mềm quản lý doanh nghiệp",
    description: "Đăng nhập vào SOF.COM.VN để quản lý doanh nghiệp của bạn. Hệ thống ERP, POS, HRM toàn diện với bảo mật cao và hỗ trợ 24/7.",
    keywords: ["đăng nhập SOF.COM.VN", "login SOF ERP", "phần mềm quản lý doanh nghiệp"],
    openGraph: {
        title: "Đăng nhập | SOF.COM.VN",
        description: "Đăng nhập vào SOF.COM.VN để quản lý doanh nghiệp của bạn",
        type: "website",
    },
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
