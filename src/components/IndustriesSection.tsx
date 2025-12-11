import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Factory, Pill, Building, UtensilsCrossed, GraduationCap, Heart, Sofa, MoreHorizontal } from "lucide-react";

const industries = [
  {
    id: "sanxuat",
    name: "Sản xuất",
    icon: Factory,
    title: "Ngành Sản xuất",
    features: [
      "Số hóa quy trình theo tiêu chuẩn ISO, chủ động kiểm soát tiến độ sản xuất.",
      "Thiết lập & quản lý kế hoạch sản xuất khoa học, liên kết với quy trình xử lý đơn hàng, quy trình xuất nhập kho,...",
      "Báo cáo doanh thu, chi phí, công nợ trực quan theo thời gian thực.",
    ],
    clients: ["AMECC", "AutoTech", "HAWEE"],
  },
  {
    id: "duoc",
    name: "Dược phẩm",
    icon: Pill,
    title: "Ngành Dược",
    features: [
      "Số hóa các quy trình chuẩn GMP, tăng tốc vận hành.",
      "Quản lý công việc & chấm công tính lương linh hoạt cho cả khối văn phòng & nhà máy.",
      "Kết hợp hiệu quả với ERP.",
    ],
    clients: ["Traphaco", "Imexpharm", "Stella"],
  },
  {
    id: "xaydung",
    name: "Xây dựng",
    icon: Building,
    title: "Ngành Xây dựng",
    features: [
      "Quản lý tiến độ dự án, phân bổ nguồn lực hiệu quả",
      "Số hóa & tối ưu hệ thống quy trình vận hành, cung ứng, đề xuất, xử lý hợp đồng,...",
      "Xây dựng báo cáo quản trị, ra quyết định dựa trên dữ liệu trực quan.",
    ],
    clients: ["Sonadezi", "Tân Cảng Sài Gòn", "HUD"],
  },
  {
    id: "fnb",
    name: "F&B",
    icon: UtensilsCrossed,
    title: "Ngành F&B",
    features: [
      "Đồng nhất chất lượng sản phẩm & tiêu chuẩn phục vụ bằng hệ thống quy trình số hóa.",
      "Nhanh chóng tuyển dụng, đào tạo, hội nhập nhân viên mới.",
      "Thiết lập check-list công việc tự động khi đóng-mở cửa hàng.",
    ],
    clients: ["Cộng", "DimSum", "Jollibee"],
  },
  {
    id: "giaoduc",
    name: "Giáo dục",
    icon: GraduationCap,
    title: "Ngành Giáo dục",
    features: [
      "Tối ưu hoạt động vận hành giáo dục: sắp xếp thời khóa biểu, quản lý hồ sơ.",
      "Kết nối, xây dựng văn hóa học tập & giảng dạy.",
      "Quản lý thu chi hiệu quả, đặc biệt là các khoản học phí định kỳ.",
    ],
    clients: ["Bamboo", "VMG", "YOLA"],
  },
  {
    id: "yte",
    name: "Y Tế",
    icon: Heart,
    title: "Ngành Y Tế",
    features: [
      "Phân ca trực và ghi nhận công linh hoạt, tính lương tự động.",
      "Phê duyệt văn bản, đề xuất mọi lúc mọi nơi.",
      "Quản lý các quy trình nội bộ, các khoản thu chi hiệu quả.",
    ],
    clients: ["Bệnh viện Phổi TW", "Bệnh viện 115", "Hoàn Hảo"],
  },
  {
    id: "noithat",
    name: "Nội thất",
    icon: Sofa,
    title: "Ngành Sản xuất nội thất",
    features: [
      "Tăng tốc các quy trình cung ứng, vận chuyển, phân phối trong thi công, lắp đặt.",
      "Đề xuất, trình ký, phê duyệt nhanh chóng. Mọi lúc mọi nơi.",
      "Kết hợp hiệu quả với ERP.",
    ],
    clients: ["Sendecor", "An Cường", "Tân Hòa"],
  },
  {
    id: "khac",
    name: "Khác",
    icon: MoreHorizontal,
    title: "Các ngành khác",
    features: [
      "Giải pháp linh hoạt cho mọi lĩnh vực kinh doanh.",
      "Tùy chỉnh theo nhu cầu riêng của doanh nghiệp.",
      "Hỗ trợ tư vấn và triển khai chuyên sâu.",
    ],
    clients: ["VPBank", "ACB", "VietjetAir"],
  },
];

export const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Linh hoạt đáp ứng</span>{" "}
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
              60+
            </span>{" "}
            lĩnh vực trên một nền tảng duy nhất
          </h2>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                activeIndustry.id === industry.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <industry.icon className="w-4 h-4" />
              {industry.name}
            </button>
          ))}
        </div>

        {/* Industry Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
            <div className="relative glass-card rounded-2xl p-6 lg:p-8 aspect-video flex items-center justify-center">
              <activeIndustry.icon className="w-32 h-32 text-primary/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <activeIndustry.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="text-xl font-bold text-foreground">{activeIndustry.title}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
              {activeIndustry.title}
            </h3>

            <ul className="space-y-4">
              {activeIndustry.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Clients */}
            <div className="pt-4">
              <div className="text-sm text-muted-foreground mb-3">Khách hàng của Base</div>
              <div className="flex flex-wrap gap-3">
                {activeIndustry.clients.map((client) => (
                  <div
                    key={client}
                    className="px-4 py-2 bg-secondary rounded-lg text-sm text-foreground font-medium"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>

            <Button variant="hero" className="mt-4">
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
