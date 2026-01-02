import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NoticeBox from "@/components/NoticeBox";
import DownloadCard from "@/components/DownloadCard";
import BulletList from "@/components/BulletList";
import CTABox from "@/components/CTABox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forms & Downloads | Haven Escrow",
  description:
    "Access commonly used escrow forms and informational documents provided by Haven Escrow.",
  openGraph: {
    title: "Forms & Downloads | Haven Escrow",
    description:
      "Access commonly used escrow forms and informational documents provided by Haven Escrow.",
  },
};

const transactionForms = [
  {
    title: "Wire Authorization Form",
    description:
      "Used to authorize the disbursement of funds according to escrow instructions.",
    fileName: "Wire_Authorization.pdf",
    fileUrl: "/forms/Wire_Authorization.pdf",
  },
  {
    title: "Identification Requirements",
    description:
      "Overview of identification requirements for signing escrow documents.",
    fileName: "Identification_Requirements.pdf",
    fileUrl: "/forms/Identification_Requirements.pdf",
  },
  {
    title: "Buyer / Seller Information Sheet",
    description:
      "Collects basic contact and transaction information for escrow setup.",
    fileName: "Buyer_Seller_Information.pdf",
    fileUrl: "/forms/Buyer_Seller_Information.pdf",
  },
];

const informationalDocuments = [
  {
    title: "Escrow Process Overview",
    description:
      "A general overview of the escrow process from opening to closing.",
    fileName: "Escrow_Process_Overview.pdf",
    fileUrl: "/forms/Escrow_Process_Overview.pdf",
  },
  {
    title: "Wire Fraud Awareness Notice",
    description:
      "Important information on how to protect yourself from wire fraud during a transaction.",
    fileName: "Wire_Fraud_Awareness.pdf",
    fileUrl: "/forms/Wire_Fraud_Awareness.pdf",
  },
];

const submissionGuidance = [
  "Follow instructions provided by escrow before submitting documents",
  "Do not email sensitive information unless directed",
  "Verify wiring instructions by phone using a trusted number",
  "Contact escrow if you are unsure how to submit a document",
];

export default function FormsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Forms & Downloads"
          description="Below are commonly requested forms and informational documents. Availability and requirements may vary by transaction. If you're unsure which form applies, contact our team for guidance."
        />

        {/* Important Notice */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl">
              <NoticeBox title="Important notice">
                <p>
                  Forms provided here are for convenience only. Not all forms
                  apply to every transaction, and some documents may need to be
                  completed or provided directly by escrow. Always follow
                  instructions provided by our team.
                </p>
              </NoticeBox>
            </div>
          </div>
        </section>

        {/* Transaction-related Forms */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">Transaction-related forms</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {transactionForms.map((form, index) => (
                <DownloadCard key={index} {...form} />
              ))}
            </div>
          </div>
        </section>

        {/* Informational Documents */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-lg mb-8">Informational documents</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
              {informationalDocuments.map((doc, index) => (
                <DownloadCard key={index} {...doc} />
              ))}
            </div>
          </div>
        </section>

        {/* Document Submission Guidance */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">Submitting documents</h2>
              <BulletList items={submissionGuidance} icon="bullet" />
            </div>
          </div>
        </section>

        {/* Need Help CTA */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <CTABox
                title="Need help with a form?"
                description="If you're unsure which document applies to your transaction or how to complete a form, contact our team and we'll guide you."
                buttons={[
                  { label: "Contact Us", href: "/contact", variant: "primary" },
                  {
                    label: "Open Escrow",
                    href: "/open-escrow",
                    variant: "outline",
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
