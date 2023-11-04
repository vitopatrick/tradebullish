import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <section className="w-[80%] mx-auto p-4 space-y-3">
        <h4 className="text-2xl md:text-4xl font-headerTwo font-semibold">
          One-Stop-Shop for Forex Brokers: Our Comprehensive Services
        </h4>
        <p className="font-headerTwo md:text-2xl font-semibold md:w-[60%]">
          Discover how we can help you simplify and streamline your Forex
          brokerage operations with our suite of services.
        </p>
      </section>
    </div>
  );
};

export default Header;
