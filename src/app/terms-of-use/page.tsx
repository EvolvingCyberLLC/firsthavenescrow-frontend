import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PolicySection from "@/components/PolicySection";
import BulletList from "@/components/BulletList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Haven Escrow",
  description:
    "Review the terms governing use of the Haven Escrow website and online services.",
  openGraph: {
    title: "Terms of Use | Haven Escrow",
    description:
      "Review the terms governing use of the Haven Escrow website and online services.",
  },
};

const websiteUseRules = [
  "Do not misuse or interfere with the website",
  "Do not attempt unauthorized access to systems or data",
  "Do not submit false or misleading information",
];

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Terms of Use"
          effectiveDate="January 1, 2026"
          description="These Terms of Use govern your access to and use of the Haven Escrow website. By accessing or using this website, you agree to be bound by these Terms."
        />

        {/* Terms Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              {/* Use of Website */}
              <PolicySection title="Use of this website">
                <p className="mb-4">
                  This website is provided for general informational purposes
                  only. You may use the site for lawful purposes and in
                  accordance with these Terms.
                </p>
                <BulletList items={websiteUseRules} icon="bullet" />
              </PolicySection>

              {/* No Legal or Financial Advice */}
              <PolicySection title="No legal or financial advice">
                <p>
                  Content on this website does not constitute legal, financial,
                  or professional advice. Escrow services are provided only
                  pursuant to written escrow instructions and applicable
                  agreements.
                </p>
              </PolicySection>

              {/* Escrow Services Disclaimer */}
              <PolicySection title="Escrow services">
                <p>
                  Submitting information through this website does not create an
                  escrow relationship. An escrow relationship is established
                  only after acceptance of written instructions and confirmation
                  by Haven Escrow.
                </p>
              </PolicySection>

              {/* Intellectual Property */}
              <PolicySection title="Intellectual property">
                <p>
                  All content on this website, including text, graphics, logos,
                  and design elements, is the property of Haven Escrow or its
                  licensors and may not be reproduced without permission.
                </p>
              </PolicySection>

              {/* Third-Party Links */}
              <PolicySection title="Third-party links">
                <p>
                  This website may include links to third-party websites. First
                  Haven Escrow is not responsible for the content or practices
                  of third-party sites.
                </p>
              </PolicySection>

              {/* Limitation of Liability */}
              <PolicySection title="Limitation of liability">
                <p>
                  To the fullest extent permitted by law, Haven Escrow is not
                  liable for damages arising from use of or inability to use
                  this website.
                </p>
              </PolicySection>

              {/* Indemnification */}
              <PolicySection title="Indemnification">
                <p>
                  You agree to indemnify and hold harmless Haven Escrow from
                  claims arising out of your use of the website or violation of
                  these Terms.
                </p>
              </PolicySection>

              {/* Website Availability */}
              <PolicySection title="Website availability and changes">
                <p>
                  We may modify or discontinue this website or these Terms at
                  any time without notice. Continued use of the website
                  constitutes acceptance of updated Terms.
                </p>
              </PolicySection>

              {/* Governing Law */}
              <PolicySection title="Governing law">
                <p>
                  These Terms are governed by the laws of the state in which
                  Haven Escrow operates, without regard to conflict-of-law
                  principles.
                </p>
              </PolicySection>

              {/* Contact Us */}
              <PolicySection title="Contact us">
                <p className="mb-4">
                  If you have questions about these Terms, contact us at:
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
