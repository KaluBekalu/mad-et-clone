import React from "react";

function Card({ data }) {
  const { title, items } = data;

  return (
    <div className="p-5 shadow-md mx-5 w-[400px] h-[300px] rounded-lg    ">
      <h2 className="text-xl mb-5 text-center font-semibold">{title}</h2>
      <h2 className="w-40 mx-auto text-center border-b-2 mb-10" />
      <ul className="list-disc ml-6 ">
        {items.map((i) => (
          <li className="text-m md:text-base text-gray-500 ml-3">{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
