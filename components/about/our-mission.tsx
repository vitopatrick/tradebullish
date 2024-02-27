import React from "react";

type Props = {};

const OurMission = (props: Props) => {
  return (
    <div className="my-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto">
        <div>
          <h4 className="text-2xl md:text-4xl font-headerTwo  font-semibold">
            Our Mission
          </h4>
          <p className="md:w-[60%] font-body font-light ">
            Our mission at equity plus is to provide the best possible service
            and support to our clients. We strive to simplify Cryptocurrency
            brokerage operations, increase customer satisfaction, and ultimately
            drive business success. We are committed to staying up-to-date with
            industry trends and technologies to ensure our clients have the
            tools they need to succeed. With a focus on personalized service,
            quality solutions, and a dedicated support team, we are proud to be
            a trusted partner for Cryptocurrency brokers around the world.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
