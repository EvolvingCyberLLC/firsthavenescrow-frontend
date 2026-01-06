import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import PolicySection from "@/components/PolicySection";
import BulletList from "@/components/BulletList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | Haven Escrow",
  description:
    "Accessibility statement for Haven Escrow, outlining our commitment to providing an accessible website and how users can request assistance.",
  openGraph: {
    title: "Accessibility Statement | Haven Escrow",
    description:
      "Accessibility statement for Haven Escrow, outlining our commitment to providing an accessible website and how users can request assistance.",
  },
};

const accessibilityFeatures = [
  "Keyboard-accessible navigation",
  "Logical heading structure for screen readers",
  "Text alternatives for images where applicable",
  "Sufficient color contrast for readability",
  "Clear and descriptive form labels and instructions",
  "Responsive layout compatible with assistive technologies",
];

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <PageHeader
          title="Accessibility Statement"
          description="Haven Escrow is committed to providing a website that is accessible to the widest possible audience, regardless of ability or technology. We strive to ensure our website is usable by everyone and to improve accessibility as standards and best practices evolve."
        />

        {/* Accessibility Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl">
              {/* Accessibility Standards */}
              <PolicySection title="Accessibility standards">
                <p className="mb-4">
                  Our goal is to align this website with the Web Content
                  Accessibility Guidelines (WCAG) 2.1 Level AA, which are widely
                  recognized as the industry standard for web accessibility.
                </p>
                <p>
                  These guidelines help make web content more accessible for
                  people with disabilities, including those who use assistive
                  technologies such as screen readers or keyboard navigation.
                </p>
              </PolicySection>

              {/* Accessibility Features */}
              <PolicySection title="Accessibility features">
                <BulletList items={accessibilityFeatures} icon="check" />
              </PolicySection>

              {/* Forms and Documents */}
              <PolicySection title="Forms and documents">
                <p className="mb-4">
                  We aim to ensure that online forms and documents provided on
                  this website are accessible. Some documents, including PDFs,
                  may be provided by third parties or originate from external
                  sources.
                </p>
                <p>
                  If you experience difficulty accessing any form, document, or
                  content, please contact us and we will provide assistance or
                  an alternative format when possible.
                </p>
              </PolicySection>

              {/* Ongoing Efforts */}
              <PolicySection title="Ongoing accessibility efforts">
                <p>
                  Accessibility is an ongoing effort. We periodically review our
                  website and make updates to improve accessibility, usability,
                  and compatibility with assistive technologies.
                </p>
              </PolicySection>

              {/* Need Assistance */}
              <PolicySection title="Need assistance?">
                <p className="mb-4">
                  If you encounter any accessibility barriers on this website or
                  need help accessing content, please contact us:
                </p>
                <address className="not-italic space-y-2">
                  <p>
                    <strong className="text-[var(--navy)]">Phone:</strong>{" "}
                    <a
                      href="tel:2135550123"
                      className="text-[var(--gold)] hover:underline"
                    >
                      (213) 555-0123
                    </a>
                  </p>
                  <p>
                    <strong className="text-[var(--navy)]">Email:</strong>{" "}
                    <a
                      href="mailto:contact@havenescrow.com"
                      className="text-[var(--gold)] hover:underline"
                    >
                      contact@havenescrow.com
                    </a>
                  </p>
                </address>
                <p className="mt-4">
                  We will make reasonable efforts to respond promptly and
                  address accessibility concerns.
                </p>
              </PolicySection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
