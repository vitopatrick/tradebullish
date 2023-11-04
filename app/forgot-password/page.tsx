"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

// Type for form
type FormValue = {
  email: string;
};

// Schema for form validation
const schema = yup.object({
  email: yup
    .string()
    .email("wrong email format")
    .required("email is required for reset link"),
});

export default function ForgotPassword() {
  // react hook form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  // send the firebase reset links
  const onSubmit = async (formValue: FormValue) => {
    await sendPasswordResetEmail(auth, formValue.email);
    toast("Email sent", {
      position: "bottom-right",
      type: "success",
      bodyClassName: "toast",
    });
  };

  return (
    // page wrapper
    <div>
      <section>
        <div className="p-3 md:w-[35%] mx-auto">
          <div className="space-y-2 my-4">
            <h4 className="font-headerTwo text-3xl font-semibold">
              Forgot your password
            </h4>
            <p className="text-neutral-400 font-bodyTwo underline">
              Enter the email address associated with your account, and we will
              email you a link to reset your password
            </p>
          </div>
          <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col font-bodyTwo my-4 gap-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className={
                  errors.email?.message
                    ? "p-3 rounded-lg outline-none border-b-2 border-red-500"
                    : "p-3 rounded-lg outline-none  border-b-2 border-black"
                }
                {...register("email")}
              />
              <p className="font-bodyTwo text-red-500 text-sm capitalize">
                {errors.email?.message}
              </p>
            </div>
            <button
              disabled={!isValid}
              className={
                !isValid
                  ? "bg-neutral-400 p-4 rounded-lg text-neutral-200 w-full font-headerTwo"
                  : "bg-black p-4 rounded-lg text-white w-full font-headerTwo"
              }
            >
              Send Reset link
            </button>
          </form>
          <div className="flex items-center justify-center my-3 gap-1 font-bodyTwo text-neutral-400 text-center">
            <p>Remembered your password</p>{" "}
            <Link href="/login" className="text-black underline">
              Login
            </Link>
          </div>
        </div>
        <ToastContainer bodyClassName="toast" theme="colored" />
        <DevTool control={control} />
      </section>
      {/* end of form */}
    </div>
  );
}
