import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Escrow Services | First Haven Escrow",
  description:
    "Professional residential escrow services for home purchases and sales in Southern California. Clear communication, secure handling, and on-time closings.",
};

const whoIsFor = [
  "Home buyers",
  "Home sellers",
  "Real estate agents",
  "Investors purchasing or selling residential property",
  "Parties involved in standard residential real estate transactions",
];

const whatWeHandle = [
  "Opening escrow and confirming instructions",
  "Coordinating required documents and disclosures",
  "Managing timelines and transaction milestones",
  "Facilitating signatures and approvals",
  "Coordinating with lenders and other involved parties",
  "Preparing for closing based on transaction requirements",
  "Disbursing funds and documents according to instructions",
];

const whatYouNeed = [
  "Fully executed purchase agreement",
  "Identification for signing",
  "Contact information for all parties involved",
  "Lender information (if applicable)",
  "Additional documents requested based on the transaction",
];

const timelineSteps = [
  {
    title: "Escrow is opened",
    description:
      "Once a purchase agreement is fully executed, escrow can be opened and instructions prepared.",
  },
  {
    title: "Instructions and documentation",
    description:
      "Parties sign escrow instructions and provide required documents.",
  },
  {
    title: "Contingency and condition tracking",
    description:
      "Inspections, appraisals, and other contingencies are tracked and cleared.",
  },
  {
    title: "Final review and funding",
    description:
      "Loan documents are signed, final figures confirmed, and funding coordinated.",
  },
  {
    title: "Closing and disbursement",
    description:
      "Documents are recorded, escrow closes, and funds are disbursed.",
  },
];

const faqs = [
  {
    question: "How long does residential escrow take?",
    answer:
      "Most residential escrow transactions close in 30 to 45 days, depending on financing, inspections, and other factors. Cash transactions may close faster.",
  },
  {
    question: "Who pays escrow fees?",
    answer:
      "This is typically determined by the purchase agreement and local custom. In Southern California, it's common for buyers and sellers to each pay their own escrow fees.",
  },
  {
    question: "Can escrow close early or late?",
    answer:
      "Yes. Early closing requires all parties to be ready and all conditions met. Late closing may require an extension agreed to by all parties.",
  },
  {
    question: "How are funds handled securely?",
    answer:
      "Funds are held in a trust account at a federally insured financial institution, separate from the escrow company's operating funds. Always verify wiring instructions by phone.",
  },
];

const whyChooseUs = [
  "Clear and consistent communication",
  "Structured process with defined steps",
  "Attention to detail throughout the transaction",
  "Professional coordination with all parties",
  "Secure handling of sensitive information",
];

export default function ResidentialServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">
                Residential Purchase & Sale Escrow
              </h1>
              <p className="text-lg text-[var(--text-muted)] mb-8">
                Residential escrow is a neutral process that helps ensure all
                conditions of a home purchase or sale are satisfied before
                ownership and funds are transferred. At First Haven Escrow, we
                coordinate the escrow process so buyers, sellers, agents, and
                lenders stay aligned from opening to close.
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
                  Our role is to act as a neutral third party, following written
                  instructions and ensuring all conditions are met before
                  closing.
                </p>
              </div>

              <div>
                <h2 className="heading-lg mb-6">What you may need</h2>
                <p className="text-[var(--text-muted)] mb-4">
                  Requirements vary by transaction, but commonly include:
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
                  We&apos;ll confirm specific requirements once escrow is
                  opened.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">Typical escrow timeline</h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-2xl">
              Every transaction is different, but here&apos;s a general overview
              of the residential escrow process.
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

            <p className="text-sm text-[var(--text-muted)] mt-8 bg-[var(--light-gray)] p-4 rounded-lg max-w-3xl">
              <strong>Note:</strong> Timelines vary based on transaction
              complexity, financing, and external factors.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">
              Common questions about residential escrow
            </h2>
            <div className="max-w-3xl space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
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
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="bg-[var(--light-gray)] rounded-xl p-8 border-l-4 border-[var(--gold)] max-w-3xl">
              <h3 className="font-semibold text-[var(--navy)] mb-2">
                Important security reminder
              </h3>
              <p className="text-[var(--text-muted)]">
                Always verify wiring instructions by phone using a trusted
                number before sending funds. Do not rely on wiring instructions
                received by email or text.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">
              Why clients choose us for residential escrow
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-lg p-4"
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
              Ready to open residential escrow?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Submit your transaction details and we&apos;ll guide you through
              the next steps.
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
