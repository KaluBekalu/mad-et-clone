import React from "react";
import Card from "../Misc/Card";

const cardData = [
  {
    key:0,
    title: "DESIGN",
    items: ["Web & App Design", "UX / UI Design", "Graphics & Illustration"],
  },
  {
    key:1,
    title: "DEVELOPMENT",
    items: [
      "Web & App Development",
      "Custom Development Solutions",
      "Content Managment System",
    ],
  },
  {
    key:2,
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
          return <Card key={i.key} data={i}  />;
        })}
      </div>
    </div>
  );
}

export default Capabilities;
