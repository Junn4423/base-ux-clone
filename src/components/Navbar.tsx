import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Sản phẩm", hasDropdown: true },
  { label: "Giải pháp & Giá", hasDropdown: true },
  { label: "Lĩnh vực", hasDropdown: true },
  { label: "Tin tức", hasDropdown: true },
  { label: "Khách hàng", hasDropdown: false },
  { label: "Về chúng tôi", hasDropdown: false },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-foreground font-bold text-xl">BASE.VN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="nav"
                className="flex items-center gap-1 px-3"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Đăng nhập
            </Button>
            <Button variant="hero" size="default">
              Đăng ký Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                className="w-full flex items-center justify-between py-3 px-4 text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-center">
                Đăng nhập
              </Button>
              <Button variant="hero" className="w-full justify-center">
                Đăng ký Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
