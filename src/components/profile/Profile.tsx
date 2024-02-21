import { En } from "@/enums/En";
import Image from "next/image";
import React,{memo} from "react";

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
          {En.name}
        </h3>
        <div className="flex items-center justify-center">
          <Image alt="missing" className="mr-2 text-lg flex" src="/location.svg" width={20} height={20} />
          <h2 className="text-base font-semibold text-slate-700">{En.country}</h2>
        </div>
        <div className="flex items-center justify-center mt-10 mb-2">
        <h2 className="text-base font-semibold text-slate-700">{En.field}</h2>
        </div>
        <div className="flex items-center justify-center mb-2">
        <h2 className="text-base font-semibold text-slate-700">{En.education}</h2>
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-sm leading-relaxed text-slate-700">
              {En.aboutdes}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
  </>
  )
};

export default memo(Profile);
