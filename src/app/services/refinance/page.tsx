import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refinance Escrow Services | Haven Escrow",
  description:
    "Refinance escrow services for residential properties in Southern California. Clear coordination with lenders, secure handling, and structured closings.",
  openGraph: {
    title: "Refinance Escrow Services | Haven Escrow",
    description:
      "Refinance escrow services for residential properties in Southern California. Clear coordination with lenders, secure handling, and structured closings.",
  },
};

const whoIsFor = [
  "Homeowners refinancing an existing mortgage",
  "Borrowers working with institutional or private lenders",
  "Lenders requiring escrow coordination",
  "Parties involved in residential refinance transactions",
];

const whatWeHandle = [
  "Opening refinance escrow and confirming instructions",
  "Coordinating lender documents and requirements",
  "Facilitating borrower signatures",
  "Managing payoff of existing liens as instructed",
  "Tracking funding and recording requirements",
  "Disbursing funds according to escrow instructions",
];

const whatYouNeed = [
  "Identification for signing",
  "Lender contact information",
  "Existing loan information",
  "Additional documents requested by the lender",
];

const timelineSteps = [
  {
    title: "Escrow opened",
    description: "Lender instructions and borrower information are received.",
  },
  {
    title: "Document preparation",
    description: "Loan documents are prepared and delivered for signing.",
  },
  {
    title: "Signing",
    description: "Borrower completes required signatures.",
  },
  {
    title: "Funding & rescission period",
    description: "Funding occurs after any applicable waiting period.",
  },
  {
    title: "Recording & disbursement",
    description: "Documents are recorded and funds disbursed as instructed.",
  },
];

const faqs = [
  {
    question: "Is refinance escrow faster than a purchase escrow?",
    answer:
      "Often yes, but timelines depend on lender requirements, documentation, and applicable waiting periods.",
  },
  {
    question: "Is there a rescission period?",
    answer:
      "Some refinance transactions include a mandatory rescission period, depending on loan type and property.",
  },
  {
    question: "When are funds disbursed?",
    answer:
      "Funds are disbursed according to lender instructions after all conditions are satisfied.",
  },
];

const whyChooseUs = [
  "Clear coordination with lenders",
  "Structured handling of refinance documents",
  "Timely communication with borrowers",
  "Secure processing of sensitive information",
  "Attention to funding and recording requirements",
];

export default function RefinanceServicePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[50vh]">
          <Image
            src="/refinance.jpg"
            alt="Refinance Escrow Services"
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
                Refinance Escrow
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Refinance escrow helps ensure that lender requirements are
                satisfied before loan funds are disbursed and recorded. At Haven
                Escrow, we coordinate the refinance process with lenders and
                borrowers to keep documentation, timing, and funding aligned.
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
                  All steps are completed according to written instructions
                  provided by the lender and involved parties.
                </p>
              </div>

              <div>
                <h2 className="heading-lg mb-6">What you may need</h2>
                <p className="text-[var(--text-muted)] mb-4">
                  Requirements vary by lender, but commonly include:
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
                  We will confirm specific requirements once escrow is opened.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-4">Typical refinance timeline</h2>
            <p className="text-[var(--text-muted)] mb-10 max-w-2xl">
              Every transaction is different, but here&apos;s a general overview
              of the refinance escrow process.
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
              <strong>Note:</strong> Timelines vary based on lender requirements
              and transaction details.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">Common questions</h2>
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
                number before sending funds. Do not rely on instructions
                received by email or text.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">
              Why clients choose us for refinance escrow
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
              Planning to refinance?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Open escrow online and we&apos;ll guide you through the next
              steps.
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
