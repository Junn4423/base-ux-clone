import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import {
  ProductPricing,
  ProductPricingComparison,
  ProductFAQ,
  ProductCTA,
  ProductSubNav,
} from "@/components/product-page";
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
    title: `Bảng Giá - ${product.name}`,
    description: `Bảng giá ${product.name} - Gói phần mềm phù hợp mọi quy mô doanh nghiệp. Dùng thử miễn phí 14 ngày.`,
    alternates: {
      canonical: `${product.seo.canonical}/pricing`,
    },
  };
}

// Default comparison rows
const defaultComparisonRows = [
  { feature: "Số người dùng", basic: "5", pro: "Không giới hạn", full: "Không giới hạn" },
  { feature: "Tính năng cơ bản", basic: "✓", pro: "✓", full: "✓" },
  { feature: "Tính năng nâng cao", basic: "—", pro: "✓", full: "✓" },
  { feature: "API tích hợp", basic: "—", pro: "—", full: "✓" },
  { feature: "Hỗ trợ kỹ thuật", basic: "Email", pro: "24/7 Điện thoại", full: "Account Manager" },
];

// Default FAQ items
const defaultFaqItems = [
  {
    question: "Tôi có thể dùng thử miễn phí không?",
    answer: "Có, tất cả các gói đều có 14 ngày dùng thử miễn phí với đầy đủ tính năng. Không cần thẻ tín dụng để đăng ký.",
  },
  {
    question: "Chi phí triển khai như thế nào?",
    answer: "Gói Basic và Pro không có phí triển khai. Gói Enterprise có thể có phí tùy thuộc vào độ phức tạp và yêu cầu tùy chỉnh.",
  },
  {
    question: "Tôi có thể nâng cấp gói sau không?",
    answer: "Có, bạn có thể nâng cấp hoặc hạ cấp gói bất cứ lúc nào. Phí sẽ được tính theo tỷ lệ trong tháng hiện tại.",
  },
  {
    question: "Có cam kết hoàn tiền không?",
    answer: "Có, chúng tôi cam kết hoàn tiền 100% trong 30 ngày đầu tiên nếu bạn không hài lòng với dịch vụ.",
  },
];

// Page component
export default async function PricingPage({
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

      {/* Loading Banner */}
      {/* {product.isLoading && (
        <div className="bg-amber-50 border-b border-amber-200 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-amber-800 text-sm font-medium">
              ⏳ Bảng giá đang được cập nhật. Vui lòng liên hệ để nhận báo giá chi tiết.
            </p>
          </div>
        </div>
      )} */}

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--sof-primary)] to-[var(--sof-accent)]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            Minh bạch & Linh hoạt
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Bảng Giá {product.shortName}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Chọn gói phù hợp với quy mô doanh nghiệp. Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <ProductPricing plans={product.pricingPlans} />

      {/* Comparison Table */}
      <ProductPricingComparison rows={defaultComparisonRows} />

      {/* FAQ */}
      <ProductFAQ items={defaultFaqItems} />

      {/* CTA Section */}
      <ProductCTA
        title="Chưa chắc chắn gói nào phù hợp?"
        subtitle="Liên hệ với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết."
        ctaPrimaryText="Nhận tư vấn miễn phí"
        ctaPrimaryLink="/contact"
        ctaSecondaryText="Gọi ngay: 0933549469"
        ctaSecondaryLink="tel:0933549469"
      />

      {/* Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}
