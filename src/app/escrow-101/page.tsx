import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineHome,
  HiOutlineShieldCheck,
  HiOutlineBuildingLibrary,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineXCircle,
  HiOutlineChatBubbleLeftRight,
  HiOutlineExclamationTriangle,
  HiOutlineDocumentText,
  HiOutlineArrowDownTray,
} from "react-icons/hi2";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Escrow 101 | Haven Escrow",
  description:
    "Learn how the escrow process works from opening to closing. Understand the steps, parties involved, and what to expect during your real estate transaction.",
};

// Why Escrow is Used
const whyEscrowUsed = [
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6" />,
    title: "Ensure Conditions Met",
    description: "Holds funds and documents until all terms are satisfied.",
  },
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    title: "Neutral Handling",
    description: "Unbiased third party protects the interests of all sides.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" />,
    title: "Coordinate Comms",
    description: "Acts as a central hub for all transaction details.",
  },
  {
    icon: <HiOutlineScale className="w-6 h-6" />,
    title: "Reduce Risk",
    description: "Protects against fraud and non-performance.",
  },
];

// Parties Involved
const partiesInvolved = [
  {
    icon: <HiOutlineUser className="w-6 h-6" />,
    title: "Buyer",
    active: false,
  },
  {
    icon: <HiOutlineHome className="w-6 h-6" />,
    title: "Seller",
    active: false,
  },
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    title: "Escrow Company",
    active: true,
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    title: "Real Estate Agents",
    active: false,
  },
  {
    icon: <HiOutlineBuildingLibrary className="w-6 h-6" />,
    title: "Lenders",
    active: false,
  },
  {
    icon: <HiOutlineScale className="w-6 h-6" />,
    title: "Attorneys",
    active: false,
  },
];

// Escrow Steps
const escrowSteps = [
  {
    number: 1,
    title: "Open Escrow",
    description:
      "The purchase agreement is signed, and the initial deposit is placed into the escrow account. A file is opened.",
  },
  {
    number: 2,
    title: "Confirm Instructions",
    description:
      "Escrow officer prepares detailed escrow instructions supplementing the purchase agreement for all parties to sign.",
  },
  {
    number: 3,
    title: "Document Coordination",
    description:
      "Preliminary title reports, seller disclosures, and loan documents are ordered, received, and reviewed.",
  },
  {
    number: 4,
    title: "Condition Tracking",
    description:
      "Escrow monitors the file to ensure contingencies (inspections, appraisal) are removed by the agreed deadlines.",
  },
  {
    number: 5,
    title: "Funding Preparation",
    description:
      "Buyer signs loan docs, lender sends funds to escrow. Buyer deposits remaining down payment and closing costs.",
  },
  {
    number: 6,
    title: "Closing",
    description:
      "Deed is recorded with the county. Funds are disbursed to the seller and other parties. Keys are transferred!",
  },
];

// Common Items Handled
const commonItemsHandled = [
  "Purchase agreements and counter offers",
  "Disclosure statements and reports",
  "Earnest money deposits and closing funds",
  "Grant deeds and recording documentation",
  "Notarized signatures on key documents",
];

// What Escrow Does NOT Do
const whatEscrowDoesNot = [
  "Offer legal advice or tax counsel",
  "Negotiate transaction terms or prices",
  "Represent one party against another",
  "Approve or deny the loan (that's the lender)",
];

export default function Escrow101Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[400px] md:min-h-[450px] ">
          {/* Background Image */}
          <Image
            src="/img11.jpg"
            alt="Escrow 101 - How Escrow Works"
            fill
            className="object-cover"
            priority
          />
          {/* Navy Gradient Overlay - 100% to 50% from left to right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(11, 44, 61, 1) 0%, rgba(11, 44, 61, 0.5) 100%)",
            }}
          />

          <div className="container-custom relative z-10 text-white py-16 flex items-center h-[400px]">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Escrow 101: How Escrow Works
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                A simple guide to understanding the escrow process, designed to
                give you clarity and peace of mind during your transaction.
              </p>
            </div>
          </div>
        </section>

        {/* What is Escrow + Why Escrow is Used */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - What is Escrow */}
              <div>
                <span className="text-gold text-sm font-semibold uppercase tracking-wide mb-2 block">
                  Definition
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  What is Escrow?
                </h2>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Escrow is a legal arrangement where a third party holds money
                  or property until a particular condition has been met (such as
                  the fulfillment of a purchase agreement).
                </p>
                <div className="bg-light-gray rounded-lg p-5 border-l-4 border-gold">
                  <p className="text-text-muted text-sm">
                    <strong className="text-navy">Key Point:</strong> Ideally,
                    the escrow holder is a neutral third party who ensures that
                    everyone follows the rules and conditions laid out in the
                    contract.
                  </p>
                </div>
              </div>

              {/* Right - Why Escrow is Used */}
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6">
                  Why Escrow is Used
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyEscrowUsed.map((item, index) => (
                    <div key={index} className="bg-light-gray rounded-lg p-5">
                      <div className="text-gold mb-3">{item.icon}</div>
                      <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                      <p className="text-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Parties Commonly Involved */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Parties Commonly Involved
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Understanding who plays a role in your escrow transaction helps
                clarify communication lines.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {partiesInvolved.map((party, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-5 text-center ${
                    party.active
                      ? "bg-gold text-navy"
                      : "bg-white border border-border-color"
                  }`}
                >
                  <div
                    className={`mb-3 flex justify-center ${
                      party.active ? "text-navy" : "text-navy"
                    }`}
                  >
                    {party.icon}
                  </div>
                  <h3
                    className={`text-sm font-semibold ${
                      party.active ? "text-navy" : "text-navy"
                    }`}
                  >
                    {party.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Step-by-Step: Life of an Escrow */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="flex flex-wrap justify-between items-center mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
                  Step-by-Step: Life of an Escrow
                </h2>
                <p className="text-text-muted">
                  From opening to closing, here is the standard journey.
                </p>
              </div>
              <Link
                href="/forms"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
              >
                <HiOutlineArrowDownTray className="w-5 h-5" />
                Download Guide
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {escrowSteps.map((step, index) => (
                <div key={index} className="bg-light-gray rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        step.number === 6
                          ? "bg-gold text-navy"
                          : "bg-navy text-white"
                      }`}
                    >
                      {step.number}
                    </span>
                    <h3 className="font-bold text-navy">{step.title}</h3>
                  </div>
                  <p className="text-text-muted text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Items Handled + What Escrow Does NOT Do */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Common Items Handled */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineDocumentText className="w-6 h-6 text-gold" />
                  <h2 className="text-xl font-bold text-navy">
                    Common Items Handled
                  </h2>
                </div>
                <ul className="space-y-4">
                  {commonItemsHandled.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Escrow Does NOT Do */}
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineXCircle className="w-6 h-6 text-navy" />
                  <h2 className="text-xl font-bold text-navy">
                    What Escrow Does NOT Do
                  </h2>
                </div>
                <ul className="space-y-4">
                  {whatEscrowDoesNot.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security and Wire Fraud Awareness */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-8">
                <HiOutlineExclamationTriangle className="w-10 h-10 text-gold flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Security and Wire Fraud Awareness
                  </h2>
                  <p className="text-gray-300">
                    Wire fraud is a serious threat in real estate transactions.
                    Criminals may attempt to impersonate escrow officers to
                    steal funds. Protect yourself:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gold/20 rounded-lg p-5 border border-gold/30">
                  <p className="text-white">
                    <strong className="text-gold">ALWAYS</strong> verify wiring
                    instructions by phone with a known number.
                  </p>
                </div>
                <div className="bg-white/10 rounded-lg p-5">
                  <p className="text-gray-300">
                    <strong className="text-gold">NEVER</strong> rely solely on
                    email or text for changing wiring instructions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Have questions about escrow?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              We are here to guide you through every step of the process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
