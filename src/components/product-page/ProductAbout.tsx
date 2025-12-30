"use client";

import Image from "next/image";
import { Check } from "lucide-react";

interface ProcessStep {
  title: string;
  items: string[];
}

interface ProductAboutProps {
  label?: string;
  title: string;
  subtitle?: string;
  images: string[];
  processes: ProcessStep[];
  ctaText?: string;
  ctaLink?: string;
}

export function ProductAbout({
  label = "Quy trình vận hành",
  title,
  subtitle,
  images,
  processes,
  ctaText = "Nhận tư vấn miễn phí",
  ctaLink = "/contact",
}: ProductAboutProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <div className="space-y-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Screenshot ${index + 1}`}
                width={600}
                height={400}
                className="w-full rounded-xl shadow-lg"
              />
            ))}
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
              {label}
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c] mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-8">
                {subtitle}
              </p>
            )}

            {/* Processes */}
            <div className="space-y-8">
              {processes.map((process, processIndex) => (
                <div key={processIndex}>
                  <h4 className={`font-semibold mb-4 ${processIndex === 0 ? 'text-[#197dd3]' : 'text-[#2ecc71]'}`}>
                    {process.title}
                  </h4>
                  <ul className="space-y-3">
                    {process.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-[#197dd3] text-white rounded-full">
                          <Check className="w-4 h-4" />
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href={ctaLink}
                className="inline-flex items-center gap-2 bg-[#197dd3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1565c0] transition-colors"
              >
                {ctaText}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
