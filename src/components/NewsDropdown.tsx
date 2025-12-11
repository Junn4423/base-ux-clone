import {
  Newspaper,
  TrendingUp,
  Calendar,
  Video,
  Podcast,
  BookOpen,
  Award,
  Megaphone,
} from "lucide-react";

interface NewsDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsDropdown = ({ isOpen, onClose }: NewsDropdownProps) => {
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
                {/* Left side - News categories */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  {/* Column 1 */}
                  <div>
                    <div className="mb-4 pb-2 border-b-2 border-blue-500">
                      <h3 className="text-blue-600 font-bold text-sm tracking-wide">TIN TỨC & SỰ KIỆN</h3>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                          <Newspaper className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Tin công ty</div>
                          <div className="text-xs text-gray-500">Cập nhật mới nhất từ SOF</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-5 h-5 text-green-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Xu hướng công nghệ</div>
                          <div className="text-xs text-gray-500">Digital transformation</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-5 h-5 text-purple-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Sự kiện</div>
                          <div className="text-xs text-gray-500">Webinar & hội thảo</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <Award className="w-5 h-5 text-orange-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Giải thưởng</div>
                          <div className="text-xs text-gray-500">Thành tựu & vinh danh</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <div className="mb-4 pb-2 border-b-2 border-green-500">
                      <h3 className="text-green-600 font-bold text-sm tracking-wide">TÀI NGUYÊN HỌC TẬP</h3>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                          <Video className="w-5 h-5 text-red-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Video hướng dẫn</div>
                          <div className="text-xs text-gray-500">Tutorials & demos</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-5 h-5 text-indigo-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Blog & Bài viết</div>
                          <div className="text-xs text-gray-500">Kiến thức quản trị</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                          <Podcast className="w-5 h-5 text-cyan-500" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Podcast</div>
                          <div className="text-xs text-gray-500">Chia sẻ từ chuyên gia</div>
                        </div>
                      </a>
                      <a href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                        <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                          <Megaphone className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-gray-900">Báo chí nói gì</div>
                          <div className="text-xs text-gray-500">Media coverage</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right side - Latest news panel */}
                <div 
                  className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between"
                  style={{ height: '320px' }}
                >
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      Mới nhất
                    </div>
                    <h3 className="text-xl font-bold leading-tight">TIN NỔI BẬT</h3>
                    <p className="text-sm text-purple-100 leading-relaxed">
                      SOF vừa ra mắt tính năng AI Assistant giúp tự động hóa quy trình làm việc
                    </p>
                    <div className="text-xs text-purple-200 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>10/12/2025</span>
                    </div>
                  </div>
                  
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                    Đọc thêm →
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
