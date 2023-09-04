"use client";

import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  MutableRefObject,
} from "react";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { bucket, store } from "@/firebase";
import walletAddress from "@/lib/wallet-address";
import { UserContext } from "@/context/UserAuthContext";
import LoadingModal from "../modals/LoadingModal";
import { ref, uploadBytes } from "firebase/storage";

type FormValues = {
  coin: string;
  amount: number;
};

const schema = yup.object({
  coin: yup
    .string()
    .required("Crypto method is required")
    .typeError("Please select a coin to deposit with"),
  amount: yup
    .number()
    .required("this field is required")
    .typeError("Enter a valid amount"),
});

// Parent form component
const DepositForm = () => {
  return (
    <section className="py-3 px-2 flex-1 w-full">
      <div>
        <h3 className="font-medium text-white font-body text-base md:text-xl  underline">
          Deposit Crypto
        </h3>
      </div>
      {/* Form */}
      <Form />
      {/* deposit details section */}
    </section>
  );
};

// form component
const Form = () => {
  const [defaultCoin, setDefaultCoin] = useState<null | any>();
  const [showBarCode, setBarCode] = useState(false);
  const router = useRouter();

  // get the user email
  const { user: state }: any = useContext(UserContext);

  // react hook form
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      coin: "ETH",
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  // default value for the coin field
  const defaultValueForCoinField = getValues("coin");

  useEffect(() => {
    // watch for change in the coin value
    const subscription = watch((value) => {
      const selectedCoin = walletAddress.find(
        (address) => address.sym === value.coin
      );
      setDefaultCoin(selectedCoin);
    });

    // return clean up function
    return () => subscription.unsubscribe();
  }, [defaultValueForCoinField, watch("coin")]);

  // copy address
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
    toast("copied address", {
      position: "top-center",
      type: "success",
    });
  };

  //   function to submit to firebase
  async function depositMoney(formValue: FormValues) {
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/deposits"
      );

      await addDoc(depositRef, {
        amount: formValue.amount,
        date: serverTimestamp(),
        coin: formValue.coin,
        sym: defaultCoin?.sym,
        address: defaultCoin?.address,
        approved: false,
      });

      router.refresh();
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(depositMoney)} className="my-3 space-y-6">
          {/* coin */}
          <div className="flex flex-col gap-1 font-body">
            <label htmlFor="coin" className="font-semibold text-neutral-400">
              Coin
            </label>
            <select
              className="border border-main bg-main/5 outline-none  text-white rounded-lg p-3 font-body"
              {...register("coin")}
            >
              {walletAddress.map((address) => (
                <option value={address.sym} key={address.id}>
                  {address.name}
                </option>
              ))}
            </select>
            <p className="text-red-400 text-xs capitalize">
              {errors.coin?.message}
            </p>
          </div>

          {/* end of coin */}
          {/* wallet details */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-2">
              <h3 className="font-body text-neutral-400">Address</h3>
              <p className="font-body text-neutral-300 text-sm break-all">
                {defaultCoin?.address && defaultCoin.address}
              </p>
            </div>
            <div>
              <Fa.FaClipboardCheck
                className="cursor-pointer text-neutral-300"
                onClick={() => copyAddress(defaultCoin?.address)}
              />
            </div>
          </div>
          <h4
            className="font-bold text-neutral-400 font-body capitalize text-xs cursor-pointer"
            onClick={() => setBarCode(true)}
          >
            show bar code
          </h4>
          {/* amount input field */}
          <div className="space-y-3">
            <label
              htmlFor="amount"
              className="font-body text-neutral-400 space-y-2"
            >
              Amount
            </label>
            <div className="flex bg-main/5 border border-main items-center py-3 px-2 rounded">
              <Fa.FaDollarSign color="#fff" />
              <input
                type="text"
                {...register("amount")}
                className="outline-none w-full px-2 bg-transparent font-body text-white"
              />
            </div>
            <p className="text-red-400 font-body text-xs capitalize">
              {errors.amount?.message}
            </p>
          </div>

          <button
            disabled={!isValid}
            type="submit"
            className={
              !isValid
                ? "bg-main/20 text-white/20  font-body font-semibold shadow rounded px-4 py-2"
                : "bg-main text-white  font-body font-semibold shadow rounded px-4 py-2"
            }
          >
            Deposit
          </button>
          {/* end of wallet details */}
        </form>
      </section>
      <UploadProof />
      <BarCodeModal show={showBarCode} close={setBarCode} coin={defaultCoin} />
      <LoadingModal isOpen={isSubmitting} />
    </>
  );
};

// bar code
const BarCodeModal = ({ coin, show, close }: any) => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
        key={show}
        className={
          show
            ? "absolute top-0 left-0 bottom-0 right-0 bg-bg/20 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="w-[50%] mx-auto p-4 relative">
          <div className=" p-4 my-5">
            <Md.MdClose onClick={() => close(false)} size={30} color="#fff" />
          </div>
          <img src={coin?.img} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

const UploadProof = () => {
  // the form ref
  const fileRef: MutableRefObject<undefined | any> = useRef();

  const router = useRouter();

  // upload to firebase
  const onSubmit = async (event: any) => {
    // prevent default form behavior
    event.preventDefault();
    try {
      // upload Image
      const imgRef = ref(
        bucket,
        `deposit-proof/${fileRef.current.files[0].name}`
      );
      await uploadBytes(imgRef, fileRef.current.files[0]);
      toast("upload successful", {
        type: "success",
        position: "bottom-center",
        bodyClassName: "toast",
      });

      router.refresh();
    } catch (error: any) {
      toast(error.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <form className="mt-6" onSubmit={onSubmit}>
      <div>
        <h4 className="font-body underline text-lg text-neutral-300">
          Please Upload Payment Proof.
        </h4>
        <div className="my-8">
          <input
            type="file"
            name="proof_img"
            id="proof_img"
            ref={fileRef}
            className="text-neutral-300 font-body"
          />
        </div>
        <button
          type="submit"
          className="bg-main  text-white  font-body font-semibold shadow rounded px-4 py-2"
        >
          Submit file
        </button>
      </div>
    </form>
  );
};

export default DepositForm;
