"use client"

import Link from "next/link";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SocialLogin from "@/componenet/SocialLogin";

// import React from 'react';
// import RegisterForm from './components/RegisterForm';

const page = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await axios.post('api/register', {name,email,password});
        console.log(response);
        router.push('/');
    }
    return (
        <div>
            {/* <RegisterForm /> */}

            <div className="text-black">
  <div className="w-full lg:w-2/3 mx-auto">
    <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
      <h1 className="text-2xl text-center font-bold">Register now!</h1>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input onChange={(e)=> setName(e.target.value)} name='name' type="text" className="input w-full" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">Register</button>
        </form>
        <SocialLogin />
        <button className="btn w-full mt-4">Already have an account please <Link className="text-red-500" href={'/login'}>Login</Link></button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default page;
