const trustedCompanies = [
  { name: "BIDGROUP", description: "Công ty Cổ Phần BIDGROUP" },
  { name: "VietCredit", description: "Công ty Tài Chính Cổ Phần Tín Việt" },
  { name: "AMECC", description: "Công ty Cổ phần Cơ khí Xây dựng AMECC" },
  { name: "Traphaco", description: "Công ty Cổ phần Traphaco" },
  { name: "VPBank", description: "Ngân hàng TMCP Việt Nam Thịnh Vượng" },
  { name: "ACB", description: "Ngân hàng TMCP Á Châu" },
];

export const TrustedSection = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-muted-foreground">
            Được tin tưởng bởi những doanh nghiệp hàng đầu
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustedCompanies.map((company, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-xl p-6 hover:glow-card transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Logo placeholder */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <div className="font-semibold text-foreground text-sm">{company.name}</div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-card/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="font-semibold text-foreground mb-1">{company.name}</div>
                  <div className="text-xs text-muted-foreground">{company.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
