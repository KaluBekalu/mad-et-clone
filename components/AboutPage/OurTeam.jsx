import React from "react";
import Image from "next/dist/client/image";
import TeamCard from "./TeamCard";

const team = [
  {
    image: "/images/team/1.webp",
    name: "Estephanos Zewdie",
  },
  {
    image: "/images/team/2.webp",
    name: "Kaland Getahun",
  },
  {
    image: "/images/team/3.webp",
    name: "Lwam Berhane",
  },
  {
    image: "/images/team/4.webp",
    name: "Michael Mekonnen",
  },
  {
    image: "/images/team/5.webp",
    name: "Henok Solomon",
  },
  {
    image: "/images/team/6.webp",
    name: "Besufekad Tamiru",
  },
  {
    image: "/images/team/7.webp",
    name: "Hayelom Tizazu",
  },
];

function OurTeam() {
  return (
    <div className="my-10">
      <h2 className="text-center text-2xl  md:text-4xl font-semibold text-gray-600">OurTeams</h2>
      <div className="max-w-[1350px] grid grid-cols-4  m-auto">
      {team.map((member) => (
        <TeamCard key={member.name} member={member}/>
      ))}
      </div>
    </div>
  );
}

export default OurTeam;
