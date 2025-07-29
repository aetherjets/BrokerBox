"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CompanyDetailsForm from './Steps/CompanyDetailsForm'
import LendingCriteriaForm from './Steps/LendingCriteriaForm'
import TechnicalIntegrationForm from './Steps/TechnicalIntegrationForm'
import ComplianceRiskForm from './Steps/ComplianceRiskForm'
import CommercialTermsForm from './Steps/CommercialTermsForm'
import PrimaryContactForm from './Steps/PrimaryContactForm'
import ReviewForm from './Steps/ReviewForm'

interface LenderOnboardingProps {
  onComplete: () => void
}

// Let's create an interface for our component state
interface LenderDetails {
  // Company Details
  tradingName: string;
  companyName: string;
  companySize: string;
  companiesHouseNumber: string;
  companyTelephone: string;
  companyAddress: string;
  fcaNumber: string;
  acceptsOnlyFcaApproved: boolean;
  financeTypes: string[];
  
  // Technical Integration
  offersApi: boolean;
  apiDocUrl: string;
  apiKeyProcess: string;
  supportedDataPoints: string[];
  supportsWebhooks: boolean;
  offersSandbox: boolean;
  
  // Compliance & Risk
  fcaRegRequired: boolean;
  specificDocumentation: string;
  amlKycDocuments: {
    idVerification: boolean;
    passportDrivingLicense: boolean;
    proofOfAddress: boolean;
    businessBankStatements: boolean;
    filedAccounts: boolean;
    openBanking: boolean;
    otherDocuments: string;
  };
  runsOwnAffordabilityChecks: boolean;
  acceptsCoBrokeredDeals: boolean;
  
  // Commercial Terms
  commissionStructure: string;
  payoutMethod: string;
  offersExclusiveProducts: boolean;
  
  // Primary Contact
  contactName: string;
  contactJobTitle: string;
  contactEmail: string;
  contactMobile: string;
  regionalCoverage: string;
}

type OnboardingStep = 
  | 'details' 
  | 'criteria' 
  | 'technical' 
  | 'compliance' 
  | 'commercial' 
  | 'contact' 
  | 'review';

const LenderOnboarding: React.FC<LenderOnboardingProps> = ({ onComplete }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<OnboardingStep>('details');
  
  const [lenderDetails, setLenderDetails] = useState<LenderDetails>({
    tradingName: '',
    companyName: '',
    companySize: '',
    companiesHouseNumber: '',
    companyTelephone: '',
    companyAddress: '',
    fcaNumber: '',
    acceptsOnlyFcaApproved: false,
    financeTypes: [],
    
    // Technical Integration
    offersApi: false,
    apiDocUrl: '',
    apiKeyProcess: '',
    supportedDataPoints: [],
    supportsWebhooks: false,
    offersSandbox: false,
    
    // Compliance & Risk
    fcaRegRequired: false,
    specificDocumentation: '',
    amlKycDocuments: {
      idVerification: false,
      passportDrivingLicense: false,
      proofOfAddress: false,
      businessBankStatements: false,
      filedAccounts: false,
      openBanking: false,
      otherDocuments: ''
    },
    runsOwnAffordabilityChecks: false,
    acceptsCoBrokeredDeals: false,
    
    // Commercial Terms
    commissionStructure: '',
    payoutMethod: '',
    offersExclusiveProducts: false,
    
    // Primary Contact
    contactName: '',
    contactJobTitle: '',
    contactEmail: '',
    contactMobile: '',
    regionalCoverage: ''
  });

  const financeTypes = [
    'Secured Loans', 
    'Unsecured Loans', 
    'Invoice Finance',
    'Asset Finance',
    'Property Finance',
    'Merchant Cash Advance',
    'Trade Finance'
  ];

  const dataPointOptions = [
    'Turnover',
    'Profit',
    'Years trading',
    'Assets',
    'CCJs',
    'Credit Score',
    'Industry/Sector',
    'Company Status',
    'Directors Information'
  ];

  const payoutMethodOptions = [
    'Automatically on payout',
    'Monthly reconciliation',
    'Quarterly reconciliation',
    'Manual request process',
    'Other'
  ];

  const companySizeOptions = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      } 
    },
    exit: { opacity: 0 }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    if (type === 'checkbox' || type === 'radio') {
      setLenderDetails(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setLenderDetails(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle nested objects
  const handleNestedChange = (category: string, field: string, value: string | boolean) => {
    setLenderDetails(prev => ({
      ...prev,
      [category]: {
        ...(prev[category as keyof typeof prev] as object),
        [field]: value
      }
    }));
  };

  // Handle array fields
  const handleArrayChange = (field: keyof LenderDetails, value: string) => {
    setLenderDetails(prev => {
      const currentArray = prev[field] as string[];
      
      if (currentArray.includes(value)) {
        return {
          ...prev,
          [field]: currentArray.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [field]: [...currentArray, value]
        };
      }
    });
  };

  // Handle finance type checkboxes
  const handleFinanceTypeChange = (type: string) => {
    setLenderDetails(prev => {
      if (prev.financeTypes.includes(type)) {
        return {
          ...prev,
          financeTypes: prev.financeTypes.filter(item => item !== type)
        };
      } else {
        return {
          ...prev,
          financeTypes: [...prev.financeTypes, type]
        };
      }
    });
  };

  const handleNextStep = () => {
    switch (currentStep) {
      case 'details':
        setCurrentStep('criteria');
        break;
      case 'criteria':
        setCurrentStep('technical');
        break;
      case 'technical':
        setCurrentStep('compliance');
        break;
      case 'compliance':
        setCurrentStep('commercial');
        break;
      case 'commercial':
        setCurrentStep('contact');
        break;
      case 'contact':
        setCurrentStep('review');
        break;
    }
  };

  const handlePrevStep = () => {
    switch (currentStep) {
      case 'criteria':
        setCurrentStep('details');
        break;
      case 'technical':
        setCurrentStep('criteria');
        break;
      case 'compliance':
        setCurrentStep('technical');
        break;
      case 'commercial':
        setCurrentStep('compliance');
        break;
      case 'contact':
        setCurrentStep('commercial');
        break;
      case 'review':
        setCurrentStep('contact');
        break;
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    //submit data to your API
    setTimeout(() => {
      setIsLoading(false);
      onComplete();
    }, 2000);
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 'details': return 'Step 1: Company Information';
      case 'criteria': return 'Step 2: Lending Criteria';
      case 'technical': return 'Step 3: Technical Integration';
      case 'compliance': return 'Step 4: Compliance & Risk';
      case 'commercial': return 'Step 5: Commercial Terms';
      case 'contact': return 'Step 6: Primary Contact';
      case 'review': return 'Step 7: Review and Submit';
    }
  };

  return (
    <motion.div
      className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress bar */}
      <motion.div 
        className="bg-black text-white p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center">
          <div>
            <motion.h1 
              className="text-2xl font-bold"
              variants={itemVariants}
            >
              Lender Registration
            </motion.h1>
            <motion.p 
              className="text-white/80"
              variants={itemVariants}
            >
              {getStepTitle()}
            </motion.p>
          </div>
          {currentStep !== 'details' && (
            <button 
              type="button"
              onClick={handlePrevStep}
              className="text-sm flex items-center text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back
            </button>
          )}
        </div>
        <div className="flex space-x-1 mt-4">
          <motion.div 
            className={`h-2 flex-1 rounded-l-full ${currentStep === 'details' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 ${currentStep === 'criteria' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 ${currentStep === 'technical' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 ${currentStep === 'compliance' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 ${currentStep === 'commercial' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 ${currentStep === 'contact' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
          <motion.div 
            className={`h-2 flex-1 rounded-r-full ${currentStep === 'review' ? 'bg-white' : 'bg-white/30'}`}
            variants={itemVariants}
          />
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {currentStep === 'details' && (
          <CompanyDetailsForm
            lenderDetails={lenderDetails}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            companySizeOptions={companySizeOptions}
          />
        )}

        {currentStep === 'criteria' && (
          <LendingCriteriaForm
            lenderDetails={lenderDetails}
            // handleChange={handleChange}
            handleFinanceTypeChange={handleFinanceTypeChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            financeTypes={financeTypes}
            setLenderDetails={setLenderDetails}
          />
        )}

        {currentStep === 'technical' && (
          <TechnicalIntegrationForm
            lenderDetails={lenderDetails}
            handleChange={handleChange}
            handleArrayChange={handleArrayChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            dataPointOptions={dataPointOptions}
          />
        )}

        {currentStep === 'compliance' && (
          <ComplianceRiskForm
            lenderDetails={lenderDetails}
            handleChange={handleChange}
            handleNestedChange={handleNestedChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            setLenderDetails={setLenderDetails}
          />
        )}

        {currentStep === 'commercial' && (
          <CommercialTermsForm
            lenderDetails={lenderDetails}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            payoutMethodOptions={payoutMethodOptions}
          />
        )}

        {currentStep === 'contact' && (
          <PrimaryContactForm
            lenderDetails={lenderDetails}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        )}

        {currentStep === 'review' && (
          <ReviewForm
            lenderDetails={lenderDetails}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
            handlePrevStep={handlePrevStep}
            setCurrentStep={setCurrentStep}
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default LenderOnboarding
