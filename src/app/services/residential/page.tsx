import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineUsers,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocumentList,
  HiOutlineClock,
  HiOutlineCheckCircle,
  HiOutlinePencilSquare,
  HiOutlineBuildingLibrary,
  HiOutlineDocumentText,
  HiOutlineShieldExclamation,
  HiOutlineChatBubbleLeftRight,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineLockClosed,
  HiChevronDown,
} from "react-icons/hi2";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Residential Escrow Services | Haven Escrow",
  description:
    "Professional residential escrow services for home purchases and sales in  California. Clear communication, secure handling, and on-time closings.",
};

// Who This Service Is For
const whoIsForItems = [
  {
    icon: <HiOutlineHome className="w-5 h-5" />,
    title: "Home Buyers",
  },
  {
    icon: <HiOutlineUsers className="w-5 h-5" />,
    title: "Home Sellers",
  },
  {
    icon: <HiOutlineBriefcase className="w-5 h-5" />,
    title: "Real Estate Agents",
  },
  {
    icon: <HiOutlineBanknotes className="w-5 h-5" />,
    title: "Real Estate Investors",
  },
  {
    icon: <HiOutlineUserGroup className="w-5 h-5" />,
    title: "Parties in Standard Transactions",
  },
];

// What We Handle
const whatWeHandle = [
  {
    icon: <HiOutlineDocumentCheck className="w-5 h-5 text-gold" />,
    title:
      "Opening the escrow account and ordering the preliminary title report.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-5 h-5 text-gold" />,
    title: "Coordinating the receipt and review of all necessary documents.",
  },
  {
    icon: <HiOutlineClock className="w-5 h-5 text-gold" />,
    title: "Managing timelines and ensuring all contractual deadlines are met.",
  },
  {
    icon: <HiOutlinePencilSquare className="w-5 h-5 text-gold" />,
    title: "Facilitating the signing of all required escrow documents.",
  },
  {
    icon: <HiOutlineBuildingLibrary className="w-5 h-5 text-gold" />,
    title:
      "Coordinating with lenders to ensure loan documents and funding are in place.",
  },
  {
    icon: <HiOutlineDocumentText className="w-5 h-5 text-gold" />,
    title: "Preparing estimated and final closing statements.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-5 h-5 text-gold" />,
    title:
      "Disbursing funds according to instructions upon successful closing.",
  },
];

// What You May Need
const whatYouNeed = [
  {
    icon: <HiOutlineDocumentCheck className="w-5 h-5 text-gold" />,
    title:
      "A fully executed Purchase Agreement and any counter offers or addenda.",
  },
  {
    icon: <HiOutlineUsers className="w-5 h-5 text-gold" />,
    title: "Valid government-issued identification for all parties.",
  },
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-gold" />,
    title: "Contact information for buyers, sellers, and agents.",
  },
  {
    icon: <HiOutlineBuildingLibrary className="w-5 h-5 text-gold" />,
    title: "Lender contact information and pre-approval letter.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-5 h-5 text-gold" />,
    title:
      "Any additional documents specific to the transaction (e.g., trust documents).",
  },
];

// Timeline Steps
const timelineSteps = [
  {
    number: 1,
    title: "Escrow is Opened",
    description:
      "The signed purchase agreement is delivered to the escrow company, and the buyer's initial deposit is made.",
  },
  {
    number: 2,
    title: "Instructions & Documentation",
    description:
      "We prepare escrow instructions and gather all necessary documents from buyers, sellers, and lenders.",
  },
  {
    number: 3,
    title: "Contingency & Condition Tracking",
    description:
      "We monitor timelines for inspections, loan approval, and other contingencies outlined in the agreement.",
  },
  {
    number: 4,
    title: "Final Review & Funding",
    description:
      "Loan documents are signed, the lender funds the loan, and the buyer deposits remaining closing funds.",
  },
  {
    number: 5,
    title: "Closing & Disbursement",
    description:
      "The new deed is recorded with the county, and funds are disbursed to the seller and other parties.",
  },
];

// FAQs
const faqs = [
  {
    question: "How long does residential escrow typically take?",
    answer:
      "Most residential escrow transactions close in 30 to 45 days, depending on financing, inspections, and other factors. Cash transactions may close faster.",
  },
  {
    question: "Who pays the escrow fees?",
    answer:
      "This is typically determined by the purchase agreement and local custom. In  California, it's common for buyers and sellers to each pay their own escrow fees.",
  },
  {
    question: "What happens if we need to close early or late?",
    answer:
      "Early closing requires all parties to be ready and all conditions met. Late closing may require an extension agreed to by all parties.",
  },
  {
    question: "How are my funds kept secure during escrow?",
    answer:
      "Funds are held in a trust account at a federally insured financial institution, separate from the escrow company's operating funds. Always verify wiring instructions by phone.",
  },
];

// Why Choose Us
const whyChooseUs = [
  {
    icon: <HiOutlineChatBubbleLeftRight className="w-5 h-5 text-gold" />,
    title: "Clear Communication",
    description: "We keep you and your agent informed at every milestone.",
  },
  {
    icon: <HiOutlineClipboardDocumentList className="w-5 h-5 text-gold" />,
    title: "Structured Process",
    description:
      "Our experienced team follows a meticulous process to prevent delays.",
  },
  {
    icon: <HiOutlineEye className="w-5 h-5 text-gold" />,
    title: "Attention to Detail",
    description: "We review every document to ensure accuracy and compliance.",
  },
  {
    icon: <HiOutlineShieldCheck className="w-5 h-5 text-gold" />,
    title: "Professional Coordination",
    description:
      "We act as a reliable central point of contact for all parties involved.",
  },
  {
    icon: <HiOutlineLockClosed className="w-5 h-5 text-gold" />,
    title: "Secure Handling",
    description:
      "Your funds and personal information are protected by industry-leading security measures.",
  },
];

export default function ResidentialServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Background Image - Centered */}
        <section className="relative min-h-[450px] md:min-h-[500px] flex items-center">
          {/* Background Image */}
          <Image
            src="/img8.jpeg"
            alt="Residential Escrow Services"
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
                Residential Purchase & Sale Escrow
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Haven Escrow acts as a neutral third party to ensure all terms
                of your residential purchase agreement are met, providing a
                secure and transparent process for a smooth closing.
              </p>
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Service Is For + Security Notice */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Left - Who This Service Is For */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                  Who This Service Is For
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whoIsForItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-light-gray rounded-lg p-4"
                    >
                      <div className="text-navy">{item.icon}</div>
                      <span className="text-navy font-medium">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Security Notice */}
              <div className="bg-light-gray rounded-xl p-6 border-l-4 border-gold h-fit">
                <div className="flex items-center gap-3 mb-4">
                  <HiOutlineShieldExclamation className="w-6 h-6 text-gold" />
                  <h3 className="text-lg font-bold text-navy">
                    Security Notice
                  </h3>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  To protect yourself from wire fraud, always confirm wiring
                  instructions by phone with your escrow officer using a trusted
                  phone number before sending any funds. We will never email
                  changes to our wiring instructions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
              What We Handle During Residential Escrow
            </h2>
            <div className="max-w-3xl space-y-4">
              {whatWeHandle.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <span className="text-text-muted">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-8 max-w-3xl">
              Our team ensures every step is handled with precision and care,
              keeping all parties informed throughout the process.
            </p>
          </div>
        </section>

        {/* What You May Need */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              What You May Need to Provide
            </h2>
            <p className="text-text-muted mb-8">
              To ensure a smooth escrow process, we will need the following
              items from the relevant parties:
            </p>
            <div className="max-w-3xl space-y-4">
              {whatYouNeed.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <span className="text-text-muted">{item.title}</span>
                </div>
              ))}
            </div>
            <p className="text-text-muted text-sm mt-8 max-w-3xl italic">
              Your escrow officer will confirm exactly what is needed for your
              specific transaction once escrow is opened.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
              Typical Residential Escrow Timeline
            </h2>

            <div className="max-w-3xl space-y-6">
              {timelineSteps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <div className="w-0.5 bg-border-color flex-1 my-2"></div>
                    )}
                  </div>
                  <div className="pb-6">
                    <h3 className="font-bold text-navy mb-1">{step.title}</h3>
                    <p className="text-text-muted text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-text-muted text-sm mt-8 bg-white p-4 rounded-lg max-w-3xl">
              <strong>*Important Disclaimer:</strong> This is a general
              timeline. Each transaction is unique, and timelines can vary based
              on the specific terms of the purchase agreement and the parties
              involved.
            </p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-10">
              Common Questions About Residential Escrow
            </h2>

            <div className="max-w-3xl space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-light-gray rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-navy">
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

        {/* Why Choose Us */}
        <section className="py-20 bg-light-gray">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why Work With Haven Escrow
            </h2>
            <p className="text-text-muted mb-10 max-w-2xl">
              Choosing the right escrow partner is crucial for a successful real
              estate transaction. We provide:
            </p>

            <div className="max-w-3xl space-y-4">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-navy">{item.title}</h4>
                    <p className="text-text-muted text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to open residential escrow?
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Let our expert team guide you through a secure and efficient
              closing process. Get started today or contact us with any
              questions.
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
