import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow Services | Haven Escrow",
  description:
    "Residential, refinance, commercial, and specialty escrow services across Southern California. View transaction types or open escrow online.",
};

const coreServices = [
  {
    title: "Residential Purchase & Sale",
    description:
      "Escrow support for standard residential real estate transactions, including coordination between buyers, sellers, agents, and lenders.",
    href: "/services/residential",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Refinance Escrow",
    description:
      "Efficient handling of refinance transactions with careful tracking of lender requirements, documents, and funding steps.",
    href: "/services/refinance",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Commercial Escrow",
    description:
      "Escrow services for commercial and investment properties, structured to support more complex transaction requirements.",
    href: "/services/commercial",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    title: "1031 Exchange",
    description:
      "Time-sensitive exchange transactions coordinated with qualified intermediaries and involved parties.",
    href: "/services/1031-exchange",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
        />
      </svg>
    ),
  },
];

const specialtyServices = [
  {
    title: "Probate Escrow",
    description:
      "Escrow support for probate-related property transfers, with attention to court-required documentation and timelines.",
    href: "/services/probate",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Holding Escrow",
    description:
      "Neutral third-party holding of funds or documents until agreed-upon conditions are satisfied.",
    href: "/services/holding-escrow",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "REO / Bank-Owned",
    description:
      "Escrow services for bank-owned and lender-controlled transactions with structured compliance handling.",
    href: "/services/reo",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
  {
    title: "Short Sale Escrow",
    description:
      "Escrow coordination for short sale transactions involving lender approvals and additional documentation.",
    href: "/services/short-sale",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
  },
];

const processPoints = [
  "Clear confirmation of escrow instructions",
  "Coordination with all involved parties",
  "Secure handling of documents and funds",
  "Structured tracking toward closing",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Our Escrow Services</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-3xl mx-auto mb-8">
              Haven Escrow provides escrow services for a wide range of real
              estate and specialty transactions. Whether you are buying,
              selling, refinancing, or handling a more complex transfer, our
              team coordinates the process from opening to close with clear
              communication and structured handling of documents and funds.
            </p>
            <p className="text-[var(--text-muted)] mb-8">
              Select a service below to learn more, or open escrow and
              we&apos;ll guide you from there.
            </p>
            <Link href="/open-escrow" className="btn-primary">
              Open Escrow
            </Link>
          </div>
        </section>

        {/* Core Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">Core transaction types</h2>
            <p className="text-[var(--text-muted)] mb-10">
              Our most common escrow services for standard real estate
              transactions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="card border border-[var(--border-color)] hover:border-[var(--gold)] group flex gap-6"
                >
                  <div className="text-[var(--gold)] flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-[var(--gold)] text-sm font-medium mt-3 group-hover:underline">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Specialty Services */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">Specialty escrow services</h2>
            <p className="text-[var(--text-muted)] mb-10">
              We also support a range of specialty transactions that require
              additional coordination or documentation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {specialtyServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white card border border-[var(--border-color)] hover:border-[var(--gold)] group flex gap-6"
                >
                  <div className="text-[var(--gold)] flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[var(--text-muted)] text-sm">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-[var(--gold)] text-sm font-medium mt-3 group-hover:underline">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Not Sure Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="bg-[var(--light-gray)] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="heading-md mb-4">
                Not sure which escrow service you need?
              </h2>
              <p className="text-[var(--text-muted)] mb-8">
                Some transactions don&apos;t fit neatly into a category. If
                you&apos;re unsure which service applies, you can open escrow
                directly or contact our team and we&apos;ll help route your
                transaction correctly.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/open-escrow" className="btn-primary">
                  Open Escrow
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Reassurance */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-lg mb-8">
                A consistent process across every transaction
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {processPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-left"
                  >
                    <svg
                      className="w-6 h-6 text-[var(--gold)] flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-[var(--text-dark)]">{point}</span>
                  </div>
                ))}
              </div>
              <p className="text-[var(--text-muted)]">
                Our role is to keep the transaction organized, transparent, and
                moving forward.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--navy)] py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Open escrow online and our team will follow up with next steps.
            </p>
            <Link href="/open-escrow" className="btn-primary">
              Open Escrow
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
