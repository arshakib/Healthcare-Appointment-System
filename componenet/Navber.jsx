import Link from "next/link";
import React from "react";

const Navber = () => {
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-[#033137] text-white shadow-lg rounded-2xl px-4 md:px-8 ">
        {/* Left Side - Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:text-[#f9be00]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#033137] text-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
            >
              <li>
              <Link href="/" className="hover:bg-[#1d7261] rounded-lg">Home</Link>
              </li>
              <li>
                <a className="hover:bg-[#1d7261]">Doctors</a>
              </li>
              <li>
                <Link href="/patients" className="hover:bg-[#1d7261]">Patients</Link>
              </li>
              <li>
                <a className="hover:bg-[#1d7261]">Appointments</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-[#f9be00]">MedScheduleAI</a>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link href="/" className="hover:bg-[#1d7261] rounded-lg">Home</Link>
            </li>
            <li>
              <a className="hover:bg-[#1d7261] rounded-lg">Doctors</a>
            </li>
            <li>
                <Link href="/patients" className="hover:bg-[#1d7261]">Patients</Link>
              </li>
            <li>
              <a className="hover:bg-[#1d7261] rounded-lg">Appointments</a>
            </li>
          </ul>
        </div>

        {/* Right Side - Profile & CTA */}
        <div className="navbar-end gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:bg-[#1d7261]"
            >
              <div className="w-10 rounded-full border-2 border-[#f9be00]">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#033137] text-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl"
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
          <a className="btn bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">
            Log IN
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
