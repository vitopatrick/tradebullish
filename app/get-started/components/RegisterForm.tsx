"use client";

import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFetchCountry } from "@/hooks/useFetchCountry";
import { auth, store } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LoadingModal from "@/components/modals/LoadingModal";

// form schemas
type FieldValues = {
  full_name: string;
  email: string;
  password: string;
  country: string;
  phone_number: string;
};

// yup schema
const schema = yup.object({
  full_name: yup.string().min(0).required("your name is required"),
  email: yup.string().email("wrong email format").required("email is required"),
  password: yup.string().min(6).required("password field is required"),
  country: yup.string().required("Country field is required"),
  phone_number: yup.string().required("Phone number is required"),
});

const RegisterForm = () => {
  // state for password
  const [isText, setIsText] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FieldValues>({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      country: "",
      phone_number: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  // use country hook
  const { countries } = useFetchCountry();

  // use router
  const router = useRouter();

  const registerUser = async (values: FieldValues) => {
    try {
      // register the user
      const { user } = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      // add the refresh token to localStorage
      localStorage.setItem("token", user.refreshToken);

      // then create the users collection for firebase
      const docRef = doc(store, "/users", `/${user.email}`);
      await setDoc(docRef, {
        Email: values.email,
        Password: values.password,
        country_of_origin: values.country,
        Telephone: values.phone_number,
        deposited: 0,
        profit: 0,
        bonus: 0,
        balance: 0,
        verified: false,
        createAt: user.metadata.creationTime,
        name: values.full_name,
        wallet: 1,
      });

      // redirect users to the there dashboard
      router.push("/dashboard");
    } catch (error: any | unknown) {
      switch (error.code) {
        case "auth/email-already-in-use":
          return toast("Email already is in use", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/weak-password":
          return toast("Password is weak", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
        case "auth/invalid-email":
          return toast("Invalid Email Address", {
            type: "error",
            position: "bottom-center",
            bodyClassName: "toast",
          });
      }
    }
  };

  return (
    <section>
      {/* header to point to login */}
      <div className="flex mb-[10%] items-end justify-end">
        <Link
          href="/login"
          className=" bg-main px-8 py-2 font-body text-white rounded-lg"
        >
          Sign In
        </Link>
      </div>
      {/* form wrapper div */}
      <div className="py-4 my-2">
        <div className="space-y-3 text-center">
          <h4 className=" text-2xl md:text-4xl font-light text-neutral-500 font-header">
            Sign Up,
            <span className="font-semibold text-main underline">It's Free</span>
          </h4>
          <p className="font-body underline">
            Trade the global markets with nagamarkets
          </p>
        </div>
        <form
          className="mt-6 md:w-[70%] w-[80%] mx-auto space-y-6"
          onSubmit={handleSubmit(registerUser)}
        >
          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-body text-neutral-500">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("full_name")}
              className={
                errors.full_name?.message
                  ? "p-3 rounded-lg border border-red-500 outline-none font-body"
                  : "p-3 rounded-lg border border-blue-400 outline-none font-body"
              }
            />
            <p className="font-body text-red-500 capitalize">
              {errors.full_name?.message}
            </p>
          </div>
          {/* end of name field */}
          {/* email field */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-body text-neutral-500">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className={
                errors.email?.message
                  ? "p-3 rounded-lg border border-red-500 outline-none font-body"
                  : "p-3 rounded-lg border border-blue-400 outline-none font-body"
              }
            />
            <p className="font-body text-red-500 capitalize">
              {errors.email?.message}
            </p>
          </div>
          {/* end of email field */}
          {/* password field  */}
          <div className="">
            <label htmlFor="password" className="font-body text-neutral-500">
              Password
            </label>
            <div
              className={
                errors.password?.message
                  ? "flex items-center border border-red-500 p-1 rounded-lg"
                  : "flex items-center border border-main p-1 rounded-lg"
              }
            >
              <input
                type={isText ? "text" : "password"}
                id="password"
                {...register("password")}
                className="w-full p-2  outline-none font-body"
              />
              {isText ? (
                <FaEye
                  className="cursor-pointer"
                  onClick={() => setIsText(false)}
                />
              ) : (
                <FaEyeSlash
                  className="cursor-pointer"
                  onClick={() => setIsText(true)}
                />
              )}
            </div>
            <p className="font-body text-red-500 capitalize">
              {errors.password?.message}
            </p>
          </div>
          {/* end of password field */}
          {/* phone number field */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone number"
              className="font-body text-neutral-500"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              {...register("phone_number")}
              className={
                errors.phone_number?.message
                  ? "p-3 rounded-lg border border-red-500 outline-none font-body"
                  : "p-3 rounded-lg border border-blue-400 outline-none font-body"
              }
            />
            <p className="font-body text-red-500 capitalize">
              {errors.phone_number?.message}
            </p>
          </div>
          {/* end of phone number field */}
          {/**
           * select field for country
           *  */}
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="font-body text-neutral-500">
              Country
            </label>
            <select
              id="country"
              {...register("country")}
              className="font-body border border-main p-4 outline-none rounded-lg text-neutral-500"
            >
              {countries &&
                countries.map((country: any, index: number) => (
                  <option key={index}>{country?.country}</option>
                ))}
            </select>
            <p className="font-body text-red-500 capitalize">
              {errors.country?.message}
            </p>
          </div>
          <button
            disabled={!isValid}
            className={
              !isValid
                ? "w-full bg-main/50 rounded-lg p-4 my-5 text-neutral-100 font-header"
                : "w-full bg-main rounded-lg p-4 my-5 text-white font-header"
            }
          >
            Create Account Today
          </button>
          <p className="text-center font-body underline text-neutral-400">
            By registering an account you hereby agree with the entire content
            of all legal documents.
          </p>
        </form>
      </div>
      {/* end of form wrapper div */}
      {/* react hook form dev tools */}
      <DevTool control={control} />
      {/* loading modal */}
      <LoadingModal isOpen={isSubmitting} />
    </section>
  );
};

export default RegisterForm;
