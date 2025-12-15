const stats = [
  { value: "3", label: "Sản phẩm chính" },
  { value: "2011", label: "Thành lập" },
  { value: "14+", label: "Năm kinh nghiệm" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

export const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-28 relative overflow-hidden bg-[#0f426c]">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12" data-aos="fade-up">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className="text-center space-y-1 sm:space-y-2"
              >
                <div className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm lg:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
