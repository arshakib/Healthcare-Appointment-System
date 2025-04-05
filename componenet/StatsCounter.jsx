"use client";
import { useEffect, useState, useRef } from "react";
import {
  FaUserInjured,
  FaUserMd,
  FaHospital,
  FaPhoneAlt,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function EnhancedStatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const [counters, setCounters] = useState([
    {
      value: 0,
      target: 10000,
      text: "Satisfied Patients",
      icon: <FaUserInjured className="text-3xl" />,
      color: "#1cb289",
    },
    {
      value: 0,
      target: 500,
      text: "Expert Doctors",
      icon: <FaUserMd className="text-3xl" />,
      color: "#1d7261",
    },
    {
      value: 0,
      target: 200,
      text: "Hospital Partners",
      icon: <FaHospital className="text-3xl" />,
      color: "#033137",
    },
    {
      value: 0,
      target: 24,
      text: "Emergency Support",
      suffix: "/7",
      icon: <FaPhoneAlt className="text-3xl" />,
      color: "#f9be00",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  // Observer for triggering animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500;
    const increment = (target, index) => {
      const step = target / (duration / 16);
      const updateCounter = () => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index].value < target) {
            newCounters[index].value = Math.min(
              newCounters[index].value + step,
              target
            );
          }
          return newCounters;
        });
      };
      const timer = setInterval(updateCounter, 16);
      return () => clearInterval(timer);
    };

    counters.forEach((counter, index) => {
      increment(counter.target, index);
    });
  }, [isVisible]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-[#033137]/5 to-[#1cb289]/5"
    >
      <div className="w-11/12 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    animate={pulseAnimation}
                    style={{ color: counter.color }}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 group-hover:bg-opacity-70 transition-all"
                  >
                    {counter.icon}
                  </motion.div>
                  <div
                    className="w-2 h-12 rounded-full"
                    style={{ backgroundColor: counter.color, opacity: 0.7 }}
                  ></div>
                </div>

                <h3
                  className="text-4xl font-bold mb-2 flex items-end"
                  style={{ color: counter.color }}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {Math.floor(counter.value).toLocaleString()}
                  </motion.span>
                  {counter.suffix && (
                    <span className="text-2xl ml-1">{counter.suffix}</span>
                  )}
                  {counter.text !== "Emergency Support" && (
                    <span className="text-2xl">+</span>
                  )}
                </h3>

                <p className="text-lg text-gray-600 font-medium">
                  {counter.text}
                </p>

                <div className="mt-4 h-1 rounded-full bg-gray-100 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ backgroundColor: counter.color }}
                    initial={{ width: "0%" }}
                    animate={isVisible ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 flex flex-col items-center"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#033137] mb-4">
              Discover Our Advanced Healthcare Solutions
            </h3>
            <p className="text-gray-600">
              Join our growing network of healthcare providers and patients
              experiencing the future of medical care.
            </p>
          </div>

          <motion.button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-[#1d7261] to-[#1cb289] text-white font-semibold py-3 px-10 rounded-xl shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 15px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn About Our Services
          </motion.button>
        </motion.div>

        {/* Enhanced Modal */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#033137] to-[#1d7261] p-6 flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-white">
                    Our Healthcare Network
                  </h3>
                  <motion.button
                    onClick={() => setShowModal(false)}
                    className="text-white rounded-full p-1 hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </div>

                <div className="p-6">
                  <ul className="space-y-4">
                    {counters.map((counter, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div
                          className="flex-shrink-0"
                          style={{ color: counter.color }}
                        >
                          {counter.icon}
                        </div>
                        <div>
                          <span
                            className="font-semibold"
                            style={{ color: counter.color }}
                          >
                            {Math.floor(counter.target).toLocaleString()}
                            {counter.suffix && counter.suffix}
                            {counter.text !== "Emergency Support" && "+"}
                          </span>
                          <p className="text-gray-700">{counter.text}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 mb-4">
                      Our network continues to grow, bringing advanced
                      healthcare solutions to more communities each month.
                    </p>

                    <div className="flex gap-3">
                      <motion.button
                        onClick={() => setShowModal(false)}
                        className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Close
                      </motion.button>

                      <motion.button
                        className="flex-1 bg-gradient-to-r from-[#1d7261] to-[#1cb289] text-white py-2 px-4 rounded-lg"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Contact Us
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
