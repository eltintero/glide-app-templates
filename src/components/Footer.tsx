import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-light-gray bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-near-black">
                LOW <span className="text-purple-primary">/</span> CODE
              </span>
            </Link>
            <p className="mt-4 max-w-md text-dark-gray">
              Premium Glide templates and custom app development by LOW / CODE Agency. 
              Building software that scales, faster.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.lowcode.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-gray hover:text-purple-primary"
              >
                lowcode.agency
              </a>
              <span className="text-light-gray">•</span>
              <a
                href="https://www.glideapps.com/templates/authors/lowcode-2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark-gray hover:text-purple-primary"
              >
                Glide Profile
              </a>
            </div>
          </div>
          
          {/* Templates */}
          <div>
            <h3 className="font-semibold text-near-black">Templates</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/templates" className="text-sm text-dark-gray hover:text-purple-primary">
                  All Templates
                </Link>
              </li>
              <li>
                <Link href="/templates?category=business" className="text-sm text-dark-gray hover:text-purple-primary">
                  Business Operations
                </Link>
              </li>
              <li>
                <Link href="/templates?category=ai" className="text-sm text-dark-gray hover:text-purple-primary">
                  AI & Automation
                </Link>
              </li>
              <li>
                <Link href="/templates?category=service" className="text-sm text-dark-gray hover:text-purple-primary">
                  Service Business
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold text-near-black">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.lowcode.agency/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-gray hover:text-purple-primary"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.lowcode.agency/services/glide-apps-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-gray hover:text-purple-primary"
                >
                  Glide Services
                </a>
              </li>
              <li>
                <a
                  href="https://www.lowcode.agency/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-dark-gray hover:text-purple-primary"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-light-gray pt-8 sm:flex-row">
          <p className="text-sm text-dark-gray">
            © {new Date().getFullYear()} LOW / CODE Agency. All rights reserved.
          </p>
          <p className="text-sm text-dark-gray">
            Premium Glide Templates
          </p>
        </div>
      </div>
    </footer>
  );
}
