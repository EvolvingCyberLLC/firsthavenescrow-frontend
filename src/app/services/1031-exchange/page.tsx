import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineBanknotes,
  HiOutlineUserGroup,
  HiOutlineScale,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlineBuildingOffice2,
  HiOutlineArrowsRightLeft,
  HiOutlineExclamationTriangle,
  HiOutlineCalendarDays,
  HiOutlineShieldCheck,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";
import {
  FaExchangeAlt,
  FaFileContract,
  FaCalendarCheck,
  FaHome,
  FaHandshake,
} from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "1031 Exchange Escrow | Haven Escrow",
  description:
    "1031 exchange escrow services coordinating time-sensitive property exchanges in accordance with written instructions and qualified intermediary requirements.",
  openGraph: {
    title: "1031 Exchange Escrow | Haven Escrow",
    description:
      "1031 exchange escrow services coordinating time-sensitive property exchanges in accordance with written instructions and qualified intermediary requirements.",
  },
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineHome className="w-8 h-8" />,
    title: "Property Owners",
    description:
      "Completing a 1031 exchange to defer capital gains taxes on investment property.",
  },
  {
    icon: <HiOutlineBanknotes className="w-8 h-8" />,
    title: "Real Estate Investors",
    description:
      "Reinvesting proceeds into replacement property to build their portfolio.",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
    title: "Buyers & Sellers",
    description:
      "Involved in exchange transactions requiring coordinated escrow services.",
  },
  {
    icon: <HiOutlineScale className="w-8 h-8" />,
    title: "Qualified Intermediaries",
    description:
      "Working with escrow to ensure exchange requirements are properly met.",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-6 h-6 text-gold" />,
    title: "Opening escrow for relinquished and replacement properties.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-6 h-6 text-gold" />,
    title: "Coordinating escrow instructions related to the exchange.",
  },
  {
    icon: <HiOutlineArrowsRightLeft className="w-6 h-6 text-gold" />,
    title: "Working with the qualified intermediary as instructed.",
  },
  {
    icon: <HiOutlineBanknotes className="w-6 h-6 text-gold" />,
    title: "Managing disbursement of funds per exchange requirements.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-gold" />,
    title: "Coordinating required documents and signatures.",
  },
  {
    icon: <HiOutlineClock className="w-6 h-6 text-gold" />,
    title: "Tracking transaction timelines related to closing.",
  },
];

// Key Timelines
const keyTimelines = [
  {
    days: "45",
    title: "Identification Period",
    description:
      "Days to identify potential replacement properties after selling.",
  },
  {
    days: "180",
    title: "Exchange Period",
    description:
      "Days to complete the acquisition of the replacement property.",
  },
];

// Process Steps
const processSteps = [
  {
    number: 1,
    icon: <FaExchangeAlt className="w-5 h-5" />,
    title: "Relinquished Property",
    description:
      "Escrow opened for the property being sold. Sale proceeds handled per exchange instructions.",
  },
  {
    number: 2,
    icon: <FaFileContract className="w-5 h-5" />,
    title: "QI Coordination",
    description:
      "Funds managed in accordance with qualified intermediary requirements.",
  },
  {
    number: 3,
    icon: <FaCalendarCheck className="w-5 h-5" />,
    title: "ID Period Tracked",
    description:
      "45-day identification period for replacement properties is monitored.",
  },
  {
    number: 4,
    icon: <FaHome className="w-5 h-5" />,
    title: "Replacement Property",
    description:
      "New escrow opened for the acquisition of the replacement property.",
  },
  {
    number: 5,
    icon: <FaHandshake className="w-5 h-5" />,
    title: "Closing",
    description:
      "Both transactions closed and funds disbursed per instructions.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: <HiOutlineShieldCheck className="w-6 h-6" />,
    title: "Neutral Handling",
    description:
      "Unbiased management of funds and documents throughout the exchange.",
  },
  {
    icon: <HiOutlineArrowsRightLeft className="w-6 h-6" />,
    title: "QI Coordination",
    description: "Seamless coordination with qualified intermediaries.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-6 h-6" />,
    title: "Structured Tracking",
    description: "Meticulous tracking of escrow instructions and deadlines.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" />,
    title: "Clear Communication",
    description: "Keeping all parties informed throughout the process.",
  },
];

export default function Exchange1031Page() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/img2.jpg"
            alt="1031 Exchange Escrow Services"
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
              <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                TAX-DEFERRED EXCHANGES
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                1031 Exchange Escrow
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Haven Escrow coordinates time-sensitive 1031 exchange
                transactions, working closely with qualified intermediaries to
                ensure your exchange proceeds according to written instructions
                and IRS requirements.
              </p>
              <div className="flex flex-wrap gap-4">
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
          </div>
        </section>

        {/* Who This Service Is For */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Who This Service Is For
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                Our 1031 exchange escrow services support various parties
                involved in tax-deferred exchanges.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {whoIsForItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-light-gray rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
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

        {/* What We Handle + Key Timelines */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - What We Handle */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                  What We Handle in a 1031 Exchange
                </h2>
                <div className="space-y-4">
                  {whatWeHandle.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                      <span className="text-text-muted">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Key Timelines */}
              <div className="bg-navy rounded-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineCalendarDays className="w-6 h-6 text-gold" />
                  <h3 className="text-xl font-bold">
                    Critical Exchange Timelines
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  1031 exchanges are subject to strict IRS deadlines. Missing
                  these deadlines can disqualify the exchange.
                </p>
                <div className="space-y-4">
                  {keyTimelines.map((item, index) => (
                    <div key={index} className="bg-white/10 rounded-lg p-5">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl font-bold text-gold">
                          {item.days}
                        </span>
                        <div>
                          <h4 className="font-bold text-white">{item.title}</h4>
                          <p className="text-gray-300 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Typical 1031 Exchange Process
              </h2>
              <p className="text-text-muted max-w-2xl mx-auto">
                A simplified overview of how we coordinate your 1031 exchange
                escrow.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center flex-1 min-w-[160px] max-w-[200px]"
                >
                  <div className="relative inline-block mb-4">
                    <div className="w-16 h-16 bg-light-gray rounded-full flex items-center justify-center text-navy mx-auto">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold text-navy text-xs font-bold rounded-full flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-navy mb-2 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-xs">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-16 bg-light-gray">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 border-l-4 border-gold">
              <div className="flex items-start gap-4">
                <HiOutlineExclamationTriangle className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">
                    Important Information About 1031 Exchanges
                  </h3>
                  <p className="text-text-muted mb-4">
                    1031 exchange transactions are time-sensitive and subject to
                    specific identification and closing periods. All actions
                    taken by escrow are based solely on written instructions
                    provided by the parties and the qualified intermediary.
                  </p>
                  <p className="text-text-muted text-sm">
                    <strong className="text-navy">Note:</strong> Haven Escrow
                    does not provide tax or legal advice. Clients are encouraged
                    to consult with their tax or legal professionals regarding
                    1031 exchange eligibility and requirements.
                  </p>
                </div>
              </div>
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
                  Why Choose Haven Escrow for Your 1031 Exchange?
                </h2>
                <p className="text-gray-300 mb-8">
                  A 1031 exchange requires precise coordination and strict
                  adherence to timelines. Our experienced team works seamlessly
                  with qualified intermediaries to ensure your exchange is
                  handled with care.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold text-navy px-6 py-3 rounded-md font-semibold hover:bg-gold-hover transition-all"
                >
                  Speak With Our Team
                </Link>
              </div>

              {/* Right Column - Feature Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-5"
                  >
                    <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center mb-3 text-gold">
                      {item.icon}
                    </div>
                    <h3 className="text-gold font-bold mb-1">{item.title}</h3>
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
              Planning a 1031 Exchange?
            </h2>
            <p className="text-text-muted max-w-xl mx-auto mb-8">
              Contact our office to discuss your exchange timeline or open
              escrow to begin the coordination process.
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
