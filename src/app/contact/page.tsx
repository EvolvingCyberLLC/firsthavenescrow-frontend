"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const subjectOptions = [
  "General Question",
  "Open Escrow",
  "Existing Escrow",
  "Fees & Services",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will respond as soon as possible.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
              Have a question or need help with an escrow transaction? Contact
              our team using the information below, and we&apos;ll respond as
              quickly as possible during business hours.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="heading-md mb-8">Get in touch</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[var(--gold)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)] mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:2135550123"
                        className="text-[var(--text-muted)] hover:text-[var(--gold)]"
                      >
                        (213) 555-0123
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[var(--gold)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)] mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:contact@firsthaven.com"
                        className="text-[var(--text-muted)] hover:text-[var(--gold)]"
                      >
                        contact@firsthaven.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-[var(--gold)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--navy)] mb-1">
                        Office Hours
                      </h3>
                      <p className="text-[var(--text-muted)]">
                        Monday – Friday: 9:00 AM – 5:00 PM
                        <br />
                        Saturday – Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)] bg-[var(--light-gray)] p-4 rounded-lg">
                  Messages received outside business hours will be returned the
                  next business day.
                </p>

                {/* Office Location */}
                <div className="mt-10">
                  <h3 className="heading-sm mb-4">Our office</h3>
                  <div className="bg-[var(--light-gray)] rounded-xl p-6">
                    <p className="text-[var(--text-dark)] mb-2 font-medium">
                      Los Angeles Office
                    </p>
                    <p className="text-[var(--text-muted)]">
                      1234 Escrow Lane, Suite 500
                      <br />
                      Los Angeles, CA 90012
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-[var(--gold)] font-medium mt-3 hover:underline"
                    >
                      Get directions
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-[var(--text-muted)] mt-3">
                    Appointments recommended for in-person visits.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <h2 className="heading-md mb-6">Send us a message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="form-label">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select subject...</option>
                        {subjectOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input min-h-[150px]"
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="w-5 h-5 mt-0.5"
                          required
                        />
                        <span className="text-sm text-[var(--text-muted)]">
                          I understand that Haven Escrow may contact me
                          regarding my inquiry. *
                        </span>
                      </label>
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      Send Message
                    </button>
                    <p className="text-xs text-[var(--text-muted)] text-center">
                      This form is for general inquiries only. Do not send
                      sensitive or confidential information.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Reminder */}
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--navy)] mb-2">
                    Security reminder
                  </h3>
                  <p className="text-[var(--text-muted)]">
                    For your protection, never send wiring instructions or
                    sensitive personal information by email or contact form.
                    Always verify instructions by phone using a trusted number.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white">
          <div className="container-custom text-center">
            <h2 className="heading-md mb-4">Ready to start a transaction?</h2>
            <p className="text-[var(--text-muted)] mb-6">
              If you already have transaction details, you can open escrow
              online.
            </p>
            <Link href="/open-escrow" className="btn-primary">
              Open Escrow
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
