"use client"
import React from 'react'
import { motion } from 'framer-motion'


const PrePricing = () => {
  const [emailInputValue, setEmailInputValue] = React.useState("");
  
  const founderBenefits = [
    "12 months full access from launch",
    "Early beta access",
    "Feature input privileges",
    "Priority onboarding",
    "Full platform training", 
    "Dedicated account manager",
    "Competitive advantage in the market",
    "Establish lender relationships first"
  ]


  const handleSubscribe = async () => {
    try {
      const email = emailInputValue;
      console.log("Email entered:", email);
      

      // const STRIPE_PAYMENT_LINK = process.env.NODE_ENV == "development" ? process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_DEV : process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK;
      const STRIPE_PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK_DEV;

      const paymentLinkWithEmail = `${STRIPE_PAYMENT_LINK}?prefilled_email=${encodeURIComponent(email)}`;
      
      window.location.href = paymentLinkWithEmail;
    } catch (error) {
      console.error("Error redirecting to payment link:", error);
    }
    console.log("Value entered:", emailInputValue);
  };
  
  return (
    <section className="bg-gradient-to-br from-white via-white to-stone-50 py-24 px-4 relative overflow-hidden" id="pricing">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-40 right-10 w-72 h-72 rounded-full bg-stone-100 filter blur-3xl opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div 
        className="absolute bottom-20 -left-10 w-80 h-80 rounded-full bg-stone-100 filter blur-3xl opacity-60"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="bg-black text-white text-sm font-medium px-4 py-1.5 rounded-full">
              Limited Time Offer
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-black mb-6 bg-clip-text bg-gradient-to-r from-black to-stone-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ WebkitBackgroundClip: "text" }}
          >
            Founding Broker Package
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our exclusive founding broker program with a one-time payment. No recurring fees for 12 months after launch.
          </motion.p>
        </motion.div>
        
        <div className="flex justify-center">
          <motion.div 
            className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-xl max-w-lg w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
          >
            <div className="bg-black text-white text-center py-8">
              <h3 className="text-2xl font-bold">Founding Broker</h3>
              <p className="text-white/80 text-sm mt-1">Limited availability - only 50 spots</p>
            </div>
            
            <div className="p-8">
              <div className="flex items-baseline justify-center mb-6">
                <motion.span 
                  className="text-5xl font-bold text-black"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  £640
                </motion.span>
                <span className="text-stone-600 ml-2">one-time payment</span>
              </div>
              
              <div className="text-center mb-8">
                <motion.div
                  className="inline-block bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <span className="flex items-center gap-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Save £560 compared to regular pricing
                  </span>
                </motion.div>
              </div>
              
              <div className="space-y-4 mb-8">
                {founderBenefits.map((benefit, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="mr-3 text-black">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5L6.5 10.5L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-stone-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                  Your Email Address
                </label>
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    className="w-full px-4 py-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    value={emailInputValue}
                    onChange={(e) => setEmailInputValue(e.target.value)}
                  />
                  <div className="absolute inset-0 rounded-lg pointer-events-none border border-black/5 shadow-sm"></div>
                </motion.div>
                <p className="mt-1.5 text-xs text-stone-500 text-left">
                  We&apos;ll use this to create your founding member account
                </p>
              </div>
              
              <motion.button 
                className="w-full py-4 rounded-lg font-semibold bg-black text-white hover:bg-black/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={{ scale: emailInputValue ? 1.03 : 1 }}
                whileTap={emailInputValue ? { scale: 0.98 } : {}}
                onClick={handleSubscribe}
                disabled={!emailInputValue.includes('@')}
              >
                {!emailInputValue.includes('@') ? 'Enter your email to continue' : 'Secure Your Spot Now'}
              </motion.button>
              
              <div className="mt-4 text-center text-stone-500 text-sm flex items-center justify-center gap-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V17M6 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6C4.89543 11 4 11.8954 4 13V19C4 20.1046 4.89543 21 6 21ZM16 11V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V11H16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Secure payment with Stripe
              </div>
            </div>
            
            <div className="bg-stone-50 p-4 border-t border-stone-100 text-center">
              <p className="text-stone-500 text-sm">
                Regular price after launch: <span className="line-through">£1,200/year</span>
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 bg-stone-100 rounded-2xl p-8 md:p-12 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-black mb-4">Still have questions?</h3>
          <p className="text-black/70 mb-6 max-w-2xl">
            Our team is available to answer any questions you might have about the founding broker program.
            We&apos;re here to help you make an informed decision.
          </p>
          <motion.button 
            className="bg-white border border-stone-200 text-black py-3 px-8 rounded-lg font-semibold whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
        
        <div className="mt-12 text-center text-stone-500 text-sm">
          Limited to 50 founding brokers. Secure your spot before they&apos;re gone.
        </div>
      </div>
    </section>
  )
}

export default PrePricing

