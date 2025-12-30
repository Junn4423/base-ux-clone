"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Briefcase, Users, TrendingUp, Building2,
  DollarSign, Package, ChevronLeft, ChevronRight,
  ShoppingCart, Coffee, Clock, ShieldCheck, Box, Smile,
  Globe, Smartphone, Server, Headphones, Wifi, Lock, Calculator, Tag
} from "lucide-react";

const products = [
  {
    id: "erp",
    title: "SOF ERP",
    headline: "Hệ thống quản trị nguồn lực doanh nghiệp hợp nhất",
    features: [
      "Quản lý quy trình cung ứng và mua hàng",
      "Kiểm soát kho, vật tư và sản xuất theo thời gian thực",
      "Tích hợp báo cáo kế toán và tài chính tự động",
    ],
    apps: [
      { name: "ERP Core", icon: Building2 },
      { name: "Quản lý kho", icon: Package },
      { name: "Kế toán", icon: Calculator },
      { name: "Mua hàng", icon: ShoppingCart },
    ],
    gradient: "from-blue-500 to-cyan-400",
    href: "http://sof.com.vn/vi/Phan-mem/18/Phan-mem-quan-tri-nguon-luc-doanh-nghiep-(ERP--SOF).html",
  },
  {
    id: "hrm",
    title: "SOF HRM",
    headline: "Giải pháp nhân sự & Tính lương tự động",
    features: [
      "Quản lý hồ sơ nhân sự, hợp đồng lao động",
      "Chấm công vân tay/FaceID, tính lương tự động",
      "Cổng thông tin nhân viên (Portal) tiện lợi",
    ],
    apps: [
      { name: "Hồ sơ nhân sự", icon: Users },
      { name: "Chấm công", icon: Clock },
      { name: "Tính lương", icon: DollarSign },
      { name: "Bảo hiểm", icon: ShieldCheck },
    ],
    gradient: "from-emerald-500 to-teal-400",
    href: "http://sof.com.vn/vi/Phan-mem/1/Phan-mem-nhan-su-tien-luong.html",
  },
  {
    id: "pos",
    title: "SOF POS",
    headline: "Quản lý bán hàng & Chuỗi cửa hàng bán lẻ",
    features: [
      "Phần mềm quản lý nhà hàng, Cafe, Karaoke",
      "Quản lý siêu thị, tạp hóa, shop thời trang",
      "Tích hợp in hóa đơn, mã vạch, tồn kho",
    ],
    apps: [
      { name: "POS F&B", icon: Coffee },
      { name: "POS Retail", icon: Tag },
      { name: "Kho hàng", icon: Box },
      { name: "Khách hàng", icon: Smile },
    ],
    gradient: "from-orange-500 to-amber-400",
    href: "http://sof.com.vn/vi/Phan-mem/23/Phan-mem-quan-ly-ban-hang.html",
  },
  {
    id: "web",
    title: "WEB & APP",
    headline: "Thiết kế Website & Ứng dụng theo yêu cầu",
    features: [
      "Thiết kế website doanh nghiệp, thương mại điện tử",
      "Phát triển Mobile App (iOS/Android) thương hiệu riêng",
      "Dịch vụ Hosting, Domain và Server",
    ],
    apps: [
      { name: "Web Design", icon: Globe },
      { name: "Mobile App", icon: Smartphone },
      { name: "Hosting", icon: Server },
      { name: "SEO", icon: TrendingUp },
    ],
    gradient: "from-violet-500 to-purple-400",
    href: "#",
  },
  {
    id: "service",
    title: "IT SERVICES",
    headline: "Dịch vụ hạ tầng CNTT & Bảo trì hệ thống",
    features: [
      "Quản trị hệ thống mạng Linux/Windows",
      "Cài đặt Mail Server, bảo mật dữ liệu",
      "Bảo trì máy chủ và thiết bị văn phòng",
    ],
    apps: [
      { name: "IT Support", icon: Headphones },
      { name: "Network", icon: Wifi },
      { name: "Security", icon: Lock },
    ],
    gradient: "from-pink-500 to-rose-400",
    href: "#",
  },
];

export const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const product = products[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="py-16 lg:py-32 relative bg-[#d2eaf7]">
      {/* Section header */}
      <div className="container mx-auto px-4 lg:px-8 mb-12 lg:mb-16">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#0f426c]">
            Giải pháp thông minh <span className="text-[#3087fe]">|</span>{" "}
            <span className="text-[#3087fe]">Trợ thủ doanh nghiệp</span>
          </h2>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="inline-block">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${product.gradient} text-white`}>
                {product.title}
              </span>
            </div>

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-[#0f426c] break-words">
              {product.headline}
            </h3>

            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-base text-[#507588]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0f426c] mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* App icons carousel */}
            <div className="relative overflow-hidden py-4">
              <div className="flex gap-3 animate-slide-left">
                {[...product.apps, ...product.apps].map((app, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-[#a7d5ec]"
                  >
                    <app.icon className="w-4 h-4 text-[#0f426c]" />
                    <span className="text-sm text-[#507588] whitespace-nowrap">
                      {app.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link href="/under-construction" className="flex-1 sm:flex-initial">
                <Button variant="heroOutline" className="w-full">Xem chi tiết</Button>
              </Link>
              <Link href="/contact" className="flex-1 sm:flex-initial">
                <Button variant="hero" className="w-full">Demo tính năng</Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} opacity-20 rounded-3xl blur-2xl`} />
            <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-[#a7d5ec]">
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-[#0f426c]">{product.title}</div>
                    <div className="text-xs text-[#507588]">Dashboard Overview</div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Hoàn thành", value: "847", change: "+12%" },
                    { label: "Đang xử lý", value: "234", change: "+5%" },
                    { label: "Chờ duyệt", value: "56", change: "-8%" },
                    { label: "Tổng cộng", value: "1,137", change: "+18%" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#f4fbff] rounded-xl p-4 border border-[#a7d5ec]">
                      <div className="text-xs text-[#507588]">{stat.label}</div>
                      <div className="text-xl font-bold text-[#0f426c]">{stat.value}</div>
                      <div className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progress bars */}
                <div className="space-y-3 pt-2">
                  {["Dự án A", "Dự án B", "Dự án C"].map((name, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#507588]">{name}</span>
                        <span className="text-[#0f426c]">{[85, 62, 94][i]}%</span>
                      </div>
                      <div className="h-2 bg-[#c3e8ff] rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${product.gradient} rounded-full transition-all duration-500`}
                          style={{ width: `${[85, 62, 94][i]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <button
            onClick={prevProduct}
            className="w-11 h-11 rounded-full bg-white border border-[#a7d5ec] flex items-center justify-center text-[#507588] hover:text-[#0f426c] hover:bg-[#f4fbff] transition-colors"
            aria-label="Sản phẩm trước"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2.5">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-10 bg-[#0f426c]"
                  : "w-3 bg-[#8fc0db] hover:bg-[#0f426c]"
                  }`}
                aria-label={`Sản phẩm ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextProduct}
            className="w-11 h-11 rounded-full bg-white border border-[#a7d5ec] flex items-center justify-center text-[#507588] hover:text-[#0f426c] hover:bg-[#f4fbff] transition-colors"
            aria-label="Sản phẩm tiếp theo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
