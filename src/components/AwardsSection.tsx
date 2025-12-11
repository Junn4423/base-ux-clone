const awards = [
  { id: 1, name: "APEA 2023", description: "Asia Pacific Enterprise Awards" },
  { id: 2, name: "Make in Vietnam 2020", description: "Sản phẩm số xuất sắc nhất" },
  { id: 3, name: "Sao Khuê 2021", description: "Giải pháp chuyển đổi số" },
  { id: 4, name: "Top 10 ICT 2022", description: "Sản phẩm CNTT xuất sắc" },
  { id: 5, name: "Vietnam Value 2023", description: "Thương hiệu Quốc gia" },
];

export const AwardsSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Infinite scroll awards */}
      <div className="relative">
        <div className="flex animate-slide-left">
          {[...awards, ...awards, ...awards].map((award, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6"
            >
              <div className="glass-card rounded-xl p-6 w-64 hover:glow-card transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <span className="text-primary-foreground font-bold">🏆</span>
                </div>
                <div className="font-semibold text-foreground mb-1">{award.name}</div>
                <div className="text-sm text-muted-foreground">{award.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
