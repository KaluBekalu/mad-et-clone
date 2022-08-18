import React from "react";
import Card from '../Misc/ClientsCard'


const customers = [
    {
      url: "/images/renew.webp",
      width: "200px",
      height: "40px",
    },
    {
      url: "/images/precise.webp",
      width: "180px",
      height: "50px",
    },
    {
      url: "/images/251.webp",
      width: "150px",
      height: "150px",
    },
  ];

function Featured() {
  return (
    <div className="w-auto flex justify-center  flex-col px-40 py-30">
      <h3 className="text-3xl text-center mb-20 font-semibold tracking-widest">
        FEATURED CLIENTS
      </h3>
      <div className="columns-3 px-40 mb-40 justify-center">
        {customers.map((i) => {
          return (
            <Card
              key={i}
              image={i.url}
              width={i.width}
              height={i.height}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
