import React from "react";
import Image from "next/dist/client/image";

function AboutHero() {
  return (
    <div className="bg-gray-100">
      <div className=" flex items-center justify-between py-20 w-full max-w-[1350px] self-center m-auto">
        <div className="w-[50%] h-auto md:h-auto md:pr-20 2xl:pr-36 order-2 md:order-1  mt-5 md:mt-0">
          <h1 className="text-2xl md:text-4xl font-semibold">
            <span className="xl:block">WE ASPIRE</span>
            <span className="ml-2 xl:block xl:ml-0">TO MAKE A DIFFERNCE</span>
          </h1>
          <p className="mt-4 md:mt-8 text-textSecondary leading-7 text-lg">
            Different individuals, a diverse mindset and a growing team. <br />{" "}
            We are all here to serve your needs.
          </p>
        </div>
        <div className="relative order-1 md:order-2">
          <div className="relative aspect-w-5 aspect-h-4 w-full  ">
            <div className="">
              <Image
                src="/images/about-hero.webp"
                width={500}
                height={500}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
