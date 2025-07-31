import React from 'react'
import { motion } from 'framer-motion'
import { LenderDetails, containerVariants, itemVariants } from '@/lib/types';

interface PrimaryContactFormProps {
  lenderDetails: LenderDetails;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}

const PrimaryContactForm: React.FC<PrimaryContactFormProps> = ({
  lenderDetails,
  handleChange,
  handleNextStep,
  handlePrevStep
}) => {
  return (
    <motion.div
      key="primary-contact"
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
        Primary Contact
      </motion.h2>
      
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        {/* Contact details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Business Development Contact Name */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
              Business Development Contact Name*
            </label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              required
              value={lenderDetails.contactName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Job Title */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contactJobTitle" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title*
            </label>
            <input
              id="contactJobTitle"
              name="contactJobTitle"
              type="text"
              required
              value={lenderDetails.contactJobTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Email Address */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              required
              value={lenderDetails.contactEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Mobile Number */}
          <motion.div variants={itemVariants}>
            <label htmlFor="contactMobile" className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number*
            </label>
            <input
              id="contactMobile"
              name="contactMobile"
              type="tel"
              required
              value={lenderDetails.contactMobile}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          {/* Regional Coverage */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <label htmlFor="regionalCoverage" className="block text-sm font-medium text-gray-700 mb-1">
              Regional Coverage (if applicable)
            </label>
            <input
              id="regionalCoverage"
              name="regionalCoverage"
              type="text"
              value={lenderDetails.regionalCoverage}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
              placeholder="e.g., London, South East, National, etc."
            />
          </motion.div>
        </div>

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
            Review Application
            <svg className="inline-block ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default PrimaryContactForm;
