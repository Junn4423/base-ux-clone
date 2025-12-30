import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Book, Download, Video, FileText, HelpCircle, CheckCircle } from "lucide-react";
import { ProductSubNav, ProductCTA } from "@/components/product-page";
import { FloatingButtons } from "@/components/FloatingButtons";
import { getProductData, getAllProductSlugs } from "@/config/products";

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
    title: `Tài Liệu Hướng Dẫn - ${product.name}`,
    description: `Hướng dẫn sử dụng ${product.name} - Tài liệu chi tiết, video tutorial, FAQ và hỗ trợ kỹ thuật.`,
    alternates: {
      canonical: `${product.seo.canonical}/user-guide`,
    },
  };
}

// Default guide sections
const guideCategories = [
  {
    icon: <Book className="w-8 h-8" />,
    title: "Hướng dẫn sử dụng",
    description: "Tài liệu chi tiết về các tính năng và cách sử dụng phần mềm.",
    items: [
      "Bắt đầu nhanh - Quick Start Guide",
      "Hướng dẫn cài đặt và cấu hình",
      "Quản lý người dùng và phân quyền",
      "Sử dụng các tính năng chính",
      "Tips & Tricks tối ưu hiệu suất",
    ],
    cta: "Xem tài liệu",
    ctaLink: "/user-guide#documentation",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video hướng dẫn",
    description: "Thư viện video tutorial chi tiết từng bước sử dụng phần mềm.",
    items: [
      "Video giới thiệu tổng quan",
      "Hướng dẫn cài đặt ban đầu",
      "Tutorial các tính năng cơ bản",
      "Tutorial các tính năng nâng cao",
      "Best practices & Case studies",
    ],
    cta: "Xem video",
    ctaLink: "/user-guide#videos",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "API Documentation",
    description: "Tài liệu API đầy đủ cho developers tích hợp và mở rộng.",
    items: [
      "API Reference - Tham chiếu API",
      "Authentication & Authorization",
      "Webhooks và Events",
      "SDK và Libraries",
      "Code examples & Samples",
    ],
    cta: "Xem API docs",
    ctaLink: "/user-guide#api",
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "FAQ & Troubleshooting",
    description: "Câu hỏi thường gặp và cách giải quyết các vấn đề phổ biến.",
    items: [
      "Câu hỏi thường gặp (FAQ)",
      "Khắc phục sự cố thường gặp",
      "Performance optimization",
      "Security best practices",
      "Backup và recovery",
    ],
    cta: "Xem FAQ",
    ctaLink: "/user-guide#faq",
  },
];

// Download resources
const downloadResources = [
  {
    icon: <Download className="w-6 h-6" />,
    title: "Hướng dẫn sử dụng PDF",
    size: "2.5 MB",
    description: "Tài liệu đầy đủ định dạng PDF",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Quick Start Guide",
    size: "850 KB",
    description: "Hướng dẫn nhanh bắt đầu sử dụng",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "API Documentation",
    size: "1.2 MB",
    description: "Tài liệu API chi tiết",
  },
];

// Page component
export default async function UserGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductData(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Product Sub Navigation */}
      <ProductSubNav productSlug={slug} productName={product.shortName} />

      {/* Loading Banner
      {product.isLoading && (
        <div className="bg-amber-50 border-b border-amber-200 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-amber-800 text-sm font-medium">
              ⏳ Tài liệu đang được cập nhật. Vui lòng liên hệ để được hỗ trợ trực tiếp.
            </p>
          </div>
        </div>
      )} */}

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--sof-primary)] to-[var(--sof-accent)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Book className="w-4 h-4" />
            Tài liệu & Hướng dẫn
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Tài Liệu {product.shortName}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Hướng dẫn chi tiết, video tutorial, tài liệu API và FAQ để bạn tận dụng tối đa {product.shortName}
          </p>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {guideCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[var(--sof-primary)] to-[var(--sof-accent)] flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={category.ctaLink}
                  className="inline-flex items-center gap-2 text-[var(--sof-primary)] font-semibold hover:gap-3 transition-all duration-200"
                >
                  {category.cta}
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tài liệu tải về
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download tài liệu để tham khảo offline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {downloadResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-[var(--sof-primary)]">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-500">{resource.size}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <button className="w-full px-4 py-2 bg-[var(--sof-primary)] text-white rounded-lg font-medium hover:bg-[var(--sof-accent)] transition-colors duration-200">
                  Tải về
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <ProductCTA
        title="Cần hỗ trợ thêm?"
        subtitle="Đội ngũ support 24/7 luôn sẵn sàng giúp đỡ bạn. Liên hệ ngay để được tư vấn chi tiết."
        ctaPrimaryText="Liên hệ hỗ trợ"
        ctaPrimaryLink="/contact"
        ctaSecondaryText="Gọi: 0933549469"
        ctaSecondaryLink="tel:0933549469"
      />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}
