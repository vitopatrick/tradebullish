import React from "react";

type Props = {};

let services = [
  {
    id: 1,
    title: "Radically Lower Costs",
    description:
      "We're committed to reducing your Cryptocurrency trading expenses. Our commission rates are, on average, 36% lower* than our closest competitors. When we say we want to lower the price that people pay to trade Cryptocurrency, we mean it.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_1+%281%29-1280w.png",
  },
  {
    id: 2,
    title: "$0 Commission US Share Trading",
    description:
      "Most brokers charge $5-$10 per trade for US Share CFDs. True to our mission, we're charging $0 commission.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_2-1920w.png",
  },

  {
    id: 4,
    title: "RDP Services",
    description:
      "Protect your business with our secure RDP services, ensuring the safety and integrity of your operations.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_3-1920w.png",
  },
  {
    id: 5,
    title: "Leads",
    description:
      "Grow your business with our high-quality, industry-specific leads tailored to Cryptocurrency brokers.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_1+%283%29-1920w.png",
  },
];

const OurServices = (props: Props) => {
  return (
    <div className="my-[5rem]">
      {/* container */}
      <section className="w-[80%] p-4 mx-auto">
        <h4 className="w-full md:w-[60%] py-3 font-headerTwo text-3xl font-semibold md:text-4xl">
          Our Services: Empowering Cryptocurrency Brokers
        </h4>
        <p className="font-headerTwo font-semibold">
          Access everything you need for success, all in one place.
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[2rem]">
          {services.map((service) => (
            <div key={service.id}>
              <div>
                <img src={service.image} alt="" className="rounded-md" />
              </div>
              <div>
                <h4 className="font-headerTwo text-2xl my-2 font-semibold">
                  {service.title}
                </h4>
                <p className="text-sm font-body font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
