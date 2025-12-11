import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Sẵn sàng chuyển đổi số{" "}
            <span className="text-gradient">doanh nghiệp</span> của bạn?
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hơn 10,000 doanh nghiệp đã tin tưởng và lựa chọn Base.vn 
            làm nền tảng quản trị doanh nghiệp số một.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="xl" className="group">
              Đăng ký Demo miễn phí
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Tư vấn ngay
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Miễn phí 14 ngày dùng thử • Không cần thẻ tín dụng
          </p>
        </div>
      </div>
    </section>
  );
};
