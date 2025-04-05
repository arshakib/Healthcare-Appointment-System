"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaCalendarAlt, FaPhone, FaCommentDots, FaUserMd, FaUserInjured } from "react-icons/fa";

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How does AI medical suggestion work?",
            answer: (
                <div>
                    <p>1. Select your district and describe symptoms</p>
                    <p>2. Our AI analyzes and suggests possible conditions</p>
                    <p>3. Get recommended medicines and local specialists</p>
                    <button onClick={() => document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })} className="mt-3 flex items-center gap-2 bg-[#1d7261] text-white px-4 py-2 rounded-md hover:bg-[#145c4d] transition cursor-pointer">
                        <FaSearch /> Try AI Suggestion
                    </button>
                </div>
            ),
            icon: <FaSearch className="text-[#1d7261]" />
        },
        {
            question: "How to book doctor appointments?",
            answer: (
                <div>
                    <p>• Browse doctors by specialty/location</p>
                    <p>• Select available time slot</p>
                    <p>• Confirm with payment (if required)</p>
                    <Link href="/allDoctor">
                        <button className="mt-3 flex items-center gap-2 bg-[#1d7261] text-white px-4 py-2 rounded-md hover:bg-[#145c4d] transition cursor-pointer">
                            <FaCalendarAlt /> Book Now
                        </button>
                    </Link>
                </div>
            ),
            icon: <FaCalendarAlt className="text-[#1d7261]" />
        },
        {
            question: "Emergency support options",
            answer: (
                <div>
                    <p>Immediate contact methods:</p>
                    <p>• 24/7 Emergency Hotline: <strong>12345</strong></p>
                    <p>• Nearby hospital mapping</p>
                    <p>• First-aid chating guidance</p>
                    <button className="mt-3 flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition cursor-pointer">
                        <FaPhone /> Emergency Call
                    </button>
                </div>
            ),
            icon: <FaPhone className="text-red-600" />
        },
        {
            question: "Live chat with doctors",
            answer: (
                <div>
                    <p>Available features:</p>
                    <p>• Text/video consultation</p>
                    <p>• Prescription sharing</p>
                    <p>• Average response time: 8 minutes</p>
                    <Link href="/dashboard/chat">
                        <button className="mt-3 flex items-center gap-2 bg-[#1d7261] text-white px-4 py-2 rounded-md hover:bg-[#145c4d] transition cursor-pointer">
                            <FaCommentDots /> Start Chat
                        </button>
                    </Link>
                </div>
            ),
            icon: <FaCommentDots className="text-[#1d7261]" />
        },
        {
            question: "Doctor registration process",
            answer: (
                <div>
                    <p>Steps to join our network:</p>
                    <p>1. Submit qualification documents</p>
                    <p>2. Complete profile setup</p>
                    <p>3. Verification (48hr process)</p>
                    <Link href="/doctorForm">
                        <button className="mt-3 flex items-center gap-2 bg-[#1d7261] text-white px-4 py-2 rounded-md hover:bg-[#145c4d] transition cursor-pointer">
                            <FaUserMd /> Doctor Sign Up
                        </button>
                    </Link>
                </div>
            ),
            icon: <FaUserMd className="text-[#1d7261]" />
        },
        {
            question: "Patient registration",
            answer: (
                <div>
                    <p>Quick registration:</p>
                    <p>• Basic health profile creation</p>
                    <p>• Medical history upload</p>
                    <p>• Family member linking</p>
                    <Link href="/patients">
                        <button className="mt-3 flex items-center gap-2 bg-[#1d7261] text-white px-4 py-2 rounded-md hover:bg-[#145c4d] transition cursor-pointer">
                            <FaUserInjured /> Patient Sign Up
                        </button>
                    </Link>
                </div>
            ),
            icon: <FaUserInjured className="text-[#1d7261]" />
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold text-center text-[#1d7261] mb-2">Frequently Asked Questions</h2>
                <p className="text-center text-gray-600 mb-12">Find quick answers to common queries</p>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
                        >
                            <button
                                className={`flex items-center justify-between w-full p-5 text-left hover:bg-gray-50 transition ${activeIndex === index ? 'bg-gray-50' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-xl">
                                        {faq.icon}
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                                </div>
                                <svg
                                    className={`w-5 h-5 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div className={`px-5 pb-5 ${activeIndex === index ? 'block' : 'hidden'}`}>
                                <div className="pl-9 text-gray-600 space-y-2">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-10 text-center">
                    <p className="text-gray-600 mb-4">Didn't find your answer?</p>
                    <Link href="/contact">
                        <button className="bg-[#1d7261] hover:bg-[#145c4d] cursor-pointer text-white font-medium py-2 px-6 rounded-md transition">
                            Contact Support
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}