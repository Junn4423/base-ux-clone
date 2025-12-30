import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star, Zap, Shield, Database, Settings, Clock, CheckCircle } from "lucide-react";
import {
  ProductDetailedFeatures,
  ProductFeatureList,
  ProductCTA,
  ProductSubNav,
} from "@/components/product-page";
import { FloatingButtons } from "@/components/FloatingButtons";
import { getProductData, getAllProductSlugs } from "@/config/products";
import React from "react";

// Generate static params for all products
export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductData(slug);
  
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
    };
  }

  return {
    title: `Tính Năng - ${product.name}`,
    description: `Tính năng ${product.name}: ${product.description}`,
    alternates: {
      canonical: `${product.seo.canonical}/features`,
    },
  };
}

// Default feature sections for loading state
const defaultFeatureSections = [
  {
    label: "Tính năng cốt lõi",
    title: "Chức năng chính",
    subtitle: "Các tính năng cơ bản giúp tối ưu quy trình làm việc.",
    features: [
      {
        icon: React.createElement(Zap, { className: "w-7 h-7" }),
        title: "Hiệu suất cao",
        description: "Xử lý nhanh chóng, không giật lag, đáp ứng mọi nhu cầu.",
      },
      {
        icon: React.createElement(Shield, { className: "w-7 h-7" }),
        title: "Bảo mật đa lớp",
        description: "Mã hóa dữ liệu, phân quyền chi tiết, audit log.",
      },
      {
        icon: React.createElement(Database, { className: "w-7 h-7" }),
        title: "Dữ liệu real-time",
        description: "Đồng bộ dữ liệu theo thời gian thực giữa các thiết bị.",
      },
      {
        icon: React.createElement(Clock, { className: "w-7 h-7" }),
        title: "Hoạt động 24/7",
        description: "Hệ thống ổn định, uptime 99.9%.",
      },
    ],
  },
  {
    label: "Tính năng nâng cao",
    title: "Mở rộng & Tích hợp",
    subtitle: "Các tính năng nâng cao cho doanh nghiệp phát triển.",
    features: [
      {
        icon: React.createElement(Settings, { className: "w-7 h-7" }),
        title: "Tùy biến linh hoạt",
        description: "Cấu hình theo yêu cầu đặc thù của doanh nghiệp.",
      },
      {
        icon: React.createElement(CheckCircle, { className: "w-7 h-7" }),
        title: "API tích hợp",
        description: "Kết nối với các hệ thống khác: kế toán, CRM, ERP.",
      },
      {
        icon: React.createElement(Database, { className: "w-7 h-7" }),
        title: "Báo cáo thông minh",
        description: "Dashboard, biểu đồ, xuất Excel/PDF tự động.",
      },
      {
        icon: React.createElement(Shield, { className: "w-7 h-7" }),
        title: "Đa chi nhánh",
        description: "Quản lý nhiều chi nhánh, phân quyền theo vị trí.",
      },
    ],
  },
];

// Default full feature list
const defaultFullFeatures = [
  "Giao diện thân thiện, dễ sử dụng",
  "Đa ngôn ngữ (Tiếng Việt, English)",
  "Responsive trên mọi thiết bị",
  "Bảo mật theo tiêu chuẩn quốc tế",
  "Phân quyền người dùng chi tiết",
  "Audit log theo dõi hoạt động",
  "Sao lưu dữ liệu tự động",
  "Đồng bộ real-time",
  "API RESTful đầy đủ",
  "Tích hợp SSO/LDAP",
  "Báo cáo và thống kê",
  "Xuất dữ liệu Excel/PDF",
  "Thông báo email/SMS",
  "Hỗ trợ đa chi nhánh",
  "Cập nhật miễn phí",
  "Hỗ trợ kỹ thuật 24/7",
];

// Page component
export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductData(slug);

  if (!product) {
    notFound();
  }

  // Build feature sections from product data
  const featureSections = product.isLoading
    ? defaultFeatureSections
    : [
        {
          label: "Tính năng cốt lõi",
          title: `Chức năng chính của ${product.shortName}`,
          subtitle: product.description,
          features: product.features.slice(0, 4).map((f) => ({
            icon: f.icon,
            title: f.title,
            description: f.description,
          })),
        },
        ...(product.features.length > 4
          ? [
              {
                label: "Tính năng nâng cao",
                title: "Mở rộng & Tích hợp",
                subtitle: "Các tính năng nâng cao cho doanh nghiệp phát triển.",
                features: product.features.slice(4).map((f) => ({
                  icon: f.icon,
                  title: f.title,
                  description: f.description,
                })),
              },
            ]
          : []),
      ];

  return (
    <div className="min-h-screen bg-background">
      {/* Product Sub Navigation */}
      <ProductSubNav productSlug={slug} productName={product.shortName} />

      {/* Loading Banner
      {product.isLoading && (
        <div className="bg-amber-50 border-b border-amber-200 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-amber-800 text-sm font-medium">
              ⏳ Thông tin tính năng đang được cập nhật. Vui lòng liên hệ để biết thêm chi tiết.
            </p>
          </div>
        </div>
      )} */}

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--sof-primary)] to-[var(--sof-accent)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Công nghệ hiện đại
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tính Năng {product.shortName}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {product.description}
          </p>
        </div>
      </section>

      {/* Full Feature List */}
      <ProductFeatureList
        title="Danh sách tính năng đầy đủ"
        features={defaultFullFeatures}
      />

      {/* Detailed Features Sections */}
      <ProductDetailedFeatures sections={featureSections} />

      {/* CTA Section */}
      <ProductCTA
        title={`Sẵn sàng trải nghiệm ${product.shortName}?`}
        subtitle="Đăng ký dùng thử miễn phí 14 ngày với đầy đủ tính năng. Không cần thẻ tín dụng."
        ctaPrimaryText="Dùng thử miễn phí"
        ctaPrimaryLink="/contact"
        ctaSecondaryText="Xem bảng giá"
        ctaSecondaryLink={`/${slug}/pricing`}
      />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}
