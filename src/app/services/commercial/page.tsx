import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Escrow Services | Haven Escrow",
  description:
    "Commercial escrow services for business and investment properties in Southern California. Clear coordination, secure handling, and structured closings.",
  openGraph: {
    title: "Commercial Escrow Services | Haven Escrow",
    description:
      "Commercial escrow services for investment and business properties in Southern California. Structured coordination, clear communication, and secure handling.",
  },
};

const whoIsFor = [
  "Buyers and sellers of commercial property",
  "Investors and investment groups",
  "Business owners transferring real property interests",
  "Parties involved in income-producing or mixed-use properties",
  "Transactions requiring customized escrow coordination",
];

const whatWeHandle = [
  "Opening escrow and confirming commercial escrow instructions",
  "Coordinating documents among buyers, sellers, agents, lenders, and attorneys",
  "Tracking negotiated terms and escrow conditions",
  "Facilitating signatures and approvals",
  "Coordinating funding and disbursement per instructions",
  "Managing timelines based on transaction requirements",
];

const transactionTypes = [
  "Office and retail properties",
  "Industrial and warehouse properties",
  "Multi-unit residential investments",
  "Mixed-use developments",
  "Vacant commercial land",
  "Business-related real estate transfers",
];

const whatYouNeed = [
  "Executed purchase or sale agreement",
  "Entity documentation (if applicable)",
  "Contact information for all involved parties",
  "Lender or financing details (if applicable)",
  "Additional documents based on negotiated terms",
];

const timelineSteps = [
  {
    title: "Escrow opened",
    description: "Transaction documents and instructions are received.",
  },
  {
    title: "Document coordination",
    description: "Required documents and approvals are gathered.",
  },
  {
    title: "Condition tracking",
    description: "Escrow conditions and negotiated terms are monitored.",
  },
  {
    title: "Funding preparation",
    description: "Funding requirements are confirmed prior to close.",
  },
  {
    title: "Closing & disbursement",
    description: "Funds and documents are disbursed per written instructions.",
  },
];

const faqs = [
  {
    question: "How is commercial escrow different from residential escrow?",
    answer:
      "Commercial escrow often involves additional documentation, entity structures, and negotiated conditions, requiring more customized coordination.",
  },
  {
    question: "Do commercial transactions take longer?",
    answer:
      "They can, depending on financing, due diligence, and transaction complexity.",
  },
  {
    question: "Can escrow coordinate with attorneys or advisors?",
    answer: "Yes. We coordinate with authorized parties as instructed.",
  },
];

const whyChooseUs = [
  "Structured handling of complex transactions",
  "Clear coordination across multiple parties",
  "Attention to transaction-specific instructions",
  "Secure handling of sensitive information",
  "Consistent communication throughout the process",
];

export default function CommercialServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Commercial Escrow</h1>
              <p className="text-lg text-[var(--text-muted)] mb-8">
                Commercial escrow involves transactions that often include
                additional parties, documents, and negotiated terms. At First
                Haven Escrow, we coordinate commercial escrow files with a
                structured, detail-oriented approach to help ensure all written
                instructions and conditions are satisfied prior to closing.
              </p>
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">Who this service is for</h2>
              <ul className="space-y-3">
                {whoIsFor.map((item, index) => (
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
          </div>
        </section>

        {/* What We Handle */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-lg mb-6">What we handle</h2>
                <ul className="space-y-3">
                  {whatWeHandle.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                      <span className="text-[var(--text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[var(--text-muted)] mt-6">
                  Commercial escrow files are handled according to written
                  instructions and transaction-specific agreements.
                </p>
              </div>

              <div>
                <h2 className="heading-lg mb-6">What you may need</h2>
                <p className="text-[var(--text-muted)] mb-4">
                  Commercial transactions vary, but often require:
                </p>
                <ul className="space-y-3">
                  {whatYouNeed.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="text-[var(--text-dark)]">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-[var(--text-muted)] mt-6 bg-white p-4 rounded-lg">
                  Specific requirements are confirmed once escrow is opened.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Transaction Types */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">
                Common commercial transactions
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {transactionTypes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-[var(--light-gray)] rounded-lg p-4"
                  >
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-[var(--text-dark)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">
              Typical commercial escrow timeline
            </h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-2xl">
              Every transaction is different, but here&apos;s a general overview
              of the commercial escrow process.
            </p>

            <div className="max-w-3xl">
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[var(--navy)] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div className="w-0.5 bg-[var(--border-color)] flex-1 my-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-[var(--navy)] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-[var(--text-muted)] mt-8 bg-white p-4 rounded-lg max-w-3xl">
              <strong>Note:</strong> Commercial timelines vary based on
              complexity, financing, and negotiated terms.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">
              Common questions about commercial escrow
            </h2>
            <div className="max-w-3xl space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[var(--light-gray)] rounded-xl p-6"
                >
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-[var(--text-muted)]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-12 bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--gold)] max-w-3xl">
              <h3 className="font-semibold text-[var(--navy)] mb-2">
                Important security reminder
              </h3>
              <p className="text-[var(--text-muted)]">
                Always verify wiring instructions by phone using a trusted
                number before sending funds. Do not rely on wiring instructions
                sent by email or text.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">
              Why clients choose us for commercial escrow
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-[var(--light-gray)] rounded-lg p-4"
                >
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--navy)] py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Starting a commercial transaction?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Open escrow online and our team will confirm next steps.
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
