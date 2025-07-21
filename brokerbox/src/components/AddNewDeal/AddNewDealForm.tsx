import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import FinanceTypeStep from './steps/FinanceTypeStep'
import ClientInfoStep from './steps/ClientInfoStep'
import DealDetailsStep from './steps/DealDetailsStep'
import DocumentsStep from './steps/DocumentsStep'
import ReviewSubmitStep from './steps/ReviewSubmitStep'

interface ClientInfo {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  existingClient: boolean;
}

interface LoanDetails {
  amount: string;
  purpose: string;
  term: string;
  repaymentMethod: string;
}

interface AssetDetails extends LoanDetails {
  assetType: string;
  assetValue: string;
  assetAge: string;
}

interface InvoiceFinanceDetails {
  annualTurnover: string;
  averageInvoiceValue: string;
  invoicesPerMonth: string;
  paymentTerms: string;
}

interface SupportingDocuments {
  businessPlan: File | null;
  financialStatements: File | null;
  bankStatements: File | null;
  assetDetails: File | null;
  additionalDocs: File[];
}

interface AddNewDealFormProps {
  onClose: () => void;
}

const AddNewDealForm = ({ onClose }: AddNewDealFormProps) => {

  const [currentStep, setCurrentStep] = useState(1);
  const [financeType, setFinanceType] = useState<'loan' | 'asset' | 'invoice' | ''>('');
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    existingClient: false
  });
  const [loanDetails, setLoanDetails] = useState<LoanDetails>({
    amount: '',
    purpose: '',
    term: '',
    repaymentMethod: 'monthly',
  });
  const [assetDetails, setAssetDetails] = useState<AssetDetails>({
    ...loanDetails,
    assetType: '',
    assetValue: '',
    assetAge: '',
  });
  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceFinanceDetails>({
    annualTurnover: '',
    averageInvoiceValue: '',
    invoicesPerMonth: '',
    paymentTerms: '',
  });
  const [documents, setDocuments] = useState<SupportingDocuments>({
    businessPlan: null,
    financialStatements: null,
    bankStatements: null,
    assetDetails: null,
    additionalDocs: [],
  });
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Handler for file uploads
  const handleFileUpload = (field: keyof SupportingDocuments, file: File | null) => {
    setDocuments(prev => ({
      ...prev,
      [field]: file
    }));
  };

  // Handler for additional docs
  const handleAdditionalDocs = (files: FileList | null) => {
    if (!files) return;
    const fileArray = Array.from(files);
    setDocuments(prev => ({
      ...prev,
      additionalDocs: [...prev.additionalDocs, ...fileArray]
    }));
  };

  // Remove an additional document
  const removeAdditionalDoc = (index: number) => {
    setDocuments(prev => ({
      ...prev,
      additionalDocs: prev.additionalDocs.filter((_, i) => i !== index)
    }));
  };

  // Format currency input
  const formatCurrency = (value: string) => {
    // Remove non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format with commas for thousands
    return digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Handle currency input change
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, setter: Function, field: string) => {
    const value = e.target.value.replace(/[£,]/g, '');
    
    setter((prev: any) => ({
      ...prev,
      [field]: formatCurrency(value)
    }));
  };

  // Check if current step is valid
  const isCurrentStepValid = () => {
    switch (currentStep) {
      case 1:
        return financeType !== '';
      case 2:
        return clientInfo.name && clientInfo.email && clientInfo.phone;
      case 3:
        if (financeType === 'loan') {
          return loanDetails.amount && loanDetails.term;
        } else if (financeType === 'asset') {
          return assetDetails.amount && assetDetails.term && assetDetails.assetType;
        } else if (financeType === 'invoice') {
          return invoiceDetails.annualTurnover && invoiceDetails.averageInvoiceValue;
        }
        return false;
      case 5:
        return agreeTerms;
      default:
        return true;
    }
  };

  // Mock submit function
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or redirect
      alert('Deal submitted successfully!');
      onClose(); // Close the form after submission
    }, 1500);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto border border-slate-100 border-rounded shadow-md bg-white rounded-lg overflow-hidden">
      <CardHeader className="border-b border-slate-100 pt-6 pb-5 relative">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-semibold text-slate-900">Submit New Deal</CardTitle>
            <CardDescription className="text-slate-600 mt-1.5">
              Complete all steps to submit a new finance application
            </CardDescription>
          </div>
          
          {/* Cancel button with improved styling */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full h-8 w-8 p-0 absolute top-4 right-6"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
        
        {/* Step Indicators with Labels */}
        <div className="mt-6">
          {/* Progress Bar */}
          <div className="relative h-1 bg-slate-100 rounded-full mb-4 overflow-hidden">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-slate-900 rounded-full"
              initial={{ width: `${((currentStep - 1) / 4) * 100}%` }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </div>
          
          {/* Step Labels */}
          <div className="flex justify-between text-xs font-medium">
            {[
              { step: 1, label: "Finance Type" },
              { step: 2, label: "Client Info" },
              { step: 3, label: "Deal Details" },
              { step: 4, label: "Documents" },
              { step: 5, label: "Review" }
            ].map((item) => (
              <div 
                key={item.step}
                className={cn(
                  "flex flex-col items-center cursor-pointer transition-colors",
                  currentStep >= item.step ? "text-slate-900" : "text-slate-400"
                )}
                onClick={() => item.step < currentStep && setCurrentStep(item.step)}
              >
                <div 
                  className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full mb-1 text-xs transition-colors",
                    currentStep > item.step 
                      ? "bg-slate-900 text-white" 
                      : currentStep === item.step 
                      ? "border-2 border-slate-900 text-slate-900" 
                      : "border border-slate-200 text-slate-400"
                  )}
                >
                  {item.step}
                </div>
                <span className="hidden sm:block">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Scrollable content area with fixed height */}
        <div className="h-[450px] overflow-hidden">
          <div className="h-full overflow-y-auto px-8 pt-8 pb-4">
            {currentStep === 1 && (
              <FinanceTypeStep 
                financeType={financeType} 
                setFinanceType={setFinanceType} 
              />
            )}
            
            {currentStep === 2 && (
              <ClientInfoStep 
                clientInfo={clientInfo} 
                setClientInfo={setClientInfo} 
              />
            )}
            
            {currentStep === 3 && (
              <DealDetailsStep 
                financeType={financeType}
                loanDetails={loanDetails}
                setLoanDetails={setLoanDetails}
                assetDetails={assetDetails}
                setAssetDetails={setAssetDetails}
                invoiceDetails={invoiceDetails}
                setInvoiceDetails={setInvoiceDetails}
                formatCurrency={formatCurrency}
                handleCurrencyChange={handleCurrencyChange}
              />
            )}
            
            {currentStep === 4 && (
              <DocumentsStep 
                financeType={financeType}
                documents={documents}
                handleFileUpload={handleFileUpload}
                handleAdditionalDocs={handleAdditionalDocs}
                removeAdditionalDoc={removeAdditionalDoc}
              />
            )}
            
            {currentStep === 5 && (
              <ReviewSubmitStep 
                financeType={financeType}
                clientInfo={clientInfo}
                loanDetails={loanDetails}
                assetDetails={assetDetails}
                invoiceDetails={invoiceDetails}
                documents={documents}
                agreeTerms={agreeTerms}
                setAgreeTerms={setAgreeTerms}
              />
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between border-t border-slate-100 px-8 py-5 bg-white">
        {currentStep > 1 ? (
          <Button 
            variant="outline" 
            onClick={() => setCurrentStep(currentStep - 1)}
            className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 font-medium px-5 cursor-pointer"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Previous
          </Button>
        ) : (
          <div></div>
        )}
        
        {currentStep < 5 ? (
          <Button 
            onClick={() => setCurrentStep(currentStep + 1)} 
            disabled={!isCurrentStepValid()}
            className="bg-slate-900 cursor-pointer hover:bg-slate-800 text-white font-medium px-5 disabled:bg-slate-200 disabled:text-slate-400"
          >
            Continue
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit}
            disabled={isSubmitting || !agreeTerms}
            className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 flex items-center gap-2 disabled:bg-slate-200 disabled:text-slate-400"
          >
            {isSubmitting ? (
              <>
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Deal
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </>
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

export default AddNewDealForm