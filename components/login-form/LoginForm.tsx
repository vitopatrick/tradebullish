import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import LoadingModal from "../modals/LoadingModal";

type Props = {};

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

const LoginForm = (props: Props) => {
  // next navigation
  const router = useRouter();
  // react hook form
  const {
    register,
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
    <>
      <form className="space-y-6" onSubmit={handleSubmit(loginUser)}>
        {/* email input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-bodyTwo">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className={
              errors.email?.message
                ? "border-b-2 border-red-500 p-3 font-bodyTwo"
                : "border-b-2 border-black p-3 font-bodyTwo"
            }
          />
          <p className="font-bodyTwo text-red-500 text-xs capitalize">
            {errors.email?.message}
          </p>
        </div>
        {/* Password Input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="font-bodyTwo">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            className={
              errors.password?.message
                ? "border-b-2 border-red-500 p-3 font-bodyTwo"
                : "border-b-2 border-black p-3 font-bodyTwo"
            }
          />
          <p className="font-bodyTwo text-red-500 text-xs capitalize">
            {errors.password?.message}
          </p>
        </div>
        {/* forgot password */}
        <div>
          <Link href="/forgot-password" className="font-bodyTwo">
            Forgot Password?
          </Link>
        </div>
        {/* button */}
        <button
          type="submit"
          disabled={!isValid}
          className={
            !isValid
              ? "font-headerTwo text-neutral-200 w-full text-center block p-3 rounded-md bg-neutral-400"
              : "font-headerTwo text-white w-full text-center block p-3 rounded-md bg-black"
          }
        >
          Login account
        </button>
        {/* create account link */}
        <div>
          <p className="font-bodyTwo text-neutral-400">
            Don't have an account{" "}
            <Link href="/get-started" className="text-black underline">
              Create an account
            </Link>
          </p>
        </div>
      </form>
      <LoadingModal isOpen={isSubmitting} />
    </>
  );
};

export default LoginForm;
