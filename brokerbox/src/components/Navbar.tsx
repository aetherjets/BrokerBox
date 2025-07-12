"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Features", scrollTo: "features" },
    { name: "How It Works", scrollTo: "how-it-works" },
    { name: "Pricing", scrollTo: "pricing" },
    { name: "FAQ's", scrollTo: "faq" },
    { name: "Testimonial", scrollTo: "testimonial" },
    { name: "Contact", scrollTo: "contact-form" },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: [0, -1, 1, 0],
      transition: { duration: 0.3 },
    },
  };

  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (index: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const mobileItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (index: any) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: ["easeOut"] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-2xl border-b border-stone-200/30"
          : "bg-white/70 backdrop-blur-lg border-b border-stone-200/20"
      }`}
      style={{
        background: isScrolled
          ? "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,250,249,0.9) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(250,250,249,0.8) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <motion.div
              className="text-2xl font-bold text-black relative"
              whileHover={{
                background: "linear-gradient(45deg, #000000, #525252)",
                backgroundClip: "text",
                color: "transparent",
              }}
              style={{
                WebkitBackgroundClip: "text",
              }}
            >
              Broker
              <motion.span
                className="text-stone-600"
                whileHover={{ color: "#525252" }}
                transition={{ duration: 0.3 }}
              >
                Box
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-black to-stone-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                className="relative px-4 py-2 text-black font-medium group rounded-lg overflow-hidden cursor-pointer"
                variants={{
                  initial: { opacity: 1 },
                  hover: { opacity: 1 },
                }}
                whileHover="hover"
                initial="initial"
                onClick={() => scrollToSection(link.scrollTo)}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div
                  className="absolute bottom-0 left-1/2 h-0.5 bg-black z-0"
                  variants={{
                    initial: { width: 0, x: "-50%" },
                    hover: { width: "80%", x: "-50%" },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-4 py-2 text-black font-medium relative group cursor-pointer"
              onClick={() => router.push('/sign-in')}
            >
              <span className="relative z-10">Sign In</span>
              <motion.div
                className="absolute bottom-0 left-1/2 h-0.5 bg-black"
                initial={{ width: 0, x: "-50%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-black text-white px-6 py-2.5 rounded-lg font-medium relative overflow-hidden group cursor-pointer"
            >
              <motion.span className="relative z-10">Get Started</motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-stone-800 to-black"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                style={{ borderRadius: "inherit" }}
              />
              <motion.div
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-black focus:outline-none"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current"
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 8 : 2,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current top-3"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute block h-0.5 w-6 bg-current"
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? 8 : 14,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden"
            >
              <motion.div
                className="border-t border-stone-200/50 bg-white/95 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="px-2 pt-4 pb-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      variants={mobileItemVariants}
                      initial="closed"
                      animate="open"
                      custom={index}
                      whileHover={{
                        x: 4,
                        backgroundColor: "rgba(245,245,244,0.5)",
                      }}
                      className="block px-4 py-3 text-black font-medium rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                  <motion.div
                    className="px-4 py-2 space-y-3"
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    custom={navLinks.length}
                  >
                    <motion.button
                      whileHover={{
                        x: 4,
                        backgroundColor: "rgba(245,245,244,0.5)",
                      }}
                      className="block w-full text-left px-4 py-3 text-black font-medium rounded-lg transition-colors"
                    >
                      Sign In
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full bg-black text-white px-4 py-3 rounded-lg font-medium relative overflow-hidden"
                    >
                      <span className="relative z-10">Get Started</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-stone-800 to-black"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
