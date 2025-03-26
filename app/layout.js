import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/componenet/Navber";
import Footer from "@/componenet/Footer";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
              <Navber />
            </div>
          
          <ToastContainer />
          {children}
          <footer className="w-full mt-20">
            <Footer />
          </footer>
        
      </body>
    </html>
  );
}
