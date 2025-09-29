"use client";
import React from "react";
import Image from "next/image"; 
import logo from "../../../public/assets/images/logo.png";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-[#0F1F44] px-4 sm:px-6 md:px-32 py-4">
      <div className="flex-shrink-0">
        <Image
          src={logo}
          alt="Logo"
          className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-[301px] h-auto"
          priority
        />
      </div>

      <button
        className="
          bg-[#03A765] hover:bg-teal-600 text-white
          text-xs sm:text-sm md:text-base
          px-2 sm:px-4 md:px-6
          py-1 sm:py-2 md:py-3
          rounded-md
          transition-all duration-300
          cursor-pointer
        "
      >
        Verify Phone Number
      </button>
    </header>
  );
}
