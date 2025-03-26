import React from "react";

const Screen = () => {
  return (
    <div className="w-10/12 mx-auto mt-16 px-4 md:px-6">
      <div className="border-2 border-[#1d7261] rounded-xl shadow-lg transition-all hover:border-[#f9be00] focus-within:border-[#f9be00]">
        {/* Window Header Bar */}
        <div className="bg-[#033137] px-6 py-3 rounded-t-lg flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#f9be00]"></div>
            <div className="w-3 h-3 rounded-full bg-[#1cb289]"></div>
            <div className="w-3 h-3 rounded-full bg-[#1d7261]"></div>
          </div>
          <span className="ml-4 text-[#f9be00] font-medium">
            AI Symptom Analysis
          </span>
        </div>

        {/* Content Area */}
        <div className="bg-white min-h-[320px] p-8 rounded-b-xl">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h3 className="text-2xl font-semibold text-[#033137] mb-4">
              Start by entering your symptoms above
            </h3>
            <p className="text-[#1d7261] mb-6">
              Our AI will analyze your symptoms and suggest possible conditions
            </p>
            <div className="flex space-x-4">
              <div className="w-12 h-12 rounded-full bg-[#1cb289]/20 animate-pulse"></div>
              <div className="w-12 h-12 rounded-full bg-[#f9be00]/20 animate-pulse delay-100"></div>
              <div className="w-12 h-12 rounded-full bg-[#1d7261]/20 animate-pulse delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
