import Image from "next/image";
import React from "react";

const Profile = () => {
  return( <>
  <section className="pt-2 bg-blueGray-50">
<div className="w-full lg:w-4/12 px-4 mx-auto">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
          <div className="relative">
          <Image
            src="/logo.JPG"
            className="over:-translate-y-1 hover:scale-110 duration-300 cursor-pointer rounded-2xl"
            alt="My Image"
            width={250}
            height={250}
          />
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          Komal Paul
        </h3>
        <div className="flex items-center justify-center">
          <Image alt="missing" className="mr-2 text-lg flex" src="/location.svg" width={20} height={20} />
          <h2 className="text-base font-semibold text-slate-700">India</h2>
        </div>
        <div className="flex items-center justify-center mt-10 mb-2">
        <h2 className="text-base font-semibold text-slate-700">Softwre Engineer</h2>
        </div>
        <div className="flex items-center justify-center mb-2">
        <h2 className="text-base font-semibold text-slate-700">BCS (Gandu)</h2>
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-sm leading-relaxed text-slate-700">
            Experienced web developer with a track record of completing e-commerce and video calling applications. Hackathon winner, demonstrating creativity and problem-solving prowess. Proficient in both front-end and back-end technologies. Committed to delivering seamless user experiences. Passionate about staying ahead in the dynamic tech landscape
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          {/* Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>. */}
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
  </>
  )
};

export default Profile;
