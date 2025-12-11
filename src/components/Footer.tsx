import { Mail, Phone, MapPin, Facebook, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  congty: {
    title: "Công ty",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Khách hàng", href: "#" },
      { label: "Báo chí", href: "#" },
      { label: "Tuyển dụng", href: "#" },
      { label: "Đối tác", href: "#" },
    ],
  },
  bosanpham: {
    title: "Bộ sản phẩm",
    links: [
      { label: "Base Work+", href: "#" },
      { label: "Base HRM+", href: "#" },
      { label: "Base CRM", href: "#" },
      { label: "Base Finance+", href: "#" },
      { label: "Base Info+", href: "#" },
    ],
  },
  sanpham: {
    title: "Sản phẩm",
    links: [
      { label: "Base XSpace", href: "#" },
      { label: "Base Workflow", href: "#" },
      { label: "Base Request", href: "#" },
      { label: "Base Schedule", href: "#" },
      { label: "Base Finance", href: "#" },
    ],
  },
  giaiphap: {
    title: "Giải pháp",
    links: [
      { label: "Digital Workspace", href: "#" },
      { label: "Employee Happiness", href: "#" },
      { label: "Digital Transformation", href: "#" },
      { label: "Financial Management", href: "#" },
    ],
  },
  nganh: {
    title: "Ngành",
    links: [
      { label: "Sản xuất", href: "#" },
      { label: "F&B", href: "#" },
      { label: "Giáo dục", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "Dược", href: "#" },
    ],
  },
  hotro: {
    title: "Hỗ trợ",
    links: [
      { label: "Liên hệ", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Hỏi đáp và chia sẻ", href: "#" },
      { label: "AI Content Hub", href: "#" },
    ],
  },
};

const offices = [
  {
    location: "Trụ sở Hà Nội:",
    phone: "(+84) 24 2244 1313",
    address: "Tầng 16, Tòa HUD, số 37 Lê Văn Lương, Thanh Xuân, Hà Nội",
  },
  {
    location: "VP. HCM:",
    phone: "(+84) 896 69 1313",
    address: "Tầng 2, Tòa Jasmine 1, Hà Đô Centrosa Garden, 200 Đường 3/2, Phường Hòa Hưng, TP.HCM",
  },
  {
    location: "VP. Đà Nẵng:",
    phone: "(+84) 977 575 309",
    address: "Tầng 11, tòa nhà VietinBank, số 36 Trần Quốc Toản, Hải Châu, Đà Nẵng",
  },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary hover:text-primary/80 transition-colors"
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
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {office.location}
                </div>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="block text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  {office.phone}
                </a>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Logo and Company */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">B</span>
                </div>
                <span className="text-foreground font-bold text-xl">BASE.VN</span>
              </a>
              <span className="text-sm text-muted-foreground">
                Công ty cổ phần Base Enterprise
              </span>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Chứng nhận bởi:</span>
              <div className="flex items-center gap-3">
                <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">
                  ISO 9001:2015
                </div>
                <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground">
                  ISO 27001
                </div>
                <div className="px-2 py-1 bg-secondary rounded text-xs font-medium text-foreground flex items-center gap-1">
                  <span className="text-[10px]">Microsoft</span>
                  <span>Partner</span>
                </div>
              </div>
            </div>

            {/* App Download */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Base đã có mặt trên:</span>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground">Download on the</div>
                  <div className="text-xs font-medium">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-muted-foreground">GET IT ON</div>
                  <div className="text-xs font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Base © 2017 All Rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-primary hover:underline">
              Điều khoản
            </a>
            <a href="#" className="text-sm text-primary hover:underline">
              Chính sách
            </a>
            <a href="#" className="text-sm text-primary hover:underline">
              Privacy IOS
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@base.vn"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@base.vn
            </a>
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors text-xs font-bold"
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
