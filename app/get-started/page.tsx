"use client";

import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function GetStarted() {
  return (
    // page Wrapper
    <div>
      {/* form body wrapper,also the flex box container */}
      <section className="flex">
        <div className="bg-[#4159DF] hidden md:block">
          <h4 className="font-body underline capitalize text-2xl text-neutral-300 p-6">
            A True place for investors, Join and experience another level of
            cryptomania
          </h4>
          <img
            src="/registration_svg.svg"
            alt="svg img showing nagamarkets"
            className="w-[80%] mx-auto"
          />
        </div>
        {/* form wrapper */}
        <div className="p-3 min-h-0 overflow-auto">
          <RegisterForm />
        </div>
        {/* end of the form wrapper */}
      </section>
      {/* end of form body wrapper */}
      <ToastContainer className="toast" theme="colored" />
    </div>
  );
}
