"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SocialLogin = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    const handleSocialLogin = (provider) => {
        signIn(provider);
    };

    useEffect(() => {
        if (status === "authenticated") {
            toast.success("Login Successfully!");
            router.push("/");
        }
    }, [status]);

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
