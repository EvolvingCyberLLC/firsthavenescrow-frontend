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

const vestingOptions = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
  { value: "husband_wife", label: "Husband & Wife" },
  { value: "unmarried", label: "Unmarried" },
];

const termiteOptions = [
  "None",
  "Accessible Areas Only",
  "House Only",
  "House and Garage",
  "All Buildings",
  "Other",
];

const prorationOptions = [
  "Taxes",
  "Interest",
  "Insurance",
  "Lease Deposits",
  "Rents",
  "Impounds",
];

export default function PurchaseOpenOrderPage() {
  const [formData, setFormData] = useState({
    openedBy: "",
    timeLimit: "",
    titleCompany: "",
    cashThroughEscrow: "",
    totalConsideration: "",
    propertyAddress: "",
    city: "",
    state: "CA",
    zip: "",
    sellerName: "",
    sellerPhone: "",
    sellerEmail: "",
    buyerName: "",
    buyerPhone: "",
    buyerEmail: "",
    buyerVesting: "",
    spouseName: "",
    lenderName: "",
    lenderPhone: "",
    lenderAddress: "",
    listingAgentName: "",
    listingAgentLicense: "",
    listingAgentPhone: "",
    listingAgentEmail: "",
    listingAgentCommission: "",
    listingAgentAddress: "",
    sellingAgentName: "",
    sellingAgentLicense: "",
    sellingAgentPhone: "",
    sellingAgentEmail: "",
    sellingAgentCommission: "",
    sellingAgentAddress: "",
    prorations: [] as string[],
    termiteClearance: "",
    homeWarrantyPolicy: "",
    homeWarrantyResponsible: "",
    homeWarrantyAmount: "",
    hazardDisclosure: "",
    hazardResponsible: "",
    payoffs: "",
    contingencies: "",
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

  const handleProrationChange = (values: string[]) => {
    setFormData((prev) => ({ ...prev, prorations: values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your purchase open order has been submitted. We will contact you shortly."
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Real Estate Purchase Open Order Form"
          description="Use this form to open escrow for a real estate purchase transaction. Fields marked with an asterisk (*) are required. Submission of this form does not constitute acceptance of escrow."
          centered
        />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Section 1 - Transaction Information */}
                <FormSection title="Section 1 — Transaction Information">
                  <FormInput
                    label="Opened By"
                    name="openedBy"
                    value={formData.openedBy}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Time Limit (if applicable)"
                    name="timeLimit"
                    value={formData.timeLimit}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Title Company"
                    name="titleCompany"
                    value={formData.titleCompany}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Cash Through Escrow"
                    name="cashThroughEscrow"
                    value={formData.cashThroughEscrow}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Total Consideration"
                    name="totalConsideration"
                    value={formData.totalConsideration}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Property Address"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="ZIP"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 2 - Buyer & Seller Information */}
                <FormSection title="Section 2 — Buyer & Seller Information">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-[var(--navy)] mb-4">
                      Seller
                    </h4>
                  </div>
                  <FormInput
                    label="Seller Name"
                    name="sellerName"
                    value={formData.sellerName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Seller Phone"
                    name="sellerPhone"
                    type="tel"
                    value={formData.sellerPhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Seller Email"
                    name="sellerEmail"
                    type="email"
                    value={formData.sellerEmail}
                    onChange={handleChange}
                  />
                  <div className="md:col-span-2 mt-4">
                    <h4 className="font-semibold text-[var(--navy)] mb-4">
                      Buyer
                    </h4>
                  </div>
                  <FormInput
                    label="Buyer Name"
                    name="buyerName"
                    value={formData.buyerName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Buyer Phone"
                    name="buyerPhone"
                    type="tel"
                    value={formData.buyerPhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Buyer Email"
                    name="buyerEmail"
                    type="email"
                    value={formData.buyerEmail}
                    onChange={handleChange}
                  />
                  <FormSelect
                    label="Buyer Vesting"
                    name="buyerVesting"
                    value={formData.buyerVesting}
                    onChange={handleChange}
                    options={vestingOptions}
                    required
                  />
                  <FormInput
                    label="Spouse Name (if applicable)"
                    name="spouseName"
                    value={formData.spouseName}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 3 - Lender Information */}
                <FormSection title="Section 3 — Lender Information (if applicable)">
                  <FormInput
                    label="Lender Name"
                    name="lenderName"
                    value={formData.lenderName}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender Phone"
                    name="lenderPhone"
                    type="tel"
                    value={formData.lenderPhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender Address"
                    name="lenderAddress"
                    value={formData.lenderAddress}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 4 - Agent Information */}
                <FormSection title="Section 4 — Agent Information">
                  <div className="md:col-span-2">
                    <h4 className="font-semibold text-[var(--navy)] mb-4">
                      Listing Agent
                    </h4>
                  </div>
                  <FormInput
                    label="Listing Agent Name"
                    name="listingAgentName"
                    value={formData.listingAgentName}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="License Number"
                    name="listingAgentLicense"
                    value={formData.listingAgentLicense}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Phone"
                    name="listingAgentPhone"
                    type="tel"
                    value={formData.listingAgentPhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Email"
                    name="listingAgentEmail"
                    type="email"
                    value={formData.listingAgentEmail}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Commission Amount"
                    name="listingAgentCommission"
                    value={formData.listingAgentCommission}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Address"
                    name="listingAgentAddress"
                    value={formData.listingAgentAddress}
                    onChange={handleChange}
                  />
                  <div className="md:col-span-2 mt-4">
                    <h4 className="font-semibold text-[var(--navy)] mb-4">
                      Selling Agent
                    </h4>
                  </div>
                  <FormInput
                    label="Selling Agent Name"
                    name="sellingAgentName"
                    value={formData.sellingAgentName}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="License Number"
                    name="sellingAgentLicense"
                    value={formData.sellingAgentLicense}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Phone"
                    name="sellingAgentPhone"
                    type="tel"
                    value={formData.sellingAgentPhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Email"
                    name="sellingAgentEmail"
                    type="email"
                    value={formData.sellingAgentEmail}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Commission Amount"
                    name="sellingAgentCommission"
                    value={formData.sellingAgentCommission}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Address"
                    name="sellingAgentAddress"
                    value={formData.sellingAgentAddress}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 5 - Proration & Contract Information */}
                <FormSection title="Section 5 — Proration & Contract Information">
                  <div className="md:col-span-2">
                    <FormCheckboxGroup
                      label="Prorations (check all that apply)"
                      name="prorations"
                      options={prorationOptions}
                      selectedValues={formData.prorations}
                      onChange={handleProrationChange}
                    />
                  </div>
                  <FormSelect
                    label="Termite / Clearance"
                    name="termiteClearance"
                    value={formData.termiteClearance}
                    onChange={handleChange}
                    options={termiteOptions.map((opt) => ({
                      value: opt.toLowerCase().replace(/\s+/g, "_"),
                      label: opt,
                    }))}
                  />
                </FormSection>

                {/* Section 6 - Additional Transaction Items */}
                <FormSection title="Section 6 — Additional Transaction Items">
                  <FormInput
                    label="Home Warranty Policy"
                    name="homeWarrantyPolicy"
                    value={formData.homeWarrantyPolicy}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Party Responsible for Payment"
                    name="homeWarrantyResponsible"
                    value={formData.homeWarrantyResponsible}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Amount Not to Exceed"
                    name="homeWarrantyAmount"
                    value={formData.homeWarrantyAmount}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Mandatory Hazard Disclosure"
                    name="hazardDisclosure"
                    value={formData.hazardDisclosure}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Party Responsible for Payment"
                    name="hazardResponsible"
                    value={formData.hazardResponsible}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Payoffs (estimated amount)"
                    name="payoffs"
                    value={formData.payoffs}
                    onChange={handleChange}
                  />
                  <div className="md:col-span-2">
                    <FormTextarea
                      label="Buyer or Seller Contingencies"
                      name="contingencies"
                      value={formData.contingencies}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                </FormSection>

                {/* Section 7 - Notes & File Uploads */}
                <FormSection title="Section 7 — Notes & File Uploads">
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
                      File Upload (purchase agreement, disclosures, etc.)
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

                {/* Section 8 - Escrow Officer Selection */}
                <FormSection title="Section 8 — Escrow Officer Selection">
                  <FormSelect
                    label="Choose Your Escrow Officer"
                    name="escrowOfficer"
                    value={formData.escrowOfficer}
                    onChange={handleChange}
                    options={escrowOfficers}
                    placeholder="Select an escrow officer"
                  />
                </FormSection>

                {/* Section 9 - Contact Email */}
                <FormSection title="Section 9 — Contact Email">
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
                    Submit Purchase Open Order
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
