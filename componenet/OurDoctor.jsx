"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OurDoctor() {
  const [allDoctorData, setAllDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/api/doctordata");
        setAllDoctorData(res.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();
  }, []);

  console.log(allDoctorData);

  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2 ">
          Our Specialist Doctors
        </h2>
        <p className="text-sm text-gray-500 text-center">Dedicated Professionals Providing Exceptional Healthcare</p>

      </div>
      <div className="w-full px-5 md:px-10 relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute left-0 top-[50%] transform -translate-y-1/2 z-10">
          <button id="prevBtn" className="p-1 text-[#1d7261] rounded-sm border border-[#1d7261] hover:bg-[#1d7261] hover:text-white">
            <ChevronLeft size={24} />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button id="nextBtn" className="p-1 text-[#1d7261] rounded-sm border border-[#1d7261] hover:bg-[#1d7261] hover:text-white">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Swiper Component */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onSwiper={(swiper) => {
            document.getElementById("prevBtn").addEventListener("click", () => swiper.slidePrev());
            document.getElementById("nextBtn").addEventListener("click", () => swiper.slideNext());
          }}
        >
          {allDoctorData?.map((doctor, index) => (
            <SwiperSlide key={index}>
              <Link href={`/allDoctor/${doctor?._id}`}>
                <div className="group border border-[#1d7261] p-5 rounded-md text-center bg-white shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out relative z-0 hover:z-10">
                  {doctor?.profilePhoto && (
                    <Image
                      width={40}
                      height={40}
                      src={doctor?.profilePhoto}
                      alt="profile photo"
                      unoptimized
                      className="mx-auto mb-4 w-40 h-40 object-cover rounded-full group-hover:ring-4 group-hover:ring-[#1d7261] transition-all duration-300"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-green-700 group-hover:text-[#1d7261] transition-colors duration-300">
                    {doctor?.fullName}
                  </h3>
                  <p className="text-sm text-gray-700">{doctor?.specialty} | {doctor?.medicalDegree}</p>
                  <p className="text-xs text-gray-500 mt-2">{doctor?.currentHospital}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}