import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate=useNavigate();
  

  const {register,handleSubmit,watch,formState:{errors}}=useForm();

  const handleRegister=async(data)=>{
    console.log(data);

    const res = await fetch(import.meta.env.VITE_API_URL + "/register",{
      method:"POST",
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
       " Accept": "application/json",
      },
    });
    
    const json=await res.json();
   if(res.status===200){
     toast.success("register successfully");
    //  console.log(json)
    navigate('/');
   }else{
     toast.error(json.message);
   }
  }
  return (
    <section className="bg-[#E0D3B8] min-h-screen">
    <Toaster />
  
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      {/* Logo */}
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-[#3A2F26]"
      >
        <img
          className="w-8 h-8 mr-2 rounded-full"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Minimartie
      </a>
  
      {/* Glass Card */}
      <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 sm:max-w-md xl:p-0">
        
        <div className="p-6 space-y-5 sm:p-8">
          
          <h1 className="text-2xl font-bold text-center text-[#3A2F26]">
            Create an account ✨
          </h1>
  
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="space-y-4"
          >
            
            {/* Name */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#3A2F26]">
                Your Name
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Aung Aung"
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#3A2F26]">
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="aungaung@gmail.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#3A2F26]">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Confirm Password */}
            <div>
              <label className="block mb-1 text-sm font-medium text-[#3A2F26]">
                Confirm password
              </label>
              <input
                type="password"
                {...register("password_confirmation")}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Terms */}
            <div className="flex items-start text-sm">
              <label className="flex items-center gap-2 text-[#3A2F26]/80">
                <input
                  type="checkbox"
                  required
                  className="rounded border-[#3A2F26]/30 text-[#3A2F26] focus:ring-[#3A2F26]/40"
                />
                I accept the{" "}
                <span className="underline cursor-pointer">
                  Terms and Conditions
                </span>
              </label>
            </div>
  
            {/* Cute Button */}
            <button
              type="submit"
              className="w-full bg-[#3A2F26] text-[#E0D3B8] py-2.5 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-200"
            >
              Create Account
            </button>
  
            {/* Login Link */}
            <p className="text-sm text-center text-[#3A2F26]/80">
              Already have an account?{" "}
              <Link
                to="/"
                className="font-semibold text-[#3A2F26] hover:underline"
              >
                Login here
              </Link>
            </p>
  
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default RegisterPage;
