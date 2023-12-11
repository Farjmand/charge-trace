import React, { useState } from "react";
import axios from "axios";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = "http://127.0.0.1:8000/api";
      const response = await axios.post(`${url}/users/register`, {
        username,
        email,
        password,
      });
      if (response.status === 201) {
        console.log("User created successfully");
      } else {
        console.error(response.data.error);
        setError(response.data.error);
      }
      // Handle successful registration
      console.log(response.data);
    } catch (error) {
      // Handle API errors
      console.log(error);
    setError(error as React.SetStateAction<string>);
    }
  };

  return (
    <div className="justify-center items-center bg-white flex flex-col px-20 py-12 max-md:px-5">
    <form onSubmit={handleSubmit}>
    <div className="text-zinc-800 text-3xl font-bold whitespace-nowrap mt-28 max-md:mt-10">
      Let’s get started.
    </div>
    <div className="text-purple-500 text-lg font-medium leading-7 whitespace-nowrap mt-4">
      <span className=" text-gray-500">Don’t have an account?</span>
      <span className="font-medium text-zinc-700"> </span>
      
      <span className="font-medium text-purple">Sign in</span>
    </div>
    
    <div className="items-stretch border border-[color:var(--6,#F4F5F6)] shadow-2xl bg-white flex w-[506px] max-w-full flex-col mt-10 pl-5 pr-10 py-5 rounded-xl border-solid max-md:pr-5">
      <label  className="text-zinc-800 text-left font-medium whitespace-nowrap max-md:max-w-full">
        Username
      </label>
      <input name="username" type="text" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Anna" className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5" />
      <label className="text-zinc-800 text-left font-medium whitespace-nowrap max-md:max-w-full">
        Email
      </label>
      <input type="email" placeholder="anna@gmail.com" className="text-slate-500 text-base whitespace-nowrap border justify-center mt-3 pl-5 pr-16 py-5 rounded-xl border-solid border-gray-400 items-start max-md:max-w-full max-md:pr-5"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />
      <label className="text-zinc-800 text-left font-medium whitespace-nowrap max-md:max-w-full">
        Password
      </label>
      <div className="items-stretch border flex flex-col justify-center mt-3 px-5 py-5 rounded-xl whitespace-nowrap border-solid border-gray-400 max-md:max-w-full">
        <div className="items-stretch flex justify-between gap-5 whitespace-nowrap">
       
          <input type="password" placeholder="**********" className="text-slate-500 text-base grow whitespace-nowrap" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}/>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2997cba27956568da32b87baa21c94015e4ccb9abac8cbb64d20846acfdbbbf0?apiKey=8a3180dfeb704004a0910dd8155fa469&"
            className="aspect-[1.25] object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
      </div>
    </div>
    <div className="items-stretch flex w-[506px] max-w-full justify-between gap-5 mt-6 pr-2 max-md:flex-wrap">
      <div className="items-center flex justify-between gap-3.5">
        <div className="rounded border-[color:var(--4,#B1B5C3)] flex w-4 shrink-0 h-4 flex-col my-auto border-[1.5px] border-solid" />
        <div className="text-gray-400 text-base font-medium self-stretch z-[1] grow whitespace-nowrap">
          Remember me
        </div>
      </div>
      <div className="text-purple-500 text-base font-medium grow whitespace-nowrap">
        Forgot your password?
      </div>
    </div>
    <button className="flex-col text-stone-50 text-xl bg-purple font-bold relative whitespace-nowrap fill-purple-500 overflow-hidden min-h-[60px] w-[506px] max-w-full justify-center items-center mt-8 mb-20 px-16 py-5 max-md:mb-10 max-md:px-5">
     
      Register
    </button>
    </form>
  </div>
  );
};

export default Register;
