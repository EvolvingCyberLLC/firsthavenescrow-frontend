"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

const services = [
  { name: "Residential Purchase & Sale", href: "/services/residential" },
  { name: "Refinance Escrow", href: "/services/refinance" },
  { name: "Commercial Escrow", href: "/services/commercial" },
  { name: "1031 Exchange", href: "/services/1031-exchange" },
  { name: "Probate Escrow", href: "/services/probate" },
  { name: "Holding Escrow", href: "/services/holding-escrow" },
  { name: "Short Sale Escrow", href: "/services/short-sale" },
  { name: "REO / Bank-Owned", href: "/services/reo" },
];

const resources = [
  { name: "FAQ", href: "/faq" },
  { name: "Escrow 101", href: "/escrow-101" },
  { name: "Forms & Downloads", href: "/forms" },
  { name: "Open Order Forms", href: "/resources/open-order-forms" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--navy)] text-white text-sm py-2">
        <div className="container-custom flex justify-between items-center">
          <span className="hidden sm:block">Serving California</span>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:7147868912"
              className="hover:text-[var(--gold)] transition-colors"
            >
              (714) 786-8912
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="mailto:order@havenescrow.com"
              className="hidden sm:block hover:text-[var(--gold)] transition-colors"
            >
              order@havenescrow.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="container-custom">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  Services
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-[var(--text-dark)] hover:bg-[var(--light-gray)] hover:text-[var(--gold)]"
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-[var(--text-dark)] hover:bg-[var(--light-gray)] hover:text-[var(--gold)]"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/fees"
                className="text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
              >
                Fees
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  Resources
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 transition-all duration-200 ${
                    resourcesOpen
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  {resources.map((resource) => (
                    <Link
                      key={resource.href}
                      href={resource.href}
                      className="block px-4 py-2 text-sm text-[var(--text-dark)] hover:bg-[var(--light-gray)] hover:text-[var(--gold)]"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/about"
                className="text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-[var(--text-dark)] hover:text-[var(--gold)] font-medium transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[var(--navy)]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col gap-4">
                <Link href="/" className="text-[var(--text-dark)] font-medium">
                  Home
                </Link>

                {/* Mobile Services Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-[var(--text-dark)] font-medium"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      <Link
                        href="/services"
                        className="text-[var(--text-dark)] text-sm hover:text-[var(--gold)]"
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="text-[var(--text-dark)] text-sm hover:text-[var(--gold)]"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/fees"
                  className="text-[var(--text-dark)] font-medium"
                >
                  Fees
                </Link>

                {/* Mobile Resources Dropdown */}
                <div>
                  <button
                    onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                    className="flex items-center justify-between w-full text-[var(--text-dark)] font-medium"
                  >
                    <span>Resources</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {mobileResourcesOpen && (
                    <div className="mt-2 ml-4 flex flex-col gap-2">
                      {resources.map((resource) => (
                        <Link
                          key={resource.href}
                          href={resource.href}
                          className="text-[var(--text-dark)] text-sm hover:text-[var(--gold)]"
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/about"
                  className="text-[var(--text-dark)] font-medium"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-[var(--text-dark)] font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/open-escrow"
                  className="btn-primary text-center mt-2"
                >
                  Open Escrow
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
