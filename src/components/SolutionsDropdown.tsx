import {
  Rocket,
  Building2,
  Factory,
  DollarSign,
  Tag,
  CreditCard,
  Package,
  Award,
  TrendingUp,
  LayoutGrid,
} from "lucide-react";

interface SolutionsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SolutionsDropdown = ({ isOpen, onClose }: SolutionsDropdownProps) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="fixed left-0 right-0 z-50 mt-0 top-16 lg:top-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div 
            className="border border-[#a7d5ec] rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#f4fbff',
              maxHeight: '600px'
            }}
          >
            {/* GIAO DIỆN MỚI - BỐ CỤC CARDS */}
            <div className="p-8">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                  Giải Pháp & Bảng Giá
                </h2>
                <p className="text-sm text-gray-600">Lựa chọn gói dịch vụ phù hợp với quy mô doanh nghiệp</p>
              </div>

              {/* Grid 3 cột - Bố cục mới */}
              <div className="grid grid-cols-3 gap-4 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-green-300 scrollbar-track-green-50">
                {/* Card 1: Startup & SME */}
                <a href="/under-construction" 
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Startup & SME</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Giải pháp tối ưu cho doanh nghiệp nhỏ và vừa</p>
                </a>

                {/* Card 2: Doanh nghiệp vừa */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Doanh nghiệp vừa</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Cho DN từ 100-500 nhân viên</p>
                </a>

                {/* Card 3: Doanh nghiệp lớn */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Doanh nghiệp lớn</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Giải pháp cho DN 500+ nhân viên</p>
                </a>

                {/* Card 4: Gói cơ bản */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Tag className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Gói cơ bản</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Phù hợp cho startup mới khởi nghiệp</p>
                </a>

                {/* Card 5: Gói chuyên nghiệp */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Gói chuyên nghiệp</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Dành cho doanh nghiệp vừa và nhỏ</p>
                </a>

                {/* Card 6: Gói doanh nghiệp */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Gói doanh nghiệp</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Tùy chỉnh theo nhu cầu riêng</p>
                </a>

                {/* Card 7: Bảng giá chi tiết */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Bảng giá chi tiết</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">So sánh các gói và tính năng</p>
                </a>

                {/* Card 8: Ưu đãi đặc biệt */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Ưu đãi đặc biệt</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Khuyến mãi cho khách hàng mới</p>
                </a>

                {/* Card 9: ROI & Hiệu quả */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">ROI & Hiệu quả</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Tính toán lợi nhuận đầu tư</p>
                </a>

                {/* Card 10: Xem tất cả - CTA */}
                <a href="/under-construction"
                   className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col items-center justify-center"
                   onClick={onClose}>
                  <LayoutGrid className="w-8 h-8 text-white mb-2" />
                  <h4 className="font-bold text-white text-sm text-center">Xem tất cả</h4>
                  <p className="text-xs text-white/80 text-center mt-1">→</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
