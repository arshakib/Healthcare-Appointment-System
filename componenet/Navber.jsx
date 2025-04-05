"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    toast.success("Logout Success");
    signOut({ redirect: false });
    router.push("/login");
  };

  const validImage =
    session?.user?.image?.trim() !== ""
      ? session?.user?.image
      : "/default-avatar.png";

  if (pathname.startsWith("/dashboard")) return null;

  return (
    <div className="bg-[#033137] border-b border-[#1d7261] sticky top-0 z-50 w-full">
      <div className="w-11/12 mx-auto text-white flex justify-between items-center py-3">
        {/* Logo */}
        <div className="">
          <Link href="/" className="text-xl text-[#f9be00] sm:block">
            MedScheduleAI
          </Link>
        </div>

        {/* Desktop Menu */}

        <div className="hidden md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className={`hover:text-[#f9be00] ${
                  pathname === "/"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/patients"
                className={`hover:text-[#f9be00] ${
                  pathname === "/patients"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Patient's Registration
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-[#f9be00] ${
                  pathname === "/about"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-[#f9be00] ${
                  pathname === "/contact"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`hover:text-[#f9be00] ${
                  pathname === "/dashboard"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {status === "authenticated" ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar hover:cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border-2 border-[#f9be00] overflow-hidden">
                    <Image
                      src={validImage}
                      width={40}
                      height={40}
                      alt="user avatar"
                      title={session?.user?.name}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Dropdown Content */}
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-64 text-black"
                >
                  <li className="mb-2">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {session?.user?.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {session?.user?.email}
                      </span>
                    </div>
                  </li>
                  <div className="border-t my-2"></div>
                  <li>
                    <Link href={"/doctor"} className="hover:text-[#f9be00]">
                      <FaCashRegister />
                      Registration as a Doctor
                    </Link>
                  </li>
                  <div className="border-t my-2"></div>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-left text-red-600 hover:bg-red-100 rounded px-2 py-1"
                    >
                      Logout
                      <FaArrowRightToBracket />
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link
                href="/login"
                className="border border-[#1d7261] px-3 py-[6px] rounded-sm hover:bg-[#1cb289]"
              >
                SignIn
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20"
            >
              <svg
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
          className={`fixed top-0 right-0 h-full w-64 bg-[#033137] transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:hidden border-l border-[#1d7261]`}
        >
          <div className="flex justify-between items-center p-4 border-b border-[#1d7261]">
            <span className="text-xl text-[#f9be00]">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#f9be00]"
            >
              <svg
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
          {/* items */}
          <ul className="p-4 space-y-2">
            <li>
              <Link
                href="/"
                className={`hover:text-[#f9be00] ${
                  pathname === "/"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/patients"
                className={`hover:text-[#f9be00] ${
                  pathname === "/patients"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Patient's Registration
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-[#f9be00] ${
                  pathname === "/about"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-[#f9be00] ${
                  pathname === "/contact"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className={`hover:text-[#f9be00] ${
                  pathname === "/dashboard"
                    ? "text-[#f9be00] font-semibold"
                    : "text-white"
                }`}
              >
                Dashboard
              </Link>
            </li>
          </ul>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#1d7261]">
            {status === "authenticated" ? (
              <button
                onClick={handleLogout}
                className="border border-[#1d7261] px-3 py-[6px] rounded-sm hover:bg-[#1cb289] w-full"
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  className="border border-[#1d7261] px-3 py-[6px] rounded-sm hover:bg-[#1cb289] text-center"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
