import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div>
      {/* flex container */}
      <section className="w-[80%] py-[4rem] my-[2rem] flex flex-col md:flex-row mx-auto gap-8 md:gap-4">
        <div className="flex-1 w-full">
          <h4 className="font-headerTwo text-6xl font-bold">Write Us</h4>
        </div>
        <div className="w-full flex-1">
          <Form />
        </div>
      </section>
    </div>
  );
};

const Form = () => {
  return (
    <div className="w-full">
      <form className="w-full space-y-8">
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bodyTwo">
            Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bodyTwo">
            Email
          </label>
          <input
            type="email"
            placeholder="JohnDoe@example.com"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-bodyTwo">
            Phone
          </label>
          <input
            type="tel"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
        </div>
        {/* phone Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="font-bodyTwo">
            Message
          </label>
          <input
            type="text"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
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

export default ContactForm;
