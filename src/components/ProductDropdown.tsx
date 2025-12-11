import {
  Briefcase,
  Workflow,
  Settings,
  Users,
  DollarSign,
  Calendar,
  Target,
  Gift,
  User,
  Package,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  Building2,
  FileText,
  Wallet,
  Database,
  FileSignature,
  HardDrive,
  Lock,
  Grid3x3,
  MessageSquare,
  LayoutGrid,
  Award,
  Video,
  Mail,
  Headphones,
  ClipboardList,
  Clock,
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
            className="border border-gray-200 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#f8f9fb',
              height: '682px'
            }}
          >
            <div className="h-full p-5">
              <div className="grid grid-cols-[1fr_256px] gap-5 h-full">
                {/* Left side - Product sections */}
                <div className="flex flex-col overflow-y-auto pr-2">
                  {/* Row 1: SOF WORK+ and SOF INFO+ */}
                  <div className="grid grid-cols-2 gap-x-6">
                    {/* SOF WORK+ */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-blue-500">
                        <h3 className="text-blue-600 font-bold text-xs tracking-wide">SOF WORK+</h3>
                        <button className="text-xs text-gray-400 hover:text-blue-500 flex items-center gap-1">
                          Tìm hiểu thêm <span>→</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-orange-500 font-bold text-sm">W</span>
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Wework</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý công việc và dự án</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <ClipboardList className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Request</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý phê duyệt</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Workflow className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Workflow</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý và tự động hoá quy trình</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <LayoutGrid className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF XSpace</div>
                            <div className="text-xs text-gray-500 truncate">Không gian số</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Headphones className="w-4 h-4 text-purple-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Service</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý dịch vụ nội bộ</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* SOF INFO+ */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-green-500">
                        <h3 className="text-green-600 font-bold text-xs tracking-wide">SOF INFO+</h3>
                        <button className="text-xs text-gray-400 hover:text-blue-500 flex items-center gap-1">
                          Tìm hiểu thêm <span>→</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                            <Video className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Meeting</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý cuộc họp</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Office</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý & ban hành văn bản</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-purple-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Inside</div>
                            <div className="text-xs text-gray-500 truncate">Mạng xã hội nội bộ</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Message</div>
                            <div className="text-xs text-gray-500 truncate">Chat & Trao đổi thông tin nội bộ</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <LayoutGrid className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Square</div>
                            <div className="text-xs text-gray-500 truncate">Quản trị tri thức nội bộ</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: SOF HRM+ and SOF CRM */}
                  <div className="grid grid-cols-2 gap-x-6 mt-3">
                    {/* SOF HRM+ */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-blue-500">
                        <h3 className="text-blue-600 font-bold text-xs tracking-wide">SOF HRM+</h3>
                        <button className="text-xs text-gray-400 hover:text-blue-500 flex items-center gap-1">
                          Tìm hiểu thêm <span>→</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF E-Hiring</div>
                            <div className="text-xs text-gray-500 truncate">Quản trị tuyển dụng</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF HRM</div>
                            <div className="text-xs text-gray-500 truncate">Quản trị & phát triển nhân sự</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Payroll</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý & tính lương tự động</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Clock className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Schedule</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý & tính toán ngày công</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Award className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Review</div>
                            <div className="text-xs text-gray-500 truncate">Đánh giá nhân sự</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Target className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Goal</div>
                            <div className="text-xs text-gray-500 truncate">Quản trị mục tiêu</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Me</div>
                            <div className="text-xs text-gray-500 truncate">Cổng thông tin cho nhân viên</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Gift className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Reward</div>
                            <div className="text-xs text-gray-500 truncate">Ghi nhận thành tích & vinh danh...</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* SOF CRM */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-green-500">
                        <h3 className="text-green-600 font-bold text-xs tracking-wide">SOF CRM</h3>
                        <button className="text-xs text-gray-400 hover:text-blue-500 flex items-center gap-1">
                          Tìm hiểu thêm <span>→</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Settings className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">Service</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý dịch vụ</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">Sales</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý bán hàng</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <BarChart3 className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">Marketing</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý Marketing</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                            <Package className="w-4 h-4 text-yellow-600" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">Product</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý sản phẩm</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: SOF FINANCE+ and SOF PLATFORM+ */}
                  <div className="grid grid-cols-2 gap-x-6 mt-3 pt-3 border-t border-gray-200">
                    {/* SOF FINANCE+ */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-blue-500">
                        <h3 className="text-blue-600 font-bold text-xs tracking-wide">SOF FINANCE+</h3>
                        <button className="text-xs text-gray-400 hover:text-blue-500 flex items-center gap-1">
                          Tìm hiểu thêm <span>→</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Package className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Asset</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý tài sản doanh nghiệp</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <Wallet className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Finance</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý tài chính</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Expense</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý chi phí</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <DollarSign className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Income</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý doanh thu</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Database className="w-4 h-4 text-green-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Bankfeeds</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý đối soát ngân hàng</div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* SOF PLATFORM+ */}
                    <div>
                      <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-blue-500">
                        <h3 className="text-blue-600 font-bold text-xs tracking-wide">SOF PLATFORM+</h3>
                        <span className="text-[10px] text-gray-400">Các ứng dụng thuộc nền tảng SOF</span>
                      </div>
                      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <FileSignature className="w-4 h-4 text-blue-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Sign</div>
                            <div className="text-xs text-gray-500 truncate">Chữ ký điện tử</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center flex-shrink-0">
                            <Grid3x3 className="w-4 h-4 text-pink-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Table</div>
                            <div className="text-xs text-gray-500 truncate">Hợp nhất dữ liệu</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <HardDrive className="w-4 h-4 text-orange-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Drive</div>
                            <div className="text-xs text-gray-500 truncate">Lưu trữ đám mây</div>
                          </div>
                        </a>
                        <a href="#" className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white transition-colors group" onClick={(e) => { e.preventDefault(); onClose(); }}>
                          <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <Lock className="w-4 h-4 text-orange-500" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-gray-900">SOF Account</div>
                            <div className="text-xs text-gray-500 truncate">Quản lý tài khoản</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Info panel */}
                <div 
                  className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-5 text-white relative overflow-hidden flex flex-col"
                  style={{
                    width: '256px',
                    height: '357px'
                  }}
                >
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
                      Khám phá
                    </div>
                    <h3 className="text-xl font-bold leading-tight">NỀN TẢNG SOF</h3>
                    <p className="text-sm text-blue-100 leading-relaxed">
                      SOF đồng hành trong hành trình cùng 10.000+ doanh nghiệp Việt chuyển mình
                    </p>
                  </div>
                  
                  <button className="text-sm text-green-300 hover:text-white flex items-center gap-1 mt-3 font-medium">
                    Xem thêm <span>→</span>
                  </button>

                  {/* Decorative illustration */}
                  <div className="flex-1 flex items-center justify-center relative mt-4">
                    <div className="relative w-40 h-40">
                      {/* Center circle with grid icon */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <LayoutGrid className="w-10 h-10 text-white" />
                      </div>
                      {/* Decorative circles */}
                      <div className="absolute top-0 left-6 w-8 h-8 bg-white/15 rounded-full" />
                      <div className="absolute top-4 right-2 w-6 h-6 bg-white/20 rounded-full" />
                      <div className="absolute bottom-4 left-2 w-6 h-6 bg-white/15 rounded-full" />
                      <div className="absolute bottom-8 right-4 w-8 h-8 bg-white/20 rounded-full" />
                      <div className="absolute top-1/2 right-0 w-4 h-4 bg-white/25 rounded-full" />
                      <div className="absolute top-1/3 left-0 w-4 h-4 bg-white/25 rounded-full" />
                      {/* Small dots */}
                      <div className="absolute top-8 left-1/2 w-2 h-2 bg-white/30 rounded-full" />
                      <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-white/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
