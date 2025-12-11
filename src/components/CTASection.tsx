import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-primary rounded-full" />
          
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-4">
            Tối ưu vận hành, tăng trưởng <span className="text-gradient">đột phá</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Không chỉ là phần mềm, Base cung cấp giải pháp, tri thức & sự đồng hành cùng doanh nghiệp
          </p>

          <Button variant="hero" size="xl" className="group">
            Đăng ký Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
