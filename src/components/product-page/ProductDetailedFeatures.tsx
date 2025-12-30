"use client";

import Image from "next/image";
import React from "react";

interface DetailedFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSection {
  label: string;
  title: string;
  subtitle?: string;
  features: DetailedFeature[];
  image?: string;
  imagePosition?: "left" | "right";
}

interface ProductDetailedFeaturesProps {
  sections: FeatureSection[];
}

export function ProductDetailedFeatures({ sections }: ProductDetailedFeaturesProps) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
                {section.label}
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c] mb-4">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="text-lg text-gray-600">{section.subtitle}</p>
              )}
            </div>

            {/* Content with image */}
            {section.image ? (
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${section.imagePosition === "right" ? "" : "lg:flex-row-reverse"}`}>
                {section.imagePosition !== "right" && (
                  <div>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                )}
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {section.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-14 h-14 mb-4 flex items-center justify-center bg-gradient-to-br from-[#197dd3] to-[#77d4fb] rounded-xl text-white">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-[#0f426c] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {section.imagePosition === "right" && (
                  <div>
                    <Image
                      src={section.image}
                      alt={section.title}
                      width={600}
                      height={400}
                      className="w-full rounded-xl shadow-lg"
                    />
                  </div>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-[#197dd3] to-[#77d4fb] rounded-xl text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f426c] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}

interface FeatureListProps {
  title: string;
  features: string[];
}

export function ProductFeatureList({ title, features }: FeatureListProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#197dd3] text-sm font-semibold uppercase tracking-wider mb-4">
            Gói Full
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f426c]">
            {title}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-xl shadow-sm">
          <ul className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li key={index} className="relative pl-6 text-gray-700 leading-relaxed">
                <span className="absolute left-0 top-2.5 w-2 h-2 bg-[#197dd3] rounded-full shadow-[0_0_0_4px_rgba(119,212,251,0.2)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
