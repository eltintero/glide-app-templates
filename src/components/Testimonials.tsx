import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The LOW / CODE team delivered exactly what we needed. Their Glide templates saved us months of development time.",
    author: "Sarah Chen",
    role: "Operations Director",
    company: "TechFlow Inc",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and incredibly knowledgeable. The template we purchased was better than we imagined.",
    author: "Marcus Williams",
    role: "Founder",
    company: "ServicePro",
    rating: 5,
  },
  {
    quote: "We launched our internal tool in 2 days instead of 2 months. The ROI was immediate.",
    author: "Jennifer Park",
    role: "Product Manager",
    company: "GrowthMetrics",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Trusted by Businesses Worldwide
          </h2>
          <p className="mt-4 text-lg text-dark-gray">
            See what our clients say about working with LOW / CODE Agency.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative flex flex-col rounded-xl border border-light-gray bg-white p-6"
            >
              {/* Quote icon */}
              <Quote className="h-8 w-8 text-purple-light" />
              
              {/* Stars */}
              <div className="mt-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-lime-accent text-lime-accent"
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-dark-gray">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="mt-6 border-t border-light-gray pt-4">
                <p className="font-semibold text-near-black">{testimonial.author}</p>
                <p className="text-sm text-dark-gray">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
