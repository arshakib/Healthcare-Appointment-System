"use client";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
// import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const handleSocialLogin = (providerName)=>{
        signIn(providerName);
    }

    useEffect(()=>{
        if(status === 'authenticated'){
            router.push('/');
            toast.success('Login Successfully!');
        }
    },[status]);

    return (
        <div>
            <div typeof='button' onClick={()=>handleSocialLogin('google')} className='btn flex justify-center items-center gap-3 mt-4'>
            <p className=''>Or Continue With Google</p>
            <p className='bg-slate-200 rounded-full'><FaGoogle /></p>
            {/* <p onClick={()=>handleSocialLogin('github')} className='bg-slate-200 rounded-full p-3'><FaGithub /></p> */}
            </div>
        </div>
    );
};

export default SocialLogin;