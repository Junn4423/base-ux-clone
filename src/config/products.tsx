import {
  Monitor,
  LayoutGrid,
  DollarSign,
  Package,
  BarChart3,
  Users,
  Building2,
  Hotel,
  Truck,
  Car,
  FileSignature,
  Globe,
  Settings,
  Database,
  Shield,
  Clock,
  Zap,
  CheckCircle,
} from "lucide-react";
import React from "react";

// Types
export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  badge: string;
  heroImage: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  stats: {
    number: string;
    label: string;
  }[];
  processes: {
    title: string;
    items: string[];
  }[];
  testimonials: {
    content: string;
    authorName: string;
    authorRole: string;
  }[];
  pricingPlans: {
    name: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    ctaLink: string;
    isFeatured?: boolean;
    badge?: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
  };
  isLoading?: boolean;
}

// Default/Loading state data
const defaultLoadingData: Omit<ProductData, 'slug' | 'name' | 'shortName' | 'seo'> = {
  tagline: "Đang tải dữ liệu...",
  description: "Giải pháp phần mềm chuyên nghiệp đang được chuẩn bị. Vui lòng liên hệ để biết thêm chi tiết.",
  badge: "Sản phẩm SOF",
  heroImage: "/products/default-hero.png",
  features: [
    {
      icon: React.createElement(Zap, { className: "w-8 h-8" }),
      title: "Đang tải tính năng...",
      description: "Thông tin chi tiết về tính năng sẽ được cập nhật sớm.",
    },
    {
      icon: React.createElement(Shield, { className: "w-8 h-8" }),
      title: "Bảo mật cao",
      description: "Hệ thống được bảo mật theo tiêu chuẩn quốc tế.",
    },
    {
      icon: React.createElement(Clock, { className: "w-8 h-8" }),
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ kỹ thuật hỗ trợ khách hàng mọi lúc.",
    },
    {
      icon: React.createElement(Database, { className: "w-8 h-8" }),
      title: "Dữ liệu real-time",
      description: "Đồng bộ dữ liệu theo thời gian thực.",
    },
    {
      icon: React.createElement(Settings, { className: "w-8 h-8" }),
      title: "Tùy biến linh hoạt",
      description: "Cấu hình theo yêu cầu doanh nghiệp.",
    },
    {
      icon: React.createElement(CheckCircle, { className: "w-8 h-8" }),
      title: "Dễ sử dụng",
      description: "Giao diện thân thiện, dễ thao tác.",
    },
  ],
  stats: [
    { number: "500+", label: "Khách hàng" },
    { number: "12+", label: "Năm kinh nghiệm" },
    { number: "99.9%", label: "Uptime" },
  ],
  processes: [
    {
      title: "Quy trình triển khai:",
      items: [
        "Khảo sát và phân tích yêu cầu",
        "Tùy chỉnh theo đặc thù doanh nghiệp",
        "Đào tạo và hỗ trợ sử dụng",
        "Bảo trì và nâng cấp liên tục",
      ],
    },
  ],
  testimonials: [
    {
      content: "Phần mềm SOF giúp doanh nghiệp chúng tôi tối ưu quy trình và tăng hiệu suất làm việc.",
      authorName: "Khách hàng SOF",
      authorRole: "Doanh nghiệp Việt Nam",
    },
  ],
  pricingPlans: [
    {
      name: "Basic",
      description: "Phù hợp doanh nghiệp nhỏ",
      price: "Liên hệ",
      features: ["Tính năng cơ bản", "Hỗ trợ email", "Cập nhật miễn phí"],
      cta: "Liên hệ tư vấn",
      ctaLink: "/contact?plan=basic",
    },
    {
      name: "Pro",
      description: "Doanh nghiệp vừa và lớn",
      price: "Liên hệ",
      features: ["Tất cả tính năng Basic", "Tính năng nâng cao", "Hỗ trợ 24/7"],
      cta: "Liên hệ tư vấn",
      ctaLink: "/contact?plan=pro",
      isFeatured: true,
      badge: "Phổ biến",
    },
    {
      name: "Enterprise",
      description: "Chuỗi, tập đoàn",
      price: "Liên hệ",
      features: ["Tất cả tính năng Pro", "Tùy chỉnh không giới hạn", "Account Manager riêng"],
      cta: "Liên hệ báo giá",
      ctaLink: "/contact?plan=enterprise",
    },
  ],
  isLoading: true,
};

// Product configurations
export const productConfigs: Record<string, ProductData> = {
  "phan-mem-ban-hang": {
    slug: "phan-mem-ban-hang",
    name: "Phần Mềm Bán Hàng",
    shortName: "POS Cafe",
    tagline: "Phần Mềm Quản Lý Đa Nền Tảng",
    description: "Tối ưu vận hành quán cafe với giao diện POS trực quan. Quản lý bàn, gọi món, kho hàng, khách hàng và báo cáo real-time.",
    badge: "Giải pháp POS #1 cho Cafe",
    heroImage: "/products/phan-mem-ban-hang/hero.png",
    features: [
      {
        icon: React.createElement(Monitor, { className: "w-8 h-8" }),
        title: "Màn hình POS trực quan",
        description: "Giao diện kéo thả, tìm sản phẩm theo danh mục, barcode hoặc từ khóa. Tối ưu cho màn hình cảm ứng.",
      },
      {
        icon: React.createElement(LayoutGrid, { className: "w-8 h-8" }),
        title: "Quản lý bàn & khu vực",
        description: "Sơ đồ bàn trực quan, trạng thái màu hóa. Hỗ trợ tách/gộp bàn, chuyển bàn và đặt bàn trước.",
      },
      {
        icon: React.createElement(DollarSign, { className: "w-8 h-8" }),
        title: "Thanh toán đa phương thức",
        description: "Tiền mặt, chuyển khoản, thẻ ngân hàng, e-wallet (VNPay, Momo, ZaloPay), voucher.",
      },
      {
        icon: React.createElement(Package, { className: "w-8 h-8" }),
        title: "Quản lý kho & nguyên liệu",
        description: "Tồn kho, nhập/xuất, kiểm kê, cảnh báo mức tồn tối thiểu. Công thức pha chế và định lượng.",
      },
      {
        icon: React.createElement(BarChart3, { className: "w-8 h-8" }),
        title: "Báo cáo & thống kê",
        description: "Dashboard doanh thu, đơn hàng, top món bán chạy. Xuất Excel/PDF, đồng bộ API kế toán.",
      },
      {
        icon: React.createElement(Users, { className: "w-8 h-8" }),
        title: "Quản lý nhân sự",
        description: "Phân quyền truy cập theo chức danh. Lịch ca làm, chấm công, tính lương và thưởng.",
      },
    ],
    stats: [
      { number: "50+", label: "Quán cafe tin dùng" },
      { number: "1M+", label: "Đơn hàng/tháng" },
      { number: "99.9%", label: "Uptime" },
    ],
    processes: [
      {
        title: "Nhận order & gọi món:",
        items: [
          "Chọn bàn trên sơ đồ → Mở màn hình gọi món",
          "Chọn món theo danh mục hoặc quét barcode",
          "Thêm ghi chú (size, đường, đá...) và gửi order cho bar",
          "In phiếu order tự động gửi về bar/bếp",
        ],
      },
      {
        title: "Thanh toán & kết ca:",
        items: [
          "Xem hóa đơn bàn → Áp dụng khuyến mãi/voucher",
          "Chọn phương thức thanh toán (tiền mặt/thẻ/QR)",
          "In hóa đơn và tự động cập nhật báo cáo doanh thu",
        ],
      },
    ],
    testimonials: [
      {
        content: "Sau khi sử dụng SOF Cafe POS, doanh thu tăng 25% nhờ quản lý chặt chẽ và tối ưu quy trình.",
        authorName: "Nguyễn Văn A",
        authorRole: "Chủ quán - Cafe ABC",
      },
      {
        content: "Tính năng quản lý kho rất chính xác, giúp tôi kiểm soát nguyên liệu tốt hơn.",
        authorName: "Trần Thị B",
        authorRole: "Quản lý - VUI Coffee House",
      },
      {
        content: "Triển khai nhanh, đào tạo dễ hiểu. Nhân viên chỉ mất 2 tiếng là thành thạo.",
        authorName: "Lê Văn C",
        authorRole: "Chủ quán cafe Tân Bình",
      },
    ],
    pricingPlans: [
      {
        name: "Basic",
        description: "Phù hợp cửa hàng cafe nhỏ",
        price: "Liên hệ",
        features: ["Tối đa 10 bàn", "1 điểm bán hàng", "Quản lý menu & gọi món", "Báo cáo cơ bản", "Hỗ trợ email"],
        cta: "Bắt đầu dùng thử",
        ctaLink: "/contact?plan=basic",
      },
      {
        name: "Pro",
        description: "Cửa hàng cafe vừa và lớn",
        price: "Liên hệ",
        features: ["Tối đa 50 bàn", "Quản lý kho nguyên liệu", "Khách hàng thân thiết", "Hỗ trợ 24/7", "Đào tạo miễn phí"],
        cta: "Bắt đầu dùng thử",
        ctaLink: "/contact?plan=pro",
        isFeatured: true,
        badge: "Phổ biến nhất",
      },
      {
        name: "Full",
        description: "Chuỗi cửa hàng cafe",
        price: "Liên hệ",
        features: ["Không giới hạn", "Quản lý đa chi nhánh", "API tích hợp", "Server riêng", "Account Manager"],
        cta: "Liên hệ báo giá",
        ctaLink: "/contact?plan=full",
      },
    ],
    seo: {
      title: "SOF Cafe POS - Phần Mềm Quản Lý Quán Cafe Đa Nền Tảng",
      description: "Giải pháp POS chuyên sâu cho quán cafe với giao diện trực quan, quản lý bàn, gọi món, kho hàng và báo cáo real-time.",
      keywords: ["SOF Cafe POS", "phần mềm quản lý quán cafe", "POS cafe", "quản lý bán hàng cafe"],
      canonical: "https://sof.vn/phan-mem-ban-hang",
    },
  },

  // ERP
  "phan-mem-erp": {
    slug: "phan-mem-erp",
    name: "Phần Mềm ERP",
    shortName: "ERP",
    tagline: "Hệ Thống Quản Trị Doanh Nghiệp",
    description: "Giải pháp ERP toàn diện tích hợp tài chính, kế toán, kho vận, sản xuất và nhân sự trong một hệ thống thống nhất.",
    badge: "Giải pháp ERP #1 Việt Nam",
    heroImage: "/products/phan-mem-erp/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm ERP - Hệ Thống Quản Trị Doanh Nghiệp Toàn Diện",
      description: "Giải pháp ERP tích hợp tài chính, kế toán, kho vận, sản xuất và nhân sự. Tùy chỉnh theo đặc thù doanh nghiệp Việt.",
      keywords: ["phần mềm ERP", "quản trị doanh nghiệp", "ERP Việt Nam", "SOF ERP"],
      canonical: "https://sof.vn/phan-mem-erp",
    },
  },

  // Nhân sự
  "phan-mem-nhan-su": {
    slug: "phan-mem-nhan-su",
    name: "Phần Mềm Nhân Sự",
    shortName: "HRM",
    tagline: "Quản Lý Nhân Sự Thông Minh",
    description: "Hệ thống HRM tự động hóa chấm công, tính lương, đánh giá KPI và quản lý toàn bộ vòng đời nhân viên.",
    badge: "Giải pháp HRM hiện đại",
    heroImage: "/products/phan-mem-nhan-su/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Nhân Sự HRM - Quản Lý Nhân Sự Thông Minh",
      description: "Hệ thống HRM tự động hóa chấm công, tính lương, KPI. Tích hợp máy chấm công, BHXH.",
      keywords: ["phần mềm nhân sự", "HRM", "quản lý nhân sự", "chấm công tự động"],
      canonical: "https://sof.vn/phan-mem-nhan-su",
    },
  },

  // Khách sạn
  "phan-mem-khach-san": {
    slug: "phan-mem-khach-san",
    name: "Phần Mềm Khách Sạn",
    shortName: "Hotel PMS",
    tagline: "Quản Lý Khách Sạn Chuyên Nghiệp",
    description: "Hệ thống PMS quản lý đặt phòng, check-in/out, housekeeping, minibar và tích hợp OTA như Booking, Agoda.",
    badge: "Giải pháp Hotel PMS",
    heroImage: "/products/phan-mem-khach-san/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Khách Sạn PMS - Quản Lý Khách Sạn Chuyên Nghiệp",
      description: "Hệ thống PMS quản lý đặt phòng, check-in/out, housekeeping. Tích hợp Booking, Agoda.",
      keywords: ["phần mềm khách sạn", "hotel PMS", "quản lý đặt phòng", "channel manager"],
      canonical: "https://sof.vn/phan-mem-khach-san",
    },
  },

  // Kho Pallet
  "phan-mem-kho-pallet": {
    slug: "phan-mem-kho-pallet",
    name: "Phần Mềm Kho Pallet",
    shortName: "WMS",
    tagline: "Quản Lý Kho Hàng Thông Minh",
    description: "Hệ thống WMS quản lý vị trí pallet, FIFO/LIFO, picking, packing với barcode/QR code real-time.",
    badge: "Giải pháp WMS chuyên sâu",
    heroImage: "/products/phan-mem-kho-pallet/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Kho Pallet WMS - Quản Lý Kho Hàng Thông Minh",
      description: "Hệ thống WMS quản lý vị trí pallet, FIFO/LIFO, picking, packing với barcode real-time.",
      keywords: ["phần mềm kho", "WMS", "quản lý kho pallet", "warehouse management"],
      canonical: "https://sof.vn/phan-mem-kho-pallet",
    },
  },

  // Vận tải Logistics
  "phan-mem-van-tai-logistic": {
    slug: "phan-mem-van-tai-logistic",
    name: "Phần Mềm Vận Tải",
    shortName: "TMS",
    tagline: "Quản Lý Vận Tải & Logistics",
    description: "Hệ thống TMS quản lý đội xe, lộ trình, GPS tracking, chi phí vận chuyển và tối ưu hóa giao hàng.",
    badge: "Giải pháp TMS hiệu quả",
    heroImage: "/products/phan-mem-van-tai-logistic/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Vận Tải TMS - Quản Lý Logistics Hiệu Quả",
      description: "Hệ thống TMS quản lý đội xe, GPS tracking, tối ưu lộ trình giao hàng.",
      keywords: ["phần mềm vận tải", "TMS", "logistics", "quản lý đội xe"],
      canonical: "https://sof.vn/phan-mem-van-tai-logistic",
    },
  },

  // Giữ xe
  "phan-mem-quan-li-giu-xe": {
    slug: "phan-mem-quan-li-giu-xe",
    name: "Phần Mềm Giữ Xe",
    shortName: "Parking",
    tagline: "Quản Lý Bãi Đỗ Xe Thông Minh",
    description: "Hệ thống quản lý bãi xe tự động với nhận dạng biển số, barrier, thẻ từ và thanh toán không tiền mặt.",
    badge: "Giải pháp Parking thông minh",
    heroImage: "/products/phan-mem-quan-li-giu-xe/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Giữ Xe - Quản Lý Bãi Đỗ Xe Thông Minh",
      description: "Hệ thống quản lý bãi xe tự động, nhận dạng biển số, barrier thông minh.",
      keywords: ["phần mềm giữ xe", "quản lý bãi đỗ xe", "parking management", "nhận dạng biển số"],
      canonical: "https://sof.vn/phan-mem-quan-li-giu-xe",
    },
  },

  // Chữ ký số
  "phan-mem-chu-ky-so": {
    slug: "phan-mem-chu-ky-so",
    name: "Phần Mềm Chữ Ký Số",
    shortName: "E-Sign",
    tagline: "Ký Số & Xác Thực Điện Tử",
    description: "Giải pháp ký số hợp đồng, hóa đơn điện tử tuân thủ pháp luật Việt Nam với chứng thư số uy tín.",
    badge: "Chữ ký số hợp pháp",
    heroImage: "/products/phan-mem-chu-ky-so/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Phần Mềm Chữ Ký Số - Ký Số Hợp Đồng, Hóa Đơn Điện Tử",
      description: "Giải pháp ký số hợp đồng, hóa đơn điện tử hợp pháp. Chứng thư số uy tín.",
      keywords: ["chữ ký số", "ký số điện tử", "e-signature", "hóa đơn điện tử"],
      canonical: "https://sof.vn/phan-mem-chu-ky-so",
    },
  },

  // Thiết kế web
  "dich-vu-thiet-ke-web": {
    slug: "dich-vu-thiet-ke-web",
    name: "Thiết Kế Website",
    shortName: "Web Design",
    tagline: "Thiết Kế Website Chuyên Nghiệp",
    description: "Dịch vụ thiết kế website doanh nghiệp, landing page, e-commerce chuẩn SEO với công nghệ hiện đại.",
    badge: "Thiết kế web chuẩn SEO",
    heroImage: "/products/dich-vu-thiet-ke-web/hero.png",
    ...defaultLoadingData,
    isLoading: true,
    seo: {
      title: "Dịch Vụ Thiết Kế Website Chuyên Nghiệp Chuẩn SEO",
      description: "Thiết kế website doanh nghiệp, landing page, e-commerce chuẩn SEO. Responsive, tốc độ cao.",
      keywords: ["thiết kế website", "web design", "làm website", "website chuẩn SEO"],
      canonical: "https://sof.vn/dich-vu-thiet-ke-web",
    },
  },
};

// Helper function to get product data
export function getProductData(slug: string): ProductData | null {
  return productConfigs[slug] || null;
}

// Get all product slugs for static generation
export function getAllProductSlugs(): string[] {
  return Object.keys(productConfigs);
}
