"use client";
import React from "react";
import Image from "next/image";
import family from "../../../public/assets/images/6f3f41ec4e8e1bc3bc7fdb80200993efddda394e.jpg";

export default function Hero() {
  return (
    <section className="relative w-4/5 ml-auto h-[400px] sm:h-[500px] md:h-[598px] flex items-center ">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={family}
          alt="Family"
          fill
          priority
          className="object-cover scale-x-[-1] opacity-70 object-[right_10%_top_0]" // Right side shift
        />
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-white/95
            via-white/0
          "
        />
      </div>

      {/* TEXT CONTENT */}
      <div
        className="
          absolute top-1/2 -translate-y-1/2
          -left-[40px] sm:-left-[100px] md:-left-[180px] xl:-left-[230px]
          w-[90%] sm:w-[600px] md:w-[720px]
          p-4 sm:p-6 md:p-10
        "
      >
        <h2
          className="
            text-[28px] sm:text-[40px] md:text-[79px]
            font-[600] leading-tight text-[#1C274C]
          "
        >
          <span className="text-[#03A765]">Choose The Smart & </span>
          Best Insurance Policy
        </h2>
      </div>
    </section>
  );
}
