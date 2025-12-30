"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  Sparkles, 
  CreditCard, 
  FileText,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  exact?: boolean;
}

interface ProductSubNavProps {
  productSlug: string;
  productName?: string;
}

export default function ProductSubNav({ productSlug, productName }: ProductSubNavProps) {
  const pathname = usePathname();
  const basePath = `/${productSlug}`;

  const navItems: NavItem[] = [
    {
      label: "Tổng quan",
      href: basePath,
      icon: <Home className="w-4 h-4" />,
      exact: true,
    },
    {
      label: "Tính năng",
      href: `${basePath}/features`,
      icon: <Sparkles className="w-4 h-4" />,
    },
    {
      label: "Bảng giá",
      href: `${basePath}/pricing`,
      icon: <CreditCard className="w-4 h-4" />,
    },
    {
      label: "Tài liệu",
      href: `${basePath}/user-guide`,
      icon: <FileText className="w-4 h-4" />,
    },
  ];

  const isActive = (item: NavItem) => {
    if (item.exact) {
      return pathname === item.href;
    }
    return pathname.startsWith(item.href);
  };

  return (
    <nav 
      className="fixed top-16 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      aria-label={`Điều hướng ${productName || 'sản phẩm'}`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1 py-1" role="menubar">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.href + item.label} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  aria-current={active ? "page" : undefined}
                  className={`
                    inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-200 ease-in-out
                    ${active 
                      ? "bg-[var(--sof-primary)] text-white shadow-md" 
                      : "text-gray-600 hover:text-[var(--sof-primary)] hover:bg-gray-100"
                    }
                  `}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Navigation - Scrollable */}
        <div className="md:hidden overflow-x-auto scrollbar-hide py-2">
          <ul className="flex items-center gap-2 min-w-max" role="menubar">
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <li key={item.href + item.label} role="none">
                  <Link
                    href={item.href}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                    className={`
                      inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium
                      whitespace-nowrap transition-all duration-200
                      ${active 
                        ? "bg-[var(--sof-primary)] text-white shadow-md" 
                        : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                      }
                    `}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
