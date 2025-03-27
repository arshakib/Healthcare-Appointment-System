"use client"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const {data: session, status} = useSession();
  // console.log(session);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="bg-[#033137] border-b border-[#1d7261] sticky top-0 z-50 w-full">
      <div className="w-11/12 mx-auto text-white flex justify-between items-center py-3">
        {/* Left Side - Logo */}
        <div className="">
          <a className="text-xl text-[#f9be00] sm:block">MedScheduleAI</a>
        </div>

        {/* Center - Desktop Menu */}
        <div className=" hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/" className="hover:text-[#f9be00] rounded-lg">
                Home
              </Link>
            </li>
            <li>
              <a className="hover:text-[#f9be00] rounded-lg">Doctors</a>
            </li>
            <li>
              <Link href="/patients" className="hover:text-[#f9be00] rounded-lg">
                Patients
              </Link>
            </li>
            <li>
              <a className="hover:text-[#f9be00] rounded-lg">Appointments</a>
            </li>
          </ul>
        </div>

        {/* Right Side - Desktop Profile & CTA */}
        <div className="flex items-center gap-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className=" avatar hover:cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full border-2 border-[#f9be00]">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu shadow-md dropdown-content bg-[#033137] w-[150px] text-white rounded-md z-50 mt-[16px] "
            >
              <li>
                <a className="hover:bg-[#1d7261]">Profile</a>
              </li>
              <li>
                <a className="hover:bg-[#1d7261]">Settings</a>
              </li>
              <li>
                <a className="hover:bg-[#1d7261] text-[#f9be00]">Logout</a>
              </li>
            </ul>
          </div>
          
          <div className="hidden md:flex">
            {status == 'authenticated' ? 
            <button onClick={()=> signOut()} className="border border-[#1d7261]  px-3 py-[6px] rounded-sm hover:text-white hove:bg-[#1cb289] text-white w-full cursor-pointer">
              Logout
            </button>
             : 
             <Link href={'/login'} className="border border-[#1d7261]  px-3 py-[6px] rounded-sm hover:text-white hove:bg-[#1cb289] text-white w-full cursor-pointer">
              Login
            </Link>}
          </div>
          

          {/* Mobile Menu Button (Replaces Login Button on Mobile) */}
          <div className="flex justify-center items-center md:hidden">
            <button
              className=" flex justify-center items-center w-10 h-10 rounded-full hover:bg-white/20"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#033137]  transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 md:hidden border-l border-[#1d7261]`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#1d7261]">
            <span className="text-xl text-[#f9be00]">Menu</span>
            <button
              className="hover:text-[#f9be00] p-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="menu p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#f9be00] rounded-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <a className="hover:text-[#f9be00] rounded-lg py-2">Doctors</a>
            </li>
            <li>
              <Link
                href="/patients"
                className="hover:text-[#f9be00] rounded-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Patients
              </Link>
            </li>
            <li>
              <a className="hover:text-[#f9be00] rounded-lg py-2">Appointments</a>
            </li>
          </ul>

          {/* Mobile Login Button */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#1d7261]">
            {status == 'authenticated' ? 
            <button onClick={()=> signOut()} className="border border-[#1d7261]  px-3 py-[6px] rounded-sm hover:text-white hove:bg-[#1cb289] text-white w-full cursor-pointer">
              Logout
            </button>
             : 
             <Link href={'/login'} className="border border-[#1d7261]  px-3 py-[6px] rounded-sm hover:text-white hove:bg-[#1cb289] text-white w-full cursor-pointer">
              Login
            </Link>}
          
          </div>
          {/* {links()} */}
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;