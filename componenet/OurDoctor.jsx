"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight, Calendar, Mail, Phone } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OurDoctor() {
  const [allDoctorData, setAllDoctorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/doctordata");
        setAllDoctorData(res.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-white to-green-50 py-24">
      {/* Background Design Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#1cb289] opacity-5"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-[#f9be00] opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#1d7261] opacity-5"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
        {/* Heading Section with Animation */}
        <div className="mb-16 text-center">
          <div className="inline-block mb-2">
            <span className="relative inline-block">
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#f9be00]"></span>
              <h2 className="text-3xl font-bold text-[#033137]">
                Our Specialist Doctors
              </h2>
            </span>
          </div>
          <p className="text-[#1d7261] mt-4 max-w-2xl mx-auto">
            Dedicated professionals providing exceptional healthcare with
            expertise and compassion
          </p>
        </div>

        {/* Doctor Slider Section */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin w-12 h-12 border-4 border-[#1cb289] border-t-transparent rounded-full"></div>
          </div>
        ) : (
          <div className="relative px-10">
            {/* Custom Navigation Buttons */}
            <button
              id="prevBtn"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-[#033137] border border-gray-100 hover:bg-[#033137] hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              id="nextBtn"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg text-[#033137] border border-gray-100 hover:bg-[#033137] hover:text-white transition-all duration-300"
            >
              <ChevronRight size={20} />
            </button>

            {/* Swiper Component */}
            <Swiper
              modules={[Autoplay, EffectCoverflow]}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              spaceBetween={30}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              onSwiper={(swiper) => {
                document
                  .getElementById("prevBtn")
                  .addEventListener("click", () => swiper.slidePrev());
                document
                  .getElementById("nextBtn")
                  .addEventListener("click", () => swiper.slideNext());
              }}
            >
              {allDoctorData?.map((doctor, index) => (
                <SwiperSlide key={index}>
                  <Link href={`/allDoctor/${doctor?._id}`}>
                    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
                      {/* Colored Header Banner */}
                      <div className="h-6 bg-gradient-to-r from-[#033137] to-[#1d7261]"></div>

                      {/* Doctor Content */}
                      <div className="p-6 pb-8 relative">
                        {/* Profile Image with Ring Animation */}
                        <div className="relative mx-auto mb-4 w-32 h-32">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1cb289] to-[#1d7261] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute inset-0.5 rounded-full bg-white"></div>
                          {doctor?.profilePhoto && (
                            <Image
                              width={120}
                              height={120}
                              src={doctor?.profilePhoto}
                              alt={`Dr. ${doctor?.fullName}`}
                              unoptimized
                              className="mx-auto w-28 h-28 object-cover rounded-full relative z-10 group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute -right-2 bottom-2 w-8 h-8 bg-[#f9be00] rounded-full border-2 border-white shadow-md flex items-center justify-center text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <Calendar size={14} />
                          </div>
                        </div>

                        {/* Doctor Information */}
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-[#033137] group-hover:text-[#1cb289] transition-colors duration-300">
                            {doctor?.fullName}
                          </h3>
                          <div className="h-0.5 w-16 bg-[#f9be00] mx-auto my-2 transform origin-left group-hover:scale-x-150 transition-transform duration-500"></div>
                          <p className="text-sm font-medium text-[#1d7261]">
                            {doctor?.specialty}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {doctor?.medicalDegree}
                          </p>
                          <p className="text-xs text-gray-600 mt-3 flex items-center justify-center gap-1">
                            <span className="text-[#1cb289]">
                              <Mail size={12} />
                            </span>
                            {doctor?.currentHospital}
                          </p>
                        </div>

                        {/* Hover Indicator */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#f9be00] to-[#1cb289] group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/allDoctor">
            <button className="px-8 py-3 bg-[#033137] text-white rounded-full hover:bg-[#1cb289] transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg flex items-center mx-auto gap-2">
              View All Doctors
              <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
