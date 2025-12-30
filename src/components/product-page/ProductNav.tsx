"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Package } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Product definitions for navigation
export const productList = [
  {
    slug: "phan-mem-ban-hang",
    name: "Phần Mềm Bán Hàng",
    shortName: "POS Cafe",
    description: "Quản lý quán cafe, nhà hàng",
  },
  {
    slug: "phan-mem-erp",
    name: "Phần Mềm ERP",
    shortName: "ERP",
    description: "Quản trị doanh nghiệp tổng thể",
  },
  {
    slug: "phan-mem-nhan-su",
    name: "Phần Mềm Nhân Sự",
    shortName: "HRM",
    description: "Quản lý nhân sự, chấm công",
  },
  {
    slug: "phan-mem-khach-san",
    name: "Phần Mềm Khách Sạn",
    shortName: "Hotel PMS",
    description: "Quản lý khách sạn, booking",
  },
  {
    slug: "phan-mem-kho-pallet",
    name: "Phần Mềm Kho Pallet",
    shortName: "WMS",
    description: "Quản lý kho hàng, pallet",
  },
  {
    slug: "phan-mem-van-tai-logistic",
    name: "Phần Mềm Vận Tải",
    shortName: "TMS",
    description: "Quản lý vận tải, logistics",
  },
  {
    slug: "phan-mem-quan-li-giu-xe",
    name: "Phần Mềm Giữ Xe",
    shortName: "Parking",
    description: "Quản lý bãi đỗ xe thông minh",
  },
  {
    slug: "phan-mem-chu-ky-so",
    name: "Phần Mềm Chữ Ký Số",
    shortName: "E-Sign",
    description: "Ký số, xác thực điện tử",
  },
  {
    slug: "dich-vu-thiet-ke-web",
    name: "Thiết Kế Website",
    shortName: "Web Design",
    description: "Thiết kế website chuyên nghiệp",
  },
];

interface ProductNavProps {
  className?: string;
}

export function ProductNav({ className = "" }: ProductNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Find current product
  const currentProduct = productList.find((p) => pathname?.startsWith(`/${p.slug}`));

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Only show on product pages
  if (!currentProduct) return null;

  return (
    <div className={`bg-[var(--sof-primary)] text-white ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Left: Current product nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href={`/${currentProduct.slug}`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === `/${currentProduct.slug}`
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Trang chủ
            </Link>
            <Link
              href={`/${currentProduct.slug}/features`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === `/${currentProduct.slug}/features`
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Tính năng
            </Link>
            <Link
              href={`/${currentProduct.slug}/pricing`}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === `/${currentProduct.slug}/pricing`
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Bảng giá
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Liên hệ
            </Link>
          </nav>

          {/* Right: Product Switcher Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-white/10 hover:bg-white/20 transition-colors"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline">{currentProduct.shortName}</span>
              <span className="sm:hidden">Sản phẩm</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-2 border-b border-gray-100 bg-gray-50">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">
                    Chọn sản phẩm
                  </p>
                </div>
                <div className="max-h-80 overflow-y-auto py-2">
                  {productList.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/${product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col px-4 py-3 hover:bg-[var(--sof-light-bg)] transition-colors ${
                        currentProduct.slug === product.slug
                          ? "bg-[var(--sof-light-bg)] border-l-4 border-[var(--sof-accent)]"
                          : ""
                      }`}
                    >
                      <span className={`font-medium ${
                        currentProduct.slug === product.slug
                          ? "text-[var(--sof-primary)]"
                          : "text-gray-800"
                      }`}>
                        {product.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">
                        {product.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile: Current page nav */}
          <nav className="flex md:hidden items-center gap-1">
            <Link
              href={`/${currentProduct.slug}`}
              className={`px-2 py-1 rounded text-xs font-medium ${
                pathname === `/${currentProduct.slug}`
                  ? "bg-white/20"
                  : "text-white/80"
              }`}
            >
              Home
            </Link>
            <Link
              href={`/${currentProduct.slug}/features`}
              className={`px-2 py-1 rounded text-xs font-medium ${
                pathname?.includes("/features")
                  ? "bg-white/20"
                  : "text-white/80"
              }`}
            >
              Features
            </Link>
            <Link
              href={`/${currentProduct.slug}/pricing`}
              className={`px-2 py-1 rounded text-xs font-medium ${
                pathname?.includes("/pricing")
                  ? "bg-white/20"
                  : "text-white/80"
              }`}
            >
              Pricing
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
