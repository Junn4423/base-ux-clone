const stats = [
  { value: "10,000+", label: "Doanh nghiệp tin dùng" },
  { value: "500K+", label: "Người dùng hoạt động" },
  { value: "99.9%", label: "Uptime đảm bảo" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center space-y-2"
              >
                <div className="text-3xl lg:text-5xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-muted-foreground">
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
