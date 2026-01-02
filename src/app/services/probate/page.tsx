import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Metadata } from "next";

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

const whoIsFor = [
  "Executors or administrators of estates",
  "Heirs or beneficiaries involved in property sales",
  "Buyers purchasing probate properties",
  "Real estate agents handling probate transactions",
];

const whatWeHandle = [
  "Opening escrow for probate-related transactions",
  "Coordinating receipt of required probate documentation",
  "Tracking court-related conditions as instructed",
  "Facilitating document execution and approvals",
  "Coordinating closing and disbursement per written instructions",
];

const process = [
  {
    title: "Escrow is opened",
    description:
      "Escrow is opened upon receipt of a purchase agreement or instructions.",
  },
  {
    title: "Probate documentation is coordinated",
    description:
      "Required probate documentation including court orders and letters of administration are coordinated.",
  },
  {
    title: "Court-related conditions are tracked",
    description:
      "Conditions related to court approval are tracked as instructed.",
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
  "Neutral handling of documents and funds",
  "Coordination of probate-specific requirements",
  "Structured tracking of escrow instructions",
  "Clear communication with all involved parties",
];

export default function ProbatePage() {
  return (
    <ServicePageTemplate
      title="Probate Escrow"
      intro="Probate escrow is used when a property sale or transfer is subject to probate court proceedings. These transactions often involve additional documentation and approvals and may be governed by court requirements. Haven Escrow coordinates probate escrow transactions by following written instructions and working with the involved parties to help ensure all required conditions are satisfied prior to closing."
      whoIsFor={whoIsFor}
      whatWeHandle={whatWeHandle}
      additionalInfo={{
        title: "Probate documentation",
        content:
          "Probate transactions may require additional documentation depending on the court process and transaction structure. Escrow will review and coordinate required documents based on the instructions provided. Common documents may include court orders, letters of administration, or other estate-related paperwork, as applicable.",
      }}
      process={process}
      whyChooseUs={whyChooseUs}
      ctaText="If you are involved in a probate-related property transaction, contact our office or open escrow to begin the process."
    />
  );
}
