import { Footer, NavBar,ServiceCard } from "@/components";
import React from "react";
import { serviceData } from "@/enums/DummyData";

const Services = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-wrap mx-10">
      {
        serviceData?.map(item=>{
          return <ServiceCard key={item.id} item={item}/>
        })
      }
      </div>
      <Footer />
    </>
  );
};

export default Services;
