"use client"

import SocialLogin from "@/componenet/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            router.push("/");
            toast.success('Registered Successfully!')
        }
    };

    return (
        
        <div className="text-black">
        <div className="w-full lg:w-2/3 mx-auto">
          <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
            <div className="p-4">
            <h1 className="text-xl text-center font-bold">Register now!</h1>
              <form onSubmit={handleRegister} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                onChange={(e)=> setName(e.target.value)}
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Name"
                />
                <label className="fieldset-label">Email</label>
                <input
                onChange={(e)=> setEmail(e.target.value)}
                  name="email"
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                onChange={(e)=> setPassword(e.target.value)}
                  name="password"
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">
                  Register
                </button>

              </form>
              <SocialLogin />
              <button className="btn w-full mt-4">
                Already have an account please{" "}
                <Link className="text-red-500" href={"/login"}>
                  Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;
