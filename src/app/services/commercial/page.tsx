import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineBuildingOffice2,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineBuildingStorefront,
  HiOutlineUserGroup,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePencilSquare,
  HiOutlineCurrencyDollar,
  HiChevronDown,
} from "react-icons/hi2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineBuildingOffice2 className="w-6 h-6" />,
    title: "Buyers & Sellers",
    description:
      "Of commercial properties, including office, retail, and industrial spaces.",
  },
  {
    icon: <HiOutlineBanknotes className="w-6 h-6" />,
    title: "Real Estate Investors",
    description:
      "Engaged in the acquisition or disposition of income-producing assets.",
  },
  {
    icon: <HiOutlineBriefcase className="w-6 h-6" />,
    title: "Business Owners",
    description:
      "In transactions involving business assets tied to real property.",
  },
  {
    icon: <HiOutlineBuildingStorefront className="w-6 h-6" />,
    title: "Property Managers",
    description:
      "Involved in multi-unit residential or mixed-use property transactions.",
  },
  {
    icon: <HiOutlineUserGroup className="w-6 h-6" />,
    title: "Lenders & Brokers",
    description:
      "Facilitating transactions that require customized coordination and neutral third party oversight.",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-5 h-5 text-gold" />,
    title: "Opening the escrow and ordering title reports.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-5 h-5 text-gold" />,
    title: "Coordinating documents among all parties.",
  },
  {
    icon: <HiOutlineClock className="w-5 h-5 text-gold" />,
    title: "Tracking negotiated terms and conditions.",
  },
  {
    icon: <HiOutlinePencilSquare className="w-5 h-5 text-gold" />,
    title: "Facilitating signatures and notarization.",
  },
  {
    icon: <HiOutlineCurrencyDollar className="w-5 h-5 text-gold" />,
    title: "Coordinating funding and disbursement.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-5 h-5 text-gold" />,
    title: "Managing timelines and critical dates.",
  },
];

// Timeline Steps
const timelineSteps = [
  {
    number: 1,
    title: "Escrow Opened",
    description:
      "The process begins upon receipt of the mutually signed purchase agreement and initial deposit.",
    position: "left",
  },
  {
    number: 2,
    title: "Document Coordination",
    description:
      "We gather and manage all necessary documents, including entity paperwork, leases, and disclosures.",
    position: "right",
  },
  {
    number: 3,
    title: "Condition Tracking",
    description:
      "Contingencies, such as due diligence, financing, and inspections, are monitored to ensure timely removal.",
    position: "left",
  },
  {
    number: 4,
    title: "Funding Preparation",
    description:
      "We coordinate with lenders and buyers to prepare for the transfer of funds and compile final closing statements.",
    position: "right",
  },
  {
    number: 5,
    title: "Closing & Disbursement",
    description:
      "Once all conditions are met and funds are received, documents are recorded and funds are disbursed.",
    position: "left",
  },
];

// FAQs
const faqs = [
  {
    question: "How does commercial escrow differ from residential?",
    answer:
      "Commercial escrow often involves additional documentation, entity structures, and negotiated conditions, requiring more customized coordination.",
  },
  {
    question: "Should I expect a longer timeline for a commercial transaction?",
    answer:
      "They can take longer, depending on financing, due diligence, and transaction complexity.",
  },
  {
    question: "How do you coordinate with our attorneys and advisors?",
    answer:
      "We coordinate with all authorized parties as instructed, ensuring clear communication throughout the process.",
  },
];

export default function CommercialServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image - Centered */}
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/img10.jpg"
            alt="Commercial Escrow Services"
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
                Commercial Escrow
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Commercial escrow involves additional parties, documents, and
                negotiated terms. At Haven, we handle these complexities with a
                structured, detail-oriented approach to ensure all conditions
                are met with precision.
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
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy">
                  Who this service is for
                </h2>
              </div>
              <div className="lg:col-span-2 space-y-6">
                {whoIsForItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-light-gray rounded-lg flex items-center justify-center flex-shrink-0 text-gold">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">{item.title}</h3>
                      <p className="text-text-muted text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  What we handle during commercial escrow
                </h2>
              </div>
              <div className="lg:col-span-2">
                <div className="grid sm:grid-cols-2 gap-6">
                  {whatWeHandle.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <span className="text-gray-300 text-sm">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Typical Commercial Escrow Timeline
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                While each transaction is unique, a commercial escrow process
                generally follows these key stages.
              </p>
            </div>

            {/* Alternating Timeline */}
            <div className="max-w-4xl mx-auto relative">
              {/* Center Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border-color hidden md:block"></div>

              <div className="space-y-8 md:space-y-0">
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative md:flex md:items-center md:min-h-[120px]"
                  >
                    {/* Left Content */}
                    <div
                      className={`md:w-1/2 md:pr-12 ${
                        step.position === "right" ? "md:text-right" : ""
                      }`}
                    >
                      {step.position === "left" && (
                        <div className="bg-light-gray rounded-lg p-5 md:ml-auto md:mr-0 md:max-w-sm">
                          <h3 className="font-bold text-navy mb-2">
                            {step.title}
                          </h3>
                          <p className="text-text-muted text-sm">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Number */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-sm z-10 hidden md:flex">
                      {step.number}
                    </div>

                    {/* Right Content */}
                    <div
                      className={`md:w-1/2 md:pl-12 ${
                        step.position === "left" ? "" : ""
                      }`}
                    >
                      {step.position === "right" && (
                        <div className="bg-light-gray rounded-lg p-5 md:max-w-sm">
                          <h3 className="font-bold text-navy mb-2">
                            {step.title}
                          </h3>
                          <p className="text-text-muted text-sm">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex gap-4">
                      <div className="w-8 h-8 bg-gold text-navy rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <div className="bg-light-gray rounded-lg p-4 flex-1">
                        <h3 className="font-bold text-navy mb-1">
                          {step.title}
                        </h3>
                        <p className="text-text-muted text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-text-muted text-sm bg-light-gray px-6 py-4 rounded-lg inline-block max-w-2xl">
                <strong>Important:</strong> This timeline is a general guide.
                Commercial transactions can vary significantly in length and
                complexity based on negotiated terms, property type, and
                financing arrangements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy">
                Common Questions
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-lg overflow-hidden border border-border-color"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-medium text-navy">
                    {faq.question}
                    <HiChevronDown className="w-5 h-5 text-navy group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-text-muted text-sm">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Starting a commercial transaction?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Let our structured approach and clear communication bring
              stability and order to your next commercial real estate closing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-navy transition-all"
              >
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
