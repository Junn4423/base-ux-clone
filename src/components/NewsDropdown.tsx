import {
  Newspaper,
  TrendingUp,
  Calendar,
  Video,
  BookOpen,
  Award,
  Megaphone,
  FileText,
  Lightbulb,
  LayoutGrid,
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
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent mb-2">
                  Tin Tức & Tài Nguyên
                </h2>
                <p className="text-sm text-gray-600">Cập nhật tin tức và kiến thức mới nhất</p>
              </div>

              {/* Grid 3 cột - Bố cục mới */}
              <div className="grid grid-cols-3 gap-4 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-purple-50">
                {/* Card 1: Tin công ty */}
                <a href="/under-construction" 
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Newspaper className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Tin công ty</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Cập nhật mới nhất từ SOF</p>
                </a>

                {/* Card 2: Xu hướng công nghệ */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Xu hướng công nghệ</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Digital transformation</p>
                </a>

                {/* Card 3: Sự kiện */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Sự kiện</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Webinar & hội thảo</p>
                </a>

                {/* Card 4: Giải thưởng */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-orange-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Giải thưởng</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Thành tựu & vinh danh</p>
                </a>

                {/* Card 5: Video hướng dẫn */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-red-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Video hướng dẫn</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Tutorials & demos</p>
                </a>

                {/* Card 6: Blog & Bài viết */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Blog & Bài viết</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Kiến thức quản trị</p>
                </a>

                {/* Card 7: Báo chí nói gì */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-yellow-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Báo chí nói gì</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Media coverage</p>
                </a>

                {/* Card 8: Case Studies */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Case Studies</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Câu chuyện khách hàng</p>
                </a>

                {/* Card 9: Insights */}
                <a href="/under-construction"
                   className="bg-white rounded-xl p-4 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-400 group cursor-pointer"
                   onClick={onClose}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-1 text-sm">Insights</h4>
                  <p className="text-xs text-gray-500 line-clamp-2">Phân tích & dự báo</p>
                </a>

                {/* Card 10: Xem tất cả - CTA */}
                <a href="/under-construction"
                   className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-4 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col items-center justify-center"
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
