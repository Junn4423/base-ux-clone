import { Button } from "@/components/ui/button";

const integrations = [
  "Window", "MySQL", "Google", "Zoom", "MongoDB", "Oracle", 
  "AWS", "VietQR", "Hosting", "Appstore",
  "Cloudfare", "PhpMyAdmin", "VNPay", "Momo", "Linux",
  "Cloudinary", "Android", "Apple IOS", "Play Store", "Youtube",
];

export const IntegrationsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden bg-[#d2eaf7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-3 sm:mb-4 text-[#0f426c] px-2">
            <span className="text-[#3087fe]">Xây dựng</span>{" "}
            <span className="px-2 sm:px-3 py-1 rounded-full bg-[#0f426c]/10 border border-[#0f426c]/30 text-[#0f426c] text-lg sm:text-xl lg:text-3xl">
              rất nhiều
            </span>{" "}
            <br className="sm:hidden" />
            ứng dụng trên mọi nền tảng
          </h2>
          <p className="text-sm sm:text-base text-[#507588] max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            SOF có khả năng kết nối, trao đổi dữ liệu với các ứng dụng phổ biến mà doanh nghiệp của bạn đang sử dụng
          </p>
        </div>

        {/* Integration Grid */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-r from-[#d2eaf7] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-32 bg-gradient-to-l from-[#d2eaf7] to-transparent pointer-events-none z-10" />

          {/* Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-3 lg:gap-4 overflow-hidden">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="aspect-square bg-white border border-[#a7d5ec] rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3 hover:shadow-lg transition-all duration-300 group touch-manipulation"
              >
                <div className="text-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 mx-auto mb-1 sm:mb-2 rounded-md sm:rounded-lg bg-[#f4fbff] flex items-center justify-center group-hover:bg-[#0f426c]/10 transition-colors">
                    <span className="text-xs sm:text-sm lg:text-lg font-bold text-[#507588] group-hover:text-[#0f426c] transition-colors">
                      {integration.charAt(0)}
                    </span>
                  </div>
                  <span className="text-[8px] sm:text-[10px] lg:text-xs text-[#507588] group-hover:text-[#0f426c] transition-colors line-clamp-1">
                    {integration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-12">
          <a href="/contact">
            <Button variant="hero" size="lg" className="w-full sm:w-auto touch-manipulation" style={{ minHeight: '48px' }}>
              Tư vấn triển khai
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
