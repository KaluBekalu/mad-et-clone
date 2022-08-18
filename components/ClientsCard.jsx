import React from "react";
import Image from "next/dist/client/image";

function Card({ image, width, height }) {
  return (
    <div className="bg-gray-300 p-5 shadow-md mx-5 w-[400px] h-[300px] rounded-lg flex justify-center align-middle first-letter:
    transition ease-in-out delay-200 hover:-translate-y-1 hover:hover:bg-blue-500 duration-800
    ">
      <div className="justify-center items-center flex ">
        <Image 
        className=""
        src={image} width={width} height={height} />
      </div>
    </div>
  );
}

export default Card;
