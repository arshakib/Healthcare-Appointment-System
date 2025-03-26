import React from "react";

const Search = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:w-10/12 mx-auto mt-16">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        {/* Symptoms Input */}
        <div className="w-full lg:w-1/2">
          <fieldset className="fieldset border-2 border-[#1d7261] rounded-xl p-2 transition-all focus-within:border-[#f9be00]">
            <legend className="fieldset-legend px-2 text-[#f9be00] text-sm font-medium">
              Enter your symptoms
            </legend>
            <input
              type="text"
              className="input w-full h-14 px-4 text-[#033137] bg-white rounded-lg focus:outline-none placeholder-[#1d7261]/50"
              placeholder="e.g. headache, fever, cough..."
            />
          </fieldset>
        </div>

        {/* Area Select */}
        <div className="w-full lg:w-1/2">
          <fieldset className="fieldset border-2 border-[#1d7261] rounded-xl p-2 transition-all focus-within:border-[#f9be00]">
            <legend className="fieldset-legend px-2 text-[#f9be00] text-sm font-medium">
              Select your Area
            </legend>
            <select className="select w-full h-14 px-4 text-[#033137] bg-white rounded-lg focus:outline-none appearance-none">
              <option disabled className="text-[#1d7261]/50">
                Choose your location
              </option>
              <option>Downtown</option>
              <option>Suburbs</option>
              <option>Rural Area</option>
            </select>
          </fieldset>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-10">
        <button className="btn bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white text-lg px-12 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-[#1cb289]/30">
          Search by symptoms
        </button>
      </div>
    </div>
  );
};

export default Search;
