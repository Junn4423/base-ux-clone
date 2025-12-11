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
            className="border border-gray-200 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#f8f9fb',
              maxHeight: '500px'
            }}
          >
            <div className="p-8">
              <div className="grid grid-cols-[1fr_280px] gap-8">
                {/* Left side - Industries */}
                <div>
                  <div className="mb-4 pb-2 border-b-2 border-blue-500">
                    <h3 className="text-blue-600 font-bold text-sm tracking-wide">NGÀNH NGHỀ ÁP DỤNG</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-x-6 gap-y-3">
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Bán lẻ</div>
                        <div className="text-xs text-gray-500">Retail</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Factory className="w-5 h-5 text-orange-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Sản xuất</div>
                        <div className="text-xs text-gray-500">Manufacturing</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Giáo dục</div>
                        <div className="text-xs text-gray-500">Education</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-5 h-5 text-red-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Y tế</div>
                        <div className="text-xs text-gray-500">Healthcare</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 text-purple-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Bất động sản</div>
                        <div className="text-xs text-gray-500">Real Estate</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Utensils className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">F&B</div>
                        <div className="text-xs text-gray-500">Food & Beverage</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Landmark className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Tài chính</div>
                        <div className="text-xs text-gray-500">Finance</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <Plane className="w-5 h-5 text-cyan-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Du lịch</div>
                        <div className="text-xs text-gray-500">Travel</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-5 h-5 text-green-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Logistics</div>
                        <div className="text-xs text-gray-500">Vận tải</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                        <Shirt className="w-5 h-5 text-pink-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Thời trang</div>
                        <div className="text-xs text-gray-500">Fashion</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                        <Zap className="w-5 h-5 text-yellow-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Công nghệ</div>
                        <div className="text-xs text-gray-500">Technology</div>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                      <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Home className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-gray-900">Dịch vụ</div>
                        <div className="text-xs text-gray-500">Services</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Right side - CTA panel */}
                <div 
                  className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between"
                  style={{ height: '360px' }}
                >
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      Case Study
                    </div>
                    <h3 className="text-xl font-bold leading-tight">KHÁCH HÀNG THÀNH CÔNG</h3>
                    <p className="text-sm text-orange-100 leading-relaxed">
                      Khám phá cách SOF giúp doanh nghiệp tối ưu hóa quy trình và tăng trưởng bền vững
                    </p>
                  </div>
                  
                  <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
                    Xem case study →
                  </button>

                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute bottom-12 right-8 w-16 h-16 bg-white/10 rounded-full" />
                  <div className="absolute top-1/2 right-0 w-10 h-10 bg-white/15 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
