import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-near-black text-white">
      {/* Lime accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-lime-accent" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-lime-accent/30 bg-lime-accent/10 px-4 py-1.5 text-sm text-white">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-lime-accent" />
            Premium Glide Templates
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Launch Your App{' '}
            <span className="text-lime-accent">In Hours, Not Weeks</span>
          </h1>
          
          {/* Subheadline */}
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Production-ready Glide templates built by LOW / CODE Agency. 
            Customize and deploy your business app today.
          </p>
          
          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center rounded-lg bg-lime-accent px-6 py-3 text-base font-semibold text-near-black shadow-sm transition-all hover:bg-lime-accent/90 hover:shadow-lg"
            >
              Browse Templates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="https://www.lowcode.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-base font-semibold text-white transition-all hover:border-lime-accent hover:text-lime-accent"
            >
              Need Custom Work?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
