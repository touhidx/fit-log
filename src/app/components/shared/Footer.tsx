import React from "react";
import Logo from "@/app/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="h-4 w-4" />
          <h2 className="text-white text-xs sm:text-sm font-bold tracking-wide">
            FITLOG
          </h2>
        </div>

        <p className="text-[#6B7280] text-xs order-3 sm:order-2">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
