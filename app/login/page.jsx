// "use client";

// import Link from "next/link";
// import SocialLogin from "./components/SocialLogin";
// import axios from "axios";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

import LoginForm from './components/LoginForm';

const page = () => {
  // const router = useRouter();
  // const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');

  // const handleSubmit = async (e)=>{
  //   e.preventDefault();
  //   const response = await axios.post('api/login', {email,password});
  //   console.log(response);
  //   if(response.data.message === 'success'){
  //     router.push('/');
  //   }
  // }

    return (
        <div>
        <div className="text-black">
  <div className="w-full lg:w-2/3 mx-auto">
    <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
      <div className="p-4">
        
        <LoginForm />

        {/* <div>
           <form onSubmit={handleSubmit} className="fieldset">
          
          <label className="fieldset-label">Email</label>
          <input onChange={(e)=> setEmail(e.target.value)} name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input onChange={(e)=> setPassword(e.target.value)} name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">Login</button>
        </form>
        <SocialLogin />
        <button className="btn w-full mt-4">Are you new this page please <Link className="text-red-500" href={'/register'}>Register</Link></button>
         
        </div> */}

      </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default page;