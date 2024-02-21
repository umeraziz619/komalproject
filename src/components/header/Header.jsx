"use client";
import { En } from "@/enums/En";
import { ROUTE } from "@/enums/Route";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
const Header = () => {
  const el = useRef(null);
  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "HTML AND CSS",
          "TAILWIND AND SCSS",
          "JAVASCRIPT",
          "NODE JS",
          "MONGODB AND SQL",
          "REACT AND NEXT JS",
          "REACT NATIVE",
          "DOCKER",
          "FRAME MOTION",
        ],
        typeSpeed: 75,
        loop: true,
      });
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="w-full">
      <div className="flex bg-white max-[1024px]:flex-col-reverse change-bg headerContainer">
        <div className="flex  items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
              {En.Iam} <span className="text-gray-500">{En.name}</span>
            </h2>
            <h2 className="text-xl font-bold text-gray-800">
              Learn <span className="text-gray-500" ref={el}></span>
            </h2>
            <p className="mt-2 text-sm text-gray-500 md:text-base">
              {En.headerDes}
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
                <a
                  className="px-4 py-3 bg-slate-700 text-white text-xs space-x-4 tracking-wider font-bold rounded hover:bg-gray-800"
                  href="https://www.youtube.com/@KomalWebdeveloper"
                  target="_blank"
                >
                  {En.getStarted}
                </a>

              <Link href={ROUTE.ABOUTUSPAGE} className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                  {En.learnMore}
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-11 lg:block lg:w-1/2 custom-clip-path">
          <div className="h-full max-[550px]:h-60 max-[1024px]:h-96 max-[750px]:h-72 object-cover bg-cover custom-bg-header">
            {/* <div className="h-full bg-black opacity-25"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
