"use client";
import React, { useState } from "react";
import Image from "next/image";
import { socialLinks } from "@/enums/DummyData";
import { En } from "@/enums/En";
import Link from "next/link";

const NavBar = () => {
  const [showBuger, setShowBuger] = useState(true);

  const handleNavVisible = () => [setShowBuger(!showBuger)];
  let showIcon = showBuger ? "/burger.svg" : "/cross.svg";
  return (
    <header className="text-gray-600 body-font bg-slate-700 transition-all duration-1000 ease-in" >
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
        <a className={`flex title-font font-medium items-center text-gray-900 ${!showBuger && "mb-4"} md:mb-0 cursor-pointer`}>
          <Image
            className="over:-translate-y-1 size-14 rounded-full border-[2px] hover:scale-110 duration-300 cursor-pointer"
            src="/logo.JPG" // Path to your image inside the 'public' folder
            alt="My Image"
            width={50}
            height={50}
            />
        </a>
        <Image
          className="flex md:hidden over:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
          // style={{ position: "absolute", right: "1rem", top: "1.7rem" }}
          src={showIcon}
          alt="My Image"
          width={showBuger ? 30 : 45}
          height={showBuger ? 30 : 45}
          onClick={handleNavVisible}
          />
          </div>
        <nav
          className={`md:ml-auto md:mr-auto  flex-wrap items-center text-base justify-center ${
            showBuger && "hidden"
          } md:flex`}
        >
          <Link href={"/"} className="mr-5 text-white over:-translate-y-1 hover:scale-110 duration-300 font-medium cursor-pointer">
            {En.home}
          </Link>
          <Link href={"/services"} className="mr-5 text-white over:-translate-y-1 hover:scale-110 duration-300 font-medium cursor-pointer">
            {En.services}
          </Link>
          <Link href={""} className="mr-5 text-white over:-translate-y-1 hover:scale-110 duration-300 font-medium cursor-pointer">
            {En.blog}
          </Link>
          <Link href={"/portfolio"} className="mr-5 text-white over:-translate-y-1 hover:scale-110 duration-300 font-medium cursor-pointer">
            {En.portfolio}
          </Link>
        </nav>

        <div
          className={`inline-flex gap-2 items-center text-black border-0 py-2 px-4 focus:outline-none rounded text-lg mt-4 md:mt-0 ${
            showBuger && "hidden"
          } md:flex`}
        >
          {socialLinks.map((item: any) => {
            return (
              <a key={item.icon} href={item.link} target="_blank" rel="noopener noreferrer">
                <Image
                  className="over:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                  src={item.icon} // Path to your image inside the 'public' folder
                  alt="My Image"
                  width={item.size}
                  height={item.size}
                />
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
