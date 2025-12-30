"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Phone, Globe } from "lucide-react";

interface HeroStat {
  number: string;
  label: string;
}

interface ProductHeroProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  ctaPrimaryText?: string;
  ctaPrimaryLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  stats?: HeroStat[];
  heroImage: string;
  heroImageAlt?: string;
  hotline?: string;
}

export function ProductHero({
  badge = "Giải pháp hàng đầu",
  title,
  highlightedTitle,
  description,
  ctaPrimaryText = "Dùng thử miễn phí",
  ctaPrimaryLink = "/contact",
  ctaSecondaryText = "Xem demo",
  ctaSecondaryLink = "#features",
  stats,
  heroImage,
  heroImageAlt = "Product Screenshot",
  hotline = "0933549469",
}: ProductHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[var(--sof-primary)] to-[var(--sof-accent)] pt-20 overflow-hidden">
      {/* Background pattern - geometric circles */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full border-[40px] border-white/30" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border-[30px] border-white/20" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-[20px] border-white/25" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="relative z-10">
            {badge && (
              <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                {badge}
              </span>
            )}

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              {title}
              {highlightedTitle && (
                <span className="text-white/90 block mt-2">{highlightedTitle}</span>
              )}
            </h1>

            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-lg">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href={ctaPrimaryLink}>
                <Button
                  size="lg"
                  className="bg-white text-[var(--sof-primary)] hover:bg-gray-100 gap-2 font-semibold"
                >
                  <ArrowRight className="w-5 h-5" />
                  {ctaPrimaryText}
                </Button>
              </Link>
              <Link href={ctaSecondaryLink}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[var(--sof-primary)] gap-2 font-semibold"
                >
                  <Play className="w-5 h-5" />
                  {ctaSecondaryText}
                </Button>
              </Link>
            </div>

            {/* Hotline */}
            <div className="flex items-center gap-3 mb-8">
              <a 
                href={`tel:${hotline}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Hotline: {hotline}</span>
              </a>
            </div>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="flex gap-8 mt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <div className="text-3xl lg:text-4xl font-extrabold text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="relative z-10">
            <div className="relative">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
