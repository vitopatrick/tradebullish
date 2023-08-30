"use client";

import Link from "next/link";
import { useState } from "react";
// import Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthHeader from "@/components/headers/AuthHeader";
// react hook form
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import LoadingModal from "@/components/modals/LoadingModal";

// form types
type formValues = {
  email: string;
  password: string;
};

// the form schema validation
const schema = yup.object({
  email: yup.string().email("wrong email format").required("Email is required"),
  password: yup.string().min(6).required("password is required"),
});

export default function LoginPage() {
  // state to manage the password and text visibility
  const [isText, setIsText] = useState(false);
  // next navigation
  const router = useRouter();
  // react hook form
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<formValues>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // submit to firebase
  const loginUser = async (values: formValues) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // add the refresh token to localStorage
      localStorage.setItem("token", user.refreshToken);

      router.push("/dashboard");
    } catch (error: any) {
      // check if the email is a valid email address
      switch (error.code) {
        case "auth/invalid-email":
          return toast(
            "Invalid Email Address,please use a valid email address",
            {
              type: "error",
              bodyClassName: "toast",
              position: "bottom-center",
            }
          );
        case "auth/internal-error":
          return toast("Server Error Please Refresh your browser or tab", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/wrong-password":
          return toast("Password is incorrect", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/user-not-found":
          return toast("User Does not exist", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        case "auth/network-request-failed":
          return toast("Poor internet Connection", {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
        default:
          return toast(error.code, {
            type: "error",
            bodyClassName: "toast",
            position: "bottom-center",
          });
      }
    }
  };

  return (
    // Page wrapper
    <div>
      <AuthHeader />
      {/* form wrapper */}
      <div className="md:w-[30%] w-[90%] mx-auto">
        <div className="flex items-center justify-center">
          <h1 className="font-header text-3xl  capitalize">
            <span className="font-bold underline"> Sign in</span> to account
          </h1>
        </div>
        <form
          className="space-y-4"
          onSubmit={handleSubmit(loginUser)}
          noValidate
        >
          <div className="flex flex-col gap-1 my-6">
            <label htmlFor="email" className="font-body">
              Email
            </label>
            <input
              type="email"
              id="email"
              className={
                errors.email?.message
                  ? "border border-red-500 rounded-lg p-4 outline-none font-body"
                  : "border border-main rounded-lg p-4 outline-none font-body"
              }
              {...register("email")}
            />
            {errors.email?.message && (
              <p className="font-body text-red-500 capitalize">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="font-body">
              Password
            </label>
            <div
              className={
                errors.password?.message
                  ? "flex items-center border border-red-500 rounded-lg bg-white p-2"
                  : "flex items-center border border-main rounded-lg bg-white p-2"
              }
            >
              <input
                type={isText ? "text" : "password"}
                id="password"
                className="w-full bg-transparent outline-none p-2 font-body"
                {...register("password")}
              />
              {/* show eye if the password is true else show eye slash if the password is false */}
              {isText ? (
                <FaEye
                  size={"25px"}
                  className="cursor-pointer"
                  onClick={() => setIsText(false)}
                />
              ) : (
                <FaEyeSlash
                  size={"25px"}
                  className="cursor-pointer"
                  onClick={() => setIsText(true)}
                />
              )}
            </div>
            {errors.password?.message && (
              <p className="font-body text-red-500 capitalize">
                {errors.password?.message}
              </p>
            )}
          </div>
          <button
            disabled={!isValid}
            className={
              !isValid
                ? "bg-main/50 font-header p-4 text-white w-full rounded-lg"
                : "bg-main font-header text-white p-4 w-full rounded-lg"
            }
          >
            Sign In
          </button>
          <Link href="/forgot-password">
            <p className="text-right capitalize my-3 text-main font-body hover:underline ease-out transition-all">
              {" "}
              forgot password?
            </p>
          </Link>
        </form>
        {/* company policy section */}
        <div className="my-6">
          <p className="text-center font-body">
            This site is protected by{" "}
            <span className="font-bold underline text-main">reCAPTCHA</span> and
            the Google and apply.
          </p>
        </div>
        {/* end of company policy section */}
      </div>
      {/* end of form wrapper */}
      <DevTool control={control} />
      <ToastContainer theme="colored" className="toast" />
      <LoadingModal isOpen={isSubmitting} />
    </div>
  );
}
