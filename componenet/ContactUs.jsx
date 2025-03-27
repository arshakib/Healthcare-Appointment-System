import React from 'react'

export default function ContactUs() {
  return (
    <div className="w-full">
      <div className="bg-teal-400 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <div className="text-sm">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-500">New York</h2>
              <p className="text-gray-600">198 West 21th Street, Suite 721</p>
              <p className="text-gray-600">New York NY 10010</p>
              <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
              <p className="text-gray-600">Phone: +(880) 101 8990 566</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-500">Amsterdam</h2>
              <p className="text-gray-600">1314 Fairmont Avenue, Suite 54</p>
              <p className="text-gray-600">Amsterdam 64723</p>
              <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
              <p className="text-gray-600">Phone: +(880) 101 8990 567</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-500">London</h2>
              <p className="text-gray-600">Green Hill Road, Suite 195</p>
              <p className="text-gray-600">London 72847</p>
              <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
              <p className="text-gray-600">Phone: +(880) 101 8990 568</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-blue-500">San Francisco</h2>
              <p className="text-gray-600">2566 Jim Rosa Lane, Suite 139</p>
              <p className="text-gray-600">San Francisco 94108</p>
              <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
              <p className="text-gray-600">Phone: +(880) 101 8990 569</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors duration-300 flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
