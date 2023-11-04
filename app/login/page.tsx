"use client";
import LoginForm from "@/components/login-form/LoginForm";
import { ToastContainer } from "react-toastify";

export default function LoginPage() {
  return (
    // Page wrapper
    <div className="h-screen w-[90%] mx-auto md:grid mt-[4rem] grid-cols-2 gap-[3rem] place-items-center ">
      <div className="hidden md:block">
        <h4 className="font-headerTwo text-5xl font-bold">
          We Believe in Simplicity is <br />
          sophistication
        </h4>
      </div>
      <div className="w-full">
        <LoginForm />
      </div>
      <ToastContainer theme="colored" className="toast" />
    </div>
  );
}
