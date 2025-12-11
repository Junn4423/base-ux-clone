import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircle, User } from "lucide-react";

const aiQuestions = [
  "Có đề xuất nào đang cần phê duyệt không?",
  "Tóm tắt công việc của team tôi trong tuần này",
  "Tình hình tài chính của công ty có đang đi theo kế hoạch không?",
  "Hôm nay tôi có những cuộc họp nào quan trọng?",
  "Phân tích tình hình dự án kinh doanh sản phẩm mới",
];

export const BaseAISection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Thông tin tức thời, quyết định chính xác
          </h2>
          <Button variant="hero" className="mt-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Base AI Coming Soon
          </Button>
        </div>

        {/* AI Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-6 lg:p-8">
            {/* Chat Header */}
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Hey Base AI</div>
                <div className="text-xs text-muted-foreground">Trợ lý AI thông minh</div>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {aiQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-card flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-foreground group-hover:text-primary transition-colors">
                      {question}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <MessageCircle className="w-4 h-4 text-primary" />
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30 border border-border/50">
                <Sparkles className="w-5 h-5 text-primary" />
                <input
                  type="text"
                  placeholder="Hỏi Base AI bất cứ điều gì..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                />
                <Button variant="hero" size="sm">
                  Gửi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
