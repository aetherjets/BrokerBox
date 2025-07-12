"use client"
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';

export default function CTA() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-black to-stone-900 text-white py-24 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
        animate={{ 
          x: [50, -20, 50],
          y: [20, 50, 20],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"
        animate={{ 
          x: [-20, 30, -20],
          y: [30, 0, 30],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-block mb-6"
        >
          <span className="bg-white/10 backdrop-blur-md text-white text-sm font-medium px-4 py-1.5 rounded-full">
            Start Today
          </span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300" style={{ WebkitBackgroundClip: "text" }}>Transform</span> Your Business?
        </motion.h2>
        
        <motion.p 
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Join the only approved platform working with 100+ alternative lenders. 
          Start managing your deals more efficiently today.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.button 
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => router.push('/sign-in')}
          >
            <span className="relative z-10">Get Started Free</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-white to-stone-200"
              initial={{ opacity: 0, x: "-100%" }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div 
              className="absolute -bottom-1 left-0 right-0 h-1 bg-black/50"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">Contact Sales</span>
            <motion.div 
              className="absolute inset-0 bg-white/10"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute inset-0 bg-white/5"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 items-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {["No setup fees", "Cancel anytime", "30-day free trial"].map((item, i) => (
            <motion.div 
              key={i} 
              className="flex items-center text-white/70"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
            >
              <motion.svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                className="mr-2 text-green-400"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + (i * 0.1), type: "spring" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </motion.svg>
              <span className="text-sm">{item}</span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="pt-10 flex flex-col md:flex-row justify-center items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-3">
              {[1, 2, 3, 4].map((i) => (
                <motion.div 
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-black bg-stone-300"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                />
              ))}
            </div>
            <div>
              <div className="text-sm font-medium">Join 1,200+ brokers</div>
              <div className="text-xs text-white/60">already on the platform</div>
            </div>
          </div>
          
          <div className="h-10 w-px bg-white/20 hidden md:block"></div>
          
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-3">4.9/5</div>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + (i * 0.1) }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <div className="text-xs text-white/60">Customer satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
