"use client"
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface OtpProps {
  onVerify: (code: string) => void
  onCancel: () => void
  isLoading: boolean
}

const Otp = ({ onVerify, onCancel, isLoading }: OtpProps) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(30)
  const [canResend, setCanResend] = useState(false)
  
  useEffect(() => {
    // Focus on first input when component mounts
    const firstInput = document.getElementById('code-0')
    if (firstInput) firstInput.focus()
    
    // Set up countdown for resend button
    let timer: ReturnType<typeof setInterval>
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setCanResend(true)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [countdown])
  
  const handleVerificationCodeChange = (index: number, value: string) => {

    if (value.length > 1) value = value.slice(0, 1)
    if (!/^\d*$/.test(value) && value !== '') return
    
    const newVerificationCode = [...verificationCode]
    newVerificationCode[index] = value
    setVerificationCode(newVerificationCode)
    
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      if (nextInput) nextInput.focus()
    }
    
    if (value && index === 5 && !newVerificationCode.some(digit => !digit)) {
      handleSubmit()
    }
  }
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`)
      if (prevInput) prevInput.focus()
    }
  }
  
  const handleSubmit = () => {
    const code = verificationCode.join('')
    onVerify(code)
  }
  
  const handleResend = () => {
    setVerificationCode(['', '', '', '', '', ''])
    setCountdown(30)
    setCanResend(false)

    const firstInput = document.getElementById('code-0')
    if (firstInput) firstInput.focus()
    // Simulate OTP resend
    // call an API endpoint here
  }
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 300 }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="mb-8">
        <motion.h2 
          className="text-2xl font-bold text-black mb-2"
          variants={itemVariants}
        >
          Two-Factor Authentication
        </motion.h2>
        <motion.p 
          className="text-stone-600"
          variants={itemVariants}
        >
          Enter the 6-digit verification code sent to your mobile device
        </motion.p>
      </div>
      
      <motion.form 
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <label htmlFor="verification-code" className="block text-sm font-medium text-stone-700 mb-4">
            Verification Code
          </label>
          <div className="flex justify-between gap-2">
            {verificationCode.map((digit, index) => (
              <motion.input
                key={index}
                id={`code-${index}`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]"
                maxLength={1}
                value={digit}
                onChange={(e) => handleVerificationCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-bold bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                required
                variants={itemVariants}
                custom={index}
                whileFocus={{ scale: 1.05, boxShadow: "0 0 0 2px rgba(0,0,0,0.1)" }}
              />
            ))}
          </div>
        </motion.div>
        
        <motion.button
          type="submit"
          className="w-full py-3 bg-black text-white rounded-lg font-semibold relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isLoading || verificationCode.some(digit => !digit)}
          variants={itemVariants}
        >
          {isLoading ? (
            <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : "Verify"}
        </motion.button>
        
        <motion.div 
          className="flex justify-between"
          variants={itemVariants}
        >
          <button
            type="button"
            onClick={onCancel}
            className="text-sm font-medium text-stone-900 hover:text-stone-700 transition-colors"
          >
            ← Back to sign in
          </button>
          
          <button
            type="button"
            onClick={handleResend}
            className={`text-sm font-medium transition-colors ${
              canResend 
                ? 'text-stone-900 hover:text-stone-700' 
                : 'text-stone-400 cursor-not-allowed'
            }`}
            disabled={!canResend}
          >
            {canResend ? 'Resend code' : `Resend in ${countdown}s`}
          </button>
        </motion.div>
      </motion.form>
    </motion.div>
  )
}

export default Otp
