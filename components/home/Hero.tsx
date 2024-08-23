import Link from "next/link";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div
      style={{
        background:
          "url('https://lirp.cdn-website.com/eacf0b23/dms3rep/multi/opt/BG1-1920w.jpg')",
      }}
      className="md:h-[500px] h-[600px] relative "
    >
      {/* overlay */}
      <div className="absolute top-0 w-full py-[4rem]  h-full bg-gradient-to-br from-black to-black/30 right-0 left-0">
        {/* container */}
        <section className="w-[90%] mx-auto p-4 space-y-6">
          <h4 className="md:text-5xl text-4xl text-white  font-headerTwo font-semibold md:w-[60%] w-full">
            The Ultimate <br /> One-Stop-Shop for Trading
          </h4>
          <p className="font-body md:w-[50%] leading-normal font-light text-white">
            Discover a world of convenience with our comprehensive suite of
            services, tailored to meet the needs of Crypto/Cryptocurrency
            brokers.
          </p>
          <div className="flex gap-4">
            <Link
              href="/login"
              className="font-headerTwo   px-6 py-3   rounded w-fit font-semibold bg-white"
            >
              Login
            </Link>
            <Link
              href="/get-started"
              className="font-headerTwo  px-6 py-3  bg-blue-900  rounded w-fit font-semibold text-white"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
