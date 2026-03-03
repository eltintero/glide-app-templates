import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-light-gray bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-near-black">
            LOW <span className="text-purple-primary">/</span> CODE
          </span>
          <span className="hidden text-sm text-dark-gray sm:inline">
            Templates
          </span>
        </Link>
        
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link
            href="/templates"
            className="text-sm font-medium text-dark-gray transition-colors hover:text-purple-primary"
          >
            Templates
          </Link>
          <a
            href="https://www.lowcode.agency/services/glide-apps-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-dark-gray transition-colors hover:text-purple-primary"
          >
            Custom Work
          </a>
          <a
            href="https://www.lowcode.agency/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-purple-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-purple-dark"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
