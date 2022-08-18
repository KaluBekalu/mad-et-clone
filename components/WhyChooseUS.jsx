import React from "react";
import Image from "next/dist/client/image";

function WhyChooseUS() {
  return (
    <div className="mt-90 py-40  max-w-[1350px] mx-auto px-6 grid md:grid-cols-2 md:mt-8 items-center gap-8 justify-center">
      <Image className="rotating" src="/images/image.webp" width={700} height={700} alt="logo" />
      <div className="ml-10">
        <h2 className="text-3xl">Why Choose us?</h2>
        <p className="mt-3 text-lg">
          We believe that all companies and entrepreneurs have a story to tell,
          people they’d like to connect with and partners they’d like to work
          with. And through our design, strategy and development expertise, we
          can help you reach your goals.
        </p>
      </div>
    </div>
  );
}

export default WhyChooseUS;
