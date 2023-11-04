"use client";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function GetStarted() {
  return (
    // page Wrapper
    <>
      {/* main form wrapper */}
      <main className="w-[90%] mx-auto md:grid grid-cols-2 place-items-center h-screen ">
        <div className="hidden md:block">
          <h4 className="font-headerTwo font-bold text-4xl underline">
            Register now to trade with <br /> confidence
          </h4>
        </div>
        <RegisterForm />
      </main>
      {/* End of Form Wrapper */}
      <ToastContainer className="toast" theme="colored" />
    </>
  );
}
