import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Layers, Building2, Newspaper } from "lucide-react";

export const BlogSection = () => {
  const categories = [
    { 
      title: "Sản phẩm", 
      icon: Package, 
      gradient: "from-blue-400 to-blue-600",
      link: "/under-construction"
    },
    { 
      title: "Giải pháp", 
      icon: Layers, 
      gradient: "from-green-400 to-green-600",
      link: "/under-construction"
    },
    { 
      title: "Lĩnh vực", 
      icon: Building2, 
      gradient: "from-orange-400 to-orange-600",
      link: "/under-construction"
    },
    { 
      title: "Tin tức", 
      icon: Newspaper, 
      gradient: "from-purple-400 to-purple-600",
      link: "/under-construction"
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 relative bg-[#d2eaf7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Content */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0f426c]">
              Đọc thêm về SOF
            </h3>
            <p className="text-sm sm:text-base text-[#507588] leading-relaxed">
              Hiểu thêm về cách vận hành SOF vào doanh nghiệp của bạn. 
              Chúng tôi có rất nhiều use case và case study cho bạn tham khảo.
            </p>
            <a href="/under-construction">
              <Button variant="hero" className="group w-full sm:w-auto touch-manipulation" style={{ minHeight: '44px' }}>
                Khám phá thêm
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-[#0f426c]/10 rounded-2xl sm:rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 grid grid-cols-2 gap-3 sm:gap-4 shadow-lg border border-[#a7d5ec]">
              {categories.map((category, i) => {
                const Icon = category.icon;
                return (
                  <a
                    key={i}
                    href={category.link}
                    className="bg-[#f4fbff] rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-[#c3e8ff] transition-all duration-300 cursor-pointer border border-[#a7d5ec] touch-manipulation group hover:shadow-lg"
                  >
                    <div className={`w-full aspect-video bg-gradient-to-br ${category.gradient} rounded-md sm:rounded-lg mb-2 sm:mb-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <div className="h-1.5 sm:h-2 w-3/4 bg-[#8fc0db] rounded-full mb-1.5 sm:mb-2" />
                    <div className="h-1.5 sm:h-2 w-1/2 bg-[#8fc0db] rounded-full" />
                    <p className="text-xs sm:text-sm font-semibold text-[#0f426c] mt-2 text-center">{category.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
