import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProductHero,
  ProductFeatures,
  ProductAbout,
  ProductTestimonials,
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
    title: product.seo.title,
    description: product.seo.description,
    keywords: product.seo.keywords,
    openGraph: {
      type: "website",
      url: product.seo.canonical,
      title: product.seo.title,
      description: product.seo.description,
      images: [
        {
          url: product.heroImage,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      locale: "vi_VN",
      siteName: "SOF.COM.VN",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.title,
      description: product.seo.description,
      images: [product.heroImage],
    },
    alternates: {
      canonical: product.seo.canonical,
    },
  };
}

// Page component
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductData(slug);

  if (!product) {
    notFound();
  }

  // Loading state indicator
  const isLoading = product.isLoading;

  return (
    <div className="min-h-screen bg-background">
      {/* Product Sub Navigation */}
      <ProductSubNav productSlug={slug} productName={product.shortName} />

      {/* Loading Banner */}
      {/* {isLoading && (
        <div className="bg-amber-50 border-b border-amber-200 py-2">
          <div className="container mx-auto px-4 text-center">
            <p className="text-amber-800 text-sm font-medium">
              ⏳ Dữ liệu sản phẩm đang được cập nhật. Vui lòng liên hệ để biết thêm chi tiết.
            </p>
          </div>
        </div>
      )} */}

      {/* Hero Section */}
      <ProductHero
        badge={product.badge}
        title={product.tagline}
        description={product.description}
        ctaPrimaryText="Dùng thử miễn phí"
        ctaPrimaryLink="/contact"
        ctaSecondaryText="Xem demo"
        ctaSecondaryLink="#features"
        stats={product.stats}
        heroImage={product.heroImage}
        heroImageAlt={product.name}
        hotline="0933549469"
      />

      {/* Features Section */}
      <ProductFeatures
        label="Tính năng nổi bật"
        title={`Giải pháp toàn diện cho ${product.shortName}`}
        subtitle={isLoading ? "Thông tin tính năng sẽ được cập nhật sớm." : undefined}
        features={product.features}
        ctaText="Xem tất cả tính năng"
        ctaLink={`/${slug}/features`}
      />

      {/* About/Process Section */}
      <ProductAbout
        label="Quy trình vận hành"
        title={`${product.shortName} - Vận hành thông minh & hiệu quả`}
        subtitle="Quy trình đơn giản, dễ sử dụng. Tối ưu từ triển khai đến vận hành."
        images={[
          product.heroImage,
        ]}
        processes={product.processes}
        ctaText="Nhận tư vấn miễn phí"
        ctaLink="/contact"
      />

      {/* Testimonials Section */}
      <ProductTestimonials
        label="Khách hàng nói gì?"
        title={`Được tin tưởng bởi hàng trăm doanh nghiệp`}
        subtitle="Xem những đánh giá từ khách hàng đã sử dụng."
        testimonials={product.testimonials}
      />

      {/* CTA Section */}
      <ProductCTA
        title={`Sẵn sàng trải nghiệm ${product.shortName}?`}
        subtitle="Đăng ký dùng thử miễn phí 14 ngày. Không cần thẻ tín dụng."
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
