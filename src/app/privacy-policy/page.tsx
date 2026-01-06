import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PolicySection from "@/components/PolicySection";
import BulletList from "@/components/BulletList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Haven Escrow",
  description:
    "Review the privacy practices of Haven Escrow, including how personal information is collected, used, and protected.",
  openGraph: {
    title: "Privacy Policy | Haven Escrow",
    description:
      "Review the privacy practices of Haven Escrow, including how personal information is collected, used, and protected.",
  },
};

const howWeUseInfo = [
  "Respond to inquiries and requests",
  "Process escrow-related submissions",
  "Communicate regarding services or transactions",
  "Maintain website security and functionality",
  "Comply with legal or regulatory obligations",
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Privacy Policy"
          effectiveDate="January 1, 2026"
          description="Haven Escrow respects your privacy and is committed to protecting personal information provided through our website. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or submit information through our forms."
        />

        {/* Policy Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              {/* Information We Collect */}
              <PolicySection title="Information we collect">
                <div className="mb-6">
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    Information you provide directly
                  </h3>
                  <p>
                    We may collect personal information you voluntarily provide,
                    such as your name, email address, phone number, property
                    information, and transaction-related details when you submit
                    forms or contact us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    Information collected automatically
                  </h3>
                  <p>
                    Our website may collect limited technical information such
                    as IP address, browser type, and pages visited for basic
                    website functionality and security purposes.
                  </p>
                </div>
              </PolicySection>

              {/* How We Use Information */}
              <PolicySection title="How we use information">
                <BulletList items={howWeUseInfo} icon="bullet" />
              </PolicySection>

              {/* How We Protect Information */}
              <PolicySection title="How we protect information">
                <p>
                  We take reasonable administrative and technical measures to
                  protect personal information from unauthorized access,
                  disclosure, or misuse. However, no method of transmission over
                  the internet is completely secure.
                </p>
              </PolicySection>

              {/* Sharing of Information */}
              <PolicySection title="Sharing of information">
                <p>
                  We do not sell personal information. Information may be shared
                  with authorized parties involved in an escrow transaction or
                  as required by law, regulation, or legal process.
                </p>
              </PolicySection>

              {/* Cookies and Tracking */}
              <PolicySection title="Cookies and tracking">
                <p>
                  Our website may use basic cookies or similar technologies to
                  support website functionality. We do not use cookies to
                  collect sensitive personal information.
                </p>
              </PolicySection>

              {/* Third-Party Links */}
              <PolicySection title="Third-party links">
                <p>
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of those
                  websites.
                </p>
              </PolicySection>

              {/* Data Retention */}
              <PolicySection title="Data retention">
                <p>
                  Information is retained only as long as necessary for
                  escrow-related purposes or as required by applicable laws and
                  regulations.
                </p>
              </PolicySection>

              {/* Your Choices */}
              <PolicySection title="Your choices">
                <p>
                  You may contact us to update or correct your information.
                  Certain information may be required to provide escrow
                  services.
                </p>
              </PolicySection>

              {/* Changes to Policy */}
              <PolicySection title="Changes to this policy">
                <p>
                  We may update this Privacy Policy from time to time. Updates
                  will be posted on this page with a revised effective date.
                </p>
              </PolicySection>

              {/* Contact Us */}
              <PolicySection title="Contact us">
                <p className="mb-4">
                  If you have questions about this Privacy Policy, contact us
                  at:
                </p>
                <address className="not-italic">
                  <p className="font-semibold text-[var(--navy)]">
                    Haven Escrow
                  </p>
                  <p>
                    <a
                      href="mailto:contact@havenescrow.com"
                      className="text-[var(--gold)] hover:underline"
                    >
                      contact@havenescrow.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:2135550123"
                      className="text-[var(--gold)] hover:underline"
                    >
                      (213) 555-0123
                    </a>
                  </p>
                </address>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
