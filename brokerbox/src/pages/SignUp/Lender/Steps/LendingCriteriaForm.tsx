import React from 'react'
import { motion } from 'framer-motion'
import { LenderDetails, containerVariants, itemVariants } from '@/lib/types';

interface LendingCriteriaFormProps {
  lenderDetails: LenderDetails;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleFinanceTypeChange: (type: string) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  financeTypes: string[];
  setLenderDetails: React.Dispatch<React.SetStateAction<LenderDetails>>;
}

const LendingCriteriaForm: React.FC<LendingCriteriaFormProps> = ({
  lenderDetails,
  // handleChange,
  handleFinanceTypeChange,
  handleNextStep,
  handlePrevStep,
  financeTypes,
  setLenderDetails
}) => {
  return (
    <motion.div
      key="lending-criteria"
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
        Lending Criteria
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        {/* Broker Acceptance */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Do you accept:*
          </label>
          <div className="space-y-3">
            <div className="flex items-center">
              <input
                id="fca-only"
                name="acceptsOnlyFcaApproved"
                type="radio"
                checked={!!lenderDetails?.acceptsOnlyFcaApproved}
                onChange={() => setLenderDetails(prev => ({ ...prev, acceptsOnlyFcaApproved: true }))}
                className="h-4 w-4 text-black border-stone-300"
                required
              />
              <label htmlFor="fca-only" className="ml-3 block text-sm text-gray-700">
                FCA-approved brokers only
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="all-vetted"
                name="acceptsOnlyFcaApproved"
                type="radio"
                checked={lenderDetails?.acceptsOnlyFcaApproved === false}
                onChange={() => setLenderDetails(prev => ({ ...prev, acceptsOnlyFcaApproved: false }))}
                className="h-4 w-4 text-black border-stone-300"
              />
              <label htmlFor="all-vetted" className="ml-3 block text-sm text-gray-700">
                All vetted introducers (including non-FCA)
              </label>
            </div>
          </div>
        </motion.div>

        {/* Finance Types */}
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Type of Finance Offered* (select all that apply)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {financeTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  id={`finance-${type}`}
                  type="checkbox"
                  checked={!!lenderDetails?.financeTypes?.includes(type)}
                  onChange={() => handleFinanceTypeChange(type)}
                  className="h-4 w-4 text-black border-stone-300 rounded"
                />
                <label htmlFor={`finance-${type}`} className="ml-3 block text-sm text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
          {(!lenderDetails?.financeTypes || lenderDetails.financeTypes.length === 0) && (
            <p className="mt-2 text-xs text-red-500">Please select at least one finance type</p>
          )}
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
            disabled={!lenderDetails?.financeTypes || lenderDetails.financeTypes.length === 0}
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

export default LendingCriteriaForm;
