export default function AboutUs() {
  return (
    <>
      {/* First Section - About Us */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            <div>
              <h2 className="text-4xl font-bold text-[#033137] mb-4">
                AI-Powered
                <br />
                <span className="text-[40px] text-[#1d7261]">Healthcare Solutions</span>
              </h2>

              <div className="space-y-6 mt-8">
                {[
                  "Advanced AI Diagnostic Support",
                  "24/7 Intelligent Health Monitoring",
                  "Personalized Treatment Plans",
                  "Secure Medical Data Analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg 
                      className="flex-shrink-0 h-6 w-6 text-[#1cb289] mr-4"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-[#033137] text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/about-us-img-1.jpg" alt="" />
            </div>
          </div>
  
          <div className="border-t border-[#1d7261]/20 my-12"></div>
  
          <div className="text-center">
            <a 
              href="#"
              className="inline-flex items-center text-[#1cb289] hover:text-[#1d7261] text-lg font-medium"
            >
              Learn More
              <svg 
                className="ml-2 h-5 w-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                ),
                title: "Cardiac Clinic",
                description: "AI-powered cardiac monitoring and diagnosis for comprehensive heart health assessment"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2M7 7h10" />
                  </svg>
                ),
                title: "Emergency Clinic",
                description: "24/7 emergency response with AI-assisted triage and rapid diagnostic capabilities"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Precise Diagnosis",
                description: "Advanced AI algorithms ensuring accurate and rapid diagnostic results"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Primary Care",
                description: "Comprehensive primary healthcare with AI-enhanced patient monitoring"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Vascular Surgery",
                description: "State-of-the-art vascular procedures supported by AI imaging technology"
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-[#1cb289]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                title: "General Surgery",
                description: "Advanced surgical procedures with AI-assisted planning and precision"
              },
            ].map((service, index) => (
              <div key={index} className="p-6 hover:bg-[#033137]/5 rounded-lg transition-colors">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#1cb289]" {...service.icon.props} />
                </div>
                <h3 className="text-xl font-semibold text-[#033137] mb-2">{service.title}</h3>
                <p className="text-[#1d7261]">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#033137] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "22", label: "Health Sections" },
              { number: "146", label: "Different Services" },
              { number: "388", label: "Blood Donations" },
              { number: "1280", label: "Satisfied Patients" },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl font-bold mb-2 text-[#f9be00]">{stat.number}</div>
                <div className="text-lg text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
       <div className="max-w-7xl mx-auto">
         <div className="text-center mb-12">
           <h2 className="text-3xl font-bold text-[#033137] mb-4">Our Medical Team</h2>
           <p className="text-lg text-[#1d7261]">Expert healthcare professionals combining AI with medical excellence</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             {
               name: "Angela Adams",
               specialty: "Cardiac Surgery",
               image: "/team/doctor1.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                 </svg>
               )
             },
             {
               name: "Jordan Kelley",
               specialty: "Cardiology",
               image: "https://i.ibb.co.com/8LzCCpGB/481164461-1975401046293487-1949196131765593662-n.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                 </svg>
               )
             },
             {
               name: "Nicole Dixon",
               specialty: "Gynecology",
               image: "/team/doctor3.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                 </svg>
               )
             },
             {
               name: "Steven Elliott",
               specialty: "Dietetics",
               image: "/team/doctor4.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                 </svg>
               )
             },
             {
               name: "Rachel Chen",
               specialty: "Neurology",
               image: "/team/doctor5.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                 </svg>
               )
             },
             {
               name: "Marcus Johnson",
               specialty: "Orthopedics",
               image: "/team/doctor6.jpg",
               icon: (
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                 </svg>
               )
             }
           ].map((doctor, index) => (
             <div key={index} className="text-center mb-12">
               <div className="relative inline-block">
                 {/* Circular Image Container */}
                 <div className="w-64 h-64 mx-auto rounded-full overflow-hidden relative">
                   <img
                     src={doctor.image}
                     alt={doctor.name}
                     className="w-full h-full object-cover"
                   />
                 </div>
                 {/* Icon Circle */}
                 <div className="absolute top-4 right-4 bg-[#1cb289] p-3 rounded-full text-white">
                   {doctor.icon}
                 </div>
               </div>

               <h3 className="text-2xl font-semibold text-[#033137] mt-6 mb-2">
                 {doctor.name}
               </h3>
               <p className="text-[#1cb289] font-medium mb-4">
                 {doctor.specialty}
               </p>
               <p className="text-[#1d7261] mb-6">
                 Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis
               </p>

               {/* Social Media Links */}
               <div className="flex justify-center space-x-4">
                 <a href="#" className="text-[#1d7261]/60 hover:text-[#1cb289]">
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-[#1d7261]/60 hover:text-[#1cb289]">
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-[#1d7261]/60 hover:text-[#1cb289]">
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                   </svg>
                 </a>
                 <a href="#" className="text-[#1d7261]/60 hover:text-[#1cb289]">
                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                   </svg>
                 </a>
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>

    </>
  );
}


