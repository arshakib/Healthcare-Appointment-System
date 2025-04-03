"use client";
import { useEffect, useState } from "react";
import { FaUserInjured, FaUserMd, FaHospital, FaPhoneAlt } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function StatsCounter() {
    const [counters, setCounters] = useState([
        { value: 0, target: 10000, text: "Satisfied Patients", icon: <FaUserInjured className="text-3xl" /> },
        { value: 0, target: 500, text: "Expert Doctors", icon: <FaUserMd className="text-3xl" /> },
        { value: 0, target: 200, text: "Hospital Partners", icon: <FaHospital className="text-3xl" /> },
        { value: 0, target: 24, text: "Emergency Support", suffix: "/7", icon: <FaPhoneAlt className="text-3xl" /> }
    ]);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const duration = 2000;
        const increment = (target, index) => {
            const step = target / (duration / 16);
            const updateCounter = () => {
                setCounters(prev => {
                    const newCounters = [...prev];
                    if (newCounters[index].value < target) {
                        newCounters[index].value = Math.min(newCounters[index].value + step, target);
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
    }, []);

    return (
        <section className="py-12 bg-[#f7fafc]">
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {counters.map((counter, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300 border-l-4 border-[#1d7261]"
                        >
                            <div className="text-[#1d7261] mb-4 flex justify-center">
                                {counter.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">
                                {Math.floor(counter.value).toLocaleString()}
                                {counter.suffix && <span className="text-2xl">{counter.suffix}</span>}
                                {counter.text !== "Emergency Support" && <span className="text-2xl">+</span>}
                            </h3>
                            <p className="text-lg text-gray-600">{counter.text}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <button
                        onClick={() => setShowModal(true)}
                        className="bg-[#1d7261] hover:bg-[#145c4d] text-white font-semibold py-3 px-8 rounded-md transition duration-300 cursor-pointer"
                    >
                        Learn About Our Services
                    </button>
                </div>

                {/* Modal that appears on button click */}
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white border border-[#1d7261] rounded-lg p-6 max-w-md w-full">
                            <h3 className="text-2xl font-bold text-[#1d7261] mb-4">Our Healthcare Network</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li>• 10,000+ patients treated annually</li>
                                <li>• 500+ specialists across 15+ departments</li>
                                <li>• Partnered with 200+ hospitals nationwide</li>
                                <li>• 24/7 emergency telemedicine support</li>
                            </ul>
                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-6 bg-[#1d7261] cursor-pointer text-white py-2 px-6 rounded-md hover:bg-[#145c4d] transition"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}