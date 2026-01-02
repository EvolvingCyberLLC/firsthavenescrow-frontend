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
import FormRadioGroup from "@/components/FormRadioGroup";
import { useState } from "react";

const escrowOfficers = [
  { value: "officer1", label: "John Smith - Main Office" },
  { value: "officer2", label: "Jane Doe - Main Office" },
  { value: "officer3", label: "Mike Johnson - Downtown Office" },
];

const loanTypeOptions = ["1st", "2nd", "Combo", "Conventional", "FHA", "VA"];

const existingLoanOptions = [
  { value: "pay_off", label: "Pay Off" },
  { value: "remain", label: "Remain" },
  { value: "subordinate", label: "Subordinate" },
];

export default function RefinanceOpenOrderPage() {
  const [formData, setFormData] = useState({
    loanBroker: "",
    brokerAddress: "",
    brokerPhone: "",
    brokerFax: "",
    loanOfficer: "",
    processor: "",
    propertyAddress: "",
    borrower1: "",
    vesting1: "",
    borrower2: "",
    vesting2: "",
    mailingAddress: "",
    homePhone: "",
    workPhone: "",
    firstLoanAmount: "",
    secondLoanAmount: "",
    loanTypes: [] as string[],
    existing1stLoan: "",
    existing2ndLoan: "",
    lender1: "",
    lender2: "",
    balance1: "",
    balance2: "",
    loanNumber1: "",
    loanNumber2: "",
    lenderAddress1: "",
    lenderAddress2: "",
    lenderPhone1: "",
    lenderPhone2: "",
    titleCompany: "",
    titlePhone: "",
    titleRep: "",
    orderNumber: "",
    insuranceCompany: "",
    policyPremium: "",
    policyExpiration: "",
    insuranceAgent: "",
    insurancePhone: "",
    insuranceFax: "",
    insuranceAddress: "",
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

  const handleLoanTypesChange = (values: string[]) => {
    setFormData((prev) => ({ ...prev, loanTypes: values }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you! Your refinance open order has been submitted. We will contact you shortly."
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <PageHeader
          title="Real Estate Refinance Open Order Form"
          description="Use this form to open escrow for a real estate refinance transaction. Fields marked with an asterisk (*) are required. Submission of this form does not constitute acceptance of escrow."
          centered
        />

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit}>
                {/* Section 1 - Broker Information */}
                <FormSection title="Section 1 — Broker Information">
                  <FormInput
                    label="Loan Broker"
                    name="loanBroker"
                    value={formData.loanBroker}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Broker Address"
                    name="brokerAddress"
                    value={formData.brokerAddress}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Phone"
                    name="brokerPhone"
                    type="tel"
                    value={formData.brokerPhone}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Fax (optional)"
                    name="brokerFax"
                    type="tel"
                    value={formData.brokerFax}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Loan Officer"
                    name="loanOfficer"
                    value={formData.loanOfficer}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Processor"
                    name="processor"
                    value={formData.processor}
                    onChange={handleChange}
                    required
                  />
                </FormSection>

                {/* Section 2 - Borrower Information */}
                <FormSection title="Section 2 — Borrower Information">
                  <FormInput
                    label="Property Address"
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Borrower 1"
                    name="borrower1"
                    value={formData.borrower1}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Vesting 1"
                    name="vesting1"
                    value={formData.vesting1}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Borrower 2 (if applicable)"
                    name="borrower2"
                    value={formData.borrower2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Vesting 2 (if applicable)"
                    name="vesting2"
                    value={formData.vesting2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Mailing Address"
                    name="mailingAddress"
                    value={formData.mailingAddress}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Home Phone"
                    name="homePhone"
                    type="tel"
                    value={formData.homePhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Work Phone"
                    name="workPhone"
                    type="tel"
                    value={formData.workPhone}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 3 - New Loan Information */}
                <FormSection title="Section 3 — New Loan Information">
                  <FormInput
                    label="1st Loan Amount"
                    name="firstLoanAmount"
                    value={formData.firstLoanAmount}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="2nd Loan Amount"
                    name="secondLoanAmount"
                    value={formData.secondLoanAmount}
                    onChange={handleChange}
                  />
                  <div className="md:col-span-2">
                    <FormCheckboxGroup
                      label="Loan Type (check all that apply)"
                      name="loanTypes"
                      options={loanTypeOptions}
                      selectedValues={formData.loanTypes}
                      onChange={handleLoanTypesChange}
                    />
                  </div>
                </FormSection>

                {/* Section 4 - Existing Loan Information */}
                <FormSection title="Section 4 — Existing Loan Information">
                  <FormRadioGroup
                    label="Existing 1st Loan"
                    name="existing1stLoan"
                    options={existingLoanOptions}
                    selectedValue={formData.existing1stLoan}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        existing1stLoan: value,
                      }))
                    }
                  />
                  <FormRadioGroup
                    label="Existing 2nd Loan"
                    name="existing2ndLoan"
                    options={existingLoanOptions}
                    selectedValue={formData.existing2ndLoan}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        existing2ndLoan: value,
                      }))
                    }
                  />
                </FormSection>

                {/* Section 5 - Payoff Information */}
                <FormSection title="Section 5 — Payoff Information">
                  <FormInput
                    label="Lender 1"
                    name="lender1"
                    value={formData.lender1}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Lender 2 (if applicable)"
                    name="lender2"
                    value={formData.lender2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Balance – Lender 1"
                    name="balance1"
                    value={formData.balance1}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Balance – Lender 2"
                    name="balance2"
                    value={formData.balance2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 1 Loan Number"
                    name="loanNumber1"
                    value={formData.loanNumber1}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 2 Loan Number"
                    name="loanNumber2"
                    value={formData.loanNumber2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 1 Address"
                    name="lenderAddress1"
                    value={formData.lenderAddress1}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 2 Address"
                    name="lenderAddress2"
                    value={formData.lenderAddress2}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 1 Phone"
                    name="lenderPhone1"
                    type="tel"
                    value={formData.lenderPhone1}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Lender 2 Phone"
                    name="lenderPhone2"
                    type="tel"
                    value={formData.lenderPhone2}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 6 - Title Insurance */}
                <FormSection title="Section 6 — Title Insurance">
                  <FormInput
                    label="Title Company"
                    name="titleCompany"
                    value={formData.titleCompany}
                    onChange={handleChange}
                    required
                  />
                  <FormInput
                    label="Phone"
                    name="titlePhone"
                    type="tel"
                    value={formData.titlePhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Title Representative"
                    name="titleRep"
                    value={formData.titleRep}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Order Number"
                    name="orderNumber"
                    value={formData.orderNumber}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 7 - Homeowner's Insurance */}
                <FormSection title="Section 7 — Homeowner's Insurance">
                  <FormInput
                    label="Insurance Company"
                    name="insuranceCompany"
                    value={formData.insuranceCompany}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Policy Premium"
                    name="policyPremium"
                    value={formData.policyPremium}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Policy Expiration Date"
                    name="policyExpiration"
                    type="date"
                    value={formData.policyExpiration}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Insurance Agent"
                    name="insuranceAgent"
                    value={formData.insuranceAgent}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Phone"
                    name="insurancePhone"
                    type="tel"
                    value={formData.insurancePhone}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Fax"
                    name="insuranceFax"
                    type="tel"
                    value={formData.insuranceFax}
                    onChange={handleChange}
                  />
                  <FormInput
                    label="Address"
                    name="insuranceAddress"
                    value={formData.insuranceAddress}
                    onChange={handleChange}
                  />
                </FormSection>

                {/* Section 8 - Notes & File Uploads */}
                <FormSection title="Section 8 — Notes & File Uploads">
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
                      File Upload (loan documents, payoff statements,
                      disclosures, etc.)
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

                {/* Section 9 - Escrow Officer Selection */}
                <FormSection title="Section 9 — Escrow Officer Selection">
                  <FormSelect
                    label="Choose Your Escrow Officer"
                    name="escrowOfficer"
                    value={formData.escrowOfficer}
                    onChange={handleChange}
                    options={escrowOfficers}
                    placeholder="Select an escrow officer"
                  />
                </FormSection>

                {/* Section 10 - Contact Email */}
                <FormSection title="Section 10 — Contact Email">
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
                    Submit Refinance Open Order
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
