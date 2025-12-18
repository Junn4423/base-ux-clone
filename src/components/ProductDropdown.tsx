import {
  ShoppingCart,
  Store,
  Package,
  Coffee,
  Utensils,
  Hotel,
  Users,
  Truck,
  Warehouse,
  Car,
  Building2,
  Pill,
  MessageSquare,
  Lock,
  LayoutGrid,
} from "lucide-react";

interface ProductDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDropdown = ({ isOpen, onClose }: ProductDropdownProps) => {
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  Giải Pháp Phần Mềm SOF
                </h2>
                <p className="text-sm text-gray-600">Chọn phần mềm phù hợp với ngành nghề của bạn</p>
              </div>

              {/* Grid 4 cột - Bố cục mới */}
              <div className="grid grid-cols-4 gap-4 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
                {/* Card 1: Bán hàng */}
                <a href="/phanmembanhang" 
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Bán hàng</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Quản lý bán hàng chuyên nghiệp</p>
                </a>

                {/* Card 2: Siêu thị */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Store className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Siêu thị</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Giải pháp siêu thị mini</p>
                </a>

                {/* Card 3: Tạp hóa */}
                <a href="/phanmembanhang"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Tạp hóa</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Dành cho cửa hàng nhỏ</p>
                </a>

                {/* Card 4: Cafe */}
                <a href="/phanmembanhang"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Coffee className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Quán Cafe</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">POS, order, kho nguyên liệu</p>
                </a>

                {/* Card 5: Nhà hàng */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Nhà hàng</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Quản lý bàn, bếp, bar</p>
                </a>

                 {/* Card 6: Khách sạn */}
                 <a href="/sof_khachsan"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-violet-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Hotel className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Khách sạn</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Đặt phòng, check-in/out</p>
                </a>

                {/* Card 7: Thiết kế web */}
                <a href="/sof_thietkeweb"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Thiết kế web</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Website chuẩn UX/UI, tối ưu SEO</p>
                </a>

                {/* Card 8: Vận tải */}
                <a href="/sof_vantai"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Vận tải</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Đội xe, lộ trình</p>
                </a>

                {/* Card 9: Kho Pallet */}
                 <a href="/sof_khopallet"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Warehouse className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Kho Pallet</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Kho hàng chuyên nghiệp</p>
                </a>

                {/* Card 10: Bãi gửi xe */}
                 <a href="/sof_quanligiuxe"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Bãi gửi xe</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Bãi xe thông minh</p>
                </a>

                {/* Card 11: Nhân sự */}
                 <a href="/sof_nhansu"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Nhân sự</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Chấm công, tính lương</p>
                </a>

                {/* Card 12: ERP */}
                 <a href="/sof_erp"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">ERP</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Quản trị tổng thể</p>
                </a>

                {/* Card 13: Công ty dược */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Công ty dược</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Chuyên ngành dược phẩm</p>
                </a>

                {/* Card 14: Chat bảo mật */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-slate-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Chat bảo mật</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Nhắn tin an toàn</p>
                </a>

                {/* Card 15: Chữ ký số */}
                 <a href="/sof_chukyso"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-gray-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Chữ ký số</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Ký số chuyên nghiệp</p>
                </a>

                {/* Card 16: Xem tất cả - CTA */}
                <a href="http://sof.vn" target="_blank" rel="noopener noreferrer"
                   className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col items-center justify-center"
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
