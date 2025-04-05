"use client";

// import { signIn, useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { toast } from "react-toastify";
import SocialLogin from "@/componenet/SocialLogin";

const Login = () => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const router = useRouter();
    // const { data: session, status } = useSession();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     const result = await signIn("credentials", {
    //         email,
    //         password,
    //         redirect: false
    //     });

    //     if (result.ok) {
    //         router.push("/");
    //         toast.success('Login Successfully!')
    //     }else{
    //       toast.error('Login Failed. Please check your credentials.');
    //     }
    // };

    // useEffect(()=>{
    //   if (session) {
    //     router.push("/");
    // }
    // if(status === "unauthenticated"){
    //   toast.dismiss();
    // }
    // },[session, router, status])

    return (
        
      //   <div className="lg:w-2/3 mx-auto mt-12 text-black bg-base-200 rounded-3xl shadow">
      //     <div className="p-6">
      //     <h1 className="text-xl text-center font-bold">Login now!</h1>
      //   <form onSubmit={handleLogin} className="fieldset">
      //     <label className="fieldset-label">Email</label>
      //     <input
      //     onChange={(e) => setEmail(e.target.value)}
      //       name="email"
      //       type="email"
      //       className="input w-full"
      //       placeholder="Email"
      //     />
      //     <label className="fieldset-label">Password</label>
      //     <input
      //     onChange={(e) => setPassword(e.target.value)}
      //       name="password"
      //       type="password"
      //       className="input w-full"
      //       placeholder="Password"
      //     />
  
      //     <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">
      //       Login
      //     </button>
      //   </form>
      //   <div>
      //   <SocialLogin />
      //   </div> 
      //   <button className="btn w-full mt-4">
      //     Are you new this page please{" "}
      //     <Link className="text-red-500" href={"/register"}>
      //       Register
      //     </Link>
      //   </button>
      //     </div>
      // </div>

      <div>
        <SocialLogin />
        </div> 
    );
};

export default Login;

