"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

const transactionTypes = [
  "Residential Purchase",
  "Residential Sale",
  "Refinance",
  "Commercial",
  "1031 Exchange",
  "Probate",
  "Holding Escrow",
  "Other",
];

const whatHappensNext = [
  {
    step: "Review",
    description:
      "We review your submission and confirm the transaction details.",
  },
  {
    step: "Contact",
    description:
      "An escrow officer will reach out to confirm parties and next steps.",
  },
  {
    step: "Instructions",
    description:
      "We send escrow instructions and outline document requirements.",
  },
  {
    step: "Next steps",
    description: "We guide you through the process from opening to close.",
  },
];

export default function OpenEscrowPage() {
  const [formData, setFormData] = useState({
    transactionType: "",
    propertyAddress: "",
    city: "",
    state: "CA",
    zip: "",
    county: "",
    purchasePrice: "",
    closeDate: "",
    buyerName: "",
    buyerEmail: "",
    buyerPhone: "",
    sellerName: "",
    sellerEmail: "",
    sellerPhone: "",
    agentName: "",
    brokerage: "",
    agentEmail: "",
    agentPhone: "",
    lenderName: "",
    lenderContact: "",
    lenderEmail: "",
    notes: "",
    preferredContact: "email",
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
    // Handle form submission
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your escrow request has been submitted. We will contact you shortly."
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-[var(--light-gray)] py-16">
          <div className="container-custom text-center">
            <h1 className="heading-xl mb-6">Open Escrow</h1>
            <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-4">
              Use the form below to open escrow with Haven Escrow. Once
              submitted, our team will review your information and contact you
              to confirm details and outline next steps.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              Submitting this form does not obligate you to close. It allows us
              to begin reviewing your transaction.
            </p>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="bg-[var(--light-gray)] rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="heading-md mb-6 text-center">
                What happens after you submit
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {whatHappensNext.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center text-[var(--navy)] font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-[var(--navy)] mb-2">
                      {item.step}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Transaction Details */}
                <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <h2 className="heading-md mb-6">Transaction Details</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label">Transaction Type *</label>
                      <select
                        name="transactionType"
                        value={formData.transactionType}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select type...</option>
                        {transactionTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="form-label">County</label>
                      <input
                        type="text"
                        name="county"
                        value={formData.county}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Los Angeles"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="form-label">Property Address *</label>
                      <input
                        type="text"
                        name="propertyAddress"
                        value={formData.propertyAddress}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="123 Main Street"
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Los Angeles"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">ZIP *</label>
                        <input
                          type="text"
                          name="zip"
                          value={formData.zip}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="90012"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="form-label">
                        Estimated Purchase Price / Loan Amount
                      </label>
                      <input
                        type="text"
                        name="purchasePrice"
                        value={formData.purchasePrice}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="$500,000"
                      />
                    </div>
                    <div>
                      <label className="form-label">Target Close Date</label>
                      <input
                        type="date"
                        name="closeDate"
                        value={formData.closeDate}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Buyer / Seller Information */}
                <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <h2 className="heading-md mb-6">
                    Buyer / Seller Information
                  </h2>

                  <div className="mb-8">
                    <h3 className="font-semibold text-[var(--navy)] mb-4">
                      Buyer
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="form-label">Buyer Name *</label>
                        <input
                          type="text"
                          name="buyerName"
                          value={formData.buyerName}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Buyer Email *</label>
                        <input
                          type="email"
                          name="buyerEmail"
                          value={formData.buyerEmail}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <label className="form-label">Buyer Phone *</label>
                        <input
                          type="tel"
                          name="buyerPhone"
                          value={formData.buyerPhone}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-4">
                      Seller (if known)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="form-label">Seller Name</label>
                        <input
                          type="text"
                          name="sellerName"
                          value={formData.sellerName}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Seller Email</label>
                        <input
                          type="email"
                          name="sellerEmail"
                          value={formData.sellerEmail}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Seller Phone</label>
                        <input
                          type="tel"
                          name="sellerPhone"
                          value={formData.sellerPhone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Agent / Lender Information */}
                <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <h2 className="heading-md mb-6">
                    Agent / Lender Information (if applicable)
                  </h2>

                  <div className="mb-8">
                    <h3 className="font-semibold text-[var(--navy)] mb-4">
                      Real Estate Agent
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="form-label">Agent Name</label>
                        <input
                          type="text"
                          name="agentName"
                          value={formData.agentName}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Brokerage</label>
                        <input
                          type="text"
                          name="brokerage"
                          value={formData.brokerage}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Agent Email</label>
                        <input
                          type="email"
                          name="agentEmail"
                          value={formData.agentEmail}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Agent Phone</label>
                        <input
                          type="tel"
                          name="agentPhone"
                          value={formData.agentPhone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-4">
                      Lender
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="form-label">Lender Name</label>
                        <input
                          type="text"
                          name="lenderName"
                          value={formData.lenderName}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">Lender Contact</label>
                        <input
                          type="text"
                          name="lenderContact"
                          value={formData.lenderContact}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label className="form-label">
                          Lender Email / Phone
                        </label>
                        <input
                          type="text"
                          name="lenderEmail"
                          value={formData.lenderEmail}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="bg-[var(--light-gray)] rounded-2xl p-8">
                  <h2 className="heading-md mb-6">Additional Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="form-label">
                        Notes / Special Instructions
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="form-input min-h-[120px]"
                        placeholder="Any additional details or special requirements..."
                      />
                    </div>
                    <div>
                      <label className="form-label">
                        Preferred Contact Method
                      </label>
                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleChange}
                            className="w-4 h-4 text-[var(--gold)]"
                          />
                          <span>Phone</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleChange}
                            className="w-4 h-4 text-[var(--gold)]"
                          />
                          <span>Email</span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="w-5 h-5 mt-0.5 text-[var(--gold)]"
                          required
                        />
                        <span className="text-sm text-[var(--text-muted)]">
                          I understand that Haven Escrow will contact me
                          regarding this escrow request. *
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn-primary text-lg px-10 py-4"
                  >
                    Submit Escrow Request
                  </button>
                  <p className="text-sm text-[var(--text-muted)] mt-4">
                    Your information is handled securely and used only for
                    escrow-related purposes.
                  </p>
                </div>
              </form>
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
                    Wire fraud is a serious risk in real estate transactions.
                    Always verify wiring instructions by phone using a trusted
                    number before sending funds. Never rely on wiring changes
                    sent by email or text.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Contact */}
        <section className="py-12 bg-white">
          <div className="container-custom text-center">
            <h2 className="heading-md mb-4">
              Prefer to speak with someone first?
            </h2>
            <p className="text-[var(--text-muted)] mb-6">
              If you have questions before opening escrow, contact our team and
              we&apos;ll be happy to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:2135550123" className="btn-secondary">
                Call (213) 555-0123
              </a>
              <Link href="/contact" className="btn-outline">
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
