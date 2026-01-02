import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Escrow 101 | Haven Escrow",
  description:
    "Learn how the escrow process works from opening to closing. Understand the steps, parties involved, and what to expect during your real estate transaction.",
};

const escrowSteps = [
  {
    number: 1,
    title: "Opening Escrow",
    description:
      "Escrow begins when the buyer and seller have an accepted purchase agreement. The escrow company receives the agreement and opens a file, assigning an escrow number and escrow officer to your transaction.",
    details: [
      "Escrow instructions are prepared based on the purchase agreement",
      "Earnest money deposit is collected from the buyer",
      "Preliminary title report is ordered",
      "All parties receive confirmation of escrow opening",
    ],
  },
  {
    number: 2,
    title: "Document Collection & Title Review",
    description:
      "The escrow officer coordinates the collection of required documents and reviews the preliminary title report to identify any issues that need to be resolved.",
    details: [
      "Preliminary title report is reviewed for liens, encumbrances, and ownership",
      "Any title issues are identified and addressed",
      "Lender requirements are tracked (if financing)",
      "Buyer and seller information is verified",
    ],
  },
  {
    number: 3,
    title: "Contingency Period",
    description:
      "During the contingency period, the buyer typically completes inspections, appraisal (if financed), and other due diligence. The escrow officer tracks contingency removal dates and coordinates any amendments.",
    details: [
      "Inspection reports are reviewed",
      "Appraisal is completed (if applicable)",
      "Repair requests and credits are negotiated",
      "Contingencies are removed according to the agreement",
    ],
  },
  {
    number: 4,
    title: "Final Document Preparation",
    description:
      "As the closing date approaches, final documents are prepared. The lender sends loan documents (if applicable), and the escrow officer prepares closing statements showing all debits, credits, and prorations.",
    details: [
      "Loan documents are received and reviewed",
      "Closing statements are prepared",
      "Final figures are calculated including prorations",
      "Signing appointments are scheduled",
    ],
  },
  {
    number: 5,
    title: "Signing",
    description:
      "Both parties sign their respective documents. The buyer typically signs loan documents and the deed of trust, while the seller signs the grant deed and other transfer documents.",
    details: [
      "Signatures are notarized where required",
      "Documents are reviewed for completeness",
      "Any outstanding conditions are confirmed",
      "Final funds due from buyer are confirmed",
    ],
  },
  {
    number: 6,
    title: "Funding & Recording",
    description:
      "Once all conditions are met and documents are signed, the lender funds the loan (if applicable). The escrow company then coordinates recording of the deed with the county recorder's office.",
    details: [
      "Lender wire funds to escrow",
      "All conditions are verified as satisfied",
      "Documents are sent for recording",
      "Recording confirmation is received",
    ],
  },
  {
    number: 7,
    title: "Closing & Disbursement",
    description:
      "After recording, escrow is officially closed. Funds are disbursed according to the escrow instructions, and all parties receive their final closing statements and documents.",
    details: [
      "Seller proceeds are disbursed",
      "Agent commissions are paid",
      "Liens and payoffs are satisfied",
      "Final closing packages are sent to all parties",
    ],
  },
];

const partiesInvolved = [
  {
    title: "Escrow Company",
    description:
      "Acts as a neutral third party, holding funds and documents until all conditions of the transaction are met.",
    responsibilities: [
      "Prepares and processes escrow instructions",
      "Coordinates document signing",
      "Manages funds disbursement",
      "Coordinates recording",
    ],
  },
  {
    title: "Title Company",
    description:
      "Researches property ownership history and issues title insurance to protect against title defects.",
    responsibilities: [
      "Issues preliminary title report",
      "Resolves title issues",
      "Issues title insurance policy",
      "Facilitates recording",
    ],
  },
  {
    title: "Lender (if financed)",
    description:
      "Provides financing for the buyer and requires certain conditions to be met before funding.",
    responsibilities: [
      "Orders appraisal",
      "Underwrites the loan",
      "Prepares loan documents",
      "Funds the loan",
    ],
  },
  {
    title: "Real Estate Agents",
    description:
      "Represent the buyer and/or seller and coordinate many aspects of the transaction.",
    responsibilities: [
      "Negotiate terms",
      "Coordinate inspections",
      "Communicate with parties",
      "Ensure timeline adherence",
    ],
  },
];

export default function Escrow101Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Escrow 101</h1>
              <p className="text-lg text-[var(--text-muted)]">
                Understanding the escrow process can help make your real estate
                transaction smoother. This guide explains what escrow is, how it
                works, and what to expect from opening to closing.
              </p>
            </div>
          </div>
        </section>

        {/* What is Escrow */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6">What is escrow?</h2>
              <p className="text-[var(--text-muted)] mb-6">
                Escrow is a financial and legal arrangement where a neutral
                third party temporarily holds money, documents, and other items
                on behalf of two parties involved in a transaction. The escrow
                company ensures that neither party receives what they&apos;re
                owed until all conditions of the agreement have been met.
              </p>
              <p className="text-[var(--text-muted)] mb-6">
                In real estate, escrow protects both the buyer and seller by
                ensuring that:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5"
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
                  <span className="text-[var(--text-dark)]">
                    The buyer&apos;s funds are held securely until all
                    conditions are satisfied
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5"
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
                  <span className="text-[var(--text-dark)]">
                    The seller&apos;s property isn&apos;t transferred until
                    payment is confirmed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5"
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
                  <span className="text-[var(--text-dark)]">
                    All documents are properly executed and recorded
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5"
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
                  <span className="text-[var(--text-dark)]">
                    Funds are disbursed according to the agreed-upon terms
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Escrow Process */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">The escrow process</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Here&apos;s a step-by-step overview of what happens during a
                typical escrow transaction.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {escrowSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-[var(--navy)] text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm mb-3">{step.title}</h3>
                      <p className="text-[var(--text-muted)] mb-4">
                        {step.description}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm"
                          >
                            <svg
                              className="w-4 h-4 text-[var(--gold)] flex-shrink-0 mt-0.5"
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
                            <span className="text-[var(--text-dark)]">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parties Involved */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Parties involved in escrow</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Multiple parties work together to ensure a successful closing.
                Here&apos;s who does what.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {partiesInvolved.map((party, index) => (
                <div
                  key={index}
                  className="bg-[var(--light-gray)] rounded-xl p-6"
                >
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {party.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] mb-4">
                    {party.description}
                  </p>
                  <ul className="space-y-2">
                    {party.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg
                          className="w-4 h-4 text-[var(--gold)]"
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
                        <span className="text-[var(--text-dark)]">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Note */}
        <section className="py-16 bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h2 className="heading-md mb-4">How long does escrow take?</h2>
              <p className="text-[var(--text-muted)] mb-4">
                The typical escrow period for a residential transaction is 30 to
                45 days, though this can vary based on several factors:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    May close faster:
                  </h3>
                  <ul className="text-sm text-[var(--text-muted)] space-y-1">
                    <li>• Cash transactions</li>
                    <li>• All parties responsive</li>
                    <li>• Clean title</li>
                    <li>• No repair negotiations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    May take longer:
                  </h3>
                  <ul className="text-sm text-[var(--text-muted)] space-y-1">
                    <li>• Complex financing</li>
                    <li>• Title issues to resolve</li>
                    <li>• Extensive repairs needed</li>
                    <li>• Multiple contingencies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-8">Continue learning</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/faq" className="btn-outline">
                View FAQ
              </Link>
              <Link href="/glossary" className="btn-outline">
                Escrow Glossary
              </Link>
              <Link href="/services" className="btn-outline">
                Our Services
              </Link>
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
              Now that you understand the process, start your transaction with
              confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--navy)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
