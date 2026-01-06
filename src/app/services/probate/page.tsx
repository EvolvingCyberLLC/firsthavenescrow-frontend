import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineBriefcase,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineScale,
  HiOutlineCheckCircle,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import {
  FaFolderOpen,
  FaFileAlt,
  FaClipboardCheck,
  FaSignature,
  FaHandshake,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Probate Escrow | Haven Escrow",
  description:
    "Probate escrow services coordinating property sales and transfers subject to court and estate requirements.",
  openGraph: {
    title: "Probate Escrow | Haven Escrow",
    description:
      "Probate escrow services coordinating property sales and transfers subject to court and estate requirements.",
  },
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineUser className="w-8 h-8" />,
    title: "Executors & Administrators",
    description:
      "Those managing the estate and requiring expert guidance through the complex escrow process.",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
    title: "Heirs & Beneficiaries",
    description:
      "Individuals inheriting property who need clear communication, transparency, and timely updates.",
  },
  {
    icon: <HiOutlineHome className="w-8 h-8" />,
    title: "Probate Property Buyers",
    description:
      "Investors or homebuyers purchasing properties through probate courts seeking a secure transaction.",
  },
  {
    icon: <HiOutlineBriefcase className="w-8 h-8" />,
    title: "Real Estate Agents",
    description:
      "Professionals handling the specialized needs of probate listings and sales requiring reliable partners.",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-6 h-6 text-gold" />,
    title: "Opening Escrow",
    description:
      "Initiating the secure holding of funds and documents pending transaction completion.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-6 h-6 text-gold" />,
    title: "Coordinating Documentation",
    description:
      "Gathering and organizing all necessary legal and property documents required by the court.",
  },
  {
    icon: <HiOutlineScale className="w-6 h-6 text-gold" />,
    title: "Tracking Court Conditions",
    description:
      "Ensuring all stipulations set by the probate court are met before closing.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-gold" />,
    title: "Facilitating Execution",
    description:
      "Managing the proper signing and notarization of all transfer documents.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-gold" />,
    title: "Closing & Disbursement",
    description:
      "Finalizing the transfer and distributing funds strictly according to court orders.",
  },
];

// Common Required Documents
const requiredDocuments = [
  "Certified Letters Testamentary or Administration",
  "Order Confirming Sale of Real Property",
  "Independent Administration of Estates Act (IAEA) forms",
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <FaFolderOpen className="w-6 h-6" />,
    title: "Escrow Opened",
    description: "Deposit is received and the file is officially opened.",
  },
  {
    number: 2,
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Docs Coordinated",
    description: "Legal and probate documents are gathered and reviewed.",
  },
  {
    number: 3,
    icon: <FaClipboardCheck className="w-6 h-6" />,
    title: "Conditions Tracked",
    description: "Court-related requirements and contingencies are monitored.",
  },
  {
    number: 4,
    icon: <FaSignature className="w-6 h-6" />,
    title: "Signatures",
    description: "Grant deeds and closing docs are signed and notarized.",
  },
  {
    number: 5,
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Closing",
    description: "Funds disbursed and ownership officially transferred.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    title: "Neutral Handling",
    description:
      "We act as an unbiased third party, safeguarding funds until every condition is met.",
  },
  {
    icon: <HiOutlineScale className="w-6 h-6" />,
    title: "Expert Coordination",
    description:
      "We manage the specific and often complex requirements of probate courts.",
  },
  {
    icon: <HiOutlineDocumentText className="w-6 h-6" />,
    title: "Structured Tracking",
    description:
      "Our systems ensure no deadline is missed and every court order is followed.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" />,
    title: "Clear Communication",
    description:
      "We keep attorneys, executors, and agents aligned throughout the process.",
  },
];

export default function ProbatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/img4.jpeg"
            alt="Probate Escrow Services"
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

          <div className="container-custom relative z-10 text-white py-20">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Probate Escrow Services
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Navigating the complexities of probate transactions requires
                precision and sensitivity. Haven Escrow acts as your neutral
                third party, coordinating seamless compliance with court
                requirements and ensuring every legal standard is met for
                executors, heirs, and buyers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Contact Us
                </Link>
                <Link
                  href="#learn-more"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section id="learn-more" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <span className="text-gold text-sm font-semibold uppercase tracking-wide mb-2 block">
                Target Audience
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Who This Service Is For
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whoIsForItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-border-color rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-light-gray rounded-lg flex items-center justify-center mb-4 text-navy">
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

        {/* What Escrow Handles */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - What We Handle */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                  What Escrow Handles in a Probate Transaction
                </h2>
                <div className="space-y-4">
                  {whatWeHandle.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
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
              </div>

              {/* Right Column - Probate Documentation */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-border-color">
                <div className="flex items-center gap-3 mb-4">
                  <HiOutlineDocumentText className="w-6 h-6 text-navy" />
                  <h3 className="text-xl font-bold text-navy">
                    Probate Documentation
                  </h3>
                </div>
                <p className="text-text-muted mb-6">
                  Probate transactions often require significantly more
                  documentation than standard real estate sales. It is crucial
                  to be prepared for the specific needs of the court.
                </p>
                <div className="bg-light-gray rounded-lg p-5">
                  <h4 className="font-semibold text-navy text-sm uppercase tracking-wide mb-4">
                    Common Required Documents:
                  </h4>
                  <ul className="space-y-3">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-text-muted text-sm">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-text-muted text-xs mt-4 italic">
                  *Additional documentation may be required depending on the
                  specific court rulings and local regulations.
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
                Typical Probate Escrow Process
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                We streamline the complex journey into five clear, manageable
                steps.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
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
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Use an Escrow Company for Probate Transactions?
                </h2>
                <p className="text-gray-300 mb-8">
                  Probate sales are not standard real estate transactions. They
                  involve judicial oversight and strict adherence to the
                  California Probate Code. Haven Escrow provides the specialized
                  expertise needed to protect all parties.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md font-semibold hover:bg-gold hover:text-navy transition-all"
                >
                  Speak to an Expert
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-5 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-gold font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Start Your Probate Transaction?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Experience the peace of mind that comes with working with probate
              specialists. Open escrow today or contact our team for guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
