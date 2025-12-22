"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ChevronDown,
  Menu,
  ShoppingCart,
  Store,
  Package,
  Coffee,
  Utensils,
  Hotel,
  Users,
  Truck,
  Warehouse,
  Car,
  Building2,
  Pill,
  Factory,
  UtensilsCrossed,
  Newspaper,
  BookOpen,
  FileText,
  Phone
} from "lucide-react";
import { ProductDropdown } from "./ProductDropdown";
import { SolutionsDropdown } from "./SolutionsDropdown";
import { IndustriesDropdown } from "./IndustriesDropdown";
import { NewsDropdown } from "./NewsDropdown";

const navItems = [
  { label: "Sản phẩm", hasDropdown: true, id: "product" },
  { label: "Giải pháp & Giá", hasDropdown: true, id: "solutions" },
  { label: "Lĩnh vực", hasDropdown: true, id: "industries" },
  { label: "Tin tức", hasDropdown: true, id: "news" },
  { label: "Liên hệ", hasDropdown: false, id: "contact", path: "/contact" },
];

const mobileProductItems = [
  { name: "Bán hàng", icon: ShoppingCart, href: "/phan-mem-ban-hang/index.html/index.html" },
  { name: "Siêu thị", icon: Store, href: "/under-construction" },
  { name: "Tạp hóa", icon: Package, href: "/phan-mem-ban-hang/index.html/index.html" },
  { name: "Quán Cafe", icon: Coffee, href: "/phan-mem-ban-hang/index.html/index.html" },
  { name: "Nhà hàng", icon: Utensils, href: "/under-construction" },
  { name: "Khách sạn", icon: Hotel, href: "/phan-mem-khach-san/index.html" },
  { name: "Thiết kế web", icon: Users, href: "/dich-vu-thiet-ke-web/index.html" },
  { name: "Vận tải", icon: Truck, href: "/phan-mem-van-tai-logistic/index.html" },
  { name: "Kho Pallet", icon: Warehouse, href: "/phan-mem-kho-pallet/index.html" },
  { name: "Bãi gửi xe", icon: Car, href: "/phan-mem-quan-li-giu-xe/index.html" },
  { name: "Nhân sự HRM", icon: Users, href: "/phan-mem-nhan-su/index.html" },
  { name: "ERP", icon: Building2, href: "/phan-mem-erp/index.html" },
  { name: "Dược phẩm", icon: Pill, href: "/under-construction" },
];

const mobileSolutionsItems = [
  { name: "Startup & SME", icon: Building2, href: "/under-construction" },
  { name: "Doanh nghiệp vừa", icon: Factory, href: "/under-construction" },
  { name: "Doanh nghiệp lớn", icon: Building2, href: "/under-construction" },
  { name: "Bảng giá chi tiết", icon: FileText, href: "/under-construction" },
];

const mobileIndustriesItems = [
  { name: "Sản xuất", icon: Factory, href: "/under-construction" },
  { name: "F&B & Bán lẻ", icon: UtensilsCrossed, href: "/under-construction" },
  { name: "Dược phẩm", icon: Pill, href: "/under-construction" },
  { name: "Vận tải", icon: Truck, href: "/under-construction" },
];

const mobileNewsItems = [
  { name: "Tin tức công ty", icon: Newspaper, href: "/under-construction" },
  { name: "Blog", icon: BookOpen, href: "/under-construction" },
  { name: "Tuyển dụng", icon: Users, href: "/under-construction" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const getMobileDropdownItems = (id: string) => {
    switch (id) {
      case "product": return mobileProductItems;
      case "solutions": return mobileSolutionsItems;
      case "industries": return mobileIndustriesItems;
      case "news": return mobileNewsItems;
      default: return [];
    }
  };

  const isExternalLink = (href: string) => href.startsWith("http");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f4fbff]/80 backdrop-blur-md border-b border-[#8fc0db] shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="Logo SOF.VN"
              width={40}
              height={40}
              className="rounded-md object-contain"
              priority
            />
            <span className="text-[#0f426c] font-bold text-xl hidden sm:block">SOF.VN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <Button
                  key={item.label}
                  variant="nav"
                  className="flex items-center gap-1 px-3 text-[#0f426c] hover:text-[#3087fe] font-medium"
                  onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.id ? "rotate-180" : ""}`} />
                </Button>
              ) : (
                <Link key={item.label} href={item.path || "/"}>
                  <Button
                    variant="nav"
                    className={`flex items-center gap-1 px-3 text-[#0f426c] hover:text-[#3087fe] font-medium ${pathname === item.path ? "text-[#3087fe]" : ""}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-[#507588] hover:text-[#0f426c]">
              Đăng nhập
            </Button>
            <Link href="/contact">
              <Button variant="hero" size="default">
                Đăng ký Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu (Sheet) */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#0f426c]">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0 overflow-y-auto bg-white">
                <SheetHeader className="p-4 border-b border-gray-100 items-start">
                  <SheetTitle className="flex items-center gap-2">
                    <Image src="/logo/logo.png" alt="Logo" width={32} height={32} className="rounded" />
                    <span className="text-[#0f426c] font-bold">Menu</span>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col py-2">
                  <Accordion type="single" collapsible className="w-full">
                    {navItems.map((item) => (
                      item.hasDropdown ? (
                        <AccordionItem key={item.id} value={item.id || ""} className="border-b-0">
                          <AccordionTrigger className="px-5 py-3 text-base text-[#0f426c] font-medium hover:no-underline hover:bg-slate-50">
                            {item.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-2">
                            <div className="flex flex-col bg-slate-50/50">
                              {getMobileDropdownItems(item.id || "").map((subItem, idx) => (
                                <SheetClose asChild key={idx}>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center gap-3 px-8 py-3 text-sm text-[#507588] hover:text-[#3087fe] hover:bg-slate-100/80 transition-colors"
                                    target={isExternalLink(subItem.href) ? "_blank" : undefined}
                                  >
                                    {subItem.icon && <subItem.icon className="w-4 h-4" />}
                                    {subItem.name}
                                  </Link>
                                </SheetClose>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <SheetClose asChild key={item.label}>
                          <Link
                            href={item.path || "/"}
                            className="flex items-center px-5 py-3 text-base text-[#0f426c] font-medium hover:bg-slate-50 transition-colors border-b border-gray-50 last:border-0"
                          >
                            {item.label}
                          </Link>
                        </SheetClose>
                      )
                    ))}
                  </Accordion>

                  <div className="p-5 mt-4 space-y-3 bg-slate-50/50 border-t border-gray-100">
                    {/* <Button variant="outline" className="w-full justify-center gap-2 text-[#0f426c]">
                      <Users className="w-4 h-4" /> Đăng nhập
                    </Button> */}
                    <SheetClose asChild>
                      <Link href="/contact" className="w-full">
                        <Button variant="hero" className="w-full justify-center">
                          Đăng ký Demo
                        </Button>
                      </Link>
                    </SheetClose>
                    <a href="tel:0933549469" className="flex items-center justify-center gap-2 text-sm text-[#507588] py-2">
                      <Phone className="w-4 h-4" /> Hotline: 0933 549 469
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Desktop Dropdowns */}
      <div className="hidden lg:block">
        <ProductDropdown isOpen={activeDropdown === "product"} onClose={() => setActiveDropdown(null)} />
        <SolutionsDropdown isOpen={activeDropdown === "solutions"} onClose={() => setActiveDropdown(null)} />
        <IndustriesDropdown isOpen={activeDropdown === "industries"} onClose={() => setActiveDropdown(null)} />
        <NewsDropdown isOpen={activeDropdown === "news"} onClose={() => setActiveDropdown(null)} />
      </div>
    </nav>
  );
};
