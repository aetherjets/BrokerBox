import React from 'react'
import { motion } from 'framer-motion'

interface ForgotPasswordProps {
  onForgot: (e: React.FormEvent) => void
  formData: {
    email: string
    isLoading: boolean
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onCancel: () => void
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ 
  onForgot, 
  formData, 
  handleChange, 
  onCancel 
}) => {
  
  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 400, 
        damping: 17 
      }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    },
    tap: { scale: 0.98 }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-black mb-2">Reset Password</h2>
        <p className="text-stone-600">Enter your email address, and we&apos;ll send you a link to reset your password</p>
      </div>
      
      <form onSubmit={onForgot} className="space-y-6">
        <div>
          <label htmlFor="reset-email" className="block text-sm font-medium text-stone-700 mb-1">
            Email address
          </label>
          <input
            id="reset-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData?.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
            placeholder="name@company.com"
          />
        </div>
        
        <motion.button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg font-semibold relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={formData?.isLoading}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          {formData?.isLoading ? (
            <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : "Send Reset Link"}
        </motion.button>
        
        <div className="text-center">
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-medium text-stone-900 hover:text-stone-700 transition-colors"
          >
            ← Back to sign in
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default ForgotPassword
