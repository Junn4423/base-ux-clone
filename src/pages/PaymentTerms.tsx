import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Banknote, 
  Smartphone, 
  Building2, 
  CheckCircle, 
  AlertCircle,
  FileText,
  Shield,
  Clock
} from "lucide-react";

export default function PaymentTerms() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#f4fbff] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#3087fe] rounded-full flex items-center justify-center mx-auto mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0f426c] mb-6">
              Quy Định Thanh Toán
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Chính sách thanh toán linh hoạt, minh bạch và an toàn cho khách hàng
            </p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-12 text-center">
              Phương Thức Thanh Toán
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Chuyển Khoản</h3>
                <p className="text-sm text-gray-600">
                  Chuyển khoản ngân hàng qua số tài khoản công ty
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Tiền Mặt</h3>
                <p className="text-sm text-gray-600">
                  Thanh toán trực tiếp tại văn phòng công ty
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Thẻ Tín Dụng</h3>
                <p className="text-sm text-gray-600">
                  Thanh toán qua thẻ Visa, Mastercard, JCB
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Ví Điện Tử</h3>
                <p className="text-sm text-gray-600">
                  MoMo, ZaloPay, VNPay và các ví điện tử khác
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Terms Details */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Section 1 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                1. Hình Thức Thanh Toán
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-[#3087fe] pl-6">
                  <h4 className="font-semibold text-[#0f426c] mb-3">Thanh toán một lần (Full Payment)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Thanh toán 100% giá trị hợp đồng trước khi triển khai</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Ưu đãi: Giảm 5% tổng giá trị đơn hàng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Tặng thêm 1 tháng bảo hành (tổng 13 tháng)</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#3087fe] pl-6">
                  <h4 className="font-semibold text-[#0f426c] mb-3">Thanh toán theo tiến độ (Milestone Payment)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">Đợt 1 (40%):</span>
                      <span>Thanh toán sau khi ký hợp đồng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">Đợt 2 (30%):</span>
                      <span>Thanh toán sau khi hoàn thành cài đặt và đào tạo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">Đợt 3 (30%):</span>
                      <span>Thanh toán sau khi nghiệm thu và bàn giao hệ thống</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#3087fe] pl-6">
                  <h4 className="font-semibold text-[#0f426c] mb-3">Thanh toán trả góp (Installment)</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Áp dụng cho hợp đồng trên 100 triệu VNĐ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Thanh toán 50% trước, số còn lại chia thành 3-6 tháng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Lãi suất 0% (không tính phí trả góp)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-[#f4fbff] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                2. Thông Tin Tài Khoản Ngân Hàng
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0f426c] mb-4">Ngân hàng Vietcombank</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chủ tài khoản:</span>
                      <span className="font-semibold">CÔNG TY TNHH SOF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Số tài khoản:</span>
                      <span className="font-semibold">0123456789</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chi nhánh:</span>
                      <span className="font-semibold">Tân Bình, TP.HCM</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-[#0f426c] mb-4">Ngân hàng Techcombank</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chủ tài khoản:</span>
                      <span className="font-semibold">CÔNG TY TNHH SOF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Số tài khoản:</span>
                      <span className="font-semibold">9876543210</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Chi nhánh:</span>
                      <span className="font-semibold">Tân Phú, TP.HCM</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-yellow-800">
                    <strong>Lưu ý:</strong> Vui lòng ghi rõ nội dung chuyển khoản: 
                    "Tên công ty - Số hợp đồng - Số điện thoại liên hệ" để chúng tôi xác nhận thanh toán nhanh chóng.
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                3. Điều Khoản Thanh Toán
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Thời hạn thanh toán</h4>
                    <p className="text-gray-600">
                      Thanh toán trong vòng 7 ngày kể từ ngày nhận hóa đơn VAT. 
                      Quá thời hạn trên, khách hàng phải chịu phí chậm thanh toán 0.05%/ngày 
                      trên tổng số tiền chưa thanh toán.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Hóa đơn VAT</h4>
                    <p className="text-gray-600">
                      Hóa đơn VAT được xuất trong vòng 3 ngày làm việc sau khi nhận đủ thanh toán. 
                      Hóa đơn điện tử sẽ được gửi qua email đã đăng ký.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Bảo mật thông tin</h4>
                    <p className="text-gray-600">
                      Mọi thông tin thanh toán của khách hàng được bảo mật tuyệt đối theo 
                      tiêu chuẩn PCI DSS. SOF cam kết không chia sẻ thông tin với bên thứ ba 
                      nếu không có sự đồng ý của khách hàng.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">Xác nhận thanh toán</h4>
                    <p className="text-gray-600">
                      Sau khi nhận được thanh toán, SOF sẽ gửi email xác nhận trong vòng 24 giờ. 
                      Nếu chưa nhận được xác nhận, vui lòng liên hệ bộ phận kế toán.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-[#f4fbff] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                4. Chính Sách Hoàn Tiền
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">Hoàn tiền 100%</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Hủy hợp đồng trong vòng 7 ngày sau khi ký (chưa triển khai)</li>
                    <li>• Phần mềm không đáp ứng được các tính năng đã cam kết trong hợp đồng</li>
                    <li>• SOF vi phạm nghiêm trọng các điều khoản hợp đồng</li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">Hoàn tiền một phần</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Hủy hợp đồng sau khi đã triển khai: Hoàn lại 50% giá trị chưa thực hiện</li>
                    <li>• Thanh toán nhầm/thừa: Hoàn lại số tiền thừa trong vòng 15 ngày</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-red-700 mb-2">Không hoàn tiền</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Khách hàng đơn phương hủy hợp đồng sau khi đã nghiệm thu</li>
                    <li>• Yêu cầu hoàn tiền do lỗi của khách hàng (sử dụng sai, vi phạm bản quyền)</li>
                    <li>• Các gói dịch vụ đã sử dụng (đào tạo, tùy chỉnh, triển khai)</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Thời gian xử lý hoàn tiền:</strong> 15-30 ngày làm việc kể từ ngày 
                    SOF nhận được yêu cầu hoàn tiền hợp lệ và đầy đủ chứng từ.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                5. Ưu Đãi Thanh Toán
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-[#f4fbff] to-white p-6 rounded-lg border-2 border-[#a7d5ec]">
                  <div className="text-3xl font-bold text-[#3087fe] mb-2">5%</div>
                  <h4 className="font-semibold text-[#0f426c] mb-2">Thanh toán sớm</h4>
                  <p className="text-sm text-gray-600">
                    Giảm 5% khi thanh toán 100% trước khi triển khai
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#f4fbff] to-white p-6 rounded-lg border-2 border-[#a7d5ec]">
                  <div className="text-3xl font-bold text-[#3087fe] mb-2">10%</div>
                  <h4 className="font-semibold text-[#0f426c] mb-2">Khách hàng thân thiết</h4>
                  <p className="text-sm text-gray-600">
                    Giảm 10% cho khách hàng gia hạn hợp đồng từ năm thứ 2
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#f4fbff] to-white p-6 rounded-lg border-2 border-[#a7d5ec]">
                  <div className="text-3xl font-bold text-[#3087fe] mb-2">15%</div>
                  <h4 className="font-semibold text-[#0f426c] mb-2">Gói combo</h4>
                  <p className="text-sm text-gray-600">
                    Giảm 15% khi mua từ 2 sản phẩm trở lên
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-lg p-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-orange-800 mb-4">
                    Lưu Ý Quan Trọng
                  </h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Mọi giao dịch thanh toán cần có xác nhận bằng văn bản (email hoặc hợp đồng)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Khách hàng chịu toàn bộ phí giao dịch ngân hàng (nếu có)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Không hoàn tiền các khoản phí dịch vụ, đào tạo, tùy chỉnh đã thực hiện
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>
                        Giá và chính sách có thể thay đổi mà không cần báo trước. Áp dụng giá 
                        tại thời điểm ký hợp đồng
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-8 text-center">
              Câu Hỏi Thường Gặp
            </h2>
            <div className="space-y-4">
              <div className="bg-[#f4fbff] p-6 rounded-lg">
                <h4 className="font-semibold text-[#0f426c] mb-2">
                  Tôi có thể thanh toán bằng ngoại tệ không?
                </h4>
                <p className="text-gray-600">
                  Hiện tại chúng tôi chỉ chấp nhận thanh toán bằng VNĐ. Đối với khách hàng 
                  quốc tế, vui lòng liên hệ bộ phận kinh doanh để được hỗ trợ.
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg">
                <h4 className="font-semibold text-[#0f426c] mb-2">
                  Làm sao để được ưu đãi thanh toán sớm?
                </h4>
                <p className="text-gray-600">
                  Thanh toán 100% giá trị hợp đồng trong vòng 3 ngày sau khi ký để được giảm 5%. 
                  Ưu đãi được áp dụng tự động khi xuất hóa đơn.
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg">
                <h4 className="font-semibold text-[#0f426c] mb-2">
                  Tôi đã chuyển khoản nhưng chưa nhận được xác nhận?
                </h4>
                <p className="text-gray-600">
                  Vui lòng liên hệ hotline 0933 549 469 hoặc email accounting@sof.vn kèm theo 
                  ảnh chụp/screenshot chuyển khoản để được hỗ trợ nhanh chóng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gradient-to-br from-[#0f426c] to-[#3087fe]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Cần Tư Vấn Về Thanh Toán?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ tài chính của chúng tôi sẵn sàng hỗ trợ bạn
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-white text-[#0f426c] hover:bg-gray-100">
                  Liên hệ tư vấn
                </Button>
              </a>
              <Button variant="outline" className="border-white text-black hover:bg-white/10">
                Xem bảng giá
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
