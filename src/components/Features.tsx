import { Zap, Shield, HeadphonesIcon, Clock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Launch Faster',
    description: 'Skip weeks of development. Our templates are production-ready and fully customizable.',
  },
  {
    icon: Shield,
    title: 'Battle-Tested Code',
    description: 'Built by LOW / CODE Agency, trusted by Fortune 500 companies and startups alike.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    description: 'Questions? Our Glide-certified team is here to help you succeed.',
  },
  {
    icon: Clock,
    title: 'Save Time & Money',
    description: 'Templates cost a fraction of custom development. Launch your MVP today.',
  },
];

export function Features() {
  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Why Choose Our Templates?
          </h2>
          <p className="mt-4 text-lg text-dark-gray">
            Built by experts. Used by businesses worldwide.
          </p>
        </div>

        {/* Features grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-primary/10">
                <feature.icon className="h-6 w-6 text-purple-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-near-black">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-dark-gray">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
