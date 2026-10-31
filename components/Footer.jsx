import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-violet-50 mt-10">
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-violet-200 text-gray-600">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="NovaMart logo" />
          <p className="mt-6 text-sm">
            NovaMart brings you the latest audio, gaming, mobile and laptop
            gear from trusted brands. Fast delivery, easy returns and friendly
            support make every order a smooth experience.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-violet-800 mb-5">Explore</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Our story</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Help center</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy &amp; terms</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-violet-800 mb-5">Reach us</h2>
            <div className="text-sm space-y-2">
              <p>+1-800-555-0142</p>
              <p>hello@novamart.shop</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        © 2025 NovaMart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;