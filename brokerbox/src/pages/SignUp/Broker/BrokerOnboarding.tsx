"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import CompanyDetailsForm, { CompanyDetails } from "./CompanyDetailsForm";
import DirectorDetailsForm, { DirectorDetails } from "./DirectorDetailsForm";
import ReviewDetails from "./ReviewDetails";

interface BrokerOnboardingProps {
  onComplete: () => void;
}

type OnboardingStep = "companyDetails" | "directorDetails" | "review";

const BrokerOnboarding: React.FC<BrokerOnboardingProps> = ({ onComplete }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] =
    useState<OnboardingStep>("companyDetails");
  const [isLoading, setIsLoading] = useState(false);

  const [companyDetails, setCompanyDetails] = useState<CompanyDetails>({
    tradingName: "",
    yearsTrading: "",
    companySize: "",
    companyName: "",
    companiesHouseNumber: "",
    companyTelephone: "",
    financeTypes: [],
    fcaNumber: "",
    companyAddress: "",
  });

  const [directorDetails, setDirectorDetails] = useState<DirectorDetails>({
    name: "",
    address: "",
    mobile: "",
    email: "",
    dateOfBirth: "",
    drivingLicenseFront: null,
    drivingLicenseRear: null,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const financeTypes = [
    "Asset Finance",
    "Invoice Finance",
    "Secured Loans",
    "Unsecured Loans",
    "Property Finance",
    "Merchant Cash Advance",
    "Trade Finance",
    "Other",
  ];

  const companySizeOptions = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "500+ employees",
  ];

  // Handle form input changes
  const handleCompanyChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setCompanyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDirectorChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDirectorDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "rear"
  ) => {
    if (e.target.files && e.target.files[0]) {
      setDirectorDetails((prev) => ({
        ...prev,
        [side === "front" ? "drivingLicenseFront" : "drivingLicenseRear"]:
          e.target.files![0],
      }));
    }
  };

  // Handle finance type checkboxes
  const handleFinanceTypeChange = (type: string) => {
    setCompanyDetails((prev) => {
      if (prev.financeTypes.includes(type)) {
        return {
          ...prev,
          financeTypes: prev.financeTypes.filter((item) => item !== type),
        };
      } else {
        return {
          ...prev,
          financeTypes: [...prev.financeTypes, type],
        };
      }
    });
  };

  const handleNextStep = () => {
    if (currentStep === "companyDetails") {
      setCurrentStep("directorDetails");
    } else if (currentStep === "directorDetails") {
      setCurrentStep("review");
    }
  };

  const handlePrevStep = () => {
    if (currentStep === "directorDetails") {
      setCurrentStep("companyDetails");
    } else if (currentStep === "review") {
      setCurrentStep("directorDetails");
    }
  };

  // Submit the form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting data:", {
      companyDetails,
      directorDetails,
    });
    // In a real app, you would send the data to your API here
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);
  };

  return (
    <motion.div
      className="w-full max-w-4xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Progress bar */}
      <motion.div
        className="bg-white rounded-full p-1 mb-8 shadow-lg"
        variants={itemVariants}
      >
        <div className="flex">
          <div
            className={`flex-1 py-2 px-4 rounded-l-full text-center text-sm font-medium ${
              currentStep === "companyDetails"
                ? "bg-black text-white"
                : "bg-stone-100 text-black"
            }`}
          >
            Company Details
          </div>
          <div
            className={`flex-1 py-2 px-4 text-center text-sm font-medium ${
              currentStep === "directorDetails"
                ? "bg-black text-white"
                : "bg-stone-100 text-black"
            }`}
          >
            Director Details
          </div>
          <div
            className={`flex-1 py-2 px-4 rounded-r-full text-center text-sm font-medium ${
              currentStep === "review"
                ? "bg-black text-white"
                : "bg-stone-100 text-black"
            }`}
          >
            Review
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-black text-white p-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Broker Registration</h1>
            <p className="text-white/80">
              {currentStep === "companyDetails" &&
                "Step 1: Company Information"}
              {currentStep === "directorDetails" && "Step 2: Director Details"}
              {currentStep === "review" && "Step 3: Review and Submit"}
            </p>
          </div>
          {currentStep !== "companyDetails" && (
            <button
              type="button"
              onClick={handlePrevStep}
              className="text-sm flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5 mr-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {currentStep === "companyDetails" && (
            <CompanyDetailsForm
              companyDetails={companyDetails}
              handleCompanyChange={handleCompanyChange}
              handleFinanceTypeChange={handleFinanceTypeChange}
              handleNextStep={handleNextStep}
              companySizeOptions={companySizeOptions}
              financeTypes={financeTypes}
            />
          )}

          {currentStep === "directorDetails" && (
            <DirectorDetailsForm
              directorDetails={directorDetails}
              handleDirectorChange={handleDirectorChange}
              handleFileChange={handleFileChange}
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
            />
          )}

          {currentStep === "review" && (
            <ReviewDetails
              companyDetails={companyDetails}
              directorDetails={directorDetails}
              handlePrevStep={handlePrevStep}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
              setCurrentStep={setCurrentStep}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BrokerOnboarding;
