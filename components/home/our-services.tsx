import React from "react";

type Props = {};

let services = [
  {
    id: 1,
    title: "CRM System",
    description:
      "Streamline your client management with our intuitive and powerful CRM system designed for Forex brokers.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_1+%281%29-1280w.png",
  },
  {
    id: 2,
    title: "WebTrader",
    description:
      "Offer a seamless trading experience to your clients with our user-friendly and feature-rich WebTrader platform.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_2-1920w.png",
  },
  {
    id: 3,
    title: "PBX and VoIP System",
    description:
      "Enhance your communication infrastructure with our cost-effective and scalable PBX and VoIP solutions.",
    image:
      "https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/0_1+%282%29-1920w.png",
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
      "Grow your business with our high-quality, industry-specific leads tailored to Forex brokers.",
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
          Our Services: Empowering Forex Brokers
        </h4>
        <p className="font-headerTwo font-semibold">
          Access everything you need for success, all in one place.
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-[2rem]">
          {services.map((service) => (
            <div key={service.id}>
              <div>
                <img src={service.image} alt="" className="rounded-md" />
              </div>
              <div>
                <h4 className="font-headerTwo text-2xl my-2 font-semibold">
                  {service.title}
                </h4>
                <p className="text-sm font-bodyTwo">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
