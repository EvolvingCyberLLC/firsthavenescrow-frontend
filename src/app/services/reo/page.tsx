import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "REO & Bank-Owned Escrow | Haven Escrow",
  description:
    "Escrow services for REO and bank-owned property transactions, coordinating lender requirements and institutional documentation.",
  openGraph: {
    title: "REO & Bank-Owned Escrow | Haven Escrow",
    description:
      "Escrow services for REO and bank-owned property transactions, coordinating lender requirements and institutional documentation.",
  },
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Buyers",
    description:
      "Investors and homebuyers looking for distressed properties and needing guidance.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Lenders",
    description:
      "Banks and financial institutions managing foreclosed assets and REO portfolios.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Real Estate Agents",
    description:
      "Agents specializing in REO listings requiring responsive escrow partners.",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
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
    title: "Institutional Sellers",
    description:
      "Asset management companies handling bulk sales and dispositions.",
  },
];

// What We Handle
const whatWeHandle = [
  "Opening escrow and obtaining title reports promptly.",
  "Coordinating specific lender instructions and addenda.",
  "Tracking institutional documentation and deadlines.",
  "Facilitating correct document execution by authorized signers.",
  "Coordinating final closing and secure disbursement of funds.",
];

// REO Transaction Considerations
const considerations = [
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Standardized Lender Addenda",
    description:
      "Banks typically require their own specific addenda to supersede standard purchase contracts. We ensure these are prioritized.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Fixed Timelines",
    description:
      "Institutional sellers often operate on strict fiscal quarters or monthly deadlines. Delays are rarely tolerated.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Limited Negotiation",
    description:
      "Terms are generally non-negotiable once the offer is accepted. We ensure all terms are clearly reflected in instructions.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Strict Compliance",
    description:
      "Due to regulatory oversight, file documentation must be impeccable. We maintain rigorous audit standards.",
  },
];

// Process Steps
const processSteps = [
  {
    number: 1,
    title: "Escrow Opened",
    description: "Contract received and file opened immediately.",
  },
  {
    number: 2,
    title: "Instructions Review",
    description: "Lender-specific instructions analyzed.",
  },
  {
    number: 3,
    title: "Coordination",
    description: "Documents and conditions actively tracked.",
  },
  {
    number: 4,
    title: "Signatures",
    description: "Approvals obtained from authorized officers.",
  },
  {
    number: 5,
    title: "Closing",
    description: "Recording and disbursement of funds.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Structured Handling",
    description:
      "Organized workflows designed specifically for high-volume institutional needs.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    title: "Neutral Coordination",
    description:
      "Unbiased facilitation between corporate sellers and private buyers.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    title: "Clear Tracking",
    description:
      "Transparent monitoring of institutional conditions and deadlines.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
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
    title: "Instruction-Based",
    description:
      "Rigorous adherence to written instructions to protect all parties.",
  },
];

export default function REOPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with Background Image and Navy Overlay */}
        <section className="relative min-h-[500px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/img5.jpeg"
              alt="REO Bank-Owned Property Escrow"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Navy Overlay */}
            <div className="absolute inset-0 bg-[var(--navy)] opacity-85"></div>
          </div>

          {/* Hero Content */}
          <div className="container-custom relative z-10 py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                REO / Bank-Owned Escrow
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Specialized escrow services for Real Estate Owned transactions,
                ensuring strict compliance, efficiency, and neutrality for
                lenders and buyers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/open-escrow" className="btn-primary">
                  Open Escrow
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--navy)] transition-all duration-200 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Coordination Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg mb-6">
                Professional Coordination for Complex Transactions
              </h2>
              <p className="text-[var(--text-muted)] text-lg leading-relaxed">
                REO transactions require a specialized approach that differs
                significantly from standard residential sales. First Haven
                Escrow acts as the neutral third party, coordinating strictly
                with institutional sellers, asset managers, and buyers to ensure
                all conditions of the bank-owned property sale are met
                efficiently and within the required timelines.
              </p>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">
              Who This Service Is For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whoIsForItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-[var(--gold)] mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Escrow Handles in an REO Transaction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">
                  What Escrow Handles in an REO Transaction
                </h2>
                <p className="text-[var(--text-muted)] mb-8">
                  Our team is experienced in the specific nuances of bank-owned
                  sales. We handle the heavy lifting to ensure a smooth closing
                  process.
                </p>
                <ul className="space-y-4">
                  {whatWeHandle.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-[var(--gold)]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[var(--text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/img7.jpeg"
                    alt="Document signing for REO transaction"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REO Transaction Considerations */}
        <section className="section-padding bg-[var(--navy)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                REO Transaction Considerations
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Understanding the unique characteristics of REO deals helps
                manage expectations and ensures a smoother process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {considerations.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[var(--gold)] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical REO Escrow Process */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">
              Typical REO Escrow Process
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[var(--navy)] text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Use First Haven for REO Transactions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg text-center mb-12">
              Why Use First Haven for REO Transactions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-[var(--light-gray)] rounded-xl"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center flex-shrink-0">
                    <div className="text-[var(--gold)]">{item.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[var(--navy)]">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Partner with the REO Experts
              </h2>
              <p className="text-gray-300 mb-8">
                Reliable, efficient, and secure escrow services for your
                bank-owned property transactions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/open-escrow" className="btn-primary">
                  Open Escrow
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--navy)] transition-all duration-200 inline-flex items-center justify-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
