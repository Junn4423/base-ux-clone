import {
  ShoppingBag,
  Factory,
  GraduationCap,
  Heart,
  Building2,
  Utensils,
  Landmark,
  Plane,
  Truck,
  Home,
  Shirt,
  Zap,
  LayoutGrid,
} from "lucide-react";

interface IndustriesDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IndustriesDropdown = ({ isOpen, onClose }: IndustriesDropdownProps) => {
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-2">
                  Lĩnh Vực Áp Dụng
                </h2>
                <p className="text-sm text-gray-600">Giải pháp phần mềm cho mọi ngành nghề</p>
              </div>

              {/* Grid 4 cột - Bố cục mới */}
              <div className="grid grid-cols-4 gap-4 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-50">
                {/* Card 1: Bán lẻ */}
                <a href="/under-construction" 
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Bán lẻ</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Retail & POS</p>
                </a>

                {/* Card 2: Sản xuất */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Factory className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Sản xuất</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Manufacturing</p>
                </a>

                {/* Card 3: Giáo dục */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Giáo dục</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Education</p>
                </a>

                {/* Card 4: Y tế */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Y tế</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Healthcare</p>
                </a>

                {/* Card 5: Bất động sản */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Bất động sản</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Real Estate</p>
                </a>

                {/* Card 6: F&B */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Utensils className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">F&B</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Food & Beverage</p>
                </a>

                {/* Card 7: Tài chính */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Tài chính</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Finance & Banking</p>
                </a>

                {/* Card 8: Du lịch */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Plane className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Du lịch</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Travel & Tourism</p>
                </a>

                {/* Card 9: Logistics */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Logistics</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Vận tải & Giao nhận</p>
                </a>

                {/* Card 10: Thời trang */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-pink-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Thời trang</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Fashion & Retail</p>
                </a>

                {/* Card 11: Công nghệ */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Công nghệ</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Technology & IT</p>
                </a>

                {/* Card 12: Dịch vụ */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Dịch vụ</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Professional Services</p>
                </a>

                {/* Card 13: Xem tất cả - CTA */}
                <a href="/under-construction"
                   className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col items-center justify-center"
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
