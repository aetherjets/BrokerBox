import React from 'react'
import { motion } from 'framer-motion'
import { LenderDetails, containerVariants, itemVariants } from '../types'

interface ComplianceRiskFormProps {
  lenderDetails: LenderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNestedChange: (category: string, field: string, value: string) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  setLenderDetails: React.Dispatch<React.SetStateAction<LenderDetails>>;
}

const ComplianceRiskForm: React.FC<ComplianceRiskFormProps> = ({
  lenderDetails,
  handleChange,
  handleNestedChange,
  handleNextStep,
  handlePrevStep,
  setLenderDetails
}) => {
  return (
    <motion.div
      key="compliance-risk"
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
        Compliance &amp; Risk
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        {/* Minimum broker requirements */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h3 className="text-base font-medium text-gray-800 mb-3">
            Minimum broker requirements:
          </h3>
          
          <div className="mb-4">
            <label className="flex items-center text-sm text-gray-700 mb-2">
              <input
                type="checkbox"
                name="fcaRegRequired"
                checked={lenderDetails.fcaRegRequired}
                onChange={handleChange}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              FCA Registration Number required
            </label>
          </div>
          
          <div>
            <label htmlFor="specificDocumentation" className="block text-sm font-medium text-gray-700 mb-1">
              Specific documentation or checks required
            </label>
            <textarea
              id="specificDocumentation"
              name="specificDocumentation"
              rows={2}
              value={lenderDetails.specificDocumentation}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="Describe any specific documentation or checks required from brokers"
            />
          </div>
        </motion.div>
        
        {/* AML/KYC documentation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <h3 className="text-base font-medium text-gray-800 mb-3">
            Minimum AML/KYC documentation required before funding:
          </h3>
          
          <div className="space-y-2">
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.idVerification}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'idVerification', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              ID verification
            </label>
            
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.passportDrivingLicense}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'passportDrivingLicense', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Passport / Driving License
            </label>
            
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.proofOfAddress}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'proofOfAddress', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Proof of Address
            </label>
            
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.businessBankStatements}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'businessBankStatements', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Business bank statements
            </label>
            
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.filedAccounts}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'filedAccounts', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Filed accounts
            </label>
            
            <label className="flex items-center text-sm text-gray-700">
              <input
                type="checkbox"
                checked={lenderDetails.amlKycDocuments.openBanking}
                onChange={(e) => handleNestedChange('amlKycDocuments', 'openBanking', e.target.checked)}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Open banking integration
            </label>
          </div>
          
          <div className="mt-4">
            <label htmlFor="otherDocuments" className="block text-sm font-medium text-gray-700 mb-1">
              Any other documents?
            </label>
            <textarea
              id="otherDocuments"
              rows={2}
              value={lenderDetails.amlKycDocuments.otherDocuments}
              onChange={(e) => handleNestedChange('amlKycDocuments', 'otherDocuments', e.target.value)}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="List any other required documentation"
            />
          </div>
        </motion.div>
        
        {/* Affordability/Risk checks */}
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="mb-4">
            <p className="text-base font-medium text-gray-800 mb-3">
              Do you run your own affordability/risk checks, or rely on broker screening?
            </p>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="runsOwnAffordabilityChecks"
                  checked={lenderDetails.runsOwnAffordabilityChecks === true}
                  onChange={() => setLenderDetails(prev => ({ ...prev, runsOwnAffordabilityChecks: true }))}
                  className="h-4 w-4 text-black border-stone-300 mr-2"
                />
                We run our own affordability/risk checks
              </label>
              
              <label className="flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="runsOwnAffordabilityChecks"
                  checked={lenderDetails.runsOwnAffordabilityChecks === false}
                  onChange={() => setLenderDetails(prev => ({ ...prev, runsOwnAffordabilityChecks: false }))}
                  className="h-4 w-4 text-black border-stone-300 mr-2"
                />
                We rely on broker screening
              </label>
            </div>
          </div>
          
          {/* Co-brokered deals */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
              <input
                type="checkbox"
                name="acceptsCoBrokeredDeals"
                checked={lenderDetails.acceptsCoBrokeredDeals}
                onChange={handleChange}
                className="h-4 w-4 text-black border-stone-300 rounded mr-2"
              />
              Do you accept co-brokered/packaged deals from other introducers?
            </label>
          </div>
        </motion.div>

        <motion.div className="mt-8 flex justify-between" variants={itemVariants}>
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
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Next Step
            <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ComplianceRiskForm;
