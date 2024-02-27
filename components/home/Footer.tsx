import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white h-[300px]">
      {/* container  */}
      <section className="w-[80%] mx-auto translate-y-8">
        <div className=" p-4 md:grid grid-cols-2">
          {/* FLEX / GRID */}
          <div className="space-y-4">
            <h4 className="font-body font-light text-neutral-300">Office</h4>
            <div>
              <p className="font-headerTwo font-bold text-xl my-2">
                Dubai - United Arab Emirates
              </p>
              <p className="font-headerTwo font-bold text-xl my-2">
                London - United Kingdom
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-body font-light text-neutral-300">Email Us</h4>
            <h4 className="font-headerTwo font-bold text-xl">
              support@equityplus.online
            </h4>
          </div>
        </div>
        {/* CopyRight */}
        <div className="my-4 p-4">
          <p className="font-body text-xs font-light">
            © 2023 All Rights Reserved | Equity Plus
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
