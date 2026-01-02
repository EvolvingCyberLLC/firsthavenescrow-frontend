import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BulletList from "@/components/BulletList";
import CTABox from "@/components/CTABox";

interface TimelineStep {
  title: string;
  description: string;
}

interface ServicePageTemplateProps {
  title: string;
  intro: string;
  whoIsFor: string[];
  whatWeHandle: string[];
  additionalInfo?: {
    title: string;
    content: string;
  };
  process: TimelineStep[];
  whyChooseUs: string[];
  ctaText?: string;
}

export default function ServicePageTemplate({
  title,
  intro,
  whoIsFor,
  whatWeHandle,
  additionalInfo,
  process,
  whyChooseUs,
  ctaText = "If you are involved in this type of transaction, contact our office or open escrow to begin the process.",
}: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title={title}
          description={intro}
          ctaButton={{ label: "Open Escrow", href: "/open-escrow" }}
        />

        {/* Who This Service Is For */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">Who this service is for</h2>
              <BulletList items={whoIsFor} icon="check" />
            </div>
          </div>
        </section>

        {/* What We Handle */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">What escrow handles</h2>
              <BulletList items={whatWeHandle} icon="check" />
            </div>
          </div>
        </section>

        {/* Additional Information */}
        {additionalInfo && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <div className="max-w-3xl">
                <h2 className="heading-lg mb-6">{additionalInfo.title}</h2>
                <p className="text-[var(--text-muted)]">
                  {additionalInfo.content}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Process Timeline */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <h2 className="heading-lg mb-10">Typical escrow process</h2>
            <div className="max-w-3xl">
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-[var(--navy)] text-white rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < process.length - 1 && (
                        <div className="w-0.5 bg-[var(--border-color)] flex-1 my-2"></div>
                      )}
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-[var(--navy)] mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[var(--text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-muted)] mt-8">
                Timelines may vary based on transaction details and coordination
                with third parties.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="heading-lg mb-6">
                Why use an escrow company for this transaction
              </h2>
              <BulletList items={whyChooseUs} icon="check" />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <CTABox
              title="Ready to get started?"
              description={ctaText}
              buttons={[
                {
                  label: "Open Escrow",
                  href: "/open-escrow",
                  variant: "primary",
                },
                { label: "Contact Us", href: "/contact", variant: "outline" },
              ]}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
