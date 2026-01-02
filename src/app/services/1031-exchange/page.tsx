import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

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

const whoIsFor = [
  "Property owners completing a 1031 exchange",
  "Investors reinvesting in replacement property",
  "Buyers and sellers involved in exchange transactions",
  "Parties working with a qualified intermediary",
];

const whatWeHandle = [
  "Opening escrow for relinquished and replacement properties",
  "Coordinating escrow instructions related to the exchange",
  "Working with the qualified intermediary as instructed",
  "Managing disbursement of funds in accordance with exchange requirements",
  "Coordinating required documents and signatures",
  "Tracking transaction timelines related to closing",
];

const process = [
  {
    title: "Escrow is opened for the relinquished property",
    description:
      "Once a sale agreement is in place, escrow is opened for the property being sold.",
  },
  {
    title: "Sale proceeds are handled per exchange instructions",
    description:
      "Funds are managed in accordance with written exchange instructions and qualified intermediary requirements.",
  },
  {
    title: "Identification period is observed",
    description:
      "The 45-day identification period for replacement properties is tracked.",
  },
  {
    title: "Escrow is opened for the replacement property",
    description:
      "A new escrow is opened for the acquisition of the replacement property.",
  },
  {
    title: "Closing and disbursement",
    description:
      "Both transactions are closed and funds disbursed in accordance with instructions.",
  },
];

const whyChooseUs = [
  "Neutral handling of funds and documents",
  "Coordination with qualified intermediaries",
  "Structured tracking of escrow instructions",
  "Clear communication with involved parties",
];

export default function Exchange1031Page() {
  return (
    <ServicePageTemplate
      title="1031 Exchange Escrow"
      intro="A 1031 exchange allows property owners to defer capital gains taxes by reinvesting proceeds from the sale of a property into a qualifying replacement property. These transactions are subject to strict timing rules and must be completed in accordance with written escrow instructions and applicable exchange requirements. Haven Escrow coordinates 1031 exchange escrows by working closely with qualified intermediaries and the parties involved to ensure the transaction proceeds according to instructions."
      whoIsFor={whoIsFor}
      whatWeHandle={whatWeHandle}
      additionalInfo={{
        title: "Important information about 1031 exchanges",
        content:
          "1031 exchange transactions are time-sensitive and subject to specific identification and closing periods. All actions taken by escrow are based solely on written instructions provided by the parties and the qualified intermediary. Haven Escrow does not provide tax or legal advice. Clients are encouraged to consult with their tax or legal professionals regarding 1031 exchange eligibility and requirements.",
      }}
      process={process}
      whyChooseUs={whyChooseUs}
      ctaText="If you are planning a 1031 exchange and need escrow coordination, contact our office or open escrow to begin the process."
    />
  );
}
