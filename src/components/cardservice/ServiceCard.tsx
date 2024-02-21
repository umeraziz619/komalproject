import React,{memo} from "react";

const ServiceCard = ({ item }: any) => {
  return (
    <div className="mx-5 relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 my-10 sm:mx-auto md:mx-10">
      <div className="flex justify-center items-center relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        {/* ==== Render Svg Here ===== */}
        {item?.svg ? <item.svg /> : <img src={item?.image} />}
        {/* <NextjsSvg/> */}
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {item?.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
