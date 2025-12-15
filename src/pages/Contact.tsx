import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { companyInfo } from "@/constants/companyInfo";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Video,
  FileText,
  HelpCircle
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    tenKH: "",
    nguoiDaiDien: "",
    email: "",
    sdt: "",
    service: "",
    ngayLam: "",
    ngayKetThuc: "",
    message: "",
    privacy: false
  });

  useEffect(() => {
    // Set default dates
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() + 7);
    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    // Handle URL parameters for service selection
    const plan = searchParams.get('plan');
    const planMapping: Record<string, string> = {
      'basic': 'ONLINE.CAFE.BS.2025.V1',
      'pro': 'ONLINE.CAFE.PR.2025.V1',
      'full': 'ONLINE.CAFE.FU.2025.V1'
    };

    setFormData(prev => ({
      ...prev,
      ngayLam: startDate.toISOString().split('T')[0],
      ngayKetThuc: endDate.toISOString().split('T')[0],
      service: plan ? planMapping[plan.toLowerCase()] || "" : ""
    }));
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Cảm ơn bạn đã gửi yêu cầu! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4fbff] to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-16 px-3 sm:px-4 bg-gradient-to-r from-[#3087fe] to-[#0f426c]">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            <Phone className="w-4 h-4" />
            Hỗ trợ 24/7
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
            Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7. Liên hệ ngay để được tư vấn miễn phí.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0f426c] mb-4">Thông tin liên hệ</h2>
              <p className="text-gray-600 mb-6 sm:mb-8">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy liên hệ qua bất kỳ kênh nào phù hợp với bạn.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {/* Hotline */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-sm border border-blue-100">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Hotline (24/7)</h4>
                    <a href={`tel:${companyInfo.hotline[0]}`} className="text-lg font-bold text-blue-600 hover:text-blue-700">
                      {companyInfo.hotline[0]}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Miễn phí cuộc gọi</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-sm border border-green-100">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Email</h4>
                    <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:text-blue-700">
                      {companyInfo.email}
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Phản hồi trong 24 giờ</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-white rounded-xl shadow-sm border border-purple-100">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Văn phòng</h4>
                    <p className="text-gray-700">{companyInfo.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-sm border border-orange-100">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Giờ làm việc</h4>
                    <p className="text-gray-700">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                    <p className="text-gray-700">Thứ 7: 8:00 - 16:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-[#0f426c] mb-4">Kết nối với chúng tôi</h4>
                <div className="flex gap-3">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://zalo.me/763475936290889196" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-[#0f426c] mb-6">Gửi yêu cầu tư vấn</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="tenKH" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Tên khách hàng / Công ty <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="tenKH"
                        name="tenKH"
                        value={formData.tenKH}
                        onChange={handleInputChange}
                        placeholder="Công ty ABC"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="nguoiDaiDien" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Người đại diện <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nguoiDaiDien"
                        name="nguoiDaiDien"
                        value={formData.nguoiDaiDien}
                        onChange={handleInputChange}
                        placeholder="Nguyễn Văn A"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="sdt" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Số điện thoại <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="sdt"
                        name="sdt"
                        value={formData.sdt}
                        onChange={handleInputChange}
                        placeholder="0901 234 567"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Dịch vụ quan tâm <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                    >
                      <option value="">-- Chọn gói dịch vụ --</option>
                      <option value="ONLINE.CAFE.BS.2025.V1">Gói Basic</option>
                      <option value="ONLINE.CAFE.PR.2025.V1">Gói Pro</option>
                      <option value="ONLINE.CAFE.FU.2025.V1">Gói Full</option>
                    </select>
                  </div>

                  {/* Date Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ngayLam" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ngày bắt đầu <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="ngayLam"
                        name="ngayLam"
                        value={formData.ngayLam}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="ngayKetThuc" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Ngày kết thúc <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="ngayKetThuc"
                        name="ngayKetThuc"
                        value={formData.ngayKetThuc}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nội dung tin nhắn
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Mô tả nhu cầu của bạn..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      checked={formData.privacy}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Tôi đồng ý với{" "}
                      <a href="/payment-terms" className="text-blue-600 hover:underline">
                        Chính sách bảo mật
                      </a>{" "}
                      và cho phép SOF liên hệ qua thông tin đã cung cấp.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Gửi yêu cầu
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[300px] sm:h-[400px] w-full relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.982626705084!2d106.62401047570356!3d10.812641158523363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be7df3b90b9%3A0x2b5653454be821e!2sC%C3%94NG%20TY%20TNHH%20SOF!5e0!3m2!1svi!2s!4v1764900522621!5m2!1svi!2s" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Bản đồ văn phòng SOF"
          className="w-full h-full"
        />
      </section>

      {/* FAQ Quick Links */}
      <section className="py-8 sm:py-12 lg:py-16 px-3 sm:px-4 bg-gradient-to-b from-[#f4fbff] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-3">
              Hỗ trợ nhanh
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f426c] mb-3">
              Bạn có thể tự tìm câu trả lời
            </h2>
            <p className="text-gray-600">
              Khám phá các tài nguyên hữu ích hoặc liên hệ trực tiếp với chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* FAQ Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0f426c] mb-2">Câu hỏi thường gặp</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tìm câu trả lời nhanh cho các thắc mắc phổ biến.
              </p>
              <Button variant="heroOutline" size="sm">
                Xem FAQ
              </Button>
            </div>

            {/* Video Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0f426c] mb-2">Video hướng dẫn</h3>
              <p className="text-sm text-gray-600 mb-4">
                Xem video hướng dẫn sử dụng chi tiết từng tính năng.
              </p>
              <Button variant="heroOutline" size="sm">
                Xem video
              </Button>
            </div>

            {/* Documentation Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0f426c] mb-2">Tài liệu hướng dẫn</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tài liệu chi tiết về cài đặt và sử dụng phần mềm.
              </p>
              <a href="/user-guide">
                <Button variant="heroOutline" size="sm">
                  Xem tài liệu
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
