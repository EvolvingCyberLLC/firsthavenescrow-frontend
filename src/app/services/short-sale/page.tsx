import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Short Sale Escrow | Haven Escrow",
  description:
    "Short sale escrow services coordinating transactions involving lender approval and additional documentation requirements.",
  openGraph: {
    title: "Short Sale Escrow | Haven Escrow",
    description:
      "Short sale escrow services coordinating transactions involving lender approval and additional documentation requirements.",
  },
};

const whoIsFor = [
  "Property owners pursuing a short sale",
  "Buyers purchasing short sale properties",
  "Real estate agents handling short sale transactions",
  "Transactions requiring lender approval",
];

const whatWeHandle = [
  "Opening escrow for short sale transactions",
  "Coordinating receipt of lender approval documentation",
  "Tracking transaction-specific conditions as instructed",
  "Facilitating execution of required documents",
  "Coordinating closing and disbursement per written instructions",
];

const process = [
  {
    title: "Escrow is opened",
    description: "Escrow is opened upon receipt of a purchase agreement.",
  },
  {
    title: "Lender approval documentation is coordinated",
    description:
      "Required lender approval and supporting documentation are coordinated.",
  },
  {
    title: "Conditions are tracked as instructed",
    description:
      "Transaction-specific conditions are tracked per the provided instructions.",
  },
  {
    title: "Documents are executed",
    description:
      "All necessary documents are executed by the parties involved.",
  },
  {
    title: "Closing and disbursement",
    description: "Closing and disbursement occur per written instructions.",
  },
];

const whyChooseUs = [
  "Neutral coordination of lender-driven requirements",
  "Structured handling of additional documentation",
  "Clear communication with involved parties",
  "Instruction-based escrow processing",
];

export default function ShortSalePage() {
  return (
    <ServicePageTemplate
      title="Short Sale Escrow"
      intro="A short sale escrow involves the sale of a property where the lender agrees to accept less than the total amount owed on the loan. These transactions typically require lender approval and may involve additional documentation and extended timelines. Haven Escrow coordinates short sale escrow transactions by following written instructions and working with the involved parties to help ensure required approvals and conditions are addressed prior to closing."
      whoIsFor={whoIsFor}
      whatWeHandle={whatWeHandle}
      additionalInfo={{
        title: "Lender approval considerations",
        content:
          "Short sale transactions depend on lender review and approval. Escrow follows written instructions and proceeds once required approvals are received. Timelines may vary based on lender response and transaction complexity.",
      }}
      process={process}
      whyChooseUs={whyChooseUs}
      ctaText="If you are involved in a short sale transaction, contact our office or open escrow to begin the process."
    />
  );
}
