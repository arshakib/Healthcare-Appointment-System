"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

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
              <Link href="/" className="hover:text-[#f9be00]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allDoctor" className="hover:text-[#f9be00]">
                Doctors
              </Link>
            </li>
            <li>
              <Link href="/patients" className="hover:text-[#f9be00]">
                Patients
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#f9be00]">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#f9be00]">
                Contact
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
              </div>
              <button
                onClick={handleLogout}
                className="border border-[#1d7261] px-3 py-[6px] rounded-sm hover:bg-[#1cb289] w-full"
              >
                Logout
              </button>
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

          <ul className="p-4 space-y-2">
            <li>
              <Link
                href="/"
                className="hover:text-[#f9be00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/allDoctor"
                className="hover:text-[#f9be00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Doctors
              </Link>
            </li>
            <li>
              <Link
                href="/patients"
                className="hover:text-[#f9be00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Patients
              </Link>
            </li>
            <li>
              <Link
                href="/appointments"
                className="hover:text-[#f9be00]"
                onClick={() => setIsMenuOpen(false)}
              >
                Appointments
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
