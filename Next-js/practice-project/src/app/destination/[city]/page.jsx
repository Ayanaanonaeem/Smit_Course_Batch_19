import React from "react";
import Image from "next/image";
import paris from "@/assets/images.jpg";
import tokyo from "@/assets/tokyo.jpg";
import newYork from "@/assets/newyork.jpg";

const city = async ({ params }) => {
  const { city } = await params;
  return (
    <div className="text-black mt-15">
      Hello {city}
      {city == "NewYork" && <Image src={newYork} height={300} width={400} />}
      {city == "Paris" && <Image src={paris} height={300} width={400} />}
      {city == "Tokyo" && <Image src={tokyo} height={300} width={400} />}
    </div>
  );
};

export default city;
