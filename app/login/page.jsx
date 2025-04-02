"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import SocialLogin from "@/componenet/SocialLogin";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (!result.error) {
            router.push("/");
            toast.success('Login Successfully!')
        }
    };

    return (
        
        <div className="lg:w-2/3 mx-auto mt-12 text-black bg-base-200 rounded-3xl shadow">
          <div className="p-6">
          <h1 className="text-xl text-center font-bold">Login now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="fieldset-label">Email</label>
          <input
          onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="fieldset-label">Password</label>
          <input
          onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className="input w-full"
            placeholder="Password"
          />
  
          <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">
            Login
          </button>
        </form>
        <SocialLogin /> 
        <button className="btn w-full mt-4">
          Are you new this page please{" "}
          <Link className="text-red-500" href={"/register"}>
            Register
          </Link>
        </button>
          </div>
      </div>
    );
};

export default Login;

