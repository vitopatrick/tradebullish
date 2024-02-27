import React from "react";

type Props = {};

const industries = [
  "Embrace secure RDP services for a safer working environment.",
  "Capitalize on quality leads to drive business growth.",
  "Discover new technologies transforming Cryptocurrency trading.",
  "Explore the growing demand for mobile trading solutions and how to leverage this trend to better serve your clients.",
];

const IndustryServices = (props: Props) => {
  return (
    <div className="my-[5rem]">
      {/* container */}
      <section className="w-[80%] p-4 mx-auto space-y-4">
        <h4 className="font-headerTwo font-semibold text-3xl md:text-4xl">
          Stay Ahead of the Game with Industry Insights
        </h4>
        <p className="font-semibold font-headerTwo text-2xl">
          Keep up to date with the latest trends and innovations in the
          Cryptocurrency industry.
        </p>
        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {industries.map((industry) => (
            <div key={industry}>
              <h4 className="text-2xl font-headerTwo font-medium">
                {industry}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustryServices;
