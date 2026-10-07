"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CiLock,
  CiMail,
  CiUser,
} from "react-icons/ci";
import {
  FaArrowRightLong,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa6";
import { LoginUser } from "@/api/authService";
import {toast} from 'react-toastify'
import { json } from "zod";
import { useRouter } from "next/navigation";
import { UserRound } from "lucide-react";
import RedirectByRole from "@/components/redirectByRole";
import { useAuth } from "@/context/AuthContext";





export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter()
  const { login } = useAuth()

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // TODO: Replace with your API request
      const data = {
        password,
        email,
      };
       const res = await LoginUser(data);
       if(res.status){
        localStorage.setItem('CarentoUser', JSON.stringify(res.data))
        toast.success(res.message)
        login(res.data.user, res.data.token)
       }else{
        toast.error(res.message)
       }
      
    } finally {
      setIsLoading(false);
    }
  };

  

  return (
    <>
      <RedirectByRole/>
      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo / Brand */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/20">
              <CiLock className="text-white text-3xl" />
            </div>

            <h1 className="mt-4 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Welcome Back!
            </h1>

            <p className="mt-2 text-sm sm:text-base text-slate-500 text-center">
              Login to continue
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-5 sm:p-8">
            <form className="space-y-5" acceptCharset="" onSubmit={submitForm}>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email address
                </label>

                <div className="relative">
                  <CiMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl pointer-events-none" />

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <CiLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-2xl pointer-events-none" />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    required
                    className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-green-600 accent-green-600 focus:ring-green-500"
                  />

                  <span className="text-sm text-slate-600">Remember me</span>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/20"
              >
                {isLoading ? (
                  <>
                    <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    please wait...
                  </>
                ) : (
                  <>
                    Login
                    <FaArrowRightLong size={14} />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400 uppercase tracking-wider">
                Or continue with
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-slate-700"
              >
                <span className="font-bold text-lg">G</span>
                Google
              </button>

              <button
                type="button"
                className="h-11 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-slate-700"
              >
                <span className="font-bold text-lg"></span>
                Apple
              </button>
            </div>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Create new Account
              </Link>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline hover:text-slate-600">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-slate-600">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}

