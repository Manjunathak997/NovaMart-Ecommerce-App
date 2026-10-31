import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-gradient-to-r from-violet-900 to-fuchsia-700 my-16 rounded-3xl overflow-hidden">
      <Image
        className="max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] text-white">
          Gear Up For Game Night
        </h2>
        <p className="max-w-[343px] font-medium text-violet-100/80">
          Booming speakers and responsive controllers, all in one place
        </p>
        <button className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-white text-violet-800 hover:bg-violet-100 transition rounded-full">
          Shop gaming
          <Image className="group-hover:translate-x-1 transition invert" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <Image
        className="hidden md:block max-w-80"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />
      <Image
        className="md:hidden"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;