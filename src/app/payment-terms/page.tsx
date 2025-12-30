import type { Metadata } from "next";
import Link from "next/link";
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
  Clock,
} from "lucide-react";

// SEO Metadata for Payment Terms page
export const metadata: Metadata = {
  title: "Quy Định Thanh Toán",
  description:
    "Quy định thanh toán và chính sách hoàn tiền của SOF.COM.VN. Hỗ trợ nhiều hình thức thanh toán: chuyển khoản, tiền mặt, thẻ tín dụng và ví điện tử.",
  keywords: [
    "quy định thanh toán SOF",
    "hình thức thanh toán",
    "chính sách hoàn tiền",
    "thanh toán phần mềm",
    "payment terms",
  ],
  openGraph: {
    title: "Quy Định Thanh Toán | SOF.COM.VN",
    description:
      "Chính sách thanh toán linh hoạt, minh bạch và an toàn cho khách hàng.",
    url: "https://sof.com.vn/payment-terms",
  },
  alternates: {
    canonical: "https://sof.com.vn/payment-terms",
  },
};

// Server Component - Good for SEO
export default function PaymentTermsPage() {
  return (
    <div className="min-h-screen bg-white">
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
              Chính sách thanh toán linh hoạt, minh bạch và an toàn cho khách
              hàng
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
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Chuyển Khoản
                </h3>
                <p className="text-sm text-gray-600">
                  Chuyển khoản ngân hàng qua số tài khoản công ty
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Banknote className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Tiền Mặt
                </h3>
                <p className="text-sm text-gray-600">
                  Thanh toán trực tiếp tại văn phòng công ty
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Thẻ Tín Dụng
                </h3>
                <p className="text-sm text-gray-600">
                  Thanh toán qua thẻ Visa, Mastercard, JCB
                </p>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Ví Điện Tử
                </h3>
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
                  <h4 className="font-semibold text-[#0f426c] mb-3">
                    Thanh toán một lần (Full Payment)
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Thanh toán 100% giá trị hợp đồng trước khi triển khai
                      </span>
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
                  <h4 className="font-semibold text-[#0f426c] mb-3">
                    Thanh toán theo tiến độ (Milestone Payment)
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">
                        Đợt 1 (40%):
                      </span>
                      <span>Thanh toán sau khi ký hợp đồng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">
                        Đợt 2 (30%):
                      </span>
                      <span>
                        Thanh toán sau khi hoàn thành cài đặt và đào tạo
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold text-[#3087fe] w-24 flex-shrink-0">
                        Đợt 3 (30%):
                      </span>
                      <span>
                        Thanh toán sau khi nghiệm thu và bàn giao hệ thống
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#3087fe] pl-6">
                  <h4 className="font-semibold text-[#0f426c] mb-3">
                    Thanh toán trả góp (Installment)
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Áp dụng cho hợp đồng trên 100 triệu VNĐ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>
                        Thanh toán 50% trước, số còn lại chia thành 3-6 tháng
                      </span>
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
                  <h4 className="font-semibold text-[#0f426c] mb-4">
                    Ngân hàng Vietcombank
                  </h4>
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
                  <h4 className="font-semibold text-[#0f426c] mb-4">
                    Ngân hàng Techcombank
                  </h4>
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
                  <p className="text-sm text-yellow-800">
                    <strong>Lưu ý:</strong> Vui lòng ghi rõ nội dung chuyển
                    khoản: [Tên công ty] + [Mã hợp đồng] hoặc liên hệ hotline để
                    được hướng dẫn.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                3. Điều Kiện Thanh Toán
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">
                      Thời hạn thanh toán
                    </h4>
                    <p className="text-gray-600">
                      Thanh toán theo đúng thời hạn quy định trong hợp đồng.
                      Trường hợp thanh toán trễ hạn có thể bị tính phí phạt theo
                      quy định.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">
                      Hóa đơn VAT
                    </h4>
                    <p className="text-gray-600">
                      Xuất hóa đơn VAT trong vòng 7 ngày làm việc sau khi nhận
                      được thanh toán. Hóa đơn được gửi qua email hoặc bản cứng
                      theo yêu cầu.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#3087fe] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#0f426c] mb-1">
                      Bảo mật thanh toán
                    </h4>
                    <p className="text-gray-600">
                      Mọi thông tin thanh toán được bảo mật tuyệt đối. Sử dụng
                      các cổng thanh toán uy tín và an toàn.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 - Refund Policy */}
            <div className="bg-[#f4fbff] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#0f426c] mb-6">
                4. Chính Sách Hoàn Tiền
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    Hoàn tiền 100%
                  </h4>
                  <p className="text-gray-600">
                    Áp dụng khi hủy hợp đồng trong vòng 7 ngày sau khi ký và
                    chưa triển khai dịch vụ.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    Hoàn tiền một phần
                  </h4>
                  <p className="text-gray-600">
                    Trừ chi phí đã phát sinh thực tế (cài đặt, đào tạo, tùy
                    chỉnh) nếu hủy sau khi bắt đầu triển khai.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    Không hoàn tiền
                  </h4>
                  <p className="text-gray-600">
                    Sau khi nghiệm thu và bàn giao hệ thống, hoặc đã sử dụng
                    dịch vụ quá 30 ngày.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold text-[#0f426c] mb-4">
              Cần Hỗ Trợ Thanh Toán?
            </h2>
            <p className="text-gray-600 mb-8">
              Liên hệ với chúng tôi để được tư vấn phương thức thanh toán phù
              hợp nhất
            </p>
            <Link href="/contact">
              <Button className="bg-[#3087fe] hover:bg-[#0f426c] text-white">
                Liên hệ tư vấn
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
