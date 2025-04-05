import { Inter } from "next/font/google"; // Changed from Geist
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/componenet/Footer";
import { ToastContainer } from "react-toastify";
import NextAuthProvider from "./providers/NextAuthProvider";
import Navbar from "@/componenet/Navber";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // Optional: Add these if you need specific weights
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Ai Powered Healthcare", // Update this
  description: "AI-Powered Healthcare", // Update this
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={inter.variable}>
      <body className="antialiased">
        <NextAuthProvider>
          <Navbar></Navbar>
          <ToastContainer />
          {/* <Toaster position="top-center" reverseOrder={false} /> */}
          {children}
          <footer className="w-full mt-20">
            <Footer />
          </footer>
        </NextAuthProvider>
      </body>
    </html>
  );
}
