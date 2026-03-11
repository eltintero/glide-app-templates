import { Star, Quote, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    quote: "The communication was excellent! LowCode Agency led a smooth project, earning the client's approval. They quickly provided updates on the progress and made necessary changes to the app. They used a simple communication tool that was easy to navigate. Overall, their responsiveness made the partnership successful.",
    author: "Thomas Desorce",
    role: "Founder & CEO, Real Estate Startup",
    rating: 5,
  },
  {
    quote: "Their team is dedicated to our project from day one as if it is something they are part of as founders. While LowCode Agency is still in the testing phase, they've so far demonstrated dedication and attentiveness in meeting POC, ensuring a stellar result. The team openly discusses insights, changes, questions, progress, and feedback in online meetings.",
    author: "Ana Islas",
    role: "Founder, Real Estate Startup",
    rating: 5,
  },
  {
    quote: "They had a quick turnaround time and were very helpful. They were great people to work with. The mobile application that LowCode Agency developed impressed the client. They understood the project's needs, maintained smooth communication via email, and delivered the application in a timely manner.",
    author: "Administrative Consulting Company",
    role: "Parsippany, New Jersey",
    rating: 5,
  },
];

const reviewJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LOW / CODE Agency',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '34',
    bestRating: '5',
  },
};

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Trusted by Fortune 500 Companies
          </h2>
          <p className="mt-4 text-lg text-dark-gray">
            4.9/5 average rating across 34 verified reviews on Clutch.
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

              {/* Stars + Clutch badge */}
              <div className="mt-4 flex items-center gap-3">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-lime-accent text-lime-accent"
                    />
                  ))}
                </div>
                <span className="text-xs font-medium text-dark-gray">via Clutch</span>
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-sm text-dark-gray leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 border-t border-light-gray pt-4">
                <p className="font-semibold text-near-black">{testimonial.author}</p>
                <p className="text-sm text-dark-gray">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Clutch link */}
        <div className="mt-10 text-center">
          <a
            href="https://clutch.co/profile/lowcode-agency#reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-purple-primary hover:underline"
          >
            Read all 34 reviews on Clutch
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
