"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "platform", name: "Platform" },
    { id: "billing", name: "Billing" },
    { id: "support", name: "Support" }
  ]
  
  const faqItems = [
    {
      id: "item-1",
      question: "What is BrokerBox?",
      answer: "BrokerBox is a comprehensive platform designed to streamline operations for brokers, providing tools for client management, transaction processing, and more.",
      category: "platform"
    },
    {
      id: "item-2",
      question: "How do I get started?",
      answer: "You can get started by signing up on our website and following the onboarding process to set up your account.",
      category: "platform"
    },
    {
      id: "item-3",
      question: "Is there a mobile app available?",
      answer: "Yes, we offer a mobile app for both iOS and Android devices, allowing you to manage your brokerage on the go.",
      category: "platform"
    },
    {
      id: "item-4",
      question: "What support options are available?",
      answer: "We provide 24/7 customer support via email, phone, and live chat. Additionally, our help center has a wealth of resources.",
      category: "support"
    },
    {
      id: "item-5",
      question: "How secure is my data with BrokerBox?",
      answer: "We employ bank-level encryption and security measures to ensure your data is completely secure. All information is stored in compliance with industry standards and regulations.",
      category: "platform"
    },
    {
      id: "item-6",
      question: "Can I integrate BrokerBox with other tools?",
      answer: "Yes, BrokerBox offers seamless integration with many popular CRM systems, accounting software, and other business tools you may already be using.",
      category: "platform"
    },
    {
      id: "item-7",
      question: "How is pricing structured?",
      answer: "We offer tiered pricing based on your needs, with monthly and annual billing options. Each tier includes different features and capabilities to match your business requirements.",
      category: "billing"
    },
    {
      id: "item-8",
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 30-day free trial with full access to the platform's features so you can experience the benefits before committing.",
      category: "billing"
    }
  ]
  
  const filteredFAQs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory)

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
                {filteredFAQs.map((item, index) => (
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

export default FAQ
