import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden bg-[#0f426c]">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[800px] sm:h-[800px] bg-[#3087fe]/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 text-center relative overflow-hidden border border-white/20" data-aos="zoom-in">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 sm:h-1 bg-[#3087fe] rounded-full" />
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-white px-3">
            Tối ưu vận hành, tăng trưởng <span className="text-[#8fc0db]">đột phá</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8 px-3">
            Không chỉ là phần mềm, SOF cung cấp giải pháp, tri thức & sự đồng hành cùng doanh nghiệp
          </p>

          <a href="/contact">
            <Button variant="sofAccent" size="xl" className="group text-sm sm:text-base">
              Đăng ký Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
