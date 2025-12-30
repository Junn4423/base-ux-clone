"use client";

import Link from "next/link";
import { Check } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: string;
  ctaLink: string;
  isFeatured?: boolean;
  badge?: string;
}

interface ProductPricingProps {
  plans: PricingPlan[];
}

export function ProductPricing({ plans }: ProductPricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-xl p-8 flex flex-col transition-all duration-300 ${
                plan.isFeatured
                  ? "bg-gradient-to-br from-[#197dd3] to-[#1565c0] text-white scale-105 shadow-xl"
                  : "bg-white shadow-md hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                  {plan.badge}
                </div>
              )}

              {/* Header */}
              <div className="text-center pb-6 border-b border-gray-200 mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.isFeatured ? "text-white" : "text-[#0f426c]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.isFeatured ? "opacity-80" : "text-gray-500"}`}>
                  {plan.description}
                </p>
                <div className={`text-3xl font-extrabold mt-4 ${plan.isFeatured ? "text-white" : "text-[#197dd3]"}`}>
                  {plan.price}
                  {plan.priceNote && (
                    <span className={`text-base font-normal ${plan.isFeatured ? "opacity-80" : "text-gray-600"}`}>
                      {plan.priceNote}
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.isFeatured ? "text-white" : "text-green-500"}`} />
                    <span className={plan.isFeatured ? "text-white/90" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaLink}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                  plan.isFeatured
                    ? "bg-white text-[#197dd3] hover:bg-gray-100"
                    : index === 2
                    ? "bg-[#197dd3] text-white hover:bg-[#1565c0]"
                    : "border-2 border-[#197dd3] text-[#197dd3] hover:bg-[#197dd3] hover:text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface ComparisonRow {
  feature: string;
  basic: string;
  pro: string;
  full: string;
}

interface ProductPricingComparisonProps {
  rows: ComparisonRow[];
}

export function ProductPricingComparison({ rows }: ProductPricingComparisonProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
            So sánh
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c] mb-4">
            Tính năng theo gói
          </h2>
          <p className="text-lg text-gray-600">
            So sánh các tính năng giữa các gói dịch vụ.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 text-left border-b-2 border-gray-200 w-1/4">Tính năng</th>
                <th className="p-4 text-center border-b-2 border-gray-200">Basic</th>
                <th className="p-4 text-center border-b-2 border-gray-200 bg-[#77d4fb]/30 text-[#1565c0]">Pro</th>
                <th className="p-4 text-center border-b-2 border-gray-200">Full</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td className="p-4 border-b border-gray-200">{row.feature}</td>
                  <td className="p-4 text-center border-b border-gray-200">{row.basic}</td>
                  <td className="p-4 text-center border-b border-gray-200 bg-[#77d4fb]/10">{row.pro}</td>
                  <td className="p-4 text-center border-b border-gray-200">{row.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface ProductFAQProps {
  items: FAQItem[];
}

export function ProductFAQ({ items }: ProductFAQProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
            Câu hỏi thường gặp
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c] mb-4">
            Giải đáp thắc mắc
          </h2>
          <p className="text-lg text-gray-600">
            Những câu hỏi phổ biến về bảng giá và dịch vụ.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-semibold text-[#197dd3] mb-2">{item.question}</h4>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
