import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ông Lương Đăng Khoa",
    title: "Tổng giám đốc Boston Pharma",
    company: "Boston Pharma",
    stat: "180%",
    statLabel: "tốc độ xử lí quy trình",
    quote: "Trước khi sử dụng Base Work+, chúng tôi có những quy trình được tính bằng năm... Base không chỉ là một phần mềm mà còn là một nền tảng để nhân viên phát huy tối đa khả năng sáng tạo của mình.",
  },
  {
    id: 2,
    name: "Ông Lã Tuấn Cường",
    title: "Tổng giám đốc Intro Art",
    company: "Intro Art",
    stat: "70%",
    statLabel: "doanh thu tăng trưởng hằng năm",
    quote: "Trong 3 năm dùng Base, Intro Art ghi nhận doanh thu tăng trưởng 60-70%/năm, hiệu suất của nhân viên tăng 3-4 lần, các chi phí in ấn giấy tờ duyệt nội bộ giảm đáng kể.",
  },
  {
    id: 3,
    name: "Ông Woranate Laprabang",
    title: "Tổng giám đốc Vietjet Air Thái Lan",
    company: "Vietjet Air",
    stat: "100+",
    statLabel: "quy trình vận hành được số hóa",
    quote: "Hệ thống Base đã giúp chúng tôi đưa tất cả các quy trình nội bộ lên trực tuyến trên một nền tảng số, từ đó cải thiện đáng kể tốc độ và hiệu quả của các quy trình nội bộ.",
  },
  {
    id: 4,
    name: "Ông Nguyễn Mạnh Hải",
    title: "Giám đốc Tài chính 247 Express",
    company: "247 Express",
    stat: "200+",
    statLabel: "bưu cục được số hóa & kết nối",
    quote: "Khi tất cả thông tin đưa lên hệ thống, công việc được thực hiện trên Base Workflow rất trơn tru với tiến độ được nắm rõ. Tôi có thể dựa vào đó để đưa ra quyết định hoặc can thiệp kịp thời.",
  },
  {
    id: 5,
    name: "Ông Nguyễn Thiện Vũ",
    title: "Tổng giám đốc Nệm Thuần Việt",
    company: "Nệm Thuần Việt",
    stat: "x3",
    statLabel: "tốc độ xử lý thanh toán",
    quote: "Với Base, mỗi nhân sự đều có thể tự quản lý hiệu suất làm việc, phối hợp nhịp nhàng với đồng đội để đạt được mục tiêu chung.",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-gradient">10,000+</span> doanh nghiệp Việt{" "}
            <br className="hidden sm:block" />
            đã chuyển mình cùng Base
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 lg:p-12 relative">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Avatar & Info */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {currentTestimonial.name.charAt(4)}
                  </span>
                </div>
                <div className="font-semibold text-foreground">{currentTestimonial.name}</div>
                <div className="text-sm text-muted-foreground">{currentTestimonial.title}</div>
                <div className="mt-3 px-3 py-1 inline-block rounded-full bg-secondary text-xs text-muted-foreground">
                  {currentTestimonial.company}
                </div>
              </div>

              {/* Quote & Stat */}
              <div className="lg:col-span-2 space-y-6">
                {/* Stat */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl lg:text-6xl font-bold text-gradient">
                    {currentTestimonial.stat}
                  </span>
                  <span className="text-muted-foreground">{currentTestimonial.statLabel}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
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
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
