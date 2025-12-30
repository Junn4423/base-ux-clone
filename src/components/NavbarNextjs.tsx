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
import { useAuth } from "@/components/providers/AuthProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User as UserIcon, LogOut, Settings } from "lucide-react";

const navItems = [
  { label: "Sản phẩm", hasDropdown: true, id: "product" },
  { label: "Giải pháp & Giá", hasDropdown: true, id: "solutions" },
  { label: "Lĩnh vực", hasDropdown: true, id: "industries" },
  { label: "Tin tức", hasDropdown: true, id: "news" },
  { label: "Liên hệ", hasDropdown: false, id: "contact", path: "/contact" },
];

const mobileProductItems = [
  { name: "Bán hàng", icon: ShoppingCart, href: "/phan-mem-ban-hang" },
  { name: "Siêu thị", icon: Store, href: "/under-construction" },
  { name: "Tạp hóa", icon: Package, href: "/phan-mem-ban-hang" },
  { name: "Quán Cafe", icon: Coffee, href: "/phan-mem-ban-hang" },
  { name: "Nhà hàng", icon: Utensils, href: "/under-construction" },
  { name: "Khách sạn", icon: Hotel, href: "/phan-mem-khach-san" },
  { name: "Thiết kế web", icon: Users, href: "/dich-vu-thiet-ke-web" },
  { name: "Vận tải", icon: Truck, href: "/phan-mem-van-tai-logistic" },
  { name: "Kho Pallet", icon: Warehouse, href: "/phan-mem-kho-pallet" },
  { name: "Bãi gửi xe", icon: Car, href: "/phan-mem-quan-li-giu-xe" },
  { name: "Nhân sự HRM", icon: Users, href: "/phan-mem-nhan-su" },
  { name: "ERP", icon: Building2, href: "/phan-mem-erp" },
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
  const { user, logout } = useAuth();

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
              alt="Logo SOF.COM.VN"
              width={40}
              height={40}
              className="rounded-md object-contain"
              priority
            />
            <span className="text-[#0f426c] font-bold text-xl hidden sm:block">SOF.COM.VN</span>
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
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-[#0f426c] font-medium hover:bg-slate-50">
                    <div className="w-8 h-8 rounded-full bg-[#e0f2fe] flex items-center justify-center text-[#0f426c] font-bold border border-[#bae6fd]">
                      {user.username.charAt(0).toUpperCase()}
                    </div>
                    <span className="max-w-[120px] truncate">{user.username}</span>
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.username}</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <UserIcon className="mr-2 h-4 w-4" />
                    <span>Hồ sơ cá nhân</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Cài đặt</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Đăng xuất</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button variant="ghost" className="text-[#507588] hover:text-[#0f426c]">
                  Đăng nhập
                </Button>
              </Link>
            )}
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
                    {user ? (
                      <>
                        <div className="px-2 py-2 flex items-center gap-3 mb-2 bg-blue-50/50 rounded-lg">
                          <div className="w-10 h-10 rounded-full bg-[#0f426c] flex items-center justify-center text-white font-bold shrink-0">
                            {user.username.charAt(0).toUpperCase()}
                          </div>
                          <div className="overflow-hidden">
                            <p className="text-sm font-bold text-[#0f426c] truncate">{user.username}</p>
                            <p className="text-xs text-[#507588] truncate">{user.name}</p>
                          </div>
                        </div>
                        <SheetClose asChild>
                          <Button variant="outline" className="w-full justify-center gap-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700" onClick={logout}>
                            <LogOut className="w-4 h-4" /> Đăng xuất
                          </Button>
                        </SheetClose>
                      </>
                    ) : (
                      <SheetClose asChild>
                        <Link href="/login" className="w-full">
                          <Button variant="outline" className="w-full justify-center gap-2 text-[#0f426c]">
                            <Users className="w-4 h-4" /> Đăng nhập
                          </Button>
                        </Link>
                      </SheetClose>
                    )}
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
