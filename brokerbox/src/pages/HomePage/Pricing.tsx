"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly')
  
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for new brokers starting their journey",
      monthlyPrice: 49,
      annualPrice: 470,
      features: [
        "Access to 50+ lenders",
        "Basic deal management",
        "Standard support",
        "Deal submission",
        "Basic commission tracking"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for established brokers seeking growth",
      monthlyPrice: 99,
      annualPrice: 950,
      features: [
        "Access to 100+ lenders",
        "Advanced deal management",
        "Priority support",
        "Unlimited deal submissions",
        "Full commission tracking",
        "Analytics dashboard",
        "Custom branding"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For broker teams and large-scale operations",
      monthlyPrice: 249,
      annualPrice: 2390,
      features: [
        "Access to all lenders",
        "Team collaboration",
        "Dedicated account manager",
        "Unlimited everything",
        "Advanced analytics",
        "API access",
        "White labeling",
        "Custom integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ]
  
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-20"
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
              Pricing Plans
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
            Simple, Transparent Pricing
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the plan that fits your business needs. All plans include a small commission fee on successful deals.
          </motion.p>
          
          <motion.div 
            className="mt-10 inline-flex items-center p-1.5 bg-gradient-to-r from-stone-200/80 to-stone-100/80 backdrop-blur-sm rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button 
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-black/70 hover:text-black'
              }`}
              onClick={() => setBillingCycle('monthly')}
              whileHover={billingCycle !== 'monthly' ? { backgroundColor: "rgba(255,255,255,0.5)" } : {}}
              whileTap={{ scale: 0.98 }}
              layout
            >
              Monthly Billing
            </motion.button>
            <motion.button 
              className={`px-8 py-3 rounded-lg font-medium text-sm transition-all ${
                billingCycle === 'annually' 
                  ? 'bg-white text-black shadow-lg' 
                  : 'text-black/70 hover:text-black'
              }`}
              onClick={() => setBillingCycle('annually')}
              whileHover={billingCycle !== 'annually' ? { backgroundColor: "rgba(255,255,255,0.5)" } : {}}
              whileTap={{ scale: 0.98 }}
              layout
            >
              <span className="flex items-center gap-2">
                Annual Billing
                <motion.span 
                  className="bg-gradient-to-r from-black to-stone-800 text-white text-xs py-1 px-2.5 rounded-full flex items-center gap-1"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Save 20%
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
                  </svg>
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`
                bg-white rounded-2xl overflow-hidden border border-stone-200
                ${plan.popular ? 'md:scale-105 shadow-xl relative z-10' : 'shadow-lg'}
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300, damping: 10 } }}
            >
              {plan.popular && (
                <div className="bg-black text-white text-xs font-semibold text-center py-2">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">{plan.name}</h3>
                <p className="text-stone-600 mb-6 h-12">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold">
                    £{billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-stone-600 ml-2">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                  
                  {billingCycle === 'annually' && (
                    <div className="text-sm text-green-600 mt-2">
                      Save £{Math.round(plan.monthlyPrice * 12 - plan.annualPrice)} annually
                    </div>
                  )}
                </div>
                
                <motion.button 
                  className={`
                    w-full py-3 rounded-lg font-semibold mb-8 transition-all
                    ${plan.popular 
                      ? 'bg-black text-white hover:bg-black/90' 
                      : 'border-2 border-black text-black hover:bg-black/5'
                    }
                  `}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.cta}
                </motion.button>
                
                <div className="space-y-3">
                  <div className="font-medium text-sm text-stone-600 uppercase tracking-wider">
                    Plan Includes:
                  </div>
                  {plan.features.map((feature, i) => (
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
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-stone-100 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row md:items-center gap-8 justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="md:max-w-xl">
            <h3 className="text-2xl font-bold text-black mb-4">Need a custom solution?</h3>
            <p className="text-black/70 mb-0">
              We offer tailored plans for larger broker teams with specific requirements.
              Our enterprise solutions can be customized to meet your exact needs.
            </p>
          </div>
          <motion.button 
            className="bg-black text-white py-3 px-8 rounded-lg font-semibold whitespace-nowrap self-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Sales
          </motion.button>
        </motion.div>
        
        <div className="mt-16 text-center text-stone-500 text-sm">
          All plans include a 30-day free trial. No credit card required.
        </div>
      </div>
    </section>
  )
}

export default Pricing
