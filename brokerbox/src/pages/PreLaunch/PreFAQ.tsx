"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PreFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const categories = [
    { id: "all", name: "All Questions" },
  ]
  
  const faqItems = [
    {
      id: "item-1",
      question: "What is BrokerBox?",
      answer: "BrokerBox is a comprehensive platform designed to streamline operations for brokers, providing tools for client management, transaction processing, and more.",
    },
    {
      id: "item-2",
      question: "What is the founding broker program?",
      answer: "The founding broker program gives early supporters exclusive benefits including 12 months of full access from our official launch date, early beta access, input on new features, and priority onboarding. Founding brokers are limited to 50 spots only.",

    },
    {
      id: "item-3",
      question: "When will Broker Box officially launch?",
      answer: "Broker Box is scheduled to launch in Q2 2025. As a founding broker, you'll get early beta access before the official launch, giving you time to familiarize yourself with the platform.",

    },
    {
      id: "item-4",
      question: "What happens after I make the payment?",
      answer: "After payment, our team will review your application as part of our onboarding process. We'll contact you within 2 business days to begin your onboarding journey and provide beta access credentials.",

    },
    {
      id: "item-5",
      question: "What if I'm found to be ineligible?",
      answer: "Broker Box is specifically designed for finance brokers. If during our review process we determine you're not a genuine broker or don't meet our minimum criteria, we'll provide a full refund of your payment.",

    },
    {
      id: "item-6",
      question: "What are the minimum criteria to join?",
      answer: "To join Broker Box, you must be an active finance broker in the UK with appropriate FCA permissions (or working under a network with permissions), have a registered business, and comply with all relevant regulations.",
    },
    {
      id: "item-7",
      question: "What happens after the 12-month founding period?",
      answer: "After your 12-month founding period, you'll have the option to continue with a standard subscription at the then-current rate. As a founding member, you'll always receive preferential treatment and priority for new features.",
    },
  ]
  

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-stone-100/50 rounded-full filter blur-3xl opacity-70 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-stone-100/50 rounded-full filter blur-3xl opacity-70 transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="inline-block bg-stone-100 text-black/70 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Got Questions?
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Find quick answers to common questions about our platform and services
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-black text-white' 
                  : 'bg-white text-black hover:bg-stone-100 border border-stone-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-stone-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <AccordionItem value={item.id} className="border border-stone-200 rounded-lg overflow-hidden">
                      <AccordionTrigger className="px-5 py-4 hover:bg-stone-50 transition-colors">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 py-4 bg-stone-50/50">
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.answer}
                        </motion.div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center bg-gradient-to-r from-stone-100 to-white p-8 rounded-2xl shadow-lg border border-stone-100"
        >
          <h3 className="font-bold text-xl mb-3">Still have questions?</h3>
          <p className="text-stone-600 mb-6 max-w-lg mx-auto">
            Our support team is ready to help you with any questions or concerns you might have about our platform.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3.5 bg-black text-white rounded-lg font-medium hover:bg-black/90 transition-colors"
          >
            Contact Support
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default PreFAQ
