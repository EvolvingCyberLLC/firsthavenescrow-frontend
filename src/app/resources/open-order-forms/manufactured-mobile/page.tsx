"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import NoticeBox from "@/components/NoticeBox";
import FormSection from "@/components/FormSection";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";
import FormTextarea from "@/components/FormTextarea";
import FormCheckboxGroup from "@/components/FormCheckboxGroup";
import { useState } from "react";

const escrowOfficers = [
  { value: "officer1", label: "John Smith - Main Office" },
  { value: "officer2", label: "Jane Doe - Main Office" },
  { value: "officer3", label: "Mike Johnson - Downtown Office" },
];

const escrowInstructions = [
  "Prepare Escrow Instructions",
  "Request Demand for Payoff",
  "Order Tax Amounts",
];

export default function ManufacturedMobileOpenOrderPage() {
  const [formData, setFormData] = useState({
    dealerName: "",
    dealerAddress: "",
    dealerPhone: "",
    buyerName: "",
    buyerAddress: "",
    buyerCity: "",
    buyerState: "CA",
    buyerZip: "",
    buyerPhone: "",
    buyerEmail: "",
    manufacturer: "",
    year: "",
    model: "",
    size: "",
    licenseNumber: "",
    serialNumber: "",
    dohInsigniaNumber: "",
    mobileHomeLocation: "",
    parkName: "",
    newLegalOwner: "",
    currentRegisteredOwner: "",
    currentLegalOwner: "",
    loanNumber: "",
    paidOutsideEscrow: "",
    buyerDeposit: "",
    cashToCome: "",
    amountFinanced: "",
    totalConsideration: "",
    purchasePrice: "",
    useTax: "",
    propertyTax: "",
    registrationFee: "",
    insurance: "",
    escrowFee: "",
    escrowInstructions: [] as string[],
    notes: "",
    escrowOfficer: "",
    contactEmail: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInstructionsChange = (values: string[]) => {
    setFormData((prev) => ({ ...prev, escrowInstructions: values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your manufactured/mobile home open order has been submitted. We will contact you shortly."
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Manufactured / Mobile Home Open Order Form"
          description="Use this form to open escrow for a manufactured or mobile home transaction. Fields marked with an asterisk (*) are required. Submission of this form does not constitute acceptance of escrow."
          centered
        />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Section 1 - Dealer Information */}
                <FormSection title="Section 1 — Dealer Information">
                  <FormInput
                    label="Dealer Name"
                    name="dealerName"
                    value={formData.dealerName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Dealer Address"
                    name="dealerAddress"
                    value={formData.dealerAddress}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Dealer Phone"
                    name="dealerPhone"
                    type="tel"
                    value={formData.dealerPhone}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 2 - Buyer Information */}
                <FormSection title="Section 2 — Buyer Information">
                  <FormInput
                    label="Buyer Name"
                    name="buyerName"
                    value={formData.buyerName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Buyer Address"
                    name="buyerAddress"
                    value={formData.buyerAddress}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="City"
                    name="buyerCity"
                    value={formData.buyerCity}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="State"
                    name="buyerState"
                    value={formData.buyerState}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="ZIP"
                    name="buyerZip"
                    value={formData.buyerZip}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Buyer Phone"
                    name="buyerPhone"
                    type="tel"
                    value={formData.buyerPhone}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Buyer Email"
                    name="buyerEmail"
                    type="email"
                    value={formData.buyerEmail}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 3 - Home Information */}
                <FormSection title="Section 3 — Home Information">
                  <FormInput
                    label="Manufacturer"
                    name="manufacturer"
                    value={formData.manufacturer}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="License Number"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Serial Number"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="DOH Insignia Number"
                    name="dohInsigniaNumber"
                    value={formData.dohInsigniaNumber}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Location of Mobile Home"
                    name="mobileHomeLocation"
                    value={formData.mobileHomeLocation}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Park Name (if applicable)"
                    name="parkName"
                    value={formData.parkName}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 4 - Transaction Information */}
                <FormSection title="Section 4 — Transaction Information">
                  <FormInput
                    label="New Legal Owner"
                    name="newLegalOwner"
                    value={formData.newLegalOwner}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Current Registered Owner Name and Address"
                    name="currentRegisteredOwner"
                    value={formData.currentRegisteredOwner}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Current Legal Owner"
                    name="currentLegalOwner"
                    value={formData.currentLegalOwner}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Loan Number (if applicable)"
                    name="loanNumber"
                    value={formData.loanNumber}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 5 - Financial Information */}
                <FormSection title="Section 5 — Financial Information">
                  <FormInput
                    label="Paid Outside Escrow"
                    name="paidOutsideEscrow"
                    value={formData.paidOutsideEscrow}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Buyer Deposit"
                    name="buyerDeposit"
                    value={formData.buyerDeposit}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Cash to Come"
                    name="cashToCome"
                    value={formData.cashToCome}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Amount Financed"
                    name="amountFinanced"
                    value={formData.amountFinanced}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Total Consideration"
                    name="totalConsideration"
                    value={formData.totalConsideration}
                    onChange={handleChange}
                    required
                  />
                </FormSection>

                {/* Section 6 - Total Consideration Breakdown */}
                <FormSection title="Section 6 — Total Consideration Breakdown">
                  <FormInput
                    label="Purchase Price"
                    name="purchasePrice"
                    value={formData.purchasePrice}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Use Tax"
                    name="useTax"
                    value={formData.useTax}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Property Tax"
                    name="propertyTax"
                    value={formData.propertyTax}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Registration Fee"
                    name="registrationFee"
                    value={formData.registrationFee}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Insurance"
                    name="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Escrow Fee"
                    name="escrowFee"
                    value={formData.escrowFee}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 7 - Escrow Instructions & Requests */}
                <FormSection title="Section 7 — Escrow Instructions & Requests">
                  <div className="md:col-span-2">
                    <FormCheckboxGroup
                      label="Escrow Instructions (check all that apply)"
                      name="escrowInstructions"
                      options={escrowInstructions}
                      selectedValues={formData.escrowInstructions}
                      onChange={handleInstructionsChange}
                    />
                  </div>
                </FormSection>

                {/* Section 8 - Transfer Fees */}
                <FormSection title="Section 8 — Transfer Fees (Informational)">
                  <div className="md:col-span-2">
                    <p className="text-[var(--text-muted)] mb-4">
                      Transfer fees may apply based on home type:
                    </p>
                    <ul className="list-disc list-inside text-[var(--text-muted)] space-y-1">
                      <li>Single Wide</li>
                      <li>Double Wide</li>
                      <li>Triple Wide</li>
                    </ul>
                    <p className="text-sm text-[var(--text-muted)] mt-4 italic">
                      Final fees subject to confirmation.
                    </p>
                  </div>
                </FormSection>

                {/* Section 9 - Notes & File Uploads */}
                <FormSection title="Section 9 — Notes & File Uploads">
                  <div className="md:col-span-2">
                    <FormTextarea
                      label="Notes / Additional Items"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={4}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="form-label">
                      File Upload (bill of sale, registration, payoff
                      statements, supporting documents)
                    </label>
                    <input
                      type="file"
                      multiple
                      className="form-input"
                      accept=".pdf,.doc,.docx"
                    />
                    <p className="text-sm text-[var(--text-muted)] mt-2">
                      Accepted formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </FormSection>

                {/* Section 10 - Escrow Officer Selection */}
                <FormSection title="Section 10 — Escrow Officer Selection">
                  <FormSelect
                    label="Choose Your Escrow Officer"
                    name="escrowOfficer"
                    value={formData.escrowOfficer}
                    onChange={handleChange}
                    options={escrowOfficers}
                    placeholder="Select an escrow officer"
                  />
                </FormSection>

                {/* Section 11 - Contact Email */}
                <FormSection title="Section 11 — Contact Email">
                  <FormInput
                    label="Your Email Address"
                    name="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </FormSection>

                {/* Security Notice */}
                <div className="mb-8">
                  <NoticeBox title="Security Notice">
                    <p>
                      For security purposes, please complete the verification
                      below before submitting this form.
                    </p>
                  </NoticeBox>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-10">
                    Submit Manufactured / Mobile Home Open Order
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-sm text-[var(--text-muted)] text-center mt-6">
                  Submission of this form does not create an escrow
                  relationship. Escrow is opened only upon acceptance and
                  confirmation by the escrow company.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
