// import React from 'react'

// export default function ContactUs() {
//   return (
//     <div className="w-full">
//       <div className="bg-teal-400 text-white text-center py-16">
//         <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
//         <div className="text-sm">
//           <span>Home</span>
//           <span className="mx-2">/</span>
//           <span>Contact Us</span>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="space-y-4">
//               <h2 className="text-xl font-bold text-blue-500">New York</h2>
//               <p className="text-gray-600">198 West 21th Street, Suite 721</p>
//               <p className="text-gray-600">New York NY 10010</p>
//               <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
//               <p className="text-gray-600">Phone: +(880) 101 8990 566</p>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-xl font-bold text-blue-500">Amsterdam</h2>
//               <p className="text-gray-600">1314 Fairmont Avenue, Suite 54</p>
//               <p className="text-gray-600">Amsterdam 64723</p>
//               <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
//               <p className="text-gray-600">Phone: +(880) 101 8990 567</p>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-xl font-bold text-blue-500">London</h2>
//               <p className="text-gray-600">Green Hill Road, Suite 195</p>
//               <p className="text-gray-600">London 72847</p>
//               <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
//               <p className="text-gray-600">Phone: +(880) 101 8990 568</p>
//             </div>

//             <div className="space-y-4">
//               <h2 className="text-xl font-bold text-blue-500">San Francisco</h2>
//               <p className="text-gray-600">2566 Jim Rosa Lane, Suite 139</p>
//               <p className="text-gray-600">San Francisco 94108</p>
//               <p className="text-gray-600">mediclinic@qodeinteractive.com</p>
//               <p className="text-gray-600">Phone: +(880) 101 8990 569</p>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-1">
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Name*"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
//             />
//             <input
//               type="email"
//               placeholder="E-mail*"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
//             />
//             <textarea
//               placeholder="Message"
//               rows="6"
//               className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 text-black"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition-colors duration-300 flex items-center space-x-2"
//             >
//               <span>Contact Us</span>
//               <span className="text-xl">→</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }


import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPaperPlane, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function ContactUs() {
  const themeColor = "#1d7261"

  return (
    <div className="w-full">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-[#1d7261] to-[#2a8f7a] text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl opacity-90">We're here to help with AI-powered healthcare solutions</p>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1d7261]">Global Offices</h2>
            <p className="text-gray-600 text-lg">Connect with our international AI healthcare specialists</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                city: "New York",
                address: "198 West 21th Street, Suite 721",
                email: "aihealth@mediclinic.com",
                phone: "+1 (212) 555-0199",
                icon: <FaMapMarkerAlt className="text-[#1d7261] text-xl" />
              },
              {
                city: "Amsterdam",
                address: "1314 Fairmont Avenue, Suite 54",
                email: "nl.support@mediclinic.com",
                phone: "+31 20 555 0199",
                icon: <FaMapMarkerAlt className="text-[#1d7261] text-xl" />
              },
              {
                city: "London",
                address: "Green Hill Road, Suite 195",
                email: "uk.support@mediclinic.com",
                phone: "+44 20 5555 0199",
                icon: <FaMapMarkerAlt className="text-[#1d7261] text-xl" />
              },
              {
                city: "San Francisco",
                address: "2566 Jim Rosa Lane, Suite 139",
                email: "ca.support@mediclinic.com",
                phone: "+1 (415) 555-0199",
                icon: <FaMapMarkerAlt className="text-[#1d7261] text-xl" />
              }
            ].map((office, index) => (
              <div key={index} className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-[#1d7261]/10 rounded-lg mr-4">
                    {office.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>{office.address}</p>
                  <div className="flex items-center">
                    <FaPhone className="text-[#1d7261] mr-2" />
                    <a href={`tel:${office.phone}`} className="hover:text-[#1d7261] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="text-[#1d7261] mr-2" />
                    <a href={`mailto:${office.email}`} className="hover:text-[#1d7261] transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media */}
          <div className="pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Our AI Journey</h3>
            <div className="flex space-x-6">
              {[
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
                { icon: <FaInstagram />, link: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="text-2xl text-gray-600 hover:text-[#1d7261] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl lg:sticky lg:top-24">
          <h2 className="text-3xl font-bold text-[#1d7261] mb-8">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Full Name*</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1d7261] focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2">Email*</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1d7261] focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Message*</label>
              <textarea
                rows="6"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#1d7261] focus:border-transparent transition-all"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1d7261] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#16574a] transition-colors flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="text-lg" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-96 w-full bg-gray-100">
        <iframe
          title="Office Locations"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000867!2d-74.14448718304748!3d40.697631442234115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1716384246714!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}