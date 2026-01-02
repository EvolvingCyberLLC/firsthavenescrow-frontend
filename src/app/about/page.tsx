import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Haven Escrow",
  description:
    "Learn about Haven Escrow, our approach to escrow, and how we support residential and commercial transactions across Southern California.",
};

const teamMembers = [
  {
    name: "Jennifer Martinez",
    title: "Senior Escrow Officer",
    bio: "With over 15 years of experience in residential and commercial escrow, Jennifer leads our team with a focus on clear communication and timely closings.",
  },
  {
    name: "David Chen",
    title: "Escrow Officer",
    bio: "David specializes in complex commercial transactions and 1031 exchanges, bringing meticulous attention to detail to every file.",
  },
  {
    name: "Sarah Thompson",
    title: "Escrow Assistant",
    bio: "Sarah coordinates document processing and client communications, ensuring every transaction stays on track.",
  },
];

const values = [
  {
    title: "Accuracy",
    description:
      "We verify every detail to ensure documents and instructions are correct before proceeding.",
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Communication",
    description:
      "We keep all parties informed with proactive updates throughout the transaction.",
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
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Security",
    description:
      "We protect sensitive information and follow strict protocols for handling funds and documents.",
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
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "Timeliness",
    description:
      "We prioritize deadlines and work to keep every transaction moving toward a smooth closing.",
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16 lg:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl mb-6">About Haven Escrow</h1>
              <p className="text-lg text-[var(--text-muted)]">
                Haven Escrow is an independent escrow company serving clients
                across Southern California. We provide escrow services for
                residential, commercial, and specialty transactions, acting as a
                neutral third party to help ensure each transaction is completed
                according to written instructions.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-lg mb-6">Who we are</h2>
                <p className="text-[var(--text-muted)] mb-6">
                  Our team brings together experienced escrow professionals who
                  understand the importance of every detail in a real estate
                  transaction. We work with buyers, sellers, agents, lenders,
                  and other parties to coordinate the escrow process from
                  opening to close.
                </p>
                <p className="text-[var(--text-muted)]">
                  As an independent escrow company, we focus solely on escrow
                  services. This allows us to provide dedicated attention to
                  each transaction without the conflicts that can arise when
                  escrow is bundled with other services.
                </p>
              </div>
              <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                <h3 className="heading-sm mb-4">Our service area</h3>
                <p className="text-[var(--text-muted)] mb-4">
                  We serve clients throughout Southern California, including:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-[var(--text-dark)]">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    Los Angeles County
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    Orange County
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    Riverside County
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    San Bernardino County
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    Ventura County
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--gold)]"
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
                    San Diego County
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="section-padding bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Our approach</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Every transaction is different, but our commitment to these core
                principles stays the same.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white card text-center">
                  <div className="text-[var(--gold)] mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Meet our team</h2>
              <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                Our experienced escrow professionals are here to guide you
                through every step of your transaction.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-[var(--light-gray)] rounded-xl p-6 text-center"
                >
                  <div className="w-24 h-24 bg-[var(--navy)]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-[var(--navy)]/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[var(--navy)] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--gold)] text-sm mb-3">
                    {member.title}
                  </p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className="py-16 bg-[var(--light-gray)]">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="heading-md mb-4">Licensing & compliance</h2>
              <p className="text-[var(--text-muted)]">
                Haven Escrow is licensed by the California Department of
                Financial Protection and Innovation (DFPI). We maintain all
                required bonds and adhere to state regulations governing escrow
                companies in California.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-[var(--navy)] py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to work with us?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Open escrow online or contact our team to learn more about our
              services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/open-escrow" className="btn-primary">
                Open Escrow
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[var(--navy)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
