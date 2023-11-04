import Link from "next/link";
import React from "react";

type Props = {};

const ForBrokers = (props: Props) => {
  return (
    <div className="bg-black  text-white py-[3rem]">
      {/* container */}
      <section className="w-[80%] mx-auto p-4 space-y-6 ">
        <h4 className="text-white text-4xl font-headerTwo font-semibold">
          Connect with our team today to learn how our one-stop-shop solution
          can help you achieve success.
        </h4>
        <p className="font-semibold font-headerTwo">
          Ready to Simplify Your Crypto Brokerage
        </p>
        <Link
          href="/login"
          className="bg-white text-black font-headerTwo font-medium p-4 rounded-md inline-block"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default ForBrokers;
