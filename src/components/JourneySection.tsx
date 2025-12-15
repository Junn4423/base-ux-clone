import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Laptop, Settings, Database } from "lucide-react";

const journeySteps = [
  {
    id: 1,
    title: "Tư vấn & Khảo sát",
    icon: MessageSquare,
    description: "Phân tích quy trình nghiệp vụ hiện tại. Đề xuất giải pháp phù hợp từ các sản phẩm SOF ERP, HRM, POS dựa trên đặc thù ngành nghề.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    title: "Triển khai",
    icon: Laptop,
    description: "Cài đặt, cấu hình phần mềm. Nhập dữ liệu ban đầu. Tùy chỉnh module theo yêu cầu riêng của doanh nghiệp.",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    id: 3,
    title: "Đào tạo",
    icon: Settings,
    description: "Đào tạo người dùng thao tác trên hệ thống. Hướng dẫn quản trị viên quản lý phần mềm và xử lý nghiệp vụ.",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    id: 4,
    title: "Vận hành & Hỗ trợ",
    icon: Database,
    description: "Theo dõi vận hành thực tế. Hỗ trợ giải đáp thắc mắc 24/7. Cập nhật, nâng cấp tính năng theo nhu cầu phát sinh.",
    gradient: "from-emerald-500 to-teal-400",
  },
];

export const JourneySection = () => {
  const [activeStep, setActiveStep] = useState(journeySteps[0]);

  return (
    <section className="py-12 sm:py-16 lg:py-32 relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0f426c] px-2">
            Quy trình triển khai{" "}
            <br className="hidden sm:block" />
            từ tư vấn đến vận hành
          </h2>
          <a href="/under-construction">
            <Button variant="hero" className="mt-3 sm:mt-4 w-full sm:w-auto touch-manipulation" style={{ minHeight: '44px' }}>
              Tư vấn triển khai ngay
            </Button>
          </a>
        </div>

        {/* Journey Steps */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-3 sm:space-y-4">
            {journeySteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step)}
                className={`w-full text-left p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 touch-manipulation ${
                  activeStep.id === step.id
                    ? "bg-white shadow-lg border border-[#a7d5ec]"
                    : "bg-[#f4fbff] border border-[#a7d5ec] hover:bg-[#c3e8ff]"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${step.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm sm:text-base">{step.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                      <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${activeStep.id === step.id ? "text-[#0f426c]" : "text-[#507588]"}`} />
                      <span className={`font-semibold text-sm sm:text-base ${activeStep.id === step.id ? "text-[#0f426c]" : "text-[#507588]"}`}>
                        {step.title}
                      </span>
                    </div>
                    {activeStep.id === step.id && (
                      <p className="text-xs sm:text-sm text-[#507588] leading-relaxed mt-1 sm:mt-2">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visual */}
          <div className="relative hidden sm:block">
            <div className={`absolute -inset-2 sm:-inset-4 bg-gradient-to-r ${activeStep.gradient} opacity-20 rounded-2xl sm:rounded-3xl blur-2xl`} />
            <div className="relative bg-[#f4fbff] border border-[#a7d5ec] rounded-xl sm:rounded-2xl p-6 sm:p-8 aspect-square flex items-center justify-center">
              <div className="text-center px-4">
                <div className={`w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-r ${activeStep.gradient} flex items-center justify-center`}>
                  <activeStep.icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
                <div className="text-xl sm:text-3xl font-bold text-[#0f426c] mb-1 sm:mb-2">
                  Bước {activeStep.id}
                </div>
                <div className="text-base sm:text-xl text-[#3087fe] font-semibold mb-3 sm:mb-4">
                  {activeStep.title}
                </div>
                <p className="text-sm sm:text-base text-[#507588] max-w-sm mx-auto">
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
