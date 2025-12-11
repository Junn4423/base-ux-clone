import { Button } from "@/components/ui/button";

const integrations = [
  "Slack", "Teams", "Google", "Zoom", "SAP", "Oracle", 
  "Salesforce", "HubSpot", "Quickbooks", "Xero",
  "Mailchimp", "Stripe", "PayPal", "Shopify", "WooCommerce",
  "Jira", "Trello", "Asana", "Monday", "Notion",
];

export const IntegrationsSection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Tích hợp</span>{" "}
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary">
              200+
            </span>{" "}
            ứng dụng trên một nền tảng duy nhất
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Base có khả năng kết nối, trao đổi dữ liệu với các ứng dụng phổ biến mà doanh nghiệp của bạn đang sử dụng
          </p>
        </div>

        {/* Integration Grid */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />

          {/* Grid */}
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="aspect-square glass-card rounded-xl flex items-center justify-center p-3 hover:glow-card transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                      {integration.charAt(0)}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    {integration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Tư vấn triển khai
          </Button>
        </div>
      </div>
    </section>
  );
};
