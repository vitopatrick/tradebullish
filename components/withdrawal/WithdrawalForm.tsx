import { useContext, useState } from "react";
import * as Fa from "react-icons/fa";
import BankWithdrawalModal from "../modals/BankWithdrawalModal";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "@/firebase";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserAuthContext";
import { toast } from "react-toastify";

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

  // Add Doc
  const router = useRouter();

  // use hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  // submit to firebase
  const onSubmit = async (fieldValue: WithdrawalForm) => {
    try {
      // get the collection Ref
      const withdrawalRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/withdraw"
      );

      // create another withdrawal collection
      const withdrawalCollectionRef = collection(store, "/withdrawals");
      // create new Document
      await addDoc(withdrawalRef, {
        amount: fieldValue.amount,
        date: serverTimestamp(),
        coin: fieldValue.coin,
        address: fieldValue.address,
        approved: false,
      });
      // navigate to the deposit
      router.refresh();
    } catch (e: any) {
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
      <form className="md:p-4 font-body" onSubmit={handleSubmit(onSubmit)}>
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
              className="border flex-1 border-main rounded-lg font-body px-6 py-3 "
            >
              bank withdrawal
            </button>
            <button
              disabled={!isValid}
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
      <DevTool control={control} />
    </section>
  );
};

export default WithdrawalForm;
