"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { LenderDetails, containerVariants, itemVariants } from '@/lib/types';


interface CommercialTermsFormProps {
  lenderDetails: LenderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  payoutMethodOptions: string[];
}

const CommercialTermsForm: React.FC<CommercialTermsFormProps> = ({
  lenderDetails,
  handleChange,
  handleNextStep,
  handlePrevStep,
  payoutMethodOptions
}) => {
  return (
    <motion.div
      key="commercial-terms"
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
        Commercial Terms &amp; Payouts
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        {/* Commission structure */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label htmlFor="commissionStructure" className="block text-sm font-medium text-gray-700 mb-1">
            What is your typical commission structure for brokers?*
          </label>
          <textarea
            id="commissionStructure"
            name="commissionStructure"
            rows={3}
            required
            value={lenderDetails?.commissionStructure ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            placeholder="Describe your standard commission structure (e.g., percentage, tiered rates, etc.)"
          />
        </motion.div>
        
        {/* Payout method */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            How do you pay broker commissions?*
          </label>
          <select
            name="payoutMethod"
            value={lenderDetails?.payoutMethod ?? ""}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          >
            <option value="">Select payment method</option>
            {payoutMethodOptions.map(method => (
              <option key={method} value={method}>{method}</option>
            ))}
          </select>
        </motion.div>
        
        {/* Exclusive products */}
        <motion.div className="mb-8" variants={itemVariants}>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
            <input
              type="checkbox"
              name="offersExclusiveProducts"
              checked={!!lenderDetails?.offersExclusiveProducts}
              onChange={handleChange}
              className="h-4 w-4 text-black border-stone-300 rounded mr-2"
            />
            Do you offer exclusive products for high-performing brokers?
          </label>
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

export default CommercialTermsForm;
