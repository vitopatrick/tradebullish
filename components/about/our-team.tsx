import React from "react";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <div className="my-[4rem]">
      {/* container */}
      <section className="w-[80%] mx-auto">
        <div>
          <h4 className="text-2xl md:text-4xl font-headerTwo font-semibold">
            Our team
          </h4>
          <p className="md:w-[60%] font-body font-light">
            Our team is made up of experienced professionals with a deep
            understanding of the Cryptocurrency industry. We are dedicated to
            providing our clients with personalized solutions tailored to their
            unique business needs. Get to know some of our team members below.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
