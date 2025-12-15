import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, User } from "lucide-react";

const aiQuestions = [
  "Báo cáo tồn kho hiện tại của kho hàng",
  "Tổng hợp công nợ phải thu tháng này",
  "Danh sách nhân viên chưa chấm công hôm nay",
  "Doanh thu bán hàng theo từng cửa hàng",
  "Phân tích chi phí mua hàng trong quý",
];

export const BaseAISection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden bg-[#f4fbff]">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0f426c]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0f426c] px-2">
            Báo cáo và truy vấn dữ liệu thông minh
          </h2>
          <Button variant="hero" className="mt-3 sm:mt-4 touch-manipulation" style={{ minHeight: '44px' }}>
            <Sparkles className="w-4 h-4 mr-2" />
            Tính năng báo cáo nâng cao
          </Button>
        </div>

        {/* AI Chat Interface */}
        <div className="max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-[#a7d5ec]">
            {/* Chat Header */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#a7d5ec]">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0f426c] flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-[#0f426c] text-sm sm:text-base">SOF Report</div>
                <div className="text-[10px] sm:text-xs text-[#507588]">Hệ thống báo cáo quản trị</div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-2 sm:space-y-3">
              {aiQuestions.map((question, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 40}
                  className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#f4fbff] hover:bg-[#c3e8ff] transition-colors cursor-pointer group border border-[#a7d5ec] touch-manipulation"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 text-[#507588]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm sm:text-base text-[#0f426c] group-hover:text-[#3087fe] transition-colors break-words">
                      {question}
                    </p>
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#0f426c]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#0f426c]" />
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#a7d5ec]">
              <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#f4fbff] border border-[#a7d5ec]">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f426c] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Truy vấn dữ liệu, tạo báo cáo..."
                  className="flex-1 bg-transparent text-sm sm:text-base text-[#0f426c] placeholder:text-[#507588] outline-none min-w-0"
                />
                <Button variant="hero" size="sm" className="touch-manipulation flex-shrink-0" style={{ minHeight: '36px' }}>
                  Gửi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
