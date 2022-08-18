import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "DESIGN",
    items: ["Web & App Design", "UX / UI Design", "Graphics & Illustration"],
  },
  {
    title: "DEVELOPMENT",
    items: [
      "Web & App Development",
      "Custom Development Solutions",
      "Content Managment System",
    ],
  },
  {
    title: "MARKETING",
    items: ["SEO Consultation", "SEO / SMO"],
  },
];

function Capabilities() {
  return (
    <div className="w-auto flex justify-center flex-col py-40 px-40">
      <h3 className="text-3xl text-center mb-20 font-semibold tracking-widest">
        CAPABLITIES
      </h3>
      <div className="columns-3 px-40 justify-center ">
        {cardData.map((i) => {
          return <Card data={i} />;
        })}
      </div>
    </div>
  );
}

export default Capabilities;
