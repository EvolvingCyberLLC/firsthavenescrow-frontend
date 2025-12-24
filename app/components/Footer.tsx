import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom py-14">
          <div className="mb-12 py-12 border-b border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[var(--gold)] rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[var(--navy)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">
                    First Haven Escrow
                  </span>
                </div>
                <p className="text-gray-300 text-sm max-w-md">
                  Professional escrow services for residential and commercial
                  transactions across Southern California.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--gold)] flex items-center justify-center transition-all duration-200 group"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-[var(--navy)] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--gold)] flex items-center justify-center transition-all duration-200 group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 group-hover:text-[var(--navy)] transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-white tracking-wide">
                Company
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-white tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/escrow-101"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Escrow 101
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forms"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Forms & Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    href="/glossary"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-white tracking-wide">
                Legal
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/security"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-semibold mb-4 text-white tracking-wide">
                Contact
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="tel:2135550123"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    (213) 555-0123
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contact@firsthaven.com"
                    className="text-gray-300 hover:text-white text-sm transition-colors inline-block"
                  >
                    contact@firsthaven.com
                  </a>
                </li>
                <li>
                  <address className="text-gray-300 text-sm not-italic leading-relaxed">
                    1234 Escrow Lane, Suite 500
                    <br />
                    Los Angeles, CA 90012
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#081F2D]">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row py-2 justify-between items-center gap-4 text-center lg:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} First Haven Escrow. All Rights
                Reserved.
              </p>
              <span className="hidden sm:inline text-gray-600">|</span>
              <p className="text-gray-400 text-xs">
                Licensed by the California Department of Financial Protection
                and Innovation
              </p>
            </div>
            <p className="text-gray-500 text-xs">NMLS ID: 123456</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
