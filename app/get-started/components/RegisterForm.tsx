"use client";

import Link from "next/link";
import { useState } from "react";
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

      // call the API
      await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ email: values.email }),
      });

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
    <section className="w-full mt-[3rem] md:mt-0">
      <form className="space-y-8" onSubmit={handleSubmit(registerUser)}>
        {/* Name */}
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-bodyTwo">
            Name
          </label>
          <input
            type="text"
            {...register("full_name")}
            placeholder="John Doe"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
          <p className="font-bodyTwo text-sm capitalize text-red-400">
            {errors.full_name?.message}
          </p>
        </div>
        {/* email */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-bodyTwo">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="JohnDoe@example.com"
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
          <p className="font-bodyTwo text-sm capitalize text-red-400">
            {errors.email?.message}
          </p>
        </div>
        {/* password */}
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-bodyTwo">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
          <p className="font-bodyTwo text-sm capitalize text-red-400">
            {errors.password?.message}
          </p>
        </div>
        {/* phone Number */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone Number" className="font-bodyTwo">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone_number")}
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          />
          <p className="font-bodyTwo text-sm capitalize text-red-400">
            {errors.phone_number?.message}
          </p>
        </div>
        {/* country */}
        <div className="flex flex-col gap-1">
          <label htmlFor="country" className="font-bodyTwo">
            Country
          </label>
          <select
            {...register("country")}
            className="border-b-2 p-3 border-neutral-400 font-bodyTwo"
          >
            {countries &&
              countries.map((country: any) => (
                <option value={country.country}>{country.country}</option>
              ))}
          </select>
          <p className="font-bodyTwo text-sm capitalize text-red-400">
            {errors.country?.message}
          </p>
        </div>
        {/* button */}
        <button
          type="submit"
          disabled={!isValid}
          className={
            !isValid
              ? "font-headerTwo font-semibold bg-neutral-500 w-full p-4 text-neutral-300 rounded-md"
              : "font-headerTwo font-semibold bg-black w-full p-4 text-white rounded-md"
          }
        >
          Register Today
        </button>
        {/* Route the user to the login page */}
        <div>
          <p className="font-bodyTwo text-neutral-400">
            Already Have an account{" "}
            <Link href="/login" className="text-neutral-600 underline">
              Login Account
            </Link>
          </p>
        </div>
      </form>
      <DevTool control={control} />
      {/* loading modal */}
      <LoadingModal isOpen={isSubmitting} />
    </section>
  );
};

export default RegisterForm;
