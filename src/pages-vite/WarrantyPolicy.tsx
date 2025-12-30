import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Clock,
  FileText,
  Phone,
  Mail,
  AlertCircle
} from "lucide-react";

export default function WarrantyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#f4fbff] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#3087fe] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0f426c] mb-6">
              Chính Sách Bảo Hành
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Cam kết chất lượng dịch vụ và hỗ trợ tận tâm cho khách hàng
            </p>
          </div>
        </div>
      </div>

      {/* Warranty Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4fbff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#3087fe]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f426c] mb-2">Bảo Hành 12 Tháng</h3>
                <p className="text-gray-600">Miễn phí trong năm đầu tiên sử dụng</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4fbff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#3087fe]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f426c] mb-2">Hỗ Trợ 24/7</h3>
                <p className="text-gray-600">Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4fbff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#3087fe]" />
                </div>
                <h3 className="text-xl font-bold text-[#0f426c] mb-2">Cam Kết Chất Lượng</h3>
                <p className="text-gray-600">Đảm bảo phần mềm hoạt động ổn định</p>
              </div>
            </div>

            {/* Warranty Details */}
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="bg-[#f4fbff] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                  1. Phạm Vi Bảo Hành
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0f426c] mb-1">Bảo hành phần mềm</h4>
                      <p className="text-gray-600">
                        Sửa chữa miễn phí các lỗi phát sinh do phần mềm trong thời gian bảo hành.
                        Bao gồm các lỗi về tính năng, hiển thị, tính toán và báo cáo.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0f426c] mb-1">Hỗ trợ kỹ thuật</h4>
                      <p className="text-gray-600">
                        Hỗ trợ kỹ thuật qua điện thoại, email, hoặc truy cập từ xa để giải quyết
                        các vấn đề kỹ thuật phát sinh trong quá trình sử dụng.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0f426c] mb-1">Cập nhật phiên bản</h4>
                      <p className="text-gray-600">
                        Cung cấp miễn phí các bản cập nhật sửa lỗi và cải tiến tính năng trong
                        thời gian bảo hành. Không bao gồm các phiên bản nâng cấp lớn (major version).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-[#0f426c] mb-1">Đào tạo lại</h4>
                      <p className="text-gray-600">
                        Hỗ trợ đào tạo lại miễn phí cho người dùng mới thay thế trong tổ chức
                        (tối đa 2 lần/năm, mỗi lần tối đa 2 người).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-white border-2 border-[#a7d5ec] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                  2. Thời Gian Bảo Hành
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#3087fe] pl-4">
                    <h4 className="font-semibold text-[#0f426c] mb-2">Bảo hành tiêu chuẩn</h4>
                    <p className="text-gray-600">
                      Thời gian bảo hành: <strong>12 tháng</strong> kể từ ngày nghiệm thu và bàn giao phần mềm.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#3087fe] pl-4">
                    <h4 className="font-semibold text-[#0f426c] mb-2">Gia hạn bảo hành</h4>
                    <p className="text-gray-600">
                      Khách hàng có thể gia hạn bảo hành theo năm với chi phí ưu đãi.
                      Liên hệ bộ phận bán hàng để được tư vấn gói bảo hành phù hợp.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#3087fe] pl-4">
                    <h4 className="font-semibold text-[#0f426c] mb-2">Thời gian phản hồi</h4>
                    <ul className="text-gray-600 space-y-1 mt-2">
                      <li>• Lỗi nghiêm trọng (Critical): Phản hồi trong <strong>2 giờ</strong></li>
                      <li>• Lỗi cao (High): Phản hồi trong <strong>4 giờ</strong></li>
                      <li>• Lỗi trung bình (Medium): Phản hồi trong <strong>8 giờ</strong></li>
                      <li>• Lỗi thấp (Low): Phản hồi trong <strong>24 giờ</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-[#f4fbff] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                  3. Điều Kiện Bảo Hành
                </h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-3">Được bảo hành khi:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Phần mềm còn trong thời gian bảo hành theo hợp đồng
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Khách hàng đã thanh toán đầy đủ theo hợp đồng
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Lỗi phát sinh do phần mềm, không phải do người dùng
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Phần mềm được sử dụng đúng mục đích và hướng dẫn
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <h2 className="text-2xl font-bold text-red-700">
                    4. Trường Hợp Không Bảo Hành
                  </h2>
                </div>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Lỗi do người dùng sử dụng sai, cố ý hoặc vô tình gây ra
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Lỗi do can thiệp, chỉnh sửa phần mềm bởi bên thứ ba không được ủy quyền
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Lỗi do vi-rút, phần mềm độc hại hoặc tấn công mạng
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Lỗi do sự cố phần cứng, hệ điều hành, cơ sở hạ tầng mạng
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Yêu cầu tùy chỉnh, thêm tính năng mới ngoài phạm vi hợp đồng
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Thiên tai, hỏa hoạn, hoặc các sự kiện bất khả kháng
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-white border-2 border-[#a7d5ec] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                  5. Quy Trình Yêu Cầu Bảo Hành
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#3087fe] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0f426c] mb-2">Thông báo sự cố</h4>
                      <p className="text-gray-600">
                        Liên hệ bộ phận hỗ trợ qua hotline, email hoặc hệ thống ticket.
                        Cung cấp thông tin chi tiết về lỗi và môi trường sử dụng.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#3087fe] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0f426c] mb-2">Tiếp nhận và phân loại</h4>
                      <p className="text-gray-600">
                        Đội ngũ kỹ thuật tiếp nhận, phân loại mức độ nghiêm trọng và
                        xác định thời gian xử lý dự kiến.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#3087fe] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0f426c] mb-2">Xử lý sự cố</h4>
                      <p className="text-gray-600">
                        Kỹ thuật viên tiến hành kiểm tra, phân tích nguyên nhân và đưa ra
                        giải pháp khắc phục. Cập nhật tiến độ định kỳ cho khách hàng.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-[#3087fe] rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#0f426c] mb-2">Nghiệm thu</h4>
                      <p className="text-gray-600">
                        Khách hàng kiểm tra và xác nhận sự cố đã được giải quyết.
                        Đóng ticket sau khi khách hàng hài lòng với kết quả.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-[#f4fbff] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                  6. Dịch Vụ Sau Bảo Hành
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Sau khi hết thời gian bảo hành, khách hàng có thể tiếp tục sử dụng
                    các dịch vụ hỗ trợ với các gói dịch vụ sau:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-6 rounded-lg border-2 border-[#a7d5ec]">
                      <h4 className="font-bold text-[#0f426c] mb-3">Gói Bạc</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>✓ Hỗ trợ qua email</li>
                        <li>✓ Thời gian phản hồi: 24h</li>
                        <li>✓ Cập nhật bảo mật</li>
                        <li>✓ Giá: 10% giá trị hợp đồng/năm</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg border-2 border-[#a7d5ec]">
                      <h4 className="font-bold text-[#0f426c] mb-3">Gói Vàng</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>✓ Hỗ trợ qua hotline 24/7</li>
                        <li>✓ Thời gian phản hồi: 4h</li>
                        <li>✓ Cập nhật tính năng mới</li>
                        <li>✓ Đào tạo miễn phí</li>
                        <li>✓ Giá: 15% giá trị hợp đồng/năm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-br from-[#0f426c] to-[#3087fe]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Liên Hệ Bảo Hành
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ hỗ trợ kỹ thuật sẵn sàng phục vụ bạn
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Hotline</h3>
                <p className="text-lg">0933 549 469</p>
                <p className="text-lg">0932 518 569</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-lg">support@sof.com.vn</p>
                <p className="text-sm opacity-80">Phản hồi trong 24h</p>
              </div>
            </div>
            <div className="mt-8">
              <Button className="bg-white text-[#0f426c] hover:bg-gray-100">
                Gửi yêu cầu hỗ trợ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
