import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function CTA() {
  return (
    <section className="bg-near-black py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Something More{' '}
              <span className="text-purple-primary">Custom?</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Our templates are great starting points, but sometimes you need a solution 
              tailored to your specific needs. LOW / CODE Agency builds custom Glide 
              applications for businesses of all sizes.
            </p>
            
            {/* Benefits */}
            <ul className="mt-8 space-y-3">
              {[
                'Custom features and integrations',
                'Dedicated project manager',
                'Ongoing support and maintenance',
                'Trusted by Fortune 500 companies',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center text-gray-300">
                  <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-lime-accent/20">
                    <span className="h-2 w-2 rounded-full bg-lime-accent" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <a
              href="https://www.lowcode.agency/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg bg-purple-primary px-6 py-3 text-base font-semibold text-white transition-all hover:bg-purple-dark hover:shadow-lg"
            >
              Get a Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
          
          {/* Right content - Agency card */}
          <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-primary">
                <span className="text-xl font-bold text-white">LC</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">LOW / CODE Agency</h3>
                <p className="text-sm text-gray-400">Glide Premium Partner</p>
              </div>
            </div>
            
            <p className="mt-6 text-gray-300">
              We&apos;re a 40+ person development firm specializing in no-code solutions. 
              From MVPs to enterprise applications, we build software that scales.
            </p>
            
            <div className="mt-6 flex items-center gap-6 border-t border-gray-700 pt-6">
              <div>
                <p className="text-2xl font-bold text-white">40+</p>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Fortune 500</p>
                <p className="text-sm text-gray-400">Clients</p>
              </div>
            </div>
            
            <a
              href="https://www.lowcode.agency/services/glide-apps-agency"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-sm font-medium text-purple-light transition-colors hover:text-purple-primary"
            >
              Learn More About Our Glide Services
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
