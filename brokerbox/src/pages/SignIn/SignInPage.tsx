"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ForgotPassword from './ForgotPassword'
import Otp from './Otp'
import supabase from '@/db/supabase'
import { useRouter } from 'next/navigation'
// import { SignIn } from '@clerk/nextjs'

const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
    showPassword: false,
    isLoading: false
  })
  
  const [formState, setFormState] = useState<'signin' | 'forgotPassword' | 'verify2FA'>('signin')

  const router = useRouter();

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: { 
  //     opacity: 1,
  //     transition: { 
  //       when: "beforeChildren",
  //       staggerChildren: 0.1,
  //       duration: 0.3
  //     } 
  //   }
  // }
  
  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { 
  //     y: 0, 
  //     opacity: 1,
  //     transition: { type: "spring", stiffness: 300, damping: 24 }
  //   }
  // }
  
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
      transition: { type: "spring" as const, stiffness: 400, damping: 10 }
    },
    tap: { scale: 0.98 }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    if (e.target.parentElement) {
      e.target.parentElement.classList.add('scale-102')
      setTimeout(() => {
        e.target.parentElement?.classList.remove('scale-102')
      }, 200)
    }
  }
  
  const togglePasswordVisibility = () => {
    setFormData(prev => ({
      ...prev,
      showPassword: !prev.showPassword
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormData(prev => ({ ...prev, isLoading: true }))

    const {data, error} = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if(error){
      setFormData(prev => ({ ...prev, isLoading: false }))
      alert(error.message)
      console.error('Login error:', error.message)
      return
    }

    console.log('Login successful:', data);

    localStorage.setItem("access_token", data.session.access_token);
    router.push("/dashboard");
    
    // Simulate authentication
    // setTimeout(() => {
    //   setFormData(prev => ({ ...prev, isLoading: false }))
      
    //   // Simulate 2FA requirement (in a real app, this would be based on server response)
    //   // if (formData.email && formData.password) {
    //   //   setFormState('verify2FA')
    //   // }
    // }, 1500)
  }
  
  const handleForgotPassword = async(e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email before proceeding
    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }
    
    setFormData(prev => ({ ...prev, isLoading: true }))

    try {
      console.log('Attempting password reset for:', formData.email)
      
      // Use absolute URL including protocol, and ensure route matches your Supabase configuration
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email, {
        redirectTo: window.location.origin + '/update-password', 
      })

      if (error) {
        console.error('Password reset error:', error)
        alert(`Failed to send reset email: ${error.message || 'Unknown error'}`)
      } else {
        alert('Password reset email sent! Please check your inbox.')
        // Return to sign-in view after successful request
        setFormState('signin')
      }
    } catch (err) {
      console.error('Exception during password reset:', err)
      alert('An unexpected error occurred. Please try again later.')
    } finally {
      setFormData(prev => ({ ...prev, isLoading: false }))
    }
  }
  
  // New function to handle OTP verification
  const handleVerifyOtp = (code: string) => {
    setFormData(prev => ({ ...prev, isLoading: true }))
    console.log('Verifying OTP:', code);
    // Simulate verification
    setTimeout(() => {
      setFormData(prev => ({ ...prev, isLoading: false }))
      // Redirect to dashboard or home page after successful verification
      window.location.href = '/dashboard'
    }, 1500)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-stone-100 flex items-center justify-center px-4 py-12">
      <div className="flex w-full max-w-5xl overflow-hidden">
        {/* Left side - Branding and information */}
        <motion.div 
          className="hidden lg:block w-1/2 bg-black p-12 text-white relative overflow-hidden"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative z-10">
            <motion.div 
              className="text-2xl font-bold mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Broker<span className="text-stone-400">Box</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Welcome Back
            </motion.h2>
            
            <motion.p 
              className="text-white/70 mb-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Access your account to manage client deals, connect with lenders, and grow your business with the UK&apos;s only approved broker platform.
            </motion.p>
            
            <motion.div
              className="space-y-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>Access to 100+ alternative lenders</div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>Streamlined deal management</div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>Enhanced security with optional 2FA</div>
              </div>
            </motion.div>
          </div>
          
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </motion.div>
        
        {/* Right side - Form area */}
        {/* <SignIn /> */}
        <motion.div 
          className="w-full lg:w-1/2 bg-white p-8 md:p-12"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {formState === 'signin' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-2">Sign In</h2>
                <p className="text-stone-600">Please enter your credentials to access your account</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                    placeholder="name@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-stone-700 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={formData.showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-600"
                    >
                      {formData.showPassword ? (
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.528 9.191C5.077 6.575 8.114 3.5 12 3.5c3.886 0 6.923 3.075 8.473 5.69.562.946.843 1.42.843 1.81 0 .39-.28.864-.843 1.81-1.55 2.615-4.587 5.69-8.473 5.69-3.886 0-6.923-3.075-8.473-5.69C2.966 11.863 2.685 11.39 2.685 11c0-.39.28-.864.843-1.81z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 2.5l15 15M8.851 8.86a3 3 0 104.298 4.288M15 11a3 3 0 01-3 3M9.878 5.272C10.556 5.1 11.263 5 12 5c3.886 0 6.924 3.071 8.473 5.674.144.241.247.455.32.634.016.04.03.075.04.105a.579.579 0 01.167.395 1.159 1.159 0 01-.169.557 13.723 13.723 0 01-3.13 3.53M7 16.5a14.8 14.8 0 01-3.473-4.115C2.966 11.504 2.686 11.03 2.686 10.64c0-.39.28-.863.842-1.804C5.077 6.223 8.115 3.151 12 3.151c.747 0 1.455.1 2.134.273" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 text-black border-stone-300 rounded focus:ring-0"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-stone-600">
                      Remember me
                    </label>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => setFormState('forgotPassword')}
                    className="text-sm font-medium text-stone-900 hover:text-stone-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-lg font-semibold relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={formData.isLoading}
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {formData.isLoading ? (
                    <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Sign In"}
                </motion.button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-stone-600">
                  Don&apos;t have an account?{' '}
                  <Link href="/sign-up" className="font-medium text-stone-900 hover:text-black underline underline-offset-2">
                    Sign up now
                  </Link>
                </p>
              </div>
            </motion.div>
          )}
          
          {formState === 'forgotPassword' && (
            <ForgotPassword
              onForgot={handleForgotPassword}
              formData={formData}
              handleChange={handleChange}
              onCancel={() => setFormState('signin')}
            />
          )}
          
          {formState === 'verify2FA' && (
            <Otp
              onVerify={handleVerifyOtp} 
              onCancel={() => setFormState('signin')}
              isLoading={formData.isLoading}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SignInPage