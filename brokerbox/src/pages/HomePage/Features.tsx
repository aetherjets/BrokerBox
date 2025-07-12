"use client"
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      title: "Streamlined Deal Management",
      description: "Manage all your client funding deals in one clean, efficient platform. Track progress, update information, and stay organized.",
      icon: "📋"
    },
    {
      title: "100+ Lender Network",
      description: "Access our exclusive network of over 100 alternative lenders. Find the right funding solution for every client.",
      icon: "🏦"
    },
    {
      title: "Automated Submissions",
      description: "Submit applications to multiple lenders simultaneously. Save time and increase your success rate.",
      icon: "⚡"
    },
    {
      title: "Commission Tracking",
      description: "Keep track of your earnings with transparent commission tracking. We take only a small fee from your commission.",
      icon: "💰"
    },
    {
      title: "Real-time Updates",
      description: "Get instant notifications on application status, lender responses, and deal progress.",
      icon: "🔔"
    },
    {
      title: "Secure & Compliant",
      description: "Bank-level security with full FCA compliance. Your client data is protected and secure.",
      icon: "🔒"
    }
  ]

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto">
            Our platform is designed specifically for brokers who want to focus on what matters most - growing their business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-br from-white to-stone-50 border border-stone-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-black to-stone-700 transform origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
              />
              
              <div className="flex items-start">
                <motion.div 
                  className="flex justify-center items-center w-16 h-16 rounded-lg bg-stone-100 text-4xl mb-6 mr-4 relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="relative z-10">{feature.icon}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-stone-200 to-stone-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-bold text-black mb-2 relative inline-block"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.title}
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-0.5 bg-black/30"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                    />
                  </motion.h3>
                  <p className="text-black/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L12 3M12 3H5M12 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.05 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto mt-16 pt-8 border-t border-stone-200/100 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        {/* <motion.button 
          className="px-8 py-4 bg-stone-100 text-black font-semibold rounded-lg hover:bg-stone-200 transition-colors relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">View All Features</span>
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-0 bg-stone-300"
            initial={{ height: 0 }}
            whileHover={{ height: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button> */}
      </motion.div>
    </section>
  )
}
