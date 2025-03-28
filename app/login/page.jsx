import React from 'react';
import LoginForm from './components/LoginForm';

const page = () => {
    return (
        <div>
        <div className="text-black">
  <div className="w-full lg:w-2/3 mx-auto">
    <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
      <div className="p-4">
        
        <LoginForm />
      </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default page;