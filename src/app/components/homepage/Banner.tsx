import Image from "next/image";
import React from "react";
import BannerImage from "@/app/assets/banner.png";

const Banner = () => {
  return (
    <section className="my-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-12 md:py-20 bg-[#15171D] sm:rounded-2xl">
        <div className="flex flex-col items-start text-left order-2 md:order-1 pl-5">
          <p className="text-[#C2F800] text-xs sm:text-sm font-bold tracking-wide">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-3 text-white font-extrabold uppercase leading-[0.95] text-4xl sm:text-4xl lg:text-5xl font-Oswald">
            Train with intent.log
            <br />
            Log every set.
          </h1>

          <p className="mt-4 text-[#9CA3AF] text-sm sm:text-base max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a href="#workouts">
            <button
              className="mt-6 inline-flex items-center gap-1 bg-[#C2F800] text-black
                       text-xs sm:text-sm font-bold uppercase tracking-wide
                       px-5 py-3 rounded-md hover:bg-[#aee000] transition-colors"
            >
              Browse Workouts
            </button>
          </a>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <Image
            src={BannerImage}
            alt="Athlete training on gym equipment"
            className="w-full max-w-70 sm:max-w-70 md:max-w-none h-auto md:max-h-80 object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
