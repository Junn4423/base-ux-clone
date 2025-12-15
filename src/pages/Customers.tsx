import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Building2, 
  TrendingUp, 
  Users, 
  CheckCircle2,
  Star,
  Quote
} from "lucide-react";

export default function Customers() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4fbff] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f426c] mb-4">
              Khách Hàng Tin Dùng SOF
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hơn 300+ doanh nghiệp đã tin tưởng và sử dụng giải pháp phần mềm của SOF 
              để tối ưu hóa quy trình kinh doanh và tăng trưởng bền vững
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-[#0f426c] mb-1">300+</div>
              <div className="text-sm text-gray-600">Khách hàng</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-[#0f426c] mb-1">100+</div>
              <div className="text-sm text-gray-600">Dự án triển khai</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-[#0f426c] mb-1">98%</div>
              <div className="text-sm text-gray-600">Khách hàng hài lòng</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-[#0f426c] mb-1">12+</div>
              <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-4">Câu Chuyện Thành Công</h2>
            <p className="text-gray-600">Những khách hàng tiêu biểu đã gặt hái được kết quả ấn tượng với SOF</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  A
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f426c]">Tập đoàn ABC</h3>
                  <p className="text-sm text-gray-600">Bán lẻ - 500+ nhân viên</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-blue-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "SOF đã giúp chúng tôi tối ưu hóa quy trình quản lý kho và bán hàng. 
                Năng suất tăng 40%, chi phí vận hành giảm 25%."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Tăng 40% năng suất</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Giảm 25% chi phí</span>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  X
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f426c]">Công ty XYZ</h3>
                  <p className="text-sm text-gray-600">Nhà hàng - Chuỗi 20 chi nhánh</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-green-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Giải pháp F&B của SOF rất phù hợp với chuỗi nhà hàng. 
                Quản lý đơn hàng nhanh hơn, dễ dàng theo dõi doanh thu theo thời gian thực."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Xử lý nhanh hơn 50%</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Báo cáo real-time</span>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  M
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f426c]">MNO Group</h3>
                  <p className="text-sm text-gray-600">Sản xuất - 300 nhân viên</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-purple-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Hệ thống ERP của SOF giúp chúng tôi quản lý toàn bộ quy trình sản xuất. 
                Giảm thiểu thời gian chết, tăng hiệu suất sản xuất lên 35%."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Hiệu suất +35%</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Giảm thời gian chết</span>
                </div>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  P
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f426c]">PQR Store</h3>
                  <p className="text-sm text-gray-600">Siêu thị - 150 nhân viên</p>
                </div>
              </div>
              <Quote className="w-8 h-8 text-orange-300 mb-3" />
              <p className="text-gray-700 mb-4 italic">
                "Phần mềm quản lý siêu thị của SOF dễ sử dụng, nhân viên học rất nhanh. 
                Hỗ trợ tận tình, giải quyết vấn đề kịp thời."
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Dễ sử dụng</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-gray-600">Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-4">Đánh Giá Từ Khách Hàng</h2>
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600">4.9/5 sao từ hơn 200 đánh giá</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Phần mềm rất tốt, hỗ trợ tận tình. Giải pháp phù hợp với quy mô doanh nghiệp của chúng tôi."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    K
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Khách hàng {i}</div>
                    <div className="text-xs text-gray-500">CEO, Công ty ABC</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#3087fe] to-[#0f426c]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Trở Thành Khách Hàng Tiếp Theo Của SOF</h2>
          <p className="text-lg mb-8 text-blue-100">
            Hãy để chúng tôi giúp doanh nghiệp của bạn phát triển vượt bậc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact">
              <Button variant="hero" size="lg" className="bg-white text-[#3087fe] hover:bg-gray-100">
                Đăng ký Demo miễn phí
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Liên hệ tư vấn
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
