import React from "react";
import Image from "next/dist/client/image";

function OurPurpose() {
  return (
    <div className="relative overflow-hidden py-0 h-screen">
      <div className="flex justify-center max-w-[1350px] m-auto my-30">
        <div className="w-[50%] items-center">
          <Image
            src="/images/our-purpose.webp"
            width={800}
            height={800}
            alt="Our purpose illustration"
          />
        </div>
        <div className="w-[50%] items-end justify-center m-auto flex flex-col">
          <h2 className="text-2xl md:text-4xl font-semibold text-left md:text-right text-white">Our Purpose</h2>
          <p className="ml-40 mt-4 md:mt-8  leading-7 text-lg text-left md:text-right text-white">
            We are here to take you digital. Our main purpose is to understand
            your business and help you find the best way to spread your ideas to
            your target audience
          </p>
        </div>
      </div>
      <div className="bg-primary h-screen absolute w-[50%] top-0 z-[-10] right-0"></div>
    </div>
  );
}

export default OurPurpose;
