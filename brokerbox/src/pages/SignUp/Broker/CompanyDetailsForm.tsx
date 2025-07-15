"use client"
import React from 'react'
import { motion } from 'framer-motion'

export interface CompanyDetails {
  tradingName: string
  yearsTrading: string
  companySize: string
  companyName: string
  companiesHouseNumber: string
  companyTelephone: string
  financeTypes: string[]
  fcaNumber: string
  companyAddress: string
}

interface CompanyDetailsFormProps {
  companyDetails: CompanyDetails
  handleCompanyChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
  handleFinanceTypeChange: (type: string) => void
  handleNextStep: () => void
  companySizeOptions: string[]
  financeTypes: string[]
}

const CompanyDetailsForm: React.FC<CompanyDetailsFormProps> = ({ 
  companyDetails, 
  handleCompanyChange, 
  handleFinanceTypeChange, 
  handleNextStep,
  companySizeOptions,
  financeTypes
}) => {
  
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
  }

  return (
    <motion.div
      key="company-details"
      className="p-8"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label htmlFor="tradingName" className="block text-sm font-medium text-gray-700 mb-1">
              Trading Name*
            </label>
            <input
              id="tradingName"
              name="tradingName"
              type="text"
              required
              value={companyDetails.tradingName}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="yearsTrading" className="block text-sm font-medium text-gray-700 mb-1">
              Years Trading*
            </label>
            <input
              id="yearsTrading"
              name="yearsTrading"
              type="text"
              required
              value={companyDetails.yearsTrading}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
              Company Size*
            </label>
            <select
              id="companySize"
              name="companySize"
              required
              value={companyDetails.companySize}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            >
              <option value="">Select company size</option>
              {companySizeOptions.map((size) => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name*
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              required
              value={companyDetails.companyName}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="companiesHouseNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Companies House Number*
            </label>
            <input
              id="companiesHouseNumber"
              name="companiesHouseNumber"
              type="text"
              required
              value={companyDetails.companiesHouseNumber}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="companyTelephone" className="block text-sm font-medium text-gray-700 mb-1">
              Company Telephone*
            </label>
            <input
              id="companyTelephone"
              name="companyTelephone"
              type="tel"
              required
              value={companyDetails.companyTelephone}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="fcaNumber" className="block text-sm font-medium text-gray-700 mb-1">
              FCA Registration Number (if applicable)
            </label>
            <input
              id="fcaNumber"
              name="fcaNumber"
              type="text"
              value={companyDetails.fcaNumber}
              onChange={handleCompanyChange}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
            />
          </motion.div>
        </div>

        <motion.div className="mt-6" variants={itemVariants}>
          <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-1">
            Company Address*
          </label>
          <textarea
            id="companyAddress"
            name="companyAddress"
            required
            rows={3}
            value={companyDetails.companyAddress}
            onChange={handleCompanyChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none"
          />
        </motion.div>

        <motion.div className="mt-6" variants={itemVariants}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type of Finance You Broker* (select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {financeTypes.map((type) => (
              <div key={type} className="flex items-center">
                <input
                  id={`finance-${type}`}
                  name={`finance-${type}`}
                  type="checkbox"
                  checked={companyDetails.financeTypes.includes(type)}
                  onChange={() => handleFinanceTypeChange(type)}
                  className="h-4 w-4 text-black border-stone-300 rounded"
                />
                <label htmlFor={`finance-${type}`} className="ml-2 block text-sm text-gray-700">
                  {type}
                </label>
              </div>
            ))}
          </div>
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
  )
}

export default CompanyDetailsForm
