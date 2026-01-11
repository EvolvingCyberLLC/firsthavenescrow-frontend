import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
  HiOutlineHome,
  HiOutlineArrowPath,
  HiOutlineBuildingOffice2,
  HiOutlineArrowsRightLeft,
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlineBuildingLibrary,
  HiOutlineArrowTrendingDown,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Escrow Services | Haven Escrow",
  description:
    "Residential, refinance, commercial, and specialty escrow services across  California. View transaction types or open escrow online.",
};

const coreServices = [
  {
    title: "Residential Purchase & Sale",
    description:
      "Escrow support for standard residential real estate transactions, including coordination between buyers, sellers, agents, and lenders.",
    href: "/services/residential",
    icon: HiOutlineHome,
  },
  {
    title: "Refinance Escrow",
    description:
      "Efficient handling of refinance transactions with careful tracking of lender requirements, documents, and funding steps.",
    href: "/services/refinance",
    icon: HiOutlineArrowPath,
  },
  {
    title: "Commercial Escrow",
    description:
      "Escrow services for commercial and investment properties, structured to support more complex transaction requirements.",
    href: "/services/commercial",
    icon: HiOutlineBuildingOffice2,
  },
  {
    title: "1031 Exchange",
    description:
      "Time-sensitive exchange transactions coordinated with qualified intermediaries and involved parties.",
    href: "/services/1031-exchange",
    icon: HiOutlineArrowsRightLeft,
  },
];

const specialtyServices = [
  {
    title: "Probate Escrow",
    description:
      "Escrow support for probate-related property transfers, with attention to court-required documentation and timelines.",
    href: "/services/probate",
    icon: HiOutlineDocumentText,
  },
  {
    title: "Holding Escrow",
    description:
      "Neutral third-party holding of funds or documents until agreed-upon conditions are satisfied.",
    href: "/services/holding-escrow",
    icon: HiOutlineLockClosed,
  },
  {
    title: "REO / Bank-Owned",
    description:
      "Escrow services for bank-owned and lender-controlled transactions with structured compliance handling.",
    href: "/services/reo",
    icon: HiOutlineBuildingLibrary,
  },
  {
    title: "Short Sale Escrow",
    description:
      "Escrow coordination for short sale transactions involving lender approvals and additional documentation.",
    href: "/services/short-sale",
    icon: HiOutlineArrowTrendingDown,
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
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <Image
            src="/img13.jpg"
            alt="Haven Escrow Services"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(11, 44, 61, 0.7)" }}
          />
          <div className="container-custom relative z-10 text-center py-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Escrow Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-6">
              Haven Escrow provides escrow services for a wide range of real
              estate and specialty transactions. Whether you are buying,
              selling, refinancing, or handling a more complex transfer, our
              team coordinates the process from opening to close with clear
              communication and structured handling of documents and funds.
            </p>
            <p className="text-gray-300 mb-8">
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
              {coreServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="card border border-[var(--border-color)] hover:border-[var(--gold)] group flex gap-6"
                  >
                    <div className="text-[var(--gold)] flex-shrink-0">
                      <IconComponent className="w-10 h-10" />
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
                );
              })}
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
              {specialtyServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="bg-white card border border-[var(--border-color)] hover:border-[var(--gold)] group flex gap-6"
                  >
                    <div className="text-[var(--gold)] flex-shrink-0">
                      <IconComponent className="w-10 h-10" />
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
                );
              })}
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
                    <HiOutlineCheckCircle className="w-6 h-6 text-[var(--gold)] flex-shrink-0" />
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
