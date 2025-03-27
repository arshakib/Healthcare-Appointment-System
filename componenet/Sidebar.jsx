"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiHome, FiUsers, FiSettings, FiChevronRight } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
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
      {/* Mobile Menu Button */}
      {isMobile && (
        <button 
          className={`p-3 bg-indigo-600 text-white fixed top-4 left-4 z-40 rounded-lg shadow-lg hover:bg-indigo-700 transition-colors ${open ? "hidden" : "block"}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu size={20} />
          hello
        </button>
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-xl transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">AMI Dashboard</h1>
          {isMobile && (
            <button 
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          )}
        </div>

        {/* Sidebar Content */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" onClick={() => isMobile && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors">
                  <FiHome className="mr-3" />
                  <span>Dashboard</span>
                  <FiChevronRight className="ml-auto opacity-70" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/users" onClick={() => isMobile && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors">
                  <FiUsers className="mr-3" />
                  <span>Users</span>
                  <FiChevronRight className="ml-auto opacity-70" />
                </div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" onClick={() => isMobile && setOpen(false)}>
                <div className="flex items-center p-3 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition-colors">
                  <FiSettings className="mr-3" />
                  <span>Settings</span>
                  <FiChevronRight className="ml-auto opacity-70" />
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2023 AMI Team
          </div>
        </div>
      </aside>
    </>
  );
}


