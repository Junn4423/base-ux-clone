import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, Users, TrendingUp, FileText, Workflow, Building, 
  DollarSign, MessageSquare, Calendar, Target, Receipt, 
  Building2, Megaphone, Package, ChevronLeft, ChevronRight 
} from "lucide-react";

const products = [
  {
    id: "work",
    title: "BASE WORK+",
    headline: "Quản trị công việc thông minh, kết nối các phòng ban hiệu quả",
    features: [
      "Giao việc và theo dõi tiến độ theo phòng ban, dự án",
      "Phê duyệt đề xuất mọi lúc mọi nơi, phân quyền chặt chẽ",
      "Tối ưu, chuẩn hóa và tự động hóa quy trình vận hành",
    ],
    apps: [
      { name: "Base Wework", icon: Briefcase },
      { name: "Base Request", icon: FileText },
      { name: "Base Workflow", icon: Workflow },
      { name: "Base Service", icon: Users },
      { name: "Base Xspace", icon: Building },
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "hrm",
    title: "BASE HRM+",
    headline: "Kiến tạo trải nghiệm nhân sự hạnh phúc",
    features: [
      "Thu hút, tuyển dụng, và giữ chân nhân tài",
      "Hệ thống thông tin nhân sự & quy trình onboarding",
      "Chấm công đa ca, tính lương tự động, phúc lợi rõ ràng",
    ],
    apps: [
      { name: "Base HRM", icon: Users },
      { name: "Base E-hiring", icon: Briefcase },
      { name: "Base Schedule", icon: Calendar },
      { name: "Base Payroll", icon: DollarSign },
      { name: "Base Goal", icon: Target },
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "info",
    title: "BASE INFO+",
    headline: "Thông tin rõ ràng, văn hoá doanh nghiệp minh bạch",
    features: [
      "Xây dựng văn hóa, gắn kết nội bộ",
      "Ban hành & lưu trữ văn bản hiệu quả, khoa học",
      "Tạo kho tri thức tập trung, dễ tìm, dễ chia sẻ",
    ],
    apps: [
      { name: "Base Office", icon: Building2 },
      { name: "Base Inside", icon: Users },
      { name: "Base Meeting", icon: Calendar },
      { name: "Base Message", icon: MessageSquare },
      { name: "Base Square", icon: Building },
    ],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: "finance",
    title: "BASE FINANCE+",
    headline: "Quản trị tài chính thời gian thực",
    features: [
      "Quản trị chi phí và doanh thu theo thời gian thực",
      "Duyệt chi và đối soát theo quy trình rõ ràng",
      "Quản lý tài sản, mua sắm và thanh toán tập trung",
    ],
    apps: [
      { name: "Base Finance", icon: DollarSign },
      { name: "Base Income", icon: TrendingUp },
      { name: "Base Expense", icon: Receipt },
      { name: "Base Bankfeeds", icon: Building2 },
      { name: "Base Assets", icon: Package },
    ],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: "crm",
    title: "BASE CRM",
    headline: "Đồng bộ hành trình khách hàng, từ bán hàng đến hậu mãi",
    features: [
      "Quản lý pipeline và sản phẩm dễ dàng",
      "Tự động hóa tác vụ bán hàng, báo giá, hợp đồng",
      "Chăm sóc sau bán: ticket, feedback, upsell",
    ],
    apps: [
      { name: "Base Service", icon: Users },
      { name: "Base Sales", icon: TrendingUp },
      { name: "Base Marketing", icon: Megaphone },
      { name: "Base Product", icon: Package },
    ],
    gradient: "from-pink-500 to-rose-400",
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
    <section className="py-20 lg:py-32 relative">
      {/* Section header */}
      <div className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Một nền tảng <span className="text-primary">|</span>{" "}
            <span className="text-gradient">Mọi giải pháp</span>
          </h2>
        </div>
      </div>

      {/* Product Carousel */}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${product.gradient} text-white`}>
                {product.title}
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
              {product.headline}
            </h3>

            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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
                    className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50"
                  >
                    <app.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {app.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="heroOutline">Xem chi tiết</Button>
              <Button variant="hero">Demo tính năng</Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r ${product.gradient} opacity-20 rounded-3xl blur-2xl`} />
            <div className="relative glass-card rounded-2xl p-6 lg:p-8">
              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${product.gradient} flex items-center justify-center`}>
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{product.title}</div>
                    <div className="text-xs text-muted-foreground">Dashboard Overview</div>
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
                    <div key={i} className="bg-secondary/50 rounded-xl p-4">
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                      <div className="text-xl font-bold text-foreground">{stat.value}</div>
                      <div className={`text-xs ${stat.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
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
                        <span className="text-muted-foreground">{name}</span>
                        <span className="text-foreground">{[85, 62, 94][i]}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
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
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextProduct}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
