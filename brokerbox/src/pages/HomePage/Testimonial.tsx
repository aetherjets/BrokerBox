"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Testimonial = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const router = useRouter();
  
  const testimonials = [
    {
      name: "James Wilson",
      role: "Senior Broker, Capital Finance",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Broker Box has completely transformed how I manage client deals. The platform's connection to over 100 alternative lenders has increased my funding success rate by 40%, and the commission tracking makes my financial reporting effortless.",
      stars: 5,
      metrics: {
        deals: "£25M+",
        success: "92%",
        time: "60%"
      }
    },
    {
      name: "Sarah Thompson",
      role: "Independent Mortgage Broker",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "As an independent broker, I was struggling to compete with larger firms until I found Broker Box. Now I have access to the same lender network as the big players, and my clients are impressed with how quickly I can secure funding options for them.",
      stars: 5,
      metrics: {
        deals: "£12M+",
        success: "88%",
        time: "55%"
      }
    },
    {
      name: "Michael Roberts",
      role: "Director, Roberts Financing Solutions",
      image: "https://randomuser.me/api/portraits/men/64.jpg",
      quote: "We've tried several broker platforms before, but none come close to Broker Box. The clean interface, responsive support team, and extensive lender network have made it our go-to solution. Our team's productivity has increased dramatically.",
      stars: 5,
      metrics: {
        deals: "£40M+",
        success: "94%",
        time: "70%"
      }
    }
  ]
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-stone-50 relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-stone-50/50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-stone-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-stone-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="text-black/60 font-medium uppercase tracking-widest text-sm block mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Success Stories
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Trusted by Brokers Nationwide
          </motion.h2>
          <motion.p 
            className="text-xl text-black/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            See how brokers are transforming their business with our platform
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Quote column */}
          <div className="md:col-span-3">
            <div className="relative h-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative"
                >
                  <div className="absolute -top-5 -left-5">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.83 10.83C16.67 15 14.17 19.17 14.17 25H20.83C20.83 21.67 21.67 20 25 20V10H14.17C14.17 10 14.17 10 14.17 10.83ZM35.83 10.83C31.67 15 29.17 19.17 29.17 25H35.83C35.83 21.67 36.67 20 40 20V10H29.17C29.17 10 29.17 10 29.17 10.83Z" fill="black" fillOpacity="0.1"/>
                    </svg>
                  </div>
                  
                  <div className="mb-8 flex">
                    {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  
                  <motion.blockquote 
                    className="text-xl md:text-2xl font-medium text-black mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[activeTestimonial].quote}"
                  </motion.blockquote>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-stone-50 shadow-lg">
                        <img 
                          src={testimonials[activeTestimonial].image} 
                          alt={testimonials[activeTestimonial].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{testimonials[activeTestimonial].name}</div>
                        <div className="text-black/60 text-sm">{testimonials[activeTestimonial].role}</div>
                      </div>
                    </div>
                    
                    <div className="hidden md:flex gap-3">
                      <button 
                        onClick={prevTestimonial} 
                        className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12.5 15L7.5 10L12.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button 
                        onClick={nextTestimonial} 
                        className="w-10 h-10 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 15L12.5 10L7.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          {/* Metrics column */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-stone-100"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-black/50 mb-1 font-medium">Total Deals Processed</div>
                <div className="text-4xl font-bold">{testimonials[activeTestimonial].metrics.deals}</div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-stone-100"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-black/50 mb-1 font-medium">Success Rate</div>
                <div className="text-4xl font-bold">{testimonials[activeTestimonial].metrics.success}</div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl p-6 shadow-lg border border-stone-100"
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="text-black/50 mb-1 font-medium">Time Saved</div>
                <div className="text-4xl font-bold">{testimonials[activeTestimonial].metrics.time}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Mobile navigation buttons */}
        <div className="flex justify-center mt-8 gap-4 md:hidden">
          <button 
            onClick={prevTestimonial} 
            className="w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={nextTestimonial} 
            className="w-12 h-12 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                index === activeTestimonial 
                  ? 'bg-black w-8' 
                  : 'bg-stone-300 hover:bg-stone-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-black/70 mb-6 max-w-2xl mx-auto">
            Join over 1,200+ brokers who are already enjoying the benefits of our platform.
            Start transforming your business today.
          </p>
          <motion.button
            className="bg-black text-white px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/sign-in')}
          >
            Get Started
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
