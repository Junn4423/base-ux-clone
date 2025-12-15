import { Mail, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";
import sofLogo from "@/assets/logo/logo.png";

const footerLinks = {
  congty: {
    title: "Công ty SOF",
    links: [
      { label: "Liên hệ", href: "/contact" },
      { label: "Tuyển dụng", href: "/under-construction" },
      { label: "Tin tức", href: "/under-construction" },
    ],
  },
  sanpham: {
    title: "Sản phẩm & Dịch vụ",
    links: [
      { label: "Phần mềm ERP", href: "http://sof.vn/vi/Phan-mem/18/Phan-mem-quan-tri-nguon-luc-doanh-nghiep-(ERP--SOF).html" },
      { label: "Phần mềm HRM", href: "http://sof.vn/vi/Phan-mem/1/Phan-mem-nhan-su-tien-luong.html" },
      { label: "Phần mềm Kế toán", href: "#" },
      { label: "Thiết kế Website", href: "#" },
    ],
  },
  fnb: {
    title: "F&B - Bán lẻ",
    links: [
      { label: "Quản lý quán cafe", href: "http://sof.vn/vi/Phan-mem/75/Phan-mem-quan-ly-quan-cafe.html" },
      { label: "Quản lý nhà hàng", href: "http://sof.vn/vi/Phan-mem/76/Phan-mem-quan-ly-nha-hang.html" },
      { label: "Quản lý bán hàng", href: "http://sof.vn/vi/Phan-mem/23/Phan-mem-quan-ly-ban-hang.html" },
    ],
  },
  dichvu: {
    title: "Dịch vụ & Vận tải",
    links: [
      { label: "Quản lý khách sạn", href: "http://sof.vn/vi/Phan-mem/77/Phan-mem-quan-ly-khach-san.html" },
      { label: "Quản lý vận tải", href: "http://sof.vn/vi/Phan-mem/78/Phan-mem-quan-ly-van-tai.html" },
      { label: "Quản lý kho pallet", href: "http://sof.vn/vi/Phan-mem/374/Phan-men-quan-ly-kho-pallet.html" },
    ],
  },
  hotro: {
    title: "Hỗ trợ khách hàng",
    links: [
      { label: "Hướng dẫn sử dụng", href: "/user-guide" },
      { label: "Chính sách bảo hành", href: "/warranty-policy" },
      { label: "Quy định thanh toán", href: "/payment-terms" },
    ],
  },
};

const offices = [
  {
    location: "Trụ sở chính:",
    phone: "0933 549 469 - 0932 518 569",
    address: "69/9 Đường D9, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#a7d5ec]">
      {/* Main Footer */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-6">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-sm sm:text-base text-[#0f426c]">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#507588] hover:text-[#0f426c] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#a7d5ec]">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {offices.map((office, index) => (
              <div key={index} className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#507588]">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {office.location}
                </div>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="block text-sm sm:text-base text-[#0f426c] font-semibold hover:text-[#3087fe] transition-colors"
                >
                  {office.phone}
                </a>
                <p className="text-xs sm:text-sm text-[#507588] leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#a7d5ec]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6">
            {/* Logo and Company */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Trang chủ SOF.VN">
                <img
                  src={sofLogo}
                  alt="Logo SOF.VN"
                  className="h-7 sm:h-9 w-auto rounded-md object-contain"
                  loading="lazy"
                  decoding="async"
                />
                <span className="text-[#0f426c] font-bold text-lg sm:text-xl">SOF.VN</span>
              </a>
              <span className="text-xs sm:text-sm text-[#507588]">
                CÔNG TY TNHH SOF
              </span>
            </div>

            {/* Certifications */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="text-xs sm:text-sm text-[#507588]">Chứng nhận bởi:</span>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <div className="px-2 py-1 bg-[#f4fbff] border border-[#a7d5ec] rounded text-[10px] sm:text-xs font-medium text-[#0f426c]">
                  ISO 9001:2015
                </div>
                <div className="px-2 py-1 bg-[#f4fbff] border border-[#a7d5ec] rounded text-[10px] sm:text-xs font-medium text-[#0f426c]">
                  ISO 27001
                </div>
                <div className="px-2 py-1 bg-[#f4fbff] border border-[#a7d5ec] rounded text-[10px] sm:text-xs font-medium text-[#0f426c] flex items-center gap-1">
                  <span className="text-[9px] sm:text-[10px]">Microsoft</span>
                  <span>Partner</span>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm text-[#507588]">SOF đã có mặt trên:</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href="#"
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 bg-[#0f426c] text-white rounded-lg hover:bg-[#0a3254] transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] text-white/70">Download on the</div>
                    <div className="text-[10px] sm:text-xs font-medium">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 bg-[#0f426c] text-white rounded-lg hover:bg-[#0a3254] transition-colors"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] text-white/70">GET IT ON</div>
                    <div className="text-[10px] sm:text-xs font-medium">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#a7d5ec] flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-[#507588]">
            SOF © 2011 All Rights reserved
          </p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="#" className="text-xs sm:text-sm text-[#0f426c] hover:underline">
              Điều khoản
            </a>
            <a href="#" className="text-xs sm:text-sm text-[#0f426c] hover:underline">
              Chính sách
            </a>
            <a href="#" className="text-xs sm:text-sm text-[#0f426c] hover:underline">
              Privacy IOS
            </a>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="mailto:cskh@sof.vn"
              className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#507588] hover:text-[#0f426c] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">cskh@sof.vn</span>
            </a>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0f426c] flex items-center justify-center text-white hover:bg-[#3087fe] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0f426c] flex items-center justify-center text-white hover:bg-[#3087fe] transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0f426c] flex items-center justify-center text-white hover:bg-[#3087fe] transition-colors"
                aria-label="Linkedin"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0f426c] flex items-center justify-center text-white hover:bg-[#3087fe] transition-colors text-[10px] sm:text-xs font-bold"
                aria-label="Zalo"
              >
                Z
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
