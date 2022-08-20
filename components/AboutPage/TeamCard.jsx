import React, { useEffect } from "react";
import Image from "next/dist/client/image";

function TeamCard({ member }) {
  const { name, image } = member;

  return (
    <div className="my-5">
      <Image src={image} width={290} height={288} />
      <p className="text-center text-xl mt-4">{name}</p>
    </div>
  );
}

export default TeamCard;
