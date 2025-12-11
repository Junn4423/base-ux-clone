import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: {
    title: "Sản phẩm",
    links: ["Base Work+", "Base HRM+", "Base Sales+", "Base Finance+", "Base Marketing+"],
  },
  solutions: {
    title: "Giải pháp",
    links: ["Doanh nghiệp nhỏ", "Doanh nghiệp vừa", "Tập đoàn", "Startup"],
  },
  company: {
    title: "Công ty",
    links: ["Về chúng tôi", "Tuyển dụng", "Tin tức", "Liên hệ"],
  },
  support: {
    title: "Hỗ trợ",
    links: ["Trung tâm trợ giúp", "Tài liệu API", "Cộng đồng", "Đối tác"],
  },
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-foreground font-bold text-xl">BASE.VN</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Nền tảng quản trị doanh nghiệp toàn diện hàng đầu Việt Nam.
            </p>
            <div className="space-y-2">
              <a href="tel:1900636483" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                1900 636 483
              </a>
              <a href="mailto:info@base.vn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                info@base.vn
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Tầng 12, Tòa Handico, Phạm Hùng, Hà Nội</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Base.vn. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
