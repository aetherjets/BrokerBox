"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import LenderOnboarding from './Lender/LenderOnboarding'
import BrokerOnboarding from './Broker/BrokerOnboarding'
import SuccessfulSubmission from './SuccessfulSubmission'


export type UserType = 'broker' | 'lender' | null
export type SignupStep = 'selection' | 'onboarding' | 'success'

const SignUp = () => {
  const [userType, setUserType] = useState<UserType>(null)
  const [signupStep, setSignupStep] = useState<SignupStep>('selection')


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

  const handleTypeSelection = (type: UserType) => {
    setUserType(type)
    setSignupStep('onboarding')
  }

  const handleOnboardingComplete = () => {
    setSignupStep('success')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-100 flex items-center justify-center px-4 py-12">
      <AnimatePresence mode="wait">
        {signupStep === 'selection' && (
          <motion.div 
            key="selection"
            className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="bg-black text-white p-8 text-center">
              <motion.h1 
                className="text-3xl font-bold mb-2"
                variants={itemVariants}
              >
                Create Your Account
              </motion.h1>
              <motion.p 
                className="text-white/80"
                variants={itemVariants}
              >
                Select the type of account you&apos;d like to create
              </motion.p>
            </div>

            <div className="p-8 md:p-12">
              <motion.div 
                className="grid md:grid-cols-2 gap-8"
                variants={itemVariants}
              >
                <motion.div
                  className="border border-stone-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleTypeSelection('broker')}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="bg-stone-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-2">I&apos;m a Broker</h2>
                    <p className="text-stone-600">Create an account to connect with alternative lenders and streamline your deal submission process.</p>
                    
                    <div className="mt-6 flex items-center text-sm text-stone-600">
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Access to 100+ alternative lenders
                    </div>
                  </div>
                </motion.div>

                {/* Lender option - modified to be disabled */}
                <motion.div
                  className="border border-stone-200 rounded-xl p-6 relative overflow-hidden bg-stone-50 opacity-75"
                  // Removed hover and tap animations
                  // Removed onClick handler
                >
                  <div className="absolute inset-0 bg-white/50"></div>
                  <div className="relative z-10">
                    <div className="bg-stone-100 w-14 h-14 flex items-center justify-center rounded-full mb-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 7L12 13L21 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold mb-2">I&apos;m a Lender</h2>
                    <p className="text-stone-600">Join our network of alternative lenders to connect with qualified brokers and expand your lending portfolio.</p>
                    
                    {/* Added banner for coming soon */}
                    <div className="mt-4 bg-black/5 text-black/70 py-2 px-3 rounded text-sm inline-flex items-center">
                      <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Coming Soon
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                className="mt-8 text-center"
                variants={itemVariants}
              >
                <p className="text-stone-600">
                  Already have an account?{' '}
                  <Link href="/signin" className="text-black font-medium hover:underline">
                    Sign In
                  </Link>
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}

        {signupStep === 'onboarding' && (
          <>
            {userType === 'broker' && (
              <BrokerOnboarding
                onComplete={handleOnboardingComplete} 
              />
            )}
            {userType === 'lender' && (
              <LenderOnboarding
                onComplete={handleOnboardingComplete} 
              />
            )}
          </>
        )}

        {signupStep === 'success' && (
          <SuccessfulSubmission />
        )}
      </AnimatePresence>
    </div>
  )
}

export default SignUp
