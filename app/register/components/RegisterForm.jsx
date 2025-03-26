"use client";

const RegisterForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name,email,password});
    }
    return (
        <div>
            <div className="text-black">
  <div className="w-full lg:w-2/3 mx-auto">
    <div className="bg-base-200 shadow rounded-2xl w-full m-4 ">
      <h1 className="text-2xl text-center font-bold">Register now!</h1>
      <div className="p-4">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="fieldset-label">Name</label>
          <input name='name' type="text" className="input w-full" placeholder="Name" />
          <label className="fieldset-label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input name='password' type="password" className="input w-full" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default RegisterForm;