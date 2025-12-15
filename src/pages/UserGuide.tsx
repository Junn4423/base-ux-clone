import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  PlayCircle, 
  FileText, 
  Download, 
  Search,
  ChevronRight,
  Laptop,
  Database,
  Users,
  Settings
} from "lucide-react";

export default function UserGuide() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#f4fbff] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0f426c] mb-6">
              Hướng Dẫn Sử Dụng
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tài liệu hướng dẫn chi tiết giúp bạn khai thác tối đa sức mạnh của phần mềm SOF
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-[#3087fe] hover:bg-[#0f426c] text-white gap-2">
                <Search className="w-4 h-4" />
                Tìm kiếm hướng dẫn
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                Tải tài liệu PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-8 text-center">
              Bắt Đầu Nhanh
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Cài Đặt</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Hướng dẫn cài đặt và cấu hình hệ thống ban đầu
                </p>
                <a href="#installation" className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1">
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Dữ Liệu</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Nhập dữ liệu ban đầu và quản lý cơ sở dữ liệu
                </p>
                <a href="#data" className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1">
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Người Dùng</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tạo tài khoản và phân quyền người dùng
                </p>
                <a href="#users" className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1">
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">Cấu Hình</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tùy chỉnh hệ thống theo nhu cầu doanh nghiệp
                </p>
                <a href="#config" className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1">
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-12 text-center">
              Danh Mục Hướng Dẫn
            </h2>

            {/* Installation Guide */}
            <div id="installation" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">Cài Đặt Hệ Thống</h3>
                  <p className="text-gray-600">Hướng dẫn chi tiết về quá trình cài đặt và triển khai</p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">1. Yêu cầu hệ thống</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Windows Server 2012 trở lên hoặc Windows 10/11</li>
                    <li>• Bộ xử lý: Intel Core i5 hoặc tương đương</li>
                    <li>• RAM: Tối thiểu 4GB (khuyến nghị 8GB)</li>
                    <li>• Ổ cứng: Tối thiểu 10GB dung lượng trống</li>
                    <li>• SQL Server 2014 trở lên</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">2. Các bước cài đặt</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Bước 1: Tải file cài đặt từ link được cung cấp</li>
                    <li>• Bước 2: Chạy file Setup.exe với quyền Administrator</li>
                    <li>• Bước 3: Làm theo hướng dẫn trên màn hình</li>
                    <li>• Bước 4: Cấu hình kết nối cơ sở dữ liệu</li>
                    <li>• Bước 5: Khởi động lần đầu và kích hoạt bản quyền</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">3. Kích hoạt bản quyền</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Nhập mã license được cung cấp</li>
                    <li>• Kết nối internet để xác thực</li>
                    <li>• Hoàn tất quá trình kích hoạt</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Management Guide */}
            <div id="data" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">Quản Lý Dữ Liệu</h3>
                  <p className="text-gray-600">Hướng dẫn nhập và quản lý dữ liệu ban đầu</p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">1. Nhập dữ liệu danh mục</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Danh mục khách hàng, nhà cung cấp</li>
                    <li>• Danh mục hàng hóa, vật tư</li>
                    <li>• Danh mục nhân viên, phòng ban</li>
                    <li>• Sử dụng tính năng import từ Excel để nhập hàng loạt</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">2. Nhập số dư đầu kỳ</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Số dư tiền mặt, ngân hàng</li>
                    <li>• Số dư công nợ phải thu, phải trả</li>
                    <li>• Tồn kho đầu kỳ</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">3. Sao lưu và phục hồi dữ liệu</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Thiết lập lịch sao lưu tự động hàng ngày</li>
                    <li>• Sao lưu thủ công trước khi thực hiện thay đổi lớn</li>
                    <li>• Hướng dẫn phục hồi dữ liệu từ bản sao lưu</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Management Guide */}
            <div id="users" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">Quản Lý Người Dùng</h3>
                  <p className="text-gray-600">Tạo tài khoản và phân quyền truy cập</p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">1. Tạo tài khoản người dùng</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Truy cập menu Hệ thống → Quản lý người dùng</li>
                    <li>• Nhấn nút "Thêm người dùng mới"</li>
                    <li>• Nhập thông tin: Tên đăng nhập, mật khẩu, email</li>
                    <li>• Gán nhóm quyền phù hợp</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">2. Phân quyền chi tiết</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Administrator: Toàn quyền trên hệ thống</li>
                    <li>• Kế toán: Quyền xem và chỉnh sửa chứng từ kế toán</li>
                    <li>• Thủ kho: Quyền quản lý nhập xuất tồn</li>
                    <li>• Nhân viên: Quyền xem thông tin cơ bản</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">3. Bảo mật tài khoản</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Đổi mật khẩu định kỳ 3-6 tháng</li>
                    <li>• Sử dụng mật khẩu mạnh (ít nhất 8 ký tự)</li>
                    <li>• Không chia sẻ tài khoản cho nhiều người</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Configuration Guide */}
            <div id="config" className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">Cấu Hình Hệ Thống</h3>
                  <p className="text-gray-600">Tùy chỉnh theo nhu cầu doanh nghiệp</p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">1. Cấu hình thông tin công ty</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Tên công ty, địa chỉ, số điện thoại</li>
                    <li>• Logo công ty trên các báo cáo</li>
                    <li>• Mã số thuế và thông tin pháp lý</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">2. Cấu hình kỳ kế toán</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Xác định kỳ kế toán (tháng/quý/năm)</li>
                    <li>• Ngày bắt đầu kỳ kế toán</li>
                    <li>• Khóa sổ định kỳ</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">3. Tùy chỉnh biểu mẫu in ấn</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Chỉnh sửa mẫu hóa đơn, phiếu thu chi</li>
                    <li>• Cấu hình máy in và khổ giấy</li>
                    <li>• Thiết lập in tự động</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-8 text-center">
              Video Hướng Dẫn
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Cài đặt phần mềm", duration: "10:30" },
                { title: "Nhập dữ liệu ban đầu", duration: "15:45" },
                { title: "Lập hóa đơn bán hàng", duration: "8:20" },
                { title: "Quản lý kho hàng", duration: "12:15" },
                { title: "Báo cáo tài chính", duration: "18:00" },
                { title: "Phân quyền người dùng", duration: "7:30" }
              ].map((video, index) => (
                <div key={index} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-[#3087fe] to-[#0f426c] flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#0f426c] mb-1">{video.title}</h4>
                    <p className="text-sm text-gray-500">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0f426c] mb-8 text-center">
              Tài Liệu Tham Khảo
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">Tài liệu ERP</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Hướng dẫn sử dụng chi tiết phần mềm ERP
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">Tài liệu HRM</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Hướng dẫn quản lý nhân sự và chấm công
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">API Documentation</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Tài liệu tích hợp API cho developers
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Book className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">Best Practices</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Những phương pháp hay nhất khi sử dụng SOF
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">FAQs</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Câu hỏi thường gặp và giải đáp
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <FileText className="w-8 h-8 text-[#3087fe] mb-4" />
                <h4 className="font-semibold text-[#0f426c] mb-2">Release Notes</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Ghi chú phiên bản và tính năng mới
                </p>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="w-4 h-4" />
                  Tải xuống (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support CTA */}
      <div className="py-16 bg-gradient-to-br from-[#0f426c] to-[#3087fe]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Cần Hỗ Trợ Thêm?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ hỗ trợ kỹ thuật của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-white text-[#0f426c] hover:bg-gray-100">
                  Liên hệ hỗ trợ
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" className="border-white text-black hover:bg-white/10">
                  Đặt lịch đào tạo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
