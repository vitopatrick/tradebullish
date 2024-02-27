import React from "react";

type Props = {};

let services = [
  {
    id: 1,
    title: "CRM System: Streamline Your Client Management",
    description:
      "Our intuitive and powerful CRM system is tailored to meet the needs of Cryptocurrency brokers. With its user-friendly interface, you can easily manage client data, track leads, and monitor sales activity. Our CRM system also offers advanced reporting features, enabling you to gain insights into your business performance and make data-driven decisions.",
  },
  {
    id: 2,
    title: "WebTrader: Offer a Seamless Trading Experience",
    description:
      "Our WebTrader platform is designed to offer a seamless trading experience to your clients. With its intuitive interface and comprehensive features, your clients can trade with ease, access real-time market data, and manage their accounts from any device. Our WebTrader platform is also fully customizable, enabling you to tailor it to your brand and business needs.",
  },
  {
    id: 3,
    title: "PBX and VoIP System: Enhance Your Communication",
    description:
      "Our cost-effective and scalable PBX and VoIP solutions enable you to enhance your communication infrastructure and better serve your clients. With our state-of-the-art system, you can easily manage calls, set up voicemail, and receive faxes, all while reducing your communication costs. Our PBX and VoIP system is also highly customizable, enabling you to configure it to your business needs.",
  },
  {
    id: 4,
    title: "RDP Services: Protect Your Business with Secure Remote Desktops",
    description:
      "Our RDP services provide secure remote desktops for Cryptocurrency brokers, ensuring the safety and integrity of your operations. With our RDP services, you can easily access your trading platform and client data from any device, all while ensuring that your data is protected with the latest security protocols. Our RDP services are also highly scalable, enabling you to adapt to your business needs.",
  },
  {
    id: 5,
    title: "Leads: Grow Your Business with Quality Industry-Specific Leads",
    description:
      "Our high-quality, industry-specific leads are tailored to Cryptocurrency brokers, enabling you to grow your business with ease. Our leads are generated through proven methods and are highly targeted to ensure that you reach the right audience. With our leads, you can focus on what you do best, while we help you build your client base.",
  },
];

const OurServices = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[80%] mx-auto p-4 my-[3rem]">
        <h3 className="text-2xl md:text-4xl font-headerTwo font-semibold">
          Our Services
        </h3>
        {/* Grid container */}
        <div className="my-[2rem] grid  grid-cols-1 md:grid-cols-2 gap-[2rem]">
          {services.map((service) => (
            <div className="space-y-4">
              <h4 className="font-headerTwo font-semibold text-2xl">
                {service.title}
              </h4>
              <p className="font-body font-light leading-loose">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurServices;
