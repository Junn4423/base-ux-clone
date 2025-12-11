import { Phone, MessageCircle } from "lucide-react";

export const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:19006364"
        className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
        aria-label="Gọi điện"
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>
      <a
        href="#"
        className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl group"
        aria-label="Zalo"
      >
        <span className="text-sm font-semibold group-hover:scale-110 transition-transform">Zalo</span>
      </a>
    </div>
  );
};
