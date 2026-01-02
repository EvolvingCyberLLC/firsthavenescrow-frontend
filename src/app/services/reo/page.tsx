import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "REO & Bank-Owned Escrow | Haven Escrow",
  description:
    "Escrow services for REO and bank-owned property transactions, coordinating lender requirements and institutional documentation.",
  openGraph: {
    title: "REO & Bank-Owned Escrow | Haven Escrow",
    description:
      "Escrow services for REO and bank-owned property transactions, coordinating lender requirements and institutional documentation.",
  },
};

const whoIsFor = [
  "Buyers purchasing REO or bank-owned properties",
  "Lenders disposing of real estate–owned assets",
  "Real estate agents representing REO transactions",
  "Institutional or compliance-driven property sales",
];

const whatWeHandle = [
  "Opening escrow for REO and bank-owned properties",
  "Coordinating lender-provided escrow instructions",
  "Tracking institution-specific documentation requirements",
  "Facilitating execution of required documents",
  "Coordinating closing and disbursement per written instructions",
];

const process = [
  {
    title: "Escrow is opened",
    description:
      "Escrow is opened upon receipt of the purchase agreement from the lender.",
  },
  {
    title: "Lender instructions are reviewed",
    description:
      "Lender-specific escrow instructions are reviewed and processed.",
  },
  {
    title: "Documents and conditions are coordinated",
    description:
      "Required documents and conditions are coordinated per lender requirements.",
  },
  {
    title: "Signatures and approvals are completed",
    description:
      "All necessary documents are executed by the appropriate parties.",
  },
  {
    title: "Closing and disbursement",
    description: "Closing and disbursement occur per written instructions.",
  },
];

const whyChooseUs = [
  "Structured handling of lender-driven requirements",
  "Neutral coordination between parties",
  "Clear tracking of institutional conditions",
  "Instruction-based escrow processing",
];

export default function REOPage() {
  return (
    <ServicePageTemplate
      title="REO / Bank-Owned Escrow"
      intro="REO and bank-owned escrow transactions involve properties that have been acquired by a lender through foreclosure or deed-in-lieu processes. These transactions are typically governed by institution-specific requirements, standardized documentation, and defined timelines. Haven Escrow coordinates REO and bank-owned escrow transactions by following written instructions and working with lenders, agents, and buyers to help ensure all required conditions are satisfied prior to closing."
      whoIsFor={whoIsFor}
      whatWeHandle={whatWeHandle}
      additionalInfo={{
        title: "REO transaction considerations",
        content:
          "REO and bank-owned transactions often involve standardized lender addenda, fixed timelines established by the institution, limited negotiation flexibility, and strict compliance with lender instructions. Escrow proceeds strictly in accordance with written instructions provided by the lender and involved parties.",
      }}
      process={process}
      whyChooseUs={whyChooseUs}
      ctaText="If you are involved in an REO or bank-owned property transaction, contact our office or open escrow to begin the process."
    />
  );
}
