import {
  Rocket,
  Building2,
  ShoppingBag,
  Users,
  Briefcase,
  Factory,
  GraduationCap,
  Heart,
  DollarSign,
  Tag,
  CreditCard,
  Package,
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
            className="border border-gray-200 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#f8f9fb',
              maxHeight: '500px'
            }}
          >
            <div className="p-8">
              <div className="grid grid-cols-[1fr_280px] gap-8">
                {/* Left side - Solutions */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {/* Column 1 - Giải pháp theo ngành */}
                  <div>
                    <div className="mb-4 pb-2 border-b-2 border-blue-500">
                      <h3 className="text-blue-600 font-bold text-sm tracking-wide">GIẢI PHÁP THEO QUY MÔ</h3>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Rocket className="w-5 h-5 text-purple-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Startup & SME</div>
                          <div className="text-xs text-gray-500">Giải pháp cho doanh nghiệp nhỏ</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Building2 className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Doanh nghiệp vừa</div>
                          <div className="text-xs text-gray-500">100-500 nhân viên</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Factory className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Doanh nghiệp lớn</div>
                          <div className="text-xs text-gray-500">500+ nhân viên</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 2 - Bảng giá */}
                  <div>
                    <div className="mb-4 pb-2 border-b-2 border-green-500">
                      <h3 className="text-green-600 font-bold text-sm tracking-wide">BẢNG GIÁ & GÓI DỊCH VỤ</h3>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                          <Tag className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Gói cơ bản</div>
                          <div className="text-xs text-gray-500">Phù hợp cho startup</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Package className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Gói chuyên nghiệp</div>
                          <div className="text-xs text-gray-500">Dành cho DN vừa</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <CreditCard className="w-5 h-5 text-purple-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Gói doanh nghiệp</div>
                          <div className="text-xs text-gray-500">Tùy chỉnh theo nhu cầu</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Xem bảng giá chi tiết</div>
                          <div className="text-xs text-gray-500">So sánh các gói</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side - CTA panel */}
                <div 
                  className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between"
                  style={{ height: '320px' }}
                >
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      Ưu đãi đặc biệt
                    </div>
                    <h3 className="text-xl font-bold leading-tight">TƯ VẤN MIỄN PHÍ</h3>
                    <p className="text-sm text-green-100 leading-relaxed">
                      Nhận tư vấn 1-1 từ chuyên gia về giải pháp phù hợp cho doanh nghiệp
                    </p>
                  </div>
                  
                  <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    Đăng ký ngay →
                  </button>

                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full" />
                  <div className="absolute bottom-8 right-12 w-12 h-12 bg-white/10 rounded-full" />
                  <div className="absolute top-1/2 right-2 w-8 h-8 bg-white/15 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
