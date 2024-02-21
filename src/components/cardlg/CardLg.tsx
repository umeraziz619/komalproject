import React from "react";
import Image from "next/image";

interface CardLgProps{
    image:string,
    title:string,
    description:string,
}
const CardLg = ({image,title,description}:CardLgProps) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          style={{ borderRadius: "2rem" }}
          src={image}
          className="object-cover object-center h-full w-full max-md:w-96 max-sm:mx-auto"
          alt="My Image"
          height={1000}
          width={1000}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5 text-center">
        {title}
      </h2>
      <p className="text-base leading-relaxed mt-2 text-center">
        {description}
      </p>
      <a className="text-white bg-slate-700 py-2 px-4 inline-flex items-center mt-3 rounded-2xl mb-8">
        Watch
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  );
};

export default CardLg;
