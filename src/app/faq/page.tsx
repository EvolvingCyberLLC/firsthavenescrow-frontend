import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Haven Escrow",
  description:
    "Get answers to common questions about the escrow process, fees, timelines, and what to expect when working with Haven Escrow.",
};

const faqs = [
  {
    question: "What is escrow?",
    answer:
      "Escrow is a neutral third-party arrangement where funds, documents, and instructions are held until all conditions of a transaction are met. In real estate, an escrow company ensures that the buyer's funds and the seller's property transfer only when all agreed-upon conditions have been satisfied.",
  },
  {
    question: "How long does escrow typically take?",
    answer:
      "Most residential escrow transactions close in 30 to 45 days, though this can vary based on financing, inspections, and other contingencies. Cash transactions may close faster, while complex transactions or those involving special circumstances may take longer.",
  },
  {
    question: "Who pays escrow fees?",
    answer:
      "The allocation of escrow fees is typically determined by the purchase agreement and local custom. In Southern California, it's common for buyers and sellers to each pay their own escrow fees, though this can be negotiated. For refinances, the borrower typically pays escrow fees as part of closing costs.",
  },
  {
    question: "What do I need to bring to signing?",
    answer:
      "You'll typically need a valid government-issued photo ID (driver's license, passport, or state ID). If you're a buyer, you may need certified funds (cashier's check or wire transfer) for any amount due. We'll provide specific instructions before your signing appointment.",
  },
  {
    question: "How do I safely verify wiring instructions?",
    answer:
      "Always verify wiring instructions by calling a phone number you know to be legitimate — not a number provided in an email. Wire fraud is a real risk in real estate. We will never change wiring instructions by email. If you receive an email requesting changes to wiring instructions, call our office immediately to verify.",
  },
  {
    question: "What happens if something changes during escrow?",
    answer:
      "Changes such as repair credits, price adjustments, or timeline extensions are common and can be handled through amendments or addenda to the purchase agreement. Your escrow officer will coordinate the documentation and ensure all parties sign off on any changes.",
  },
  {
    question: "What is a preliminary title report?",
    answer:
      "A preliminary title report (prelim) shows the current state of title to the property, including ownership, liens, encumbrances, and any recorded matters affecting the property. It's ordered at the start of escrow and reviewed to identify any issues that need to be resolved before closing.",
  },
  {
    question: "What are escrow instructions?",
    answer:
      "Escrow instructions are written directions that outline the terms and conditions of the transaction. They specify what each party must do, what documents are required, how funds will be handled, and the conditions that must be met for escrow to close.",
  },
  {
    question: "Can escrow close early?",
    answer:
      "Yes, if all conditions are met and all parties are ready, escrow can sometimes close earlier than the target date. However, early closing depends on lender approval, document readiness, and agreement from all parties. We can discuss your options once escrow is opened.",
  },
  {
    question: "What if escrow doesn't close on time?",
    answer:
      "If escrow cannot close by the target date, an extension may be requested. This typically requires agreement from all parties and may be documented through an amendment. Common reasons for delays include financing issues, inspection repairs, or document delays.",
  },
  {
    question: "How are funds held during escrow?",
    answer:
      "Funds deposited into escrow are held in a trust account at a federally insured financial institution. These funds are kept separate from the escrow company's operating funds and are disbursed only according to the escrow instructions.",
  },
  {
    question: "What is recording?",
    answer:
      "Recording is the process of filing the deed and other documents with the county recorder's office, which makes the transfer of property ownership part of the public record. Recording typically happens after the loan funds (if applicable) and the escrow company confirms all conditions are met.",
  },
  {
    question: "What happens at closing?",
    answer:
      "At closing, the escrow company confirms all conditions have been met, coordinates the funding of the transaction, records the deed with the county, and disburses funds according to the escrow instructions. You'll receive a closing statement detailing all credits, debits, and disbursements.",
  },
  {
    question: "Do you handle commercial transactions?",
    answer:
      "Yes, we handle commercial escrow transactions including multi-family properties, retail, office, and industrial properties. Commercial transactions often involve additional complexity and longer timelines. Contact us to discuss your specific needs.",
  },
  {
    question: "What is a 1031 exchange?",
    answer:
      "A 1031 exchange allows an investor to defer capital gains taxes by reinvesting the proceeds from a property sale into a like-kind property. The exchange must follow specific IRS rules and timelines. We coordinate escrow for exchange transactions and work with qualified intermediaries to ensure compliance.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">Frequently Asked Questions</h1>
              <p className="text-lg text-[var(--text-muted)]">
                Find answers to common questions about the escrow process. If
                you don&apos;t see your question here, contact our team and
                we&apos;ll be happy to help.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-[var(--border-color)] pb-6"
                  >
                    <h3 className="heading-sm mb-3">{faq.question}</h3>
                    <p className="text-[var(--text-muted)]">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-[var(--light-gray)]">
          <div className="container-custom text-center">
            <h2 className="heading-lg mb-4">Still have questions?</h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us with your questions or to
              learn more about our escrow services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a href="tel:2135550123" className="btn-outline">
                Call (213) 555-0123
              </a>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8 text-center">Related resources</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link
                href="/escrow-101"
                className="card border border-[var(--border-color)] hover:border-[var(--gold)] group text-center"
              >
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                  Escrow 101
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  Learn the basics of the escrow process
                </p>
              </Link>

              <Link
                href="/glossary"
                className="card border border-[var(--border-color)] hover:border-[var(--gold)] group text-center"
              >
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                  Glossary
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  Common escrow terms defined
                </p>
              </Link>

              <Link
                href="/forms"
                className="card border border-[var(--border-color)] hover:border-[var(--gold)] group text-center"
              >
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">
                  Forms & Downloads
                </h3>
                <p className="text-sm text-[var(--text-muted)] mt-2">
                  Helpful documents and checklists
                </p>
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
              Start your transaction online and our team will guide you through
              every step.
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
