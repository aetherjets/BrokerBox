export interface LenderDetails {
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

export type OnboardingStep = 
  | 'details' 
  | 'criteria' 
  | 'technical' 
  | 'compliance' 
  | 'commercial' 
  | 'contact' 
  | 'review';

export const containerVariants = {
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

export const itemVariants = {
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
