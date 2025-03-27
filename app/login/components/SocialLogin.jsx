import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
// import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const router = useRouter();
    const handleSocialLogin = async(providerName)=>{
// console.log(providerName);
try {
    const response = await signIn(providerName, {redirect: false,callbackUrl: '/'});
        //  console.log(response)
         if(response.ok){
                toast.success('Login Success')
                router.push('/')
            }else{
                toast.error('Authentication failed')
            }
} catch (error) {
    toast.error(error);
}
         
    }

    return (
        <div>
            <div onClick={()=>handleSocialLogin('google')} className='btn flex justify-center items-center gap-3 mt-4'>
            <p className=''>Or Continue With Google</p>
            <p className='bg-slate-200 rounded-full'><FaGoogle /></p>
            {/* <p onClick={()=>handleSocialLogin('github')} className='bg-slate-200 rounded-full p-3'><FaGithub /></p> */}
            </div>
        </div>
    );
};

export default SocialLogin;