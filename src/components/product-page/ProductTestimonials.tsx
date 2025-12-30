"use client";

interface Testimonial {
  content: string;
  authorName: string;
  authorRole: string;
  authorImage?: string;
}

interface ProductTestimonialsProps {
  label?: string;
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
}

export function ProductTestimonials({
  label = "Khách hàng nói gì?",
  title,
  subtitle,
  testimonials,
}: ProductTestimonialsProps) {
  return (
    <section className="py-20 bg-white">
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

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl relative"
            >
              {/* Quote mark */}
              <div className="absolute top-6 left-6 text-6xl text-[#197dd3] opacity-20 font-serif leading-none">
                "
              </div>
              
              <div className="relative">
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-lg font-semibold">
                      {testimonial.authorName.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f426c]">
                      {testimonial.authorName}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {testimonial.authorRole}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
