import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Tôi có thể dùng Base mà không cần trả phí không?",
    answer: "Base cung cấp gói dùng thử miễn phí 14 ngày để bạn trải nghiệm đầy đủ các tính năng. Sau thời gian dùng thử, bạn có thể chọn gói phù hợp với nhu cầu của doanh nghiệp.",
  },
  {
    question: "Base có hỗ trợ tích hợp với các hệ thống ERP không?",
    answer: "Có, Base có khả năng tích hợp với hơn 200 ứng dụng phổ biến bao gồm các hệ thống ERP như SAP, Oracle, và nhiều phần mềm khác thông qua API.",
  },
  {
    question: "Dữ liệu của doanh nghiệp được bảo mật như thế nào?",
    answer: "Base được chứng nhận ISO 27001 về bảo mật thông tin. Tất cả dữ liệu được mã hóa và lưu trữ trên các máy chủ đạt tiêu chuẩn quốc tế.",
  },
  {
    question: "Thời gian triển khai Base mất bao lâu?",
    answer: "Thời gian triển khai phụ thuộc vào quy mô và độ phức tạp của doanh nghiệp. Thông thường, việc triển khai cơ bản mất từ 2-4 tuần, còn triển khai toàn diện có thể từ 1-3 tháng.",
  },
  {
    question: "Base có hỗ trợ đào tạo nhân viên sử dụng không?",
    answer: "Có, Base cung cấp dịch vụ đào tạo toàn diện cho nhân viên bao gồm đào tạo trực tiếp, video hướng dẫn, tài liệu và hỗ trợ 24/7.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hỏi đáp cùng <span className="text-gradient">Base</span>
            </h2>
            <p className="text-muted-foreground">
              Chúng tôi đã tổng hợp những câu hỏi thường gặp nhất từ khách hàng.{" "}
              <a href="#" className="text-primary hover:underline">
                Liên hệ ngay
              </a>{" "}
              nếu vẫn còn câu hỏi.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
