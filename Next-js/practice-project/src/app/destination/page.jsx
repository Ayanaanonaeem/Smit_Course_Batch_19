"use client"
import React from "react";
import { useRouter } from "next/navigation";

const destination = () => {
    
  const city = ["NewYork", "Paris", "Tokyo"];
  const router=useRouter()
  return (
    <div className=" w-full h-[700px] flex flex-col justify-center items-center bg-black">
      <div className="text-white">Destination</div>
      <div className="flex flex-col items-center justify-center gap-3 mt-4">
        {city.map((item, idx) => (
          <div
            key={idx}
            className="w-[200px] h-[100px] rounded-lg flex items-center justify-center bg-white text-black hover:opacity-[0.5]"
            onClick={()=>router.push(`/destination/${item}`)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default destination;
