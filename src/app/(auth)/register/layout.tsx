import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng ký tài khoản | SOF.COM.VN - Dùng thử miễn phí 30 ngày",
    description: "Tạo tài khoản SOF.COM.VN miễn phí và trải nghiệm giải pháp quản lý doanh nghiệp hàng đầu Việt Nam. Hỗ trợ ERP, POS, HRM đa nền tảng.",
    keywords: ["đăng ký SOF.COM.VN", "tạo tài khoản ERP", "dùng thử phần mềm quản lý", "register SOF.COM.VN"],
    openGraph: {
        title: "Đăng ký tài khoản | SOF.COM.VN - Dùng thử miễn phí 30 ngày",
        description: "Tạo tài khoản SOF.COM.VN miễn phí và trải nghiệm giải pháp quản lý doanh nghiệp hàng đầu Việt Nam",
        type: "website",
    },
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
