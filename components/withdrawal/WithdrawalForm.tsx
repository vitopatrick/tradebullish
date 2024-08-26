import { useContext, useState } from "react";
import * as Fa from "react-icons/fa";
import BankWithdrawalModal from "../modals/BankWithdrawalModal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "@/firebase";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserAuthContext";
import { toast } from "react-toastify";
import { useFetchUser } from "@/hooks/useFetchUser";

type WithdrawalForm = {
  amount: number;
  address: string;
  coin: string;
};

const schema = yup.object({
  amount: yup
    .number()
    .required("Amount is required")
    .typeError("Please enter a valid amount"),
  address: yup
    .string()
    .required("Address is required")
    .typeError("Please enter your wallet address"),
  coin: yup.string().required("crypto type is necessary"),
});

const WithdrawalForm = () => {
  // control the modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user: state }: any = useContext(UserContext);
  const [otpOpen, setOtpOpen] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const { userState }: any = useFetchUser();
  // Add Doc
  const router = useRouter();

  // use hook form
  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  // field Values
  const amount = watch("amount");
  const coin = watch("coin");
  const walletAddress = watch("address");

  // submit to firebase
  const onSubmit: any = async (fieldValue: WithdrawalForm) => {
    const userOtp = parseInt(userState?.otp);

    if (userOtp !== +otpValue)
      return toast.error("Incorrect OTP", {
        position: "top-center",
        theme: "colored",
        bodyClassName: "toast",
      });

    try {
      // get the collection Ref
      const withdrawalRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/withdraw"
      );

      // create new Document
      await addDoc(withdrawalRef, {
        amount,
        date: serverTimestamp(),
        coin,
        address: walletAddress,
        approved: false,
      });
      // navigate to the deposit
      toast("Transaction in Progress", {
        type: "info",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      router.refresh();
    } catch (e: any) {
      console.log(e);

      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <section className="py-3 px-2 flex-1 w-full">
      <div>
        <h3 className="font-medium font-body text-base md:text-2xl  underline">
          Withdraw Crypto
        </h3>
      </div>
      {/* start of form */}
      <form className="md:p-4 font-body">
        <div className="my-3 space-y-6">
          {/* amount input field */}
          <div>
            <p className="my-1 font-bold text-neutral-400">Amount</p>
            <div
              className={
                errors.amount?.message
                  ? "flex bg-main/5 items-center py-3 px-2 rounded-lg border border-red-500"
                  : "flex bg-main/5 items-center py-3 px-2 rounded-lg border border-main"
              }
            >
              <Fa.FaDollarSign />
              <input
                type="text"
                {...register("amount")}
                className="outline-none w-full px-2 bg-transparent"
              />
            </div>
            <p className="font-body text-red-500 capitalize">
              {errors.amount?.message}
            </p>
          </div>
          {/* address input field */}
          <div className="space-y-2">
            <p className="my-1 font-bold text-neutral-400">Address</p>
            <div
              className={
                errors.address?.message
                  ? "flex bg-main/5 items-center py-3 px-2 rounded-lg border border-red-500"
                  : "flex bg-main/5 items-center py-3 px-2 rounded-lg border border-main"
              }
            >
              <input
                type="text"
                {...register("address")}
                className="outline-none w-full px-2 bg-transparent"
              />
            </div>
            <p className="font-body text-red-500 capitalize">
              {errors.address?.message}
            </p>
          </div>
          {/* end of address field */}
          {/* coin field  */}
          <div className="flex flex-col gap-1">
            <label htmlFor="coin" className="my-1 font-bold text-neutral-400">
              Coin
            </label>
            <select
              id="coin"
              {...register("coin")}
              className={
                errors.coin?.message
                  ? "border border-red-500 bg-main/5 rounded-lg text-white p-4 outline-none"
                  : "border border-main bg-main/5 rounded-lg text-white p-4 outline-none"
              }
            >
              <option value="Eth">Ethereum</option>
              <option value="btc">Bitcoin</option>
              <option value="usdt">Tether</option>
            </select>
            <p className="font-body text-red-500 capitalize">
              {errors.coin?.message}
            </p>
          </div>
          {/* end of coin field */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 bg-blue-500 rounded-lg font-body px-6 py-3 "
            >
              Bank withdrawal
            </button>
            <button
              disabled={!isValid}
              onClick={(e) => {
                e.preventDefault();

                setOtpOpen(true);
              }}
              className={
                !isValid
                  ? "bg-main/5 flex-1 rounded-lg px-6 py-3"
                  : "bg-main flex-1 rounded-lg px-6 py-3"
              }
            >
              Withdraw
            </button>
          </div>
          {/* end of wallet details */}
        </div>
      </form>
      {/* end of form */}
      <BankWithdrawalModal isOpen={isOpen} toggle={setIsOpen} />
      <div
        className={
          otpOpen
            ? "fixed top-0 z-40 bottom-0 right-0 left-0 bg-white/5 backdrop-blur-md flex items-center justify-center"
            : "hidden"
        }
      >
        <div className="bg-stone-500 rounded-lg lg:w-[40%] mx-auto p-4 relative">
          <div className="absolute right-0 mx-4">
            <button
              onClick={() => {
                setOtpOpen(false);
              }}
            >
              <Fa.FaTimes />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-body">Enter OTP (One Time Passcode)</label>
            <input
              className="p-4 rounded text-black font-mono"
              type="text"
              value={otpValue}
              onChange={(e) => setOtpValue(e.target.value)}
            />
          </div>
          <button
            className="font-body my-3 w-full bg-blue-500 p-3 rounded-lg"
            onClick={onSubmit}
          >
            Send Request
          </button>
        </div>
      </div>
    </section>
  );
};


export default WithdrawalForm;
