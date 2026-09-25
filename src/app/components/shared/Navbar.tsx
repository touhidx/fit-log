import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-black py-3">
      <div className="navbar container mx-auto px-4 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden px-2"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#111] text-white rounded-box z-10 mt-3 w-48 p-2 shadow"
            >
              <li>
                <Link
                  href="/"
                  className="bg-[#C2F800] text-black font-semibold rounded-full text-center"
                >
                  Workouts
                </Link>
              </li>
              <li>
                <Link href="/">My Plan</Link>
              </li>
            </ul>
          </div>

          <div className="sm:flex items-center gap-2 hidden ">
            <Image src={Logo} alt="Logo" className="h-6 w-6" />
            <h2 className="text-white text-lg sm:text-xl font-bold">FITLOG</h2>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1">
            <li>
              <Link
                href="/"
                className="bg-[#C2F800] text-black font-semibold rounded-full px-4 hover:bg-[#C2F800]"
              >
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/" className="text-[#9CA3AF] hover:text-white px-4">
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3 sm:gap-5 text-sm">
          <Link href="" className="flex items-center gap-2 text-white">
            <span className="bg-[#C2F800] sm:bg-black px-2 sm:px-0 text-black sm:text-white max-sm:rounded-2xl sm:bg-none">
              Plan
            </span>
            <span className="bg-[#C2F800] text-black text-xs font-semibold px-2.5 py-0.5 rounded-full hidden sm:inline">
              0
            </span>
          </Link>
          <Link href="" className="flex items-center gap-2 text-white">
            <span className=" ">Saved</span>
            <span className="border border-white/40 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full hidden sm:inline">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
