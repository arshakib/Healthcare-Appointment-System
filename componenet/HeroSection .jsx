"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const floatingAnimation = {
    y: ["-5%", "5%"],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 0.9, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const shimmerAnimation = {
    x: [-100, 100],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      x: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
      opacity: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative bg-[#033137] text-white overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#f9be00] mix-blend-multiply filter blur-xl"
          animate={pulseAnimation}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#1cb289] mix-blend-multiply filter blur-xl"
          animate={pulseAnimation}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/3 w-80 h-20 bg-white opacity-5 rotate-45 rounded-full"
          animate={shimmerAnimation}
        ></motion.div>
      </motion.div>

      <div className="container mx-auto px-6 py-24 md:py-32 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              variants={itemVariants}
            >
              <motion.span
                className="text-[#f9be00]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                AI-Powered
              </motion.span>{" "}
              Healthcare
              <br />
              At Your Fingertips
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#1cb289] mb-8 max-w-lg"
              variants={itemVariants}
            >
              Book appointments, get symptom analysis, and receive personalized
              care recommendations - all powered by artificial intelligence.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                className="bg-[#1cb289] text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-[#1d7261]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#1cb289] hover:border-[#f9be00] text-white"
                whileHover={{ borderColor: "#f9be00" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                How It Works
              </motion.button>
            </motion.div>

            <motion.div
              className="mt-10 flex items-center gap-4"
              variants={itemVariants}
            >
              <div className="flex -space-x-4">
                {[1, 2, 3].map((item) => (
                  <motion.img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item + 20}.jpg`}
                    alt="Happy patient"
                    className="w-12 h-12 rounded-full border-2 border-[#1d7261]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + item * 0.1 }}
                  />
                ))}
              </div>
              <div>
                <motion.div
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.svg
                      key={star}
                      className="w-5 h-5 text-[#f9be00]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + star * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
                <motion.p
                  className="text-[#1cb289] mt-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  Trusted by 5,000+ patients
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Illustration */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
            animate={floatingAnimation}
          >
            <motion.div
              className="relative bg-[#1d7261] rounded-2xl p-2 shadow-2xl"
              initial={{ rotate: 0 }}
              animate={{ rotate: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              <motion.div
                className="bg-white rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Mockup of your appointment interface */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <motion.h3
                      className="text-[#033137] font-bold text-xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      AI Symptom Checker
                    </motion.h3>
                    <motion.div
                      className="w-10 h-10 rounded-full bg-[#1cb289] flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.8,
                      }}
                      whileHover={{
                        rotate: 180,
                        backgroundColor: "#f9be00",
                        transition: { duration: 0.3 },
                      }}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <motion.div
                      className="bg-[#f9be00]/10 p-4 rounded-lg border-l-4 border-[#f9be00]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                    >
                      <p className="text-sm text-[#033137]">
                        "I have headache and fever for 2 days"
                      </p>
                    </motion.div>

                    <motion.div
                      className="bg-[#1d7261]/10 p-4 rounded-lg border-l-4 border-[#1d7261]"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      <p className="text-sm text-[#033137] font-medium">
                        Possible conditions:
                      </p>
                      <ul className="list-disc list-inside text-sm text-[#033137] mt-2 pl-2 space-y-1">
                        <motion.li
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 1.3 }}
                        >
                          Common cold (65%)
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 1.4 }}
                        >
                          Influenza (23%)
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 1.5 }}
                        >
                          Sinusitis (12%)
                        </motion.li>
                      </ul>
                    </motion.div>

                    <motion.button
                      className="w-full bg-[#1cb289] text-white py-3 rounded-lg font-medium mt-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      whileHover={{
                        scale: 1.03,
                        backgroundColor: "#1d7261",
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Book Doctor Appointment
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#f9be00] opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#1cb289] opacity-20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
