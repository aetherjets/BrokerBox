"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-white to-stone-50 py-24 px-4 md:py-32 overflow-hidden relative">
      <motion.div 
        className="absolute inset-0 -z-10 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              The Only Approved Platform for
              <motion.span 
                className="block text-stone-600 bg-clip-text bg-gradient-to-r from-stone-700 to-stone-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                100+ UK Lenders
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-black/70 mb-10 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              Streamline your broker operations with our clean, efficient platform. 
              Manage and submit client funding deals seamlessly while we handle the complexity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.button 
                className="bg-black text-white px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Start Your Free Trial</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-stone-900 to-black"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </motion.button>
              
              <motion.button 
                className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10">Schedule Demo</span>
                <motion.div
                  className="absolute inset-0 bg-black/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/50"
                  initial={{ width: "0%", left: "50%" }}
                  whileHover={{ width: "90%", left: "5%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="mt-10 flex items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-stone-300"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + i * 0.1, duration: 0.3 }}
                  />
                ))}
              </div>
              <motion.span 
                className="text-sm text-stone-600"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.3 }}
              >
                Join <b>1,200+</b> brokers already on the platform
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="relative z-10 hidden md:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-tr from-black/5 to-transparent rounded-2xl blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              <motion.div
                className="bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-100 relative"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-12 bg-stone-50 border-b border-stone-100 flex items-center px-4">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <img 
                  src="https://placehold.co/600x400/f8f8f8/e2e2e2.png?text=Broker+Box+Dashboard" 
                  alt="Broker Box Dashboard" 
                  className="w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-10 -right-10 w-48 h-48 bg-stone-100 rounded-xl shadow-lg flex items-center justify-center p-6 text-center"
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 300, delay: 0.9 }}
              >
                <div>
                  <div className="font-bold text-4xl text-black mb-1">£10M+</div>
                  <div className="text-sm text-stone-600">Deals processed in the last quarter</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stone-50 to-transparent -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </section>
  )
}
