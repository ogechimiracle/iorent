"use client";

import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail, IoMdPerson, IoMdClose, IoMdMenu } from "react-icons/io";
import { FaArrowRightLong, FaArrowLeft } from "react-icons/fa6";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { PiSquaresFourLight } from "react-icons/pi";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavLinks } from "@/utils/constant";
import { useAuth } from "@/context/AuthContext";

export default function Header1() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const {isAuthenticated, logout} = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [path]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="w-full">
      <header
        className={`w-full bg-transparent ${path === "/" ? "fixed top-0 right-0 left-0 z-30" : "relative"}`}
      >
        {/* Top Notification / Contact Bar */}
        <div
          className={`${scrolled ? "hidden" : "flex"} border-b-[0.25px] border-[#b0abab] px-4 py-2 items-center justify-between text-white text-[11px] sm:text-[13px]`}
        >
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <a
              href="tel:+2348063577401"
              className="flex gap-1.5 items-center hover:text-[#70f46d] transition-colors"
            >
              <FaPhoneAlt className="size-3" />
              <span>+2348063577401</span>
            </a>
            <a
              href="mailto:montfortv22@gmail.com"
              className="hidden xs:flex gap-1.5 items-center hover:text-[#70f46d] transition-colors"
            >
              <IoIosMail className="size-4" />
              <span className="truncate max-w-[160px] sm:max-w-none">
                montfortv22@gmail.com
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <p>
              More than{" "}
              <span className="text-[15px] font-bold text-[#70f46d]">800+</span>{" "}
              special collection cars in this summer
            </p>
            <button className="bg-[#70f46d] text-black px-3 py-1 rounded-[20px] cursor-pointer flex items-center gap-2 text-[12px] font-semibold hover:bg-emerald-400 transition-colors">
              Access Now <FaArrowRightLong />
            </button>
          </div>

          <div className="hidden lg:flex items-center justify-center text-[13px]">
            <p className="px-3">EN</p>
            <p className="px-3 border-r border-l border-[#b0abab]">USD</p>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div
          className={`border-b px-4 py-3 flex items-center justify-between transition-colors duration-300 ${
            path === "/"
              ? "border-white/20 text-white"
              : "border-slate-200 dark:border-slate-700 bg-white text-black dark:text-white dark:bg-slate-800"
          } ${scrolled && path === "/" ? "bg-green-900/90 backdrop-blur-md shadow-md" : ""}`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <TbSteeringWheelFilled className="size-8 sm:size-10 text-[#70f46d]" />
            <span className="font-bold text-2xl sm:text-[30px] tracking-tight">
              Carento
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 font-medium">
            {NavLinks.map((item: any) => (
              <Link
                key={item.title}
                href={item.url}
                className={`transition-colors hover:text-[#70f46d] ${
                  path === item.url
                    ? "text-[#70f46d] underline underline-offset-8 font-semibold"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Actions & Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isAuthenticated ? (
              <div className="group relative">
                <IoMdPerson size={25} className="cursor-pointer" />

                <div className="invisible group-hover:visible transition-all ease-in-out duration-300 delay-100 absolute top-5 right-5 lg:w-64 rounded-lg bg-white text-black dark:text-white dark:bg-slate-800 flex flex-col gap-y-2 px-5 py-3">
                  <Link href="/">Profile</Link>
                  <Link href="/">Notifications</Link>
                  <button className="flex items-center justify-center gap-x-3 py-3 rounded-lg bg-red-900 text-white px-5 cursor-pointer hover:bg-red-500" onClick={logout}>
                    <span>Logout</span> <FaArrowLeft size={15} />{" "}
                  </button>
                </div>
              </div>
            ) : (
              <Link
                href="/auth"
                className="hidden lg:flex items-center gap-1.5 rounded-lg text-[13px] px-3.5 py-2 font-medium bg-slate-100 dark:bg-slate-700 hover:bg-[#70f46d] hover:text-black transition-all"
              >
                <IoMdPerson className="size-4" />
                Sign in
              </Link>
            )}

            <ThemeToggle />

            <div className="hidden lg:flex items-center py-2 px-2.5 bg-[#70f46d] text-black rounded-lg cursor-pointer hover:bg-emerald-400 transition-colors">
              <PiSquaresFourLight className="size-5" />
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white text-black dark:bg-slate-700 dark:text-white cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <IoMdClose className="size-7" />
              ) : (
                <IoMdMenu className="size-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Menu */}
        <div
          className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-[320px] bg-slate-900 text-white p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <TbSteeringWheelFilled className="size-8 text-[#70f46d]" />
                  <span className="font-bold text-xl">Carento</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-800 transition-colors"
                >
                  <IoMdClose className="size-6 text-slate-400" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="flex flex-col gap-4 py-6">
                {NavLinks.map((item: any) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`py-2 text-lg font-medium transition-colors ${
                      path === item.url
                        ? "text-[#70f46d] font-semibold pl-2 border-l-2 border-[#70f46d]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Footer Actions */}
            <div className="pt-6 border-t border-slate-800 flex flex-col gap-4">
              <Link
                href="/login"
                className="w-full flex items-center justify-center gap-2 bg-[#70f46d] text-black py-3 rounded-lg font-semibold text-sm hover:bg-emerald-400 transition-colors"
              >
                <IoMdPerson className="size-5" />
                Sign in
              </Link>

              <div className="text-slate-400 text-xs flex flex-col gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="size-3 text-[#70f46d]" />
                  <span>+2348063577401</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoIosMail className="size-4 text-[#70f46d]" />
                  <span>montfortv22@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
