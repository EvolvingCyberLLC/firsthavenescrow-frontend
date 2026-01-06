import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineInformationCircle,
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
  title: "Short Sale Escrow |  Haven Escrow",
  description:
    "Short sale escrow services coordinating transactions involving lender approval and additional documentation requirements.",
  openGraph: {
    title: "Short Sale Escrow |  Haven Escrow",
    description:
      "Short sale escrow services coordinating transactions involving lender approval and additional documentation requirements.",
  },
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineHome className="w-8 h-8" />,
    title: "Property Owners",
    description:
      "Owners navigating the sale of property for less than the outstanding mortgage balance, requiring specialized support.",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
    title: "Home Buyers",
    description:
      "Buyers looking to purchase properties through short sale agreements that require complex lender approval processes.",
  },
  {
    icon: <HiOutlineBriefcase className="w-8 h-8" />,
    title: "Real Estate Agents",
    description:
      "Agents requiring a neutral third party to manage the intricate lender documentation and strict transaction timelines.",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-6 h-6 text-gold" />,
    title: "Opening Escrow",
    description:
      "Establishing the neutral holding account and initiating the file promptly.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-6 h-6 text-gold" />,
    title: "Coordinating Documentation",
    description:
      "Collecting and organizing all required documents for lender approval submission.",
  },
  {
    icon: <HiOutlineClock className="w-6 h-6 text-gold" />,
    title: "Tracking Conditions",
    description:
      "Monitoring transaction-specific conditions set forth by the lender for compliance.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-gold" />,
    title: "Facilitating Execution",
    description:
      "Ensuring all parties sign necessary amendments and final closing documents correctly.",
  },
  {
    icon: <FaHandshake className="w-6 h-6 text-gold" />,
    title: "Closing & Disbursement",
    description:
      "Handling the final exchange of funds and recording of the deed upon approval.",
  },
];

// Lender Approval Considerations
const lenderConsiderations = [
  "Timelines are often extended and less predictable than standard sales.",
  "Lenders may request price adjustments or additional documentation mid-process.",
  "Escrow acts as the central hub, keeping all parties informed as lender updates arrive.",
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <FaFolderOpen className="w-6 h-6" />,
    title: "Escrow Opened",
    description: "Transaction file created and initial instructions received.",
  },
  {
    number: 2,
    icon: <FaFileAlt className="w-6 h-6" />,
    title: "Docs Coordinated",
    description: "Lender approval documentation collected and organized.",
  },
  {
    number: 3,
    icon: <FaClipboardCheck className="w-6 h-6" />,
    title: "Conditions Tracked",
    description: "Lender-specific requirements monitored for compliance.",
  },
  {
    number: 4,
    icon: <FaSignature className="w-6 h-6" />,
    title: "Documents Executed",
    description: "Final approval received and closing docs signed.",
  },
  {
    number: 5,
    icon: <FaHandshake className="w-6 h-6" />,
    title: "Closing Occurs",
    description: "Funds disbursed and ownership transferred.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Neutral Coordination",
    description:
      "We manage lender-driven requirements without bias, ensuring fair play for all parties involved.",
  },
  {
    title: "Structured Documentation",
    description:
      "Our systems ensure no document is lost in the shuffle of complex bank submissions.",
  },
  {
    title: "Clear Communication",
    description:
      "We translate complex lender instructions into clear action items for agents and clients.",
  },
];

export default function ShortSalePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image - Centered */}
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/img3.jpg"
            alt="Short Sale Escrow Services"
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Short Sale Escrow
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Haven Escrow plays a pivotal role in coordinating short sale
                transactions, managing the complexities of lender approval with
                precision, neutrality, and expert communication.
              </p>
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Who This Service Is For
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whoIsForItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-border-color rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center mx-auto mb-4 text-navy">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">
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
                  What Escrow Handles in a Short Sale
                </h2>
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
              </div>

              {/* Right Column - Lender Approval Considerations */}
              <div className="bg-navy rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <HiOutlineInformationCircle className="w-6 h-6 text-gold" />
                  <span className="text-gold font-bold text-sm uppercase tracking-wide">
                    Lender Approval Considerations
                  </span>
                </div>
                <p className="text-gray-300 mb-6">
                  Short sales are uniquely dependent on the approval of the
                  existing lender(s). This third-party review process introduces
                  variables that standard transactions do not face.
                </p>
                <ul className="space-y-3">
                  {lenderConsiderations.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Typical Short Sale Escrow Process
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                While every short sale is unique, most follow a structured path
                towards successful closing.
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
                  Why Use an Escrow Company for Short Sale Transactions?
                </h2>
                <p className="text-gray-300 mb-8">
                  The complexity of a short sale demands a professional, neutral
                  third party to ensure the interests of the buyer, seller, and
                  lender are balanced and protected.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold text-navy px-6 py-3 rounded-md font-semibold hover:bg-gold-hover transition-all"
                >
                  Contact Our Team
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border-l-4 border-gold"
                  >
                    <h3 className="text-gold font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
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
              Ready to Start Your Transaction?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Experience the Haven difference. Our team is ready to guide you
              through the short sale process with expertise and care.
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
