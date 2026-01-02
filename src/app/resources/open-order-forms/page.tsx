import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Order Forms | Haven Escrow",
  description:
    "Select the appropriate open order form for your escrow transaction type. Purchase, refinance, or manufactured/mobile home transactions.",
};

const orderForms = [
  {
    title: "Real Estate Purchase",
    description:
      "Open escrow for a residential or commercial property purchase transaction.",
    href: "/resources/open-order-forms/purchase",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: "Real Estate Refinance",
    description:
      "Open escrow for a refinance transaction on an existing property.",
    href: "/resources/open-order-forms/refinance",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: "Manufactured / Mobile Home",
    description:
      "Open escrow for a manufactured or mobile home sale transaction.",
    href: "/resources/open-order-forms/manufactured-mobile",
    icon: (
      <svg
        className="w-8 h-8 text-[var(--gold)]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
        />
      </svg>
    ),
  },
];

export default function OpenOrderFormsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Open Order Forms"
          description="Select the appropriate form for your transaction type. Submission of a form does not constitute acceptance of escrow."
          centered
        />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {orderForms.map((form, index) => (
                  <Link
                    key={index}
                    href={form.href}
                    className="block p-6 border border-[var(--border-color)] rounded-lg hover:shadow-lg hover:border-[var(--gold)] transition-all group"
                  >
                    <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
                      {form.icon}
                    </div>
                    <h2 className="heading-sm mb-2 group-hover:text-[var(--gold)] transition-colors">
                      {form.title}
                    </h2>
                    <p className="text-sm text-[var(--text-muted)]">
                      {form.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--gold)] font-medium mt-4 text-sm">
                      Start Form
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-12 p-6 bg-[var(--light-gray)] rounded-lg">
                <h3 className="font-semibold text-[var(--navy)] mb-3">
                  Not sure which form to use?
                </h3>
                <p className="text-[var(--text-muted)] mb-4">
                  If you&apos;re unsure which form applies to your transaction
                  or have questions about opening escrow, contact our team for
                  assistance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                  <Link href="/open-escrow" className="btn-outline">
                    General Open Escrow Form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
