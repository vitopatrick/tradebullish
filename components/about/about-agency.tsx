import React from "react";

type Props = {};

const AboutAgency = (props: Props) => {
  return (
    <div>
      {/* container flex */}
      <div className=" w-[80%] mx-auto p-4 md:grid grid-cols-3 gap-8">
        <div className="w-full flex-1">
          <h4 className="md:text-5xl text-3xl font-headerTwo font-semibold">
            About our <br /> agency
          </h4>
        </div>
        <div className=" col-span-2">
          <img
            src="https://lirp.cdn-website.com/md/dmtmpl/79e0465b-e8f6-4765-a620-8f926a3b70b6/dms3rep/multi/opt/three_people_team-1920w.jpg"
            alt="pic"
            className="rounded-md w-full"
          />
          <div className="w-full">
            <h4 className="font-headerTwo font-semibold text-2xl md:text-4xl my-3">
              One-Stop-Shop for Forex Brokers: Our Comprehensive Services
            </h4>
            <p className="font-headerTwo font-medium text-[0.9rem]">
              At Broker Base, we are passionate about helping Forex brokers
              succeed. Our comprehensive suite of services is designed to
              simplify operations, improve customer satisfaction, and ultimately
              increase profitability for our clients. With years of experience
              in the Forex industry, we understand the challenges and
              opportunities that brokers face and are committed to providing the
              highest quality service and support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgency;
