import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/types';

interface LenderDetails {
  tradingName: string;
  companyName: string;
  companySize: string;
  companiesHouseNumber: string;
  companyTelephone: string;
  companyAddress: string;
  fcaNumber: string;
  acceptsOnlyFcaApproved: boolean;
  financeTypes: string[];
}

interface CompanyDetailsFormProps {
  lenderDetails: LenderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNextStep: () => void;
  companySizeOptions: string[];
}

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({
  lenderDetails,
  handleChange,
  handleNextStep,
  companySizeOptions
}) => {

  return (
    <motion.div
      key="company-details"
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
        Company Details
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Trading Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="tradingName" className="block text-sm font-medium text-gray-700 mb-1">
              Trading Name*
            </label>
            <input
              id="tradingName"
              name="tradingName"
              type="text"
              required
              value={lenderDetails?.tradingName ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Company Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name*
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={lenderDetails?.companyName ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Company Size */}
          <motion.div variants={itemVariants}>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
              Company Size*
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              value={lenderDetails?.companySize ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select company size</option>
              {(companySizeOptions ?? []).map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </motion.div>

          {/* Companies House Number */}
          <motion.div variants={itemVariants}>
            <label htmlFor="companiesHouseNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Companies House Number*
            </label>
            <input
              id="companiesHouseNumber"
              name="companiesHouseNumber"
              type="text"
              required
              value={lenderDetails?.companiesHouseNumber ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Company Telephone */}
          <motion.div variants={itemVariants}>
            <label htmlFor="companyTelephone" className="block text-sm font-medium text-gray-700 mb-1">
              Company Telephone Number*
            </label>
            <input
              id="companyTelephone"
              name="companyTelephone"
              type="tel"
              required
              value={lenderDetails?.companyTelephone ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* FCA Registration Number */}
          <motion.div variants={itemVariants}>
            <label htmlFor="fcaNumber" className="block text-sm font-medium text-gray-700 mb-1">
              FCA Registration Number*
            </label>
            <input
              id="fcaNumber"
              name="fcaNumber"
              type="text"
              required
              value={lenderDetails?.fcaNumber ?? ""}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
            <p className="mt-1 text-xs text-stone-500">FCA registration is required for all lenders</p>
          </motion.div>
        </div>

        {/* Company Address */}
        <motion.div className="mt-6" variants={itemVariants}>
          <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Company Address*
          </label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            required
            rows={3}
            value={lenderDetails?.companyAddress ?? ""}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </motion.div>

        <motion.div className="mt-8 flex justify-end" variants={itemVariants}>
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

export default CompanyDetailsForm;
