import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Holding Escrow | Haven Escrow",
  description:
    "Holding escrow services providing neutral custody of funds or documents until agreed-upon conditions are satisfied.",
  openGraph: {
    title: "Holding Escrow | Haven Escrow",
    description:
      "Holding escrow services providing neutral custody of funds or documents until agreed-upon conditions are satisfied.",
  },
};

const whoIsFor = [
  "Parties requiring conditional release of funds or documents",
  "Business or real estate transactions with unmet conditions",
  "Situations where a neutral third party is needed to hold assets",
  "Transactions requiring structured, instruction-based handling",
];

const whatWeHandle = [
  "Receiving funds or documents into escrow",
  "Holding items securely according to written instructions",
  "Releasing funds or documents only when conditions are satisfied",
  "Providing confirmation of receipt and release as instructed",
];

const process = [
  {
    title: "Escrow instructions are received",
    description:
      "Written escrow instructions are received and reviewed from all parties.",
  },
  {
    title: "Items are delivered into escrow",
    description:
      "Funds or documents are delivered and held securely by escrow.",
  },
  {
    title: "Conditions are monitored",
    description:
      "Items are held until conditions outlined in instructions are met.",
  },
  {
    title: "Authorization to release is received",
    description:
      "Written authorization to release is received from the appropriate parties.",
  },
  {
    title: "Release per instructions",
    description:
      "Items are released in accordance with the written escrow instructions.",
  },
];

const whyChooseUs = [
  "Neutral third-party handling",
  "Secure custody of funds or documents",
  "Clear, instruction-based process",
  "Reduced risk of disputes between parties",
];

export default function HoldingEscrowPage() {
  return (
    <ServicePageTemplate
      title="Holding Escrow"
      intro="Holding escrow is used when funds, documents, or other items must be held by a neutral third party until specific conditions are met. These transactions do not involve negotiation or enforcement of terms but rely strictly on written instructions provided by the involved parties. Haven Escrow provides holding escrow services by receiving and safeguarding items and releasing them only in accordance with written escrow instructions."
      whoIsFor={whoIsFor}
      whatWeHandle={whatWeHandle}
      additionalInfo={{
        title: "Important clarification about holding escrow",
        content:
          "Escrow does not evaluate, verify, or enforce conditions. All actions taken by escrow are based solely on written instructions agreed to by the parties involved. If instructions are incomplete or unclear, escrow will request clarification before proceeding.",
      }}
      process={process}
      whyChooseUs={whyChooseUs}
      ctaText="If your transaction requires a neutral holding escrow, contact our office to discuss your instructions or open escrow to begin."
    />
  );
}
