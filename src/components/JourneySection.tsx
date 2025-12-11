import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Laptop, Settings, Database } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    title: "Tư vấn",
    icon: MessageSquare,
    description: "Khảo sát hiện trạng vận hành của doanh nghiệp. Tư vấn, đào tạo, xây dựng quy trình nâng cao khả năng vận hành & thiết kế lộ trình số hóa phù hợp.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Số hóa",
    icon: Laptop,
    description: "Số hóa vận hành của doanh nghiệp lên phần mềm theo các danh mục số hóa được thiết kế phù hợp với doanh nghiệp.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: 3,
    title: "Tối ưu hóa",
    icon: Settings,
    description: "Thiết lập hệ thống, đào tạo và chuyển giao năng lực công nghệ cho doanh nghiệp.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: 4,
    title: "Dữ liệu hóa",
    icon: Database,
    description: "Kết nối tất cả dữ liệu vận hành từ các ứng dụng trong và ngoài nền tảng để xây dựng báo cáo quản trị.",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(journeySteps[0]);

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Đồng hành cùng doanh nghiệp{" "}
            <br className="hidden sm:block" />
            xuyên suốt lộ trình chuyển đổi số
          </h2>
          <Button variant="hero" className="mt-4">
            Tư vấn triển khai ngay
          </Button>
        </div>

        {/* Journey Steps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {journeySteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`w-full text-left p-4 lg:p-6 rounded-2xl transition-all duration-300 ${
                  activeStep.id === step.id
                    ? "glass-card glow-card"
                    : "bg-secondary/30 hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className={`w-5 h-5 ${activeStep.id === step.id ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`font-semibold ${activeStep.id === step.id ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.title}
                      </span>
                    </div>
                    {activeStep.id === step.id && (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual */}
          <div className="relative">
            <div className={`absolute -inset-4 bg-gradient-to-r ${activeStep.gradient} opacity-20 rounded-3xl blur-2xl`} />
            <div className="relative glass-card rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${activeStep.gradient} flex items-center justify-center`}>
                  <activeStep.icon className="w-12 h-12 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  Bước {activeStep.id}
                </div>
                <div className="text-xl text-primary font-semibold mb-4">
                  {activeStep.title}
                </div>
                <p className="text-muted-foreground max-w-sm mx-auto">
                  {activeStep.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
