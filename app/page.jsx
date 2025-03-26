import Footer from "@/componenet/Footer";
import HeroSection from "@/componenet/HeroSection ";
import Navber from "@/componenet/Navber";
import Search from "@/componenet/Search";
import Sreen from "@/componenet/Sreen";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <div className="w-10/12 mx-auto mt-3">
          <Navber />
        </div>
        <div className=" my-7">
          <HeroSection />
        </div>
        <div className="w-10/12 mx-auto">
          <Search></Search>
        </div>
        <div className="w-10/12 mx-auto">
          <Sreen></Sreen>
        </div>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default page;
