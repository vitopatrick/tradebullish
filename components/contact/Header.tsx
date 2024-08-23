import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="py-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto py-4">
        <h4 className="font-headerTwo md:w-[60%] text-2xl font-semibold">
          We would love to hear from you! If you have any questions about our
          services, would like to request a quote, or simply want to learn more
          about Trade bullish, please don't hesitate to get in touch
        </h4>
        <div></div>
      </section>
    </div>
  );
};

export default Header;
