import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { LenderDetails,OnboardingStep, containerVariants, itemVariants } from '@/lib/types';

interface ReviewFormProps {
  lenderDetails: LenderDetails;
  isLoading: boolean;
  handleSubmit: () => void;
  handlePrevStep: () => void;
  setCurrentStep: (step: OnboardingStep) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  lenderDetails,
  isLoading,
  handleSubmit,
  handlePrevStep,
  setCurrentStep
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  return (
    <motion.div
      key="review"
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h2 
        className="text-xl font-semibold mb-6"
        variants={itemVariants}
      >
        Review Your Application
      </motion.h2>
      
      <motion.p 
        className="text-stone-600 mb-6"
        variants={itemVariants}
      >
        Please review all information before submitting. Once submitted, our team will review your application.
      </motion.p>

      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
        {/* Company Details Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Company Details</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('details')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">Trading Name</dt>
              <dd>{lenderDetails.tradingName}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Company Name</dt>
              <dd>{lenderDetails.companyName}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Company Size</dt>
              <dd>{lenderDetails.companySize}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Companies House Number</dt>
              <dd>{lenderDetails.companiesHouseNumber}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Company Telephone</dt>
              <dd>{lenderDetails.companyTelephone}</dd>
            </div>
            <div>
              <dt className="text-stone-500">FCA Registration Number</dt>
              <dd>{lenderDetails.fcaNumber}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-stone-500">Company Address</dt>
              <dd>{lenderDetails.companyAddress}</dd>
            </div>
          </dl>
        </motion.div>

        {/* Lending Criteria Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Lending Criteria</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('criteria')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">Broker Acceptance</dt>
              <dd>{lenderDetails.acceptsOnlyFcaApproved ? 'FCA-approved brokers only' : 'All vetted introducers (including non-FCA)'}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Finance Types Offered</dt>
              <dd>{lenderDetails.financeTypes.join(', ')}</dd>
            </div>
          </dl>
        </motion.div>
        
        {/* Technical Integration Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Technical Integration</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('technical')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">API for Instant Quotes</dt>
              <dd>{lenderDetails.offersApi ? 'Yes' : 'No'}</dd>
            </div>
            {lenderDetails.offersApi && (
              <>
                <div>
                  <dt className="text-stone-500">API Documentation URL</dt>
                  <dd>{lenderDetails.apiDocUrl}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">API Key/Token Process</dt>
                  <dd>{lenderDetails.apiKeyProcess}</dd>
                </div>
                <div>
                  <dt className="text-stone-500">Supported Data Points</dt>
                  <dd>{lenderDetails.supportedDataPoints.join(', ')}</dd>
                </div>
              </>
            )}
            <div>
              <dt className="text-stone-500">Supports Webhooks</dt>
              <dd>{lenderDetails.supportsWebhooks ? 'Yes' : 'No'}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Offers Sandbox Access</dt>
              <dd>{lenderDetails.offersSandbox ? 'Yes' : 'No'}</dd>
            </div>
          </dl>
        </motion.div>
        
        {/* Compliance & Risk Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Compliance & Risk</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('compliance')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">FCA Registration Required</dt>
              <dd>{lenderDetails.fcaRegRequired ? 'Yes' : 'No'}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Specific Documentation Required</dt>
              <dd>{lenderDetails.specificDocumentation || 'None specified'}</dd>
            </div>
            <div>
              <dt className="text-stone-500">AML/KYC Documents Required</dt>
              <dd>
                <ul className="list-disc list-inside">
                  {lenderDetails.amlKycDocuments.idVerification && <li>ID Verification</li>}
                  {lenderDetails.amlKycDocuments.passportDrivingLicense && <li>Passport/Driving License</li>}
                  {lenderDetails.amlKycDocuments.proofOfAddress && <li>Proof of Address</li>}
                  {lenderDetails.amlKycDocuments.businessBankStatements && <li>Business Bank Statements</li>}
                  {lenderDetails.amlKycDocuments.filedAccounts && <li>Filed Accounts</li>}
                  {lenderDetails.amlKycDocuments.openBanking && <li>Open Banking</li>}
                  {lenderDetails.amlKycDocuments.otherDocuments && <li>Other: {lenderDetails.amlKycDocuments.otherDocuments}</li>}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-stone-500">Affordability/Risk Checks</dt>
              <dd>{lenderDetails.runsOwnAffordabilityChecks ? 'Own checks' : 'Broker screening'}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Co-Brokered Deals</dt>
              <dd>{lenderDetails.acceptsCoBrokeredDeals ? 'Accepted' : 'Not accepted'}</dd>
            </div>
          </dl>
        </motion.div>
        
        {/* Commercial Terms Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Commercial Terms</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('commercial')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">Commission Structure</dt>
              <dd>{lenderDetails.commissionStructure}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Payout Method</dt>
              <dd>{lenderDetails.payoutMethod}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Exclusive Products for High-Performing Brokers</dt>
              <dd>{lenderDetails.offersExclusiveProducts ? 'Yes' : 'No'}</dd>
            </div>
          </dl>
        </motion.div>
        
        {/* Primary Contact Review */}
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-4 flex items-center justify-between">
            <span>Primary Contact</span>
            <button 
              type="button" 
              onClick={() => setCurrentStep('contact')}
              className="text-sm text-black underline"
            >
              Edit
            </button>
          </h3>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <dt className="text-stone-500">Contact Name</dt>
              <dd>{lenderDetails.contactName}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Job Title</dt>
              <dd>{lenderDetails.contactJobTitle}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Email</dt>
              <dd>{lenderDetails.contactEmail}</dd>
            </div>
            <div>
              <dt className="text-stone-500">Mobile</dt>
              <dd>{lenderDetails.contactMobile}</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="text-stone-500">Regional Coverage</dt>
              <dd>{lenderDetails.regionalCoverage || 'Not specified'}</dd>
            </div>
          </dl>
        </motion.div>
      </div>

      {/* Terms and Privacy */}
      <motion.div 
        className="mt-8"
        variants={itemVariants}
      >
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="h-4 w-4 text-black border-stone-300 rounded"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the <a href="#" className="text-black underline">terms and conditions</a> and <a href="#" className="text-black underline">privacy policy</a>
            </label>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="mt-8 flex justify-between"
        variants={itemVariants}
      >
        <motion.button
          type="button"
          onClick={handlePrevStep}
          className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-black/5 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg className="inline-block mr-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous
        </motion.button>
        <motion.button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading || !termsAccepted}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            <>Submit Application</>
          )}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ReviewForm;
