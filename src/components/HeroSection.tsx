import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8 pt-8 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Nền tảng quản trị{" "}
              <br className="hidden sm:block" />
              doanh nghiệp{" "}
              <span className="text-gradient">toàn diện</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Nhanh chóng nắm bắt thông tin dưới góc nhìn đa chiều
              <br />
              để đưa ra quyết định chính xác
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Đăng ký Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative lg:pl-8">
            {/* Main Dashboard Card */}
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative glass-card rounded-2xl p-4 lg:p-6 glow-card">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-16 bg-muted rounded-full" />
                    <div className="h-2 w-12 bg-muted rounded-full" />
                  </div>
                </div>

                {/* Dashboard content grid */}
                <div className="grid grid-cols-3 gap-3 lg:gap-4">
                  {/* Stats cards */}
                  <div className="bg-secondary/50 rounded-xl p-3 lg:p-4">
                    <div className="text-xs text-muted-foreground mb-1">Doanh thu</div>
                    <div className="text-lg lg:text-xl font-bold text-foreground">12.5B</div>
                    <div className="text-xs text-green-400">+23.5%</div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3 lg:p-4">
                    <div className="text-xs text-muted-foreground mb-1">Đơn hàng</div>
                    <div className="text-lg lg:text-xl font-bold text-foreground">2,847</div>
                    <div className="text-xs text-green-400">+12.3%</div>
                  </div>
                  <div className="bg-secondary/50 rounded-xl p-3 lg:p-4">
                    <div className="text-xs text-muted-foreground mb-1">Khách hàng</div>
                    <div className="text-lg lg:text-xl font-bold text-foreground">1,234</div>
                    <div className="text-xs text-green-400">+8.7%</div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="col-span-2 bg-secondary/50 rounded-xl p-3 lg:p-4 h-32">
                    <div className="flex items-end justify-between h-full gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-primary rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress card */}
                  <div className="bg-secondary/50 rounded-xl p-3 lg:p-4 space-y-2">
                    <div className="text-xs text-muted-foreground">Tiến độ</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-primary rounded-full" />
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-primary/60 rounded-full" />
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-gradient-primary rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 animate-float-delayed">
              <div className="glass-card rounded-2xl p-4 glow-card">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-2">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-sm font-medium text-foreground">AI Insights</div>
                <div className="text-xs text-muted-foreground">Tự động phân tích</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
