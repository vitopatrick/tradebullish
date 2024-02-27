import React from "react";

type Props = {};

const ReachOut = (props: Props) => {
  return (
    <div className="w-[80%] mx-auto p-4">
      <div className="my-[2rem] space-y-4">
        <h4 className="font-headerTwo font-semibold md:text-6xl text-3xl">
          Get In Touch
        </h4>
        <p className="font-headerTwo font-semibold md:text-3xl text-xl">
          Contact Us
        </p>
      </div>
      <form className="w-full space-y-8">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-body">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border-b-2 p-3 border-neutral-400 font-body"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-body">
            Email
          </label>
          <input
            type="email"
            placeholder="JohnDoe@example.com"
            className="border-b-2 p-3 border-neutral-400 font-body"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-body">
            Phone
          </label>
          <input
            type="tel"
            className="border-b-2 p-3 border-neutral-400 font-body"
          />
        </div>
        {/* phone Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-body">
            Message
          </label>
          <input
            type="text"
            className="border-b-2 p-3 border-neutral-400 font-body"
          />
        </div>

        {/* button */}
        <button
          type="submit"
          className={
            "font-headerTwo font-semibold bg-black w-full p-4 text-white rounded-md"
          }
        >
          Send A Message
        </button>
      </form>
    </div>
  );
};

export default ReachOut;
