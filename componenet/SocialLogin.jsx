"use client";

import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import logo from "@/public/login.webp";

const SocialLogin = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [loggedInOnce, setLoggedInOnce] = useState(false);

    const handleSocialLogin = async(provider) => {
        signIn(provider);
        
    };

    

    useEffect(() => {
        if (status === "authenticated" && !loggedInOnce) {
            router.push("/");
            toast.success("Login Successfully!");
            setLoggedInOnce(true);
        }else if(status === "unauthenticated" && loggedInOnce){
            setLoggedInOnce(false);
            router.push('/login')
        }
    }, [status, router, loggedInOnce]);

    return (
        
        <div className="flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg md:p-10 w-full max-w-md text-center space-y-6">
        <h2 className="text-2xl font-bold text-gray-700">Welcome Back!</h2>
        <p className="text-xl text-gray-500">Sign in to your account with Google</p>

        <button
          onClick={() => handleSocialLogin("google")}
          className="flex items-center justify-center gap-3 w-full py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-100 transition-all"
        >
          <FcGoogle className="text-2xl"/>
          <span className="text-xl text-black font-medium">Continue with Google</span>
        </button>
        <Image className="rounded-xl" src={logo} alt="login image" />
      </div>
    </div>
    );
};

export default SocialLogin;
