import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactPageClient } from "./ContactPageClient";

// SEO Metadata for Contact page
export const metadata: Metadata = {
  title: "Liên Hệ",
  description:
    "Liên hệ với SOF.VN để được tư vấn miễn phí về giải pháp phần mềm quản lý doanh nghiệp. Hotline 24/7, email hỗ trợ và địa chỉ văn phòng.",
  keywords: [
    "liên hệ SOF",
    "tư vấn phần mềm",
    "hỗ trợ khách hàng",
    "demo phần mềm",
    "SOF.VN contact",
  ],
  openGraph: {
    title: "Liên Hệ | SOF.VN",
    description:
      "Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí về giải pháp phần mềm quản lý doanh nghiệp.",
    url: "https://sof.vn/contact",
  },
  alternates: {
    canonical: "https://sof.vn/contact",
  },
};

// Server Component wrapper - the actual form is in a Client Component
export default function ContactPage() {
  return (
    // Bắt buộc phải có Suspense để build không bị lỗi
    <Suspense fallback={<div className="container py-20 text-center">Đang tải form liên hệ...</div>}>
      <ContactPageClient />
    </Suspense>
  );
}
