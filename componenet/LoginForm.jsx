"use client";

import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SocialLogin from "./SocialLogin";


const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });

      if (response.ok) {
        toast.success("Login Success");
        router.push("/");
        form.rest();
      } else {
        toast.error("Authentication failed");
      }
      // console.log({email,password});
    } catch (error) {
      toast.error(error);
      // alert('authentication failed')
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="fieldset">
        <label className="fieldset-label">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />
        <label className="fieldset-label">Password</label>
        <input
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
  );
};

export default LoginForm;
