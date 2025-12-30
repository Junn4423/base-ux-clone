"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCTAProps {
  title: string;
  subtitle?: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
}

export function ProductCTA({
  title,
  subtitle = "Đăng ký dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng.",
  ctaPrimaryText = "Dùng thử miễn phí",
  ctaPrimaryLink = "/contact",
  ctaSecondaryText = "Xem bảng giá",
  ctaSecondaryLink = "#pricing",
}: ProductCTAProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#197dd3] to-[#1565c0]">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={ctaPrimaryLink}
            className="inline-flex items-center gap-2 bg-white text-[#197dd3] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {ctaPrimaryText}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href={ctaSecondaryLink}
            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            {ctaSecondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
