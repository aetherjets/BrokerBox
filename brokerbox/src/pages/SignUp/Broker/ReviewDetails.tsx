"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CompanyDetails } from './CompanyDetailsForm'
import { DirectorDetails } from './DirectorDetailsForm'

interface ReviewDetailsProps {
  companyDetails: CompanyDetails
  directorDetails: DirectorDetails
  handlePrevStep: () => void
  handleSubmit: (e: React.FormEvent) => void
  isLoading: boolean
  setCurrentStep: (step: 'companyDetails' | 'directorDetails' | 'review') => void
}

const ReviewDetails: React.FC<ReviewDetailsProps> = ({ 
  companyDetails,
  directorDetails,
  handlePrevStep,
  handleSubmit,
  isLoading,
  setCurrentStep
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false)

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
  }
  
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
      key="review"
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-6">Review Your Application</h2>
        <p className="text-stone-600 mb-8">
          Please review all the information before submitting your application. Once submitted, your application will be reviewed by our team.
        </p>

        <div className="space-y-6">
          {/* Company Details Review */}
          <div className="bg-stone-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
              <span>Company Details</span>
              <button 
                type="button" 
                onClick={() => setCurrentStep('companyDetails')}
                className="text-sm text-black underline"
              >
                Edit
              </button>
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <dt className="text-sm text-stone-600">Trading Name</dt>
                <dd className="font-medium">{companyDetails.tradingName}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Years Trading</dt>
                <dd className="font-medium">{companyDetails.yearsTrading}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Company Size</dt>
                <dd className="font-medium">{companyDetails.companySize}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Company Name</dt>
                <dd className="font-medium">{companyDetails.companyName}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Companies House Number</dt>
                <dd className="font-medium">{companyDetails.companiesHouseNumber}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Company Telephone</dt>
                <dd className="font-medium">{companyDetails.companyTelephone}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">FCA Registration (if applicable)</dt>
                <dd className="font-medium">{companyDetails.fcaNumber || 'Not provided'}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-sm text-stone-600">Finance Types</dt>
                <dd className="font-medium">{companyDetails.financeTypes.join(', ')}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-sm text-stone-600">Company Address</dt>
                <dd className="font-medium">{companyDetails.companyAddress}</dd>
              </div>
            </dl>
          </div>

          {/* Director Details Review */}
          <div className="bg-stone-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
              <span>Director Details</span>
              <button 
                type="button" 
                onClick={() => setCurrentStep('directorDetails')}
                className="text-sm text-black underline"
              >
                Edit
              </button>
            </h3>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <dt className="text-sm text-stone-600">Director&apos;s Name</dt>
                <dd className="font-medium">{directorDetails.name}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Mobile</dt>
                <dd className="font-medium">{directorDetails.mobile}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Email</dt>
                <dd className="font-medium">{directorDetails.email}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Date of Birth</dt>
                <dd className="font-medium">{directorDetails.dateOfBirth}</dd>
              </div>
              <div className="md:col-span-2">
                <dt className="text-sm text-stone-600">Address</dt>
                <dd className="font-medium">{directorDetails.address}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Driving License (Front)</dt>
                <dd className="font-medium">{directorDetails.drivingLicenseFront?.name}</dd>
              </div>
              <div>
                <dt className="text-sm text-stone-600">Driving License (Rear)</dt>
                <dd className="font-medium">{directorDetails.drivingLicenseRear?.name}</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Terms and conditions checkbox */}
        <div className="mt-8">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
                className="h-4 w-4 text-black border-stone-300 rounded"
              />
            </div>
            <div className="ml-3">
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <a href="#" className="text-black underline">terms and conditions</a> and <a href="#" className="text-black underline">privacy policy</a>
              </label>
            </div>
          </div>
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
    </motion.div>
  )
}

export default ReviewDetails;