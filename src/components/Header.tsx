import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-lime-accent/20 bg-near-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/lowcode_agency_white.svg"
            alt="LOW / CODE Agency"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span className="hidden text-sm text-gray-400 sm:inline">
            Templates
          </span>
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/templates"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-lime-accent"
          >
            Templates
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-lime-accent"
          >
            Services
          </Link>
          <a
            href="https://www.lowcode.agency/services/glide-apps-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-lime-accent"
          >
            Custom Work
          </a>
          <a
            href="https://www.lowcode.agency/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-lime-accent px-4 py-2 text-sm font-semibold text-near-black transition-all hover:bg-lime-accent/90"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
