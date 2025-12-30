import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AOSProvider } from "@/components/providers/AOSProvider";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { LayoutWrapper } from "@/components/LayoutWrapper";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
});

// SEO Metadata - Static configuration for the entire site
export const metadata: Metadata = {
  metadataBase: new URL("https://sof.vn"),
  title: {
    default: "SOF.VN - Giải pháp phần mềm & Chuyển đổi số toàn diện",
    template: "%s | SOF.VN",
  },
  description:
    "SOF.VN - Hệ thống ERP, quản lý kho, nhân sự và thiết kế website chuyên nghiệp. Tùy chỉnh linh hoạt theo nhu cầu đặc thù của doanh nghiệp Việt. 12+ năm kinh nghiệm, 500+ dự án, 300+ khách hàng.",
  keywords: [
    "phần mềm ERP",
    "phần mềm HRM",
    "quản lý nhân sự",
    "thiết kế website",
    "POS",
    "quản lý bán hàng",
    "SOF.VN",
    "phần mềm quản lý",
    "chuyển đổi số",
    "giải pháp doanh nghiệp",
  ],
  authors: [{ name: "CÔNG TY TNHH SOF" }],
  creator: "CÔNG TY TNHH SOF",
  publisher: "CÔNG TY TNHH SOF",
  applicationName: "SOF.VN",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://sof.vn",
    siteName: "SOF.VN",
    title: "SOF.VN - Giải pháp phần mềm & Chuyển đổi số toàn diện",
    description:
      "Hệ thống ERP, quản lý kho, nhân sự và thiết kế website chuyên nghiệp. 12+ năm kinh nghiệm, 500+ dự án thành công.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo SOF.VN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOF.VN - Nền tảng quản trị doanh nghiệp toàn diện",
    description:
      "Nhanh chóng nắm bắt thông tin dưới góc nhìn đa chiều để đưa ra quyết định chính xác.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
  alternates: {
    canonical: "https://sof.vn",
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: "#00bfff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${beVietnamPro.variable} font-sans antialiased`}>
        <QueryProvider>
          <AOSProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
            <Toaster />
            <Sonner />
          </AOSProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
