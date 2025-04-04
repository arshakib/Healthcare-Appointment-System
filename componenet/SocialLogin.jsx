"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
        <div className="flex flex-col gap-3 mt-4">
            <button
            onClick={() => handleSocialLogin("google")}
            className="btn flex items-center gap-3">
            <FaGoogle /> Login with Google
            </button>
        </div>
    );
};

export default SocialLogin;
