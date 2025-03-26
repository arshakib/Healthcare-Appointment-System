"use client";

import { signIn } from "next-auth/react"
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
const LoginForm = () => {
    // const router = useRouter();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            await signIn("credentials", {email,password, callbackUrl: '/'});
            toast.success('Login Success')

            // if(response.ok){
            //     router.push('/')
            //     form.rest();
            // }else{
            //     alert('authentication failed')
            // }
        // console.log({email,password});
        } catch (error) {
            console.log(error);
            alert('authentication failed')
        }
        
    }
    return (
        <div>
           <form onSubmit={handleSubmit} className="fieldset">
          
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">Login</button>
        </form> 
        </div>
    );
};

export default LoginForm;