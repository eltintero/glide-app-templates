import Link from 'next/link';
import { Header, Footer } from '@/components';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[60vh] items-center justify-center">
        <div className="mx-auto max-w-xl px-6 text-center">
          <p className="text-sm font-semibold text-purple-primary">404</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-near-black sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-dark-gray">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/templates"
              className="inline-flex items-center justify-center rounded-lg bg-purple-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-purple-dark"
            >
              Browse Templates
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-light-gray px-6 py-3 text-sm font-semibold text-near-black transition-all hover:border-purple-primary hover:text-purple-primary"
            >
              View Services
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-purple-primary hover:underline"
            >
              Go Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
