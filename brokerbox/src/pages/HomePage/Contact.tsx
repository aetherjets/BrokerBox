"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    submitted: false,
    loading: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState(prev => ({ ...prev, loading: true }))
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        submitted: true, 
        loading: false,
        name: '',
        email: '',
        company: '',
        message: ''
      }))
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setFormState(prev => ({ ...prev, submitted: false }))
      }, 5000)
    }, 1500)
  }

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-stone-50 to-white"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-stone-50 opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-stone-50 opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-32"
          >
            <motion.span 
              className="inline-block bg-stone-100 text-black/70 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Get In Touch
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Start Your <span className="block">Success Journey</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-black/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Whether you have questions about our platform, pricing, or want to see a demo, our team is here to help you succeed.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-stone-100 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 10C20 14.4183 16.4183 18 12 18C10.5996 18 9.27909 17.6279 8.13736 16.9718L4 18L5.0282 13.8626C4.37214 12.7209 4 11.4004 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Chat with us</h3>
                  <p className="text-black/70 mb-2">Our support team is available 24/7</p>
                  <a href="#" className="text-black font-medium underline underline-offset-4 hover:text-stone-700 transition-colors">
                    Start a conversation
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-stone-100 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email us</h3>
                  <p className="text-black/70 mb-2">We'll get back to you within 24 hours</p>
                  <a href="mailto:hello@brokerbox.co.uk" className="text-black font-medium underline underline-offset-4 hover:text-stone-700 transition-colors">
                    hello@brokerbox.co.uk
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="bg-stone-100 p-3 rounded-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 3L14.5 21C14.4424 21.1156 14.3546 21.2127 14.2467 21.28C14.1387 21.3474 14.0154 21.3824 13.89 21.38C13.7659 21.3804 13.6444 21.3458 13.5379 21.2799C13.4313 21.214 13.344 21.1193 13.286 21.007L10 15.006L4 12C4 12 3.65 11.32 4 11C4.35 10.68 5 11 5 11L21 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visit us</h3>
                  <p className="text-black/70 mb-2">Come say hello at our office</p>
                  <address className="not-italic text-black">
                    123 Finance Street<br />
                    London, EC2A 1NT
                  </address>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white border border-stone-200 rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              {formState.submitted ? (
                <motion.div 
                  className="bg-green-50 text-green-800 p-6 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-12 h-12 text-green-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h4 className="text-xl font-semibold mb-2">Thank you!</h4>
                  <p>Your message has been sent successfully. We'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black/70 mb-1">
                        Full name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
                        Email address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm font-medium text-black/70 mb-1">
                      Company name
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-black/70 mb-1">
                      Message
                    </label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-stone-50 border border-stone-100 rounded-lg focus:ring-2 focus:ring-black focus:outline-none transition-all"
                      placeholder="Tell us about your needs..."
                      required
                    />
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full py-4 bg-black text-white rounded-lg font-semibold relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formState.loading}
                  >
                    {formState.loading ? (
                      <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : "Send Message"}
                  </motion.button>
                  
                  <div className="mt-4 text-center text-sm text-black/50">
                    By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
                  </div>
                </form>
              )}
            </div>
            
            <div className="mt-8 bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h4 className="font-semibold mb-2">Looking for customer support?</h4>
              <p className="text-black/70 mb-4">Existing customers can reach our support team directly through the platform's help center.</p>
              <a href="#" className="inline-flex items-center font-medium text-black">
                Go to Help Center
                <svg width="16" height="16" className="ml-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33337 8.00004H12.6667M12.6667 8.00004L8.00004 3.33337M12.6667 8.00004L8.00004 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
