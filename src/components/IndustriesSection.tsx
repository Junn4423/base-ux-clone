import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Factory, Pill, UtensilsCrossed, Truck } from "lucide-react";

const industries = [
  {
    id: "sanxuat",
    name: "Sản xuất",
    icon: Factory,
    title: "Ngành Sản xuất & Phân phối",
    features: [
      "Quản lý định mức nguyên vật liệu (BOM) chính xác.",
      "Theo dõi tiến độ sản xuất theo lệnh (MO).",
      "Kiểm soát nhập xuất tồn kho theo Lô/Date.",
    ],
    clients: ["AutoTech", "Xưởng Cơ khí", "Nhà máy Gỗ"],
  },
  {
    id: "fnb",
    name: "F&B & Bán lẻ",
    icon: UtensilsCrossed,
    title: "Ngành Nhà hàng & Chuỗi cửa hàng",
    features: [
      "Order món qua máy tính bảng/điện thoại.",
      "Quản lý sơ đồ bàn, tách gộp bàn linh hoạt.",
      "Định lượng nguyên liệu, báo cáo lãi lỗ theo ngày.",
    ],
    clients: ["Chuỗi Cafe", "Nhà hàng", "Siêu thị Mini"],
  },
  {
    id: "duoc",
    name: "Dược phẩm",
    icon: Pill,
    title: "Ngành Dược & Y tế",
    features: [
      "Quản lý thuốc theo hạn sử dụng, số lô.",
      "Kết nối liên thông dữ liệu dược quốc gia.",
      "Quản lý bán hàng theo đơn thuốc.",
    ],
    clients: ["Nhà thuốc", "Công ty Dược", "Phòng khám"],
  },
  {
    id: "vantai",
    name: "Vận tải",
    icon: Truck,
    title: "Ngành Vận tải & Logistics",
    features: [
      "Quản lý đội xe, lịch trình vận chuyển.",
      "Theo dõi chi phí xăng dầu, bảo trì xe.",
      "Quản lý công nợ khách hàng, tài xế.",
    ],
    clients: ["Logistics", "Vận tải hành khách"],
  },
];

export const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0f426c] px-2">
            <span className="text-[#3087fe]">Giải pháp chuyên biệt</span>{" "}
            <br className="sm:hidden" />
            cho từng{" "}
            <span className="px-2 sm:px-3 py-1 rounded-full bg-[#0f426c]/10 border border-[#0f426c]/30 text-[#0f426c] text-xl sm:text-2xl lg:text-3xl">
              ngành nghề
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#507588] max-w-2xl mx-auto px-4">
            SOF mang đến giải pháp phần mềm được tùy chỉnh riêng cho từng lĩnh vực, 
            đáp ứng nhu cầu đặc thù của doanh nghiệp Việt
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                activeIndustry.id === industry.id
                  ? "bg-[#0f426c] text-white"
                  : "bg-[#f4fbff] border border-[#a7d5ec] text-[#507588] hover:text-[#0f426c] hover:bg-[#c3e8ff]"
              }`}
              style={{ minHeight: '40px' }}
            >
              <industry.icon className="w-4 h-4" />
              <span className="whitespace-nowrap">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Industry Content */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 sm:-inset-4 bg-[#0f426c]/10 rounded-2xl sm:rounded-3xl blur-2xl" />
            <div className="relative bg-[#f4fbff] border border-[#a7d5ec] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 aspect-video flex items-center justify-center">
              <activeIndustry.icon className="w-20 h-20 sm:w-32 sm:h-32 text-[#8fc0db]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-[#0f426c] flex items-center justify-center">
                    <activeIndustry.icon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-base sm:text-xl font-bold text-[#0f426c]">{activeIndustry.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f426c]">
              {activeIndustry.title}
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {activeIndustry.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-[#507588]">
                  <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0f426c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0f426c]" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Clients */}
            <div className="pt-3 sm:pt-4">
              <div className="text-xs sm:text-sm text-[#507588] mb-2 sm:mb-3">Khách hàng của SOF</div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {activeIndustry.clients.map((client) => (
                  <div
                    key={client}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#f4fbff] border border-[#a7d5ec] rounded-lg text-xs sm:text-sm text-[#0f426c] font-medium"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>

            <a href="/under-construction">
              <Button variant="hero" className="mt-3 sm:mt-4 w-full sm:w-auto touch-manipulation" style={{ minHeight: '44px' }}>
                Tìm hiểu thêm
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
