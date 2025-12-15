import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-16 sm:pt-20 lg:pt-24 overflow-hidden bg-gradient-to-b from-[#f4fbff] to-[#d2eaf7]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#8fc0db]/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[#0f426c]/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 pt-6 sm:pt-8 lg:pt-0" data-aos="fade-right">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#0f426c]">
              Phần mềm quản lý{" "}
              <br className="hidden sm:block" />
              doanh nghiệp{" "}
              <span className="text-[#3087fe]">toàn diện</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-[#507588] max-w-xl leading-relaxed">
              Chuyên cung cấp giải pháp SOF ERP, SOF HRM, SOF POS cho doanh nghiệp Việt Nam.
              <br className="hidden sm:block" />
              <span className="hidden sm:inline"><br /></span>
              Tự hào phát triển và triển khai thành công nhiều dự án ERP, quản lý nhân sự, bán hàng, vận tải từ năm 2011.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a href="/contact">
                <Button variant="hero" size="lg" className="text-sm sm:text-base">
                  Đăng ký Demo
                </Button>
              </a>
            </div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative lg:pl-8 hidden sm:block">
            {/* Main Dashboard Card */}
            <div className="relative animate-float">
              {/* Glow effect */}
              <div className="absolute -inset-2 sm:-inset-4 bg-[#0f426c]/10 rounded-3xl blur-2xl" />
              
              {/* Main card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border border-[#a7d5ec]">
                {/* Dashboard header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="h-1.5 sm:h-2 w-12 sm:w-16 bg-[#c3e8ff] rounded-full" />
                    <div className="h-1.5 sm:h-2 w-8 sm:w-12 bg-[#c3e8ff] rounded-full" />
                  </div>
                </div>

                {/* Dashboard content grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-2 sm:gap-3 lg:gap-4">
                  {/* Stats cards */}
                  <div className="bg-[#f4fbff] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-[#a7d5ec]">
                    <div className="text-[10px] sm:text-xs text-[#507588] mb-0.5 sm:mb-1">Sản phẩm</div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-[#0f426c]">ERP</div>
                    <div className="text-[10px] sm:text-xs text-green-500">Core</div>
                  </div>
                  <div className="bg-[#f4fbff] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-[#a7d5ec]">
                    <div className="text-[10px] sm:text-xs text-[#507588] mb-0.5 sm:mb-1">Sản phẩm</div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-[#0f426c]">HRM</div>
                    <div className="text-[10px] sm:text-xs text-green-500">Active</div>
                  </div>
                  <div className="bg-[#f4fbff] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 border border-[#a7d5ec]">
                    <div className="text-[10px] sm:text-xs text-[#507588] mb-0.5 sm:mb-1">Sản phẩm</div>
                    <div className="text-sm sm:text-lg lg:text-xl font-bold text-[#0f426c]">POS</div>
                    <div className="text-[10px] sm:text-xs text-green-500">Active</div>
                  </div>

                  {/* Chart placeholder */}
                  <div className="col-span-2 bg-[#f4fbff] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 h-24 sm:h-32 border border-[#a7d5ec]">
                    <div className="flex items-end justify-between h-full gap-1">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-[#0f426c] to-[#3087fe] rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Progress card */}
                  <div className="bg-[#f4fbff] rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 space-y-1.5 sm:space-y-2 border border-[#a7d5ec]">
                    <div className="text-[10px] sm:text-xs text-[#507588]">Tiến độ</div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <div className="h-1.5 sm:h-2 bg-[#c3e8ff] rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-[#0f426c] rounded-full" />
                      </div>
                      <div className="h-1.5 sm:h-2 bg-[#c3e8ff] rounded-full overflow-hidden">
                        <div className="h-full w-1/2 bg-[#3087fe] rounded-full" />
                      </div>
                      <div className="h-2 bg-[#c3e8ff] rounded-full overflow-hidden">
                        <div className="h-full w-5/6 bg-[#8fc0db] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating element */}
            <div className="absolute -left-2 sm:-left-4 lg:-left-8 top-1/2 -translate-y-1/2 animate-float-delayed hidden md:block">
              <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-lg border border-[#a7d5ec]">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-[#0f426c] rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 sm:mb-2">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#0f426c]">AI Insights</div>
                <div className="text-[10px] sm:text-xs text-[#507588]">Tự động phân tích</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
