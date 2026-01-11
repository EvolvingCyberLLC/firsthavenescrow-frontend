import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow Fees | Haven Escrow",
  description:
    "Transparent escrow fee information for residential, commercial, and specialty transactions. Request a quote or contact us for detailed pricing.",
};

const feeCategories = [
  {
    title: "Residential Purchase & Sale",
    range: "$1,500 – $2,500",
    description:
      "Standard residential transactions typically fall within this range based on purchase price and complexity.",
  },
  {
    title: "Refinance",
    range: "$750 – $1,200",
    description:
      "Refinance escrow fees vary based on loan amount and lender requirements.",
  },
  {
    title: "Commercial Escrow",
    range: "Quote Required",
    description:
      "Commercial transaction fees are based on purchase price, complexity, and specific requirements.",
  },
  {
    title: "1031 Exchange",
    range: "Quote Required",
    description:
      "Exchange transactions require coordination with qualified intermediaries and may involve multiple properties.",
  },
  {
    title: "Holding Escrow",
    range: "$500 – $1,000",
    description:
      "Fees for holding escrow depend on duration and complexity of the agreement.",
  },
];

const includedItems = [
  "Escrow instructions preparation",
  "Document coordination and processing",
  "Funds management and disbursement",
  "Recording coordination",
  "Communication with all parties",
  "Closing statement preparation",
];

const notChargedItems = [
  "Hidden administrative fees",
  "Document storage fees",
  "Email or phone support fees",
  "Standard notary coordination",
];

export default function FeesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[50vh]">
          <Image
            src="/fees.jpg"
            alt="Haven Escrow Fees"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(11, 44, 61, 0.7)" }}
          />
          <div className="container-custom relative z-10 py-20 min-h-[50vh] flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Escrow Fees
              </h1>
              <p className="text-xl text-gray-200">
                We believe in transparent pricing. Below you&apos;ll find
                general information about our fee structure. For specific quotes
                based on your transaction, contact our team.
              </p>
            </div>
          </div>
        </section>

        {/* Fee Schedule */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">Fee schedule</h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-3xl">
              Escrow fees vary based on transaction type, purchase price or loan
              amount, and complexity. The ranges below provide general guidance
              for common transaction types.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feeCategories.map((category, index) => (
                <div
                  key={index}
                  className="card border border-[var(--border-color)]"
                >
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {category.title}
                  </h3>
                  <p className="text-2xl font-bold text-[var(--gold)] mb-3">
                    {category.range}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--text-muted)] mt-8 bg-[var(--light-gray)] p-4 rounded-lg max-w-3xl">
              <strong>Note:</strong> These are estimated ranges only. Actual
              fees may vary based on specific transaction requirements, property
              location, and other factors. Additional charges may apply for rush
              orders, mobile notary services, or special handling requirements.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/fees2.jpg"
                alt="Haven Escrow Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-lg mb-6">What&apos;s included</h2>
                <p className="text-[var(--text-muted)] mb-6">
                  Our escrow fees cover the core services needed to complete
                  your transaction:
                </p>
                <ul className="space-y-3">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-[var(--gold)] flex-shrink-0"
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
                      <span className="text-[var(--text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="heading-lg mb-6">
                  What we don&apos;t charge for
                </h2>
                <p className="text-[var(--text-muted)] mb-6">
                  Unlike some escrow providers, we don&apos;t add unnecessary
                  fees:
                </p>
                <ul className="space-y-3">
                  {notChargedItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0"
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
                      <span className="text-[var(--text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Who Pays */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6 text-center">
                Who pays escrow fees?
              </h2>
              <p className="text-[var(--text-muted)] mb-6 text-center">
                The allocation of escrow fees varies by transaction type and is
                typically determined by the purchase agreement or local custom.
              </p>

              <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-2">
                      In California
                    </h3>
                    <p className="text-[var(--text-muted)]">
                      It&apos;s common for buyers and sellers to each pay their
                      own escrow fees, though this can be negotiated as part of
                      the purchase agreement. In some areas, the fee split
                      follows local custom.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-2">
                      Refinance transactions
                    </h3>
                    <p className="text-[var(--text-muted)]">
                      Escrow fees for refinances are typically paid by the
                      borrower and may be included in closing costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-2">
                      Your agreement controls
                    </h3>
                    <p className="text-[var(--text-muted)]">
                      The purchase agreement or escrow instructions will specify
                      how fees are allocated for your specific transaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Quote */}
        <section className="py-16 bg-[var(--light-gray)]">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4">Need a specific quote?</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              Contact our team with your transaction details and we&apos;ll
              provide a detailed fee estimate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <a href="tel:7147868912" className="btn-outline">
                Call (714) 786-8912
              </a>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm text-[var(--text-muted)]">
                <strong>Disclaimer:</strong> Fee information provided on this
                page is for general guidance only and does not constitute a
                binding quote. Actual fees may vary based on transaction
                complexity, property location, special requirements, and other
                factors. A detailed fee disclosure will be provided as part of
                your escrow instructions.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--navy)] py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to open escrow?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Get started online and we&apos;ll provide complete fee information
              with your escrow instructions.
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
