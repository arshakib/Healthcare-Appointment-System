import React from "react";

const DemoArea = () => {
  return (
    <div>
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
  );
};

export default DemoArea;
