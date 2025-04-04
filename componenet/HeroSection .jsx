"use client";
import { useSession } from "next-auth/react";
import React from "react";

const HeroSection = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section className="relative bg-[#033137] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#f9be00] mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#1cb289] mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#f9be00]">AI-Powered</span> Healthcare
              <br />
              At Your Fingertips
            </h1>

            <p className="text-lg md:text-xl text-[#1cb289] mb-8 max-w-lg">
              Book appointments, get symptom analysis, and receive personalized
              care recommendations - all powered by artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-transform">
                Get Started
              </button>
              <button className="btn-secondary px-8 py-4 text-lg font-semibold rounded-xl border-2 border-[#1cb289] hover:border-[#f9be00] transition-colors">
                How It Works
              </button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((item) => (
                  <img
                    key={item}
                    src={`https://randomuser.me/api/portraits/${
                      item % 2 === 0 ? "women" : "men"
                    }/${item + 20}.jpg`}
                    alt="Happy patient"
                    className="w-12 h-12 rounded-full border-2 border-[#1d7261]"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#f9be00]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#1cb289] mt-1">
                  Trusted by 5,000+ patients
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative bg-[#1d7261] rounded-2xl p-2 shadow-2xl transform rotate-1">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Mockup of your appointment interface */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-[#033137] font-bold text-xl">
                      AI Symptom Checker
                    </h3>
                    <div className="w-10 h-10 rounded-full bg-[#1cb289] flex items-center justify-center">
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
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#f9be00]/10 p-4 rounded-lg border-l-4 border-[#f9be00]">
                      <p className="text-sm text-[#033137]">
                        "I have headache and fever for 2 days"
                      </p>
                    </div>

                    <div className="bg-[#1d7261]/10 p-4 rounded-lg border-l-4 border-[#1d7261]">
                      <p className="text-sm text-[#033137] font-medium">
                        Possible conditions:
                      </p>
                      <ul className="list-disc list-inside text-sm text-[#033137] mt-2 pl-2 space-y-1">
                        <li>Common cold (65%)</li>
                        <li>Influenza (23%)</li>
                        <li>Sinusitis (12%)</li>
                      </ul>
                    </div>

                    <button className="w-full bg-[#1cb289] text-white py-3 rounded-lg font-medium mt-4">
                      Book Doctor Appointment
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#f9be00] opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#1cb289] opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
