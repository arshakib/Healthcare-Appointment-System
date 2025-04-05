"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";
import { FiMenu, FiX, FiHome, FiUsers, FiSettings, FiChevronRight, FiCalendar, FiUser, FiFileText } from "react-icons/fi";
import { MdOutlineChat } from "react-icons/md";
import useUserRole from "./hooks/useUserRole";


export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isMobileOrMd, setIsMobileOrMd] = useState(false);
  const { role, loading } = useUserRole();


  useEffect(() => {
    const handleResize = () => {
      const mobileOrMd = window.innerWidth < 1024; // 1024px is the lg breakpoint
      setIsMobileOrMd(mobileOrMd);
      if (mobileOrMd) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile/MD Menu Button */}
      {isMobileOrMd && (
        <button
          className={`p-3 fixed top-14 left-0 z-50 rounded-lg text-black transition-colors ${open ? "hidden" : "block"}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={20} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 border-r bg-white transform ${open ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600">MEDICAL</h1>
          {isMobileOrMd && (
            <button
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={20} className="text-gray-600" />
            </button>
          )}
        </div>

        {/* Sidebar Content */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            <li>
              <Link href="/dashboard" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <FiHome className="mr-3 text-indigo-600" />
                  <span className="font-medium">Dashboard</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>

            {
              role === "doctor" && <li>
                <Link href="/dashboard/allSlot" onClick={() => isMobileOrMd && setOpen(false)}>
                  <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                    <FiCalendar className="mr-3 text-indigo-600" />
                    <span className="font-medium">All Slots</span>
                    <FiChevronRight className="ml-auto text-gray-400" />
                  </div>
                </Link>
              </li>
            }

            {
              role === "admin" && <li>
                <Link href="/dashboard/patientRecords" onClick={() => isMobileOrMd && setOpen(false)}>
                  <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                    <FiFileText className="mr-3 text-indigo-600" />
                    <span className="font-medium">Patient Records</span>
                    <FiChevronRight className="ml-auto text-gray-400" />
                  </div>
                </Link>
              </li>
            }

            <li>
              <Link href="/dashboard/chat" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <MdOutlineChat className="mr-3 text-indigo-600" />
                  <span className="font-medium">Chat</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/profile" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <FiUser className="mr-3 text-indigo-600" />
                  <span className="font-medium">Profile</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>

            <li>
              <Link href="/" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <FiHome className="mr-3 text-indigo-600" />
                  <span className="font-medium">Home</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>

            <li>
              <Link href="/dashboard/setting" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <FiSettings className="mr-3 text-indigo-600" />
                  <span className="font-medium">Settings</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>

            <li>
              <Link href="/" onClick={() => isMobileOrMd && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 text-gray-700 transition-colors">
                  <IoIosLogOut className="mr-3 text-indigo-600" />
                  <span className="font-medium">LogOut</span>
                  <FiChevronRight className="ml-auto text-gray-400" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Medical Team
          </div>
        </div>
      </aside>
    </>
  );
}