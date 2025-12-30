import type { Metadata } from "next";
import Link from "next/link";
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
  Settings,
} from "lucide-react";

// SEO Metadata for User Guide page
export const metadata: Metadata = {
  title: "Hướng Dẫn Sử Dụng",
  description:
    "Tài liệu hướng dẫn chi tiết giúp bạn khai thác tối đa sức mạnh của phần mềm SOF. Hướng dẫn cài đặt, quản lý dữ liệu, phân quyền người dùng và cấu hình hệ thống.",
  keywords: [
    "hướng dẫn sử dụng SOF",
    "tài liệu phần mềm",
    "cài đặt phần mềm",
    "hướng dẫn ERP",
    "video tutorial",
  ],
  openGraph: {
    title: "Hướng Dẫn Sử Dụng | SOF.COM.VN",
    description:
      "Tài liệu hướng dẫn chi tiết giúp bạn khai thác tối đa sức mạnh của phần mềm SOF.",
    url: "https://sof.com.vn/user-guide",
  },
  alternates: {
    canonical: "https://sof.com.vn/user-guide",
  },
};

// Server Component - Good for SEO
export default function UserGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#f4fbff] to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0f426c] mb-6">
              Hướng Dẫn Sử Dụng
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Tài liệu hướng dẫn chi tiết giúp bạn khai thác tối đa sức mạnh của
              phần mềm SOF
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
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Cài Đặt
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Hướng dẫn cài đặt và cấu hình hệ thống ban đầu
                </p>
                <Link
                  href="#installation"
                  className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1"
                >
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Dữ Liệu
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Nhập dữ liệu ban đầu và quản lý cơ sở dữ liệu
                </p>
                <Link
                  href="#data"
                  className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1"
                >
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Người Dùng
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tạo tài khoản và phân quyền người dùng
                </p>
                <Link
                  href="#users"
                  className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1"
                >
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="bg-[#f4fbff] p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                  Cấu Hình
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tùy chỉnh hệ thống theo nhu cầu doanh nghiệp
                </p>
                <Link
                  href="#config"
                  className="text-[#3087fe] hover:underline text-sm font-medium flex items-center gap-1"
                >
                  Xem hướng dẫn <ChevronRight className="w-4 h-4" />
                </Link>
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
            <div
              id="installation"
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">
                    Cài Đặt Hệ Thống
                  </h3>
                  <p className="text-gray-600">
                    Hướng dẫn chi tiết về quá trình cài đặt và triển khai
                  </p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    1. Yêu cầu hệ thống
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Windows Server 2012 trở lên hoặc Windows 10/11</li>
                    <li>• Bộ xử lý: Intel Core i5 hoặc tương đương</li>
                    <li>• RAM: Tối thiểu 4GB (khuyến nghị 8GB)</li>
                    <li>• Ổ cứng: Tối thiểu 10GB dung lượng trống</li>
                    <li>• SQL Server 2014 trở lên</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    2. Các bước cài đặt
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Bước 1: Tải file cài đặt từ link được cung cấp</li>
                    <li>
                      • Bước 2: Chạy file Setup.exe với quyền Administrator
                    </li>
                    <li>• Bước 3: Làm theo hướng dẫn trên màn hình</li>
                    <li>• Bước 4: Cấu hình kết nối cơ sở dữ liệu</li>
                    <li>
                      • Bước 5: Khởi động lần đầu và kích hoạt bản quyền
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    3. Kích hoạt bản quyền
                  </h4>
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
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">
                    Quản Lý Dữ Liệu
                  </h3>
                  <p className="text-gray-600">
                    Hướng dẫn nhập và quản lý dữ liệu ban đầu
                  </p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    1. Nhập dữ liệu danh mục
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Danh mục khách hàng, nhà cung cấp</li>
                    <li>• Danh mục hàng hóa, vật tư</li>
                    <li>• Danh mục nhân viên, phòng ban</li>
                    <li>
                      • Sử dụng tính năng import từ Excel để nhập hàng loạt
                    </li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    2. Nhập số dư đầu kỳ
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Số dư tiền mặt, ngân hàng</li>
                    <li>• Số dư công nợ phải thu, phải trả</li>
                    <li>• Tồn kho đầu kỳ</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    3. Sao lưu và phục hồi dữ liệu
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Thiết lập lịch sao lưu tự động hàng ngày</li>
                    <li>
                      • Sao lưu thủ công trước khi thực hiện thay đổi lớn
                    </li>
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
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">
                    Quản Lý Người Dùng
                  </h3>
                  <p className="text-gray-600">
                    Hướng dẫn tạo tài khoản và phân quyền
                  </p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    1. Tạo tài khoản người dùng
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Thêm thông tin nhân viên vào hệ thống</li>
                    <li>• Tạo tài khoản đăng nhập</li>
                    <li>• Thiết lập mật khẩu ban đầu</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    2. Phân quyền theo vai trò
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Admin: Toàn quyền quản trị hệ thống</li>
                    <li>• Manager: Quản lý và xem báo cáo</li>
                    <li>• Staff: Thực hiện nghiệp vụ hàng ngày</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Configuration Guide */}
            <div id="config" className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#3087fe] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f426c] mb-2">
                    Cấu Hình Hệ Thống
                  </h3>
                  <p className="text-gray-600">
                    Tùy chỉnh theo nhu cầu doanh nghiệp
                  </p>
                </div>
              </div>
              <div className="space-y-4 pl-16">
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    1. Cấu hình thông tin công ty
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Cập nhật thông tin doanh nghiệp</li>
                    <li>• Logo và mẫu in ấn</li>
                    <li>• Thiết lập chi nhánh/cửa hàng</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#3087fe] pl-4">
                  <h4 className="font-semibold text-[#0f426c] mb-2">
                    2. Cấu hình nghiệp vụ
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Quy tắc tính giá vốn</li>
                    <li>• Cấu hình thuế VAT</li>
                    <li>• Thiết lập đơn vị tính</li>
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0f426c] mb-4">
                Video Hướng Dẫn
              </h2>
              <p className="text-gray-600">
                Xem video hướng dẫn chi tiết từng tính năng
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Cài đặt phần mềm",
                  duration: "10:25",
                  views: "1.2K",
                },
                {
                  title: "Nhập dữ liệu ban đầu",
                  duration: "15:30",
                  views: "856",
                },
                {
                  title: "Quản lý bán hàng",
                  duration: "20:15",
                  views: "2.1K",
                },
                { title: "Quản lý kho hàng", duration: "18:45", views: "1.5K" },
                { title: "Báo cáo doanh thu", duration: "12:10", views: "980" },
                { title: "Phân quyền người dùng", duration: "8:50", views: "650" },
              ].map((video, index) => (
                <div
                  key={index}
                  className="bg-[#f4fbff] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-[#0f426c] flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-[#0f426c] mb-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.duration}</span>
                      <span>{video.views} lượt xem</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Support CTA */}
      <div className="py-16 bg-gradient-to-r from-[#3087fe] to-[#0f426c]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Cần Hỗ Trợ Thêm?</h2>
            <p className="text-lg mb-8 opacity-90">
              Đội ngũ hỗ trợ kỹ thuật sẵn sàng giúp đỡ bạn 24/7
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button className="bg-white text-[#3087fe] hover:bg-gray-100 gap-2">
                  Liên hệ hỗ trợ
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 gap-2"
              >
                <FileText className="w-4 h-4" />
                Tải tài liệu PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
