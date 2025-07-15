"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { UserType } from './SignUp'

interface SuccessfulSubmissionProps {
  userType: UserType
}

const SuccessfulSubmission: React.FC<SuccessfulSubmissionProps> = ({ userType }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3
      } 
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 24 }
    }
  }

  return (
    <motion.div
      className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="bg-black text-white p-8 text-center">
        <motion.h1 
          className="text-3xl font-bold mb-2"
          variants={itemVariants}
        >
          Application Submitted
        </motion.h1>
        <motion.p 
          className="text-white/80"
          variants={itemVariants}
        >
          Thank you for your interest in Broker Box
        </motion.p>
      </div>

      <motion.div 
        className="p-8 text-center"
        variants={itemVariants}
      >
        <motion.div
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
        >
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        
        <motion.h2 
          className="text-2xl font-bold mb-4"
          variants={itemVariants}
        >
          Your Application is Under Review
        </motion.h2>
        
        <motion.p 
          className="text-stone-600 mb-6 max-w-lg mx-auto"
          variants={itemVariants}
        >
          We've received your application and our team will review it shortly. You will receive an email notification once your account has been approved, which typically takes 1-2 business days.
        </motion.p>
        
        <motion.div 
          className="bg-stone-50 p-6 rounded-lg mb-8 max-w-md mx-auto"
          variants={itemVariants}
        >
          <h3 className="font-semibold mb-2">Next Steps</h3>
          <ul className="text-left text-stone-600 space-y-2">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L10.5 14.5L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Check your email for confirmation</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L10.5 14.5L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Our team will review your application</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12L10.5 14.5L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>You'll receive an approval email with login details</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <Link href="/">
            <motion.button
              className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Return to Homepage
            </motion.button>
          </Link>
          <motion.a
            href="mailto:support@brokerbox.co.uk"
            className="px-6 py-3 border border-black text-black rounded-lg font-medium hover:bg-stone-50 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default SuccessfulSubmission
