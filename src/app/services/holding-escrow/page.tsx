import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineUsers,
  HiOutlineShieldCheck,
  HiOutlineLockClosed,
  HiOutlineCheckCircle,
  HiOutlineDocumentCheck,
  HiOutlineInformationCircle,
} from "react-icons/hi2";
import {
  FaFileAlt,
  FaBoxOpen,
  FaLock,
  FaCheckCircle,
  FaUnlock,
} from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Holding Escrow | First Haven Escrow",
  description:
    "Holding escrow services providing neutral custody of funds or documents until agreed-upon conditions are satisfied.",
  openGraph: {
    title: "Holding Escrow | First Haven Escrow",
    description:
      "Holding escrow services providing neutral custody of funds or documents until agreed-upon conditions are satisfied.",
  },
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineDocumentText className="w-8 h-8" />,
    title: "Conditional Release Requirements",
    description:
      "Parties requiring items to be released only upon specific events or milestones.",
  },
  {
    icon: <HiOutlineClock className="w-8 h-8" />,
    title: "Unmet Transaction Conditions",
    description:
      "Transactions where certain conditions have not yet been met but assets must be secured.",
  },
  {
    icon: <HiOutlineUsers className="w-8 h-8" />,
    title: "Neutral Third Party Needed",
    description:
      "Situations requiring a completely neutral party to hold assets securely in trust.",
  },
  {
    icon: <HiOutlineClipboardList className="w-8 h-8" />,
    title: "Structured Handling Required",
    description:
      "Complex transactions needing detailed, structured handling of assets and documents.",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-6 h-6 text-gold" />,
    title: "Receiving Funds & Documents",
    description: "Securely accepting assets into trust.",
  },
  {
    icon: <HiOutlineLockClosed className="w-6 h-6 text-gold" />,
    title: "Secure Holding",
    description: "Holding items securely until authorized for release.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-gold" />,
    title: "Conditional Release",
    description:
      "Releasing items strictly when written conditions are satisfied.",
  },
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6 text-gold" />,
    title: "Written Confirmation",
    description: "Providing written confirmation of all actions taken.",
  },
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Instructions",
    description: "Escrow instructions received and reviewed.",
  },
  {
    number: 2,
    icon: <FaBoxOpen className="w-6 h-6" />,
    title: "Delivery",
    description: "Funds and documents delivered into escrow.",
  },
  {
    number: 3,
    icon: <FaLock className="w-6 h-6" />,
    title: "Holding",
    description: "Items held securely until conditions are met.",
  },
  {
    number: 4,
    icon: <FaCheckCircle className="w-6 h-6" />,
    title: "Authorization",
    description: "Written authorization to release received.",
  },
  {
    number: 5,
    icon: <FaUnlock className="w-6 h-6" />,
    title: "Release",
    description: "Items released to appropriate parties.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: <HiOutlineUsers className="w-8 h-8" />,
    title: "Neutral Handling",
    description:
      "We provide unbiased management of the transaction, favoring no single party.",
    color: "gold",
  },
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    title: "Secure Custody",
    description: "Your assets are held in highly secure, regulated accounts.",
    color: "gold",
  },
  {
    icon: <HiOutlineClipboardList className="w-8 h-8" />,
    title: "Clear Process",
    description:
      "We follow a strict, instruction-based process ensuring transparency.",
    color: "navy",
  },
  {
    icon: <HiOutlineLockClosed className="w-8 h-8" />,
    title: "Risk Reduction",
    description:
      "Significantly reduced risk of disputes through documented procedures.",
    color: "navy",
  },
];

export default function HoldingEscrowPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-125 md:min-h-150">
          {/* Background Image */}
          <Image
            src="/img6.jpeg"
            alt="Holding Escrow Services"
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

          <div className="container-custom relative z-10 text-white py-20 md:py-28 flex items-center h-125">
            <div className="max-w-2xl ">
              <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                SPECIALIZED SERVICES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Holding Escrow
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                First Haven Escrow acts as a neutral third party to receive,
                safeguard, and release items based strictly on written
                instructions. We ensure security and clarity for every
                transaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#learn-more" className="btn-primary">
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-all inline-flex items-center gap-2"
                >
                  Contact an Officer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section id="learn-more" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Who This Service Is For
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Our holding escrow services are designed for a variety of
                professional and transactional needs where neutrality is
                paramount.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {whoIsForItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-gold mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Escrow Handles */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">
              What Escrow Handles
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - What We Handle */}
              <div className="space-y-4">
                {whatWeHandle.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 flex items-start gap-4 shadow-sm"
                  >
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">
                        {item.title}
                      </h4>
                      <p className="text-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column - Important Clarification */}
              <div className="bg-white rounded-xl p-8 border-l-4 border-gold shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <HiOutlineInformationCircle className="w-6 h-6 text-gold" />
                  <span className="text-gold font-bold text-sm uppercase tracking-wide">
                    Important Clarification
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">
                  About Holding Escrow Responsibilities
                </h3>
                <p className="text-text-muted mb-4">
                  Please note that escrow does <strong>not</strong> evaluate,
                  verify, or enforce the conditions themselves.
                </p>
                <p className="text-text-muted">
                  We act <strong>solely on written instructions</strong> from
                  the principals. If instructions are unclear or incomplete, we
                  will request written clarification before taking any action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Typical Holding Escrow Process
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center flex-1 min-w-[140px] max-w-[180px]"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center text-navy mx-auto">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-navy text-xs font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <span className="inline-flex items-center gap-2 text-text-muted text-sm bg-light-gray px-4 py-2 rounded-full">
                <HiOutlineInformationCircle className="w-4 h-4" />
                Note: Timeline depends on how quickly conditions are met.
              </span>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Why Use an Escrow Company?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 ${
                    item.color === "gold"
                      ? "bg-white border border-gold/30"
                      : "bg-white border border-navy/10"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      item.color === "gold"
                        ? "bg-gold/10 text-gold"
                        : "bg-navy/10 text-navy"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to secure your transaction?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Contact our office today to discuss your specific holding escrow
              needs, or open your escrow online now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link
                href="/open-escrow"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-all"
              >
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
