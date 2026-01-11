import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

// Trust Bar Items
const trustItems = [
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Secure handling of sensitive documents",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "Proactive communication with all parties",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    title: "Experienced escrow support",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Serving  California with local expertise",
  },
];

// Services
const services = [
  {
    title: "Residential",
    description:
      "Expert handling of residential purchase and sale transactions.",
    href: "/services/residential",
  },
  {
    title: "Refinance",
    description: "A streamlined process for your property refinance needs.",
    href: "/services/refinance",
  },
  {
    title: "Commercial",
    description: "Specialized support for complex commercial property deals.",
    href: "/services/commercial",
  },
  {
    title: "1031 Exchange",
    description: "Facilitating tax-deferred exchanges with precision and care.",
    href: "/services/1031-exchange",
  },
  {
    title: "Probate",
    description: "Guidance and support for escrow involving estate properties.",
    href: "/services/probate",
  },
  {
    title: "Holding Escrow",
    description: "Securely holding funds or documents for various agreements.",
    href: "/services/holding-escrow",
  },
];

// What You Can Expect
const expectations = [
  "Clear, consistent updates to keep all parties informed and on the same page.",
  "A structured process that minimizes surprises and keeps your closing on track.",
  "Secure handling of documents and funds using the latest industry standards.",
  "Professional coordination between agents, lenders, and other parties.",
  "A team that takes deadlines seriously and is committed to on-time closings.",
];

// Process Steps
const processSteps = [
  {
    number: 1,
    title: "Open escrow",
    description: "Submit your transaction details",
  },
  {
    number: 2,
    title: "Confirm instructions",
    description: "We verify all parties and terms",
  },
  {
    number: 3,
    title: "Collect documents & approvals",
    description: "Gather signatures and requirements",
  },
  {
    number: 4,
    title: "Funding & final review",
    description: "Coordinate with lenders and verify funds",
  },
  {
    number: 5,
    title: "Close & disburse",
    description: "Record and distribute accordingly",
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "Haven made our home buying process incredibly smooth. Their communication was top-notch, and we always felt like a priority.",
    author: "Sarah & Tom L.",
    role: "Home Buyers",
  },
  {
    quote:
      "As a real estate agent, I rely on escrow partners who are responsive and detail-oriented. Haven Escrow consistently delivers.",
    author: "Michael B.",
    role: "Real Estate Agent",
  },
  {
    quote:
      "The team handled our complex commercial transaction with professionalism and expertise. We couldn't be happier with the outcome.",
    author: "J. Peterson",
    role: "Property Investor",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container-custom py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 py-16 items-center">
              <div>
                <h1 className="heading-xl mb-6">
                  Escrow services built for smooth, on-time closings.
                </h1>
                <p className="text-lg text-[var(--text-muted)] mb-8 max-w-xl">
                  Clear communication. Secure handling of documents and funds. A
                  process that keeps every party aligned from opening to close.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Link href="/open-escrow" className="btn-primary">
                    Open Escrow
                  </Link>
                  <a href="tel:7147868912" className="btn-outline">
                    Call (714) 786-8912
                  </a>
                </div>
                <p className="text-sm text-[var(--text-muted)]">
                  Have a question? Talk to an escrow officer — we respond
                  quickly during business hours.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative shadow-xl">
                  <Image
                    src="/img1.jpg"
                    alt="Professional escrow office - Haven Escrow team at work"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--gold)]/10 rounded-full z-10"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[var(--navy)]/5 rounded-full z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="bg-[var(--light-gray)] py-8">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-[var(--gold)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-[var(--text-dark)]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Escrow services we handle</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Choose a transaction type below, or open escrow and we&apos;ll
                route your file to the right team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="card group border border-[var(--border-color)] hover:border-[var(--gold)]"
                >
                  <h3 className="heading-sm mb-2 group-hover:text-[var(--gold)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>

            <p className="text-center text-sm text-[var(--text-muted)] mt-8">
              Don&apos;t see your transaction type?{" "}
              <Link
                href="/contact"
                className="text-[var(--gold)] hover:underline"
              >
                Contact us
              </Link>{" "}
              — we&apos;ll confirm what we can support.
            </p>
          </div>
        </section>

        {/* What You Can Expect Section */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">What you can expect from us</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {expectations.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-[var(--text-dark)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">How escrow typically works</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                A simple overview of the common steps from opening to close.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--navy)] text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
            </div>
          </div>
        </section>

        {/* Security Notice */}
        <section className="py-12 bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="bg-white rounded-xl p-8 border-l-4 border-[var(--gold)] max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-[var(--gold)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    Important security notice
                  </h3>
                  <p className="text-[var(--text-muted)]">
                    To protect yourself from wire fraud, always confirm wiring
                    instructions by calling a known number for our office before
                    sending funds. We will never change instructions via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">
                Trusted by buyers, sellers, and agents
              </h2>
              <p className="text-[var(--text-muted)]">
                Here&apos;s what clients say about working with our team.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[var(--light-gray)] rounded-xl p-6"
                >
                  <div className="text-[var(--gold)] mb-4">
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-[var(--text-dark)] mb-4 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-[var(--navy)]">
                      – {testimonial.author}
                    </p>
                    <p className="text-sm text-[var(--text-muted)]">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Visit us or contact our team</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl overflow-hidden h-80 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)]/5 to-[var(--gold)]/5 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-[var(--gold)] mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-[var(--text-muted)]">
                      Map of Los Angeles Office
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white rounded-xl p-8">
                <h3 className="heading-md mb-6">Los Angeles Office</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-[var(--text-dark)]">
                    6301 Beach Blvd Suite 204
                    <br />
                    Buena Park, CA 90621
                  </p>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Hours:</p>
                    <p className="text-[var(--text-dark)]">
                      Mon – Fri, 9 AM – 5 PM
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Phone:</p>
                    <a
                      href="tel:7147868912"
                      className="text-[var(--text-dark)] hover:text-[var(--gold)]"
                    >
                      (714) 786-8912
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--text-muted)]">Email:</p>
                    <a
                      href="mailto:order@havenescrow.com"
                      className="text-[var(--text-dark)] hover:text-[var(--gold)]"
                    >
                      order@havenescrow.com
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="btn-secondary">
                    Get Directions
                  </a>
                  <Link href="/contact" className="btn-outline">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-[var(--navy)] py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to open escrow?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Submit your transaction details and we&apos;ll follow up with next
              steps.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
              <a
                href="tel:7147868912"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--navy)] transition-colors"
              >
                Call (714) 786-8912
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
