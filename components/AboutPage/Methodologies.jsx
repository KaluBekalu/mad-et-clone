import React, { useState } from "react";

function Methodologies() {
  const [selected, setSelected] = useState(0);

  const data = [
    {
      index: 0,
      title: "Collaborative Development",
      text: "We work with you to understand your needs, design a work process and implement software solutions to help you with your business.",
      list: [],
    },
    {
      index: 1,
      title: "Agile",
      text: "Customer and User Experience has never been more important. By using Agile as our base software development methodology, we work to keep you and your customers involved in the feedback loop and building on suggestion to enhance usability and customer satisfactions In addition, By using Agile, we offer.",
      list: [
        "Faster deployment times",
        "Higher product quality",
        "Increased project control and transparency",
        "Risk mitigation",
        "Faster adaptation",
        "More predictable costs and schedules",
      ],
    },
    {
      index: 2,
      title: "Test Driven Development",
      text: "By implementing test-driven design and development, we create automated tests to verify desired functionality before the code that implements the functionality is written. The goal is then to write minimal code to make these tests pass. By using TDD, we",
      list: [
        "reduce the time required for a project development",
        "ensure better program design and higher code quality",
        "save project costs in the long run",
      ],
    },
    {
      index: 3,
      title: "Iterative Design Methodology",
      text: "By Using Iterative Design, we develop the minimum variable product initially and develop and improve as we go. For us a product is never finished and by making the feedback loop as amll as possible, we work with our clients to build the product, analyze and build again. By iterating, we",
      list: [
        "improve usability",
        "ship products faster",
        "minimize redesigns resulting in short development time",
        "lower product development cost for our clients",
      ],
    },
  ];

  return (
    <div className="max-w-[1350px] m-auto py-40">
      <h3 className="text-2xl md:text-4xl font-bold text-gray-600">
        <span className="block">OUR METHODOLOGY</span>
        <span className="block">&amp; PRACTICES</span>
      </h3>
      <div className="flex justify-between">
        <div className=" flex-1">
          {data.map((item) => (
            <div
              key={item.index}
              className="flex flex-col cursor-pointer my-10"
              onClick={() => setSelected(item.index)}
            >
              <h2
                className={`text-xl border-l-4 py-1 ${
                  selected == item.index ? "border-blue-700" : "border-gray-300"
                } pl-8 rounded-sm font-medium `}
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-blue-600 my-5">
            {data[selected].title}
          </h2>
          <p>{data[selected].text}</p>
          <ul className="ml-10 mt-3 list-disc">
            {data[selected].list.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Methodologies;
