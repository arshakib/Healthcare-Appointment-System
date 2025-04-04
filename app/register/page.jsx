"use client"

// import RegisterForm from "@/componenet/RegisterForm";

import SocialLogin from "@/componenet/SocialLogin";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
// console.log(role)
    const handleRegister = async (e) => {
        e.preventDefault();
       
        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({ name, email, role: 'patient', password}),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) {
            router.push("/login");
            toast.success('Registered Successfully!')
        }
    };

    return (

      // <div>
      //   <RegisterForm />
      // </div>
        
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
                <label className="fieldset-label">Role</label>
                <select value={role} placeholder='Select your role' className="select w-full" name="role" id="role" onChange={(e)=> setRole(e.target.value)}>
                  <option value="">Select yor role</option>
                  <option value="doctor">doctor</option>
                  <option value="patient">patient</option>
                </select>
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
              <div>
              <SocialLogin />
              </div>
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
