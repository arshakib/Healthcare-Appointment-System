import React from 'react';

const page = () => {
    return (
        <div>
        <div className="text-black">
  <div className="w-full lg:w-2/3 mx-auto">
    <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
      <h1 className="text-2xl text-center font-bold">Login now!</h1>
      <div className="p-4">
        <form className="fieldset">
          
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn mt-4 bg-[#f9be00] text-[#033137] hover:bg-[#1cb289] hover:text-white">Login</button>
        </form>
      </div>
    </div>
  </div>
</div>  
        </div>
    );
};

export default page;