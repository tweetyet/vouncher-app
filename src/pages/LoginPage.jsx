import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";

function LoginPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const handleLogin = async (data) => {
    console.log(data);

    const res = await fetch(import.meta.env.VITE_API_URL + "/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login Successfully");
      console.log(json);
      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }

    // navigate("/");
  };

  return (
    <section className="bg-[#E0D3B8] min-h-screen">
    <Toaster position="top-right" />
  
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      {/* Logo */}
      <a
        href="#"
        className="flex items-center mb-6 text-3xl font-semibold text-[#3A2F26]"
      >
        <img
          className="size-19 mr-2 rounded-full"
          src="../public/logo.png"
          alt="logo"
        />
        Mini&Me
      </a>
  
      {/* Card */}
      <div className="w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/40 sm:max-w-md xl:p-0">
        
        <div className="p-6 space-y-5 sm:p-8">
          
          <h1 className="text-2xl font-bold text-center text-[#3A2F26]">
            Welcome back 👋
          </h1>
  
          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleLogin)}
          >
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-[#3A2F26]"
              >
                Your email
              </label>
  
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="name@company.com"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-[#3A2F26]"
              >
                Password
              </label>
  
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-white/60 border border-[#3A2F26]/20 text-[#3A2F26] placeholder:text-[#3A2F26]/60 focus:outline-none focus:ring-2 focus:ring-[#3A2F26]/40"
              />
            </div>
  
            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#3A2F26]/80">
                <input
                  type="checkbox"
                  className="rounded border-[#3A2F26]/30 text-[#3A2F26] focus:ring-[#3A2F26]/40"
                />
                Remember me
              </label>
  
              <a
                href="#"
                className="text-[#3A2F26] hover:underline font-medium"
              >
                Forgot password?
              </a>
            </div>
  
            {/* Cute Button */}
            <button
              type="submit"
              className="w-full bg-[#3A2F26] text-[#E0D3B8] py-2.5 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-lg transition duration-200"
            >
              Sign in
            </button>
  
            {/* Register */}
            <p className="text-sm text-center text-[#3A2F26]/80">
              Don’t have an account yet?{" "}
              <Link
                to="/register"
                className="font-semibold text-[#3A2F26] hover:underline"
              >
                Sign up
              </Link>
            </p>
  
          </form>
        </div>
      </div>
    </div>
  </section>
  );
}

export default LoginPage;