"use client";

import React from "react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductFeaturesProps {
  label?: string;
  title: string;
  subtitle?: string;
  features: FeatureItem[];
  ctaText?: string;
  ctaLink?: string;
}

export function ProductFeatures({
  label = "Tính năng nổi bật",
  title,
  subtitle,
  features,
  ctaText,
  ctaLink,
}: ProductFeaturesProps) {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
            {label}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#197dd3] to-[#77d4fb] rounded-xl text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f426c] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            <a
              href={ctaLink}
              className="inline-flex items-center gap-2 bg-[#197dd3] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1565c0] transition-colors"
            >
              {ctaText}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
