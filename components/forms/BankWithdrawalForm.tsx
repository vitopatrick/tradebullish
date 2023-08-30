import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { store } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { UserContext } from "@/context/UserAuthContext";

// form types
type FieldValueTypes = {
  bank_number: number;
  phone_number: number;
  bank_address: string;
  routing_number: number;
  amount: number;
  bank_account_number: number;
  bank_account_name: string;
};

// yup validation
const schema = yup.object({
  bank_number: yup
    .number()
    .min(1)
    .required("bank number required")
    .typeError("please enter your bank number"),
  phone_number: yup
    .number()
    .min(1)
    .required("phone number is required")
    .typeError("please enter your phone number"),
  bank_address: yup
    .string()
    .required("bank address is required")
    .typeError("Enter your Bank address"),
  routing_number: yup
    .number()
    .min(1)
    .required("routing number is very important,please fill the field")
    .typeError("Please enter routing Number"),
  amount: yup
    .number()
    .min(1)
    .required("amount is needed")
    .typeError("Please enter withdrawal amount"),
  bank_account_number: yup
    .number()
    .min(1)
    .required("bank account number is required")
    .typeError("please enter your bank account number"),
  bank_account_name: yup
    .string()
    .required("bank account name required")
    .typeError("please enter your bank account name"),
});

export default function BankWithdrawalForm() {
  const router = useRouter();

  const { user: state }: any = useContext(UserContext);

  // React Hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      bank_number: 0,
      phone_number: 0,
      bank_address: "",
      routing_number: 0,
      amount: 0,
      bank_account_number: 0,
      bank_account_name: "",
    },
  });

  // submit to firebase
  const onSubmit = async (fieldValues: FieldValueTypes) => {
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/withdraw"
      );
      await addDoc(depositRef, {
        amount: fieldValues.amount,
        date: serverTimestamp(),
        approved: false,
        address: fieldValues.bank_address,
        bank_number: fieldValues.bank_number,
        phone_number: fieldValues.phone_number,
        routing_number: fieldValues.routing_number,
        account_number: fieldValues.bank_account_number,
        account_name: fieldValues.bank_account_name,
        coin: "bank Transfer",
      });

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
    <section>
      <div className="md:w-[90%] mx-auto p-3 font-body my-8">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="bank number">Bank Number</label>
              <input
                type="text"
                {...register("bank_number")}
                className={
                  errors.bank_number?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.bank_number?.message}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="phone number">Phone Number</label>
              <input
                type="text"
                {...register("phone_number")}
                className={
                  errors.phone_number?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.phone_number?.message}
              </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="bank address">Bank Address</label>
              <input
                type="text"
                {...register("bank_address")}
                className={
                  errors.bank_address?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.bank_address?.message}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="routing number">Routing Number</label>
              <input
                type="text"
                {...register("routing_number")}
                className={
                  errors.routing_number?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.routing_number?.message}
              </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="Amount">Amount</label>
              <input
                type="text"
                {...register("amount")}
                className={
                  errors.amount?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.amount?.message}
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="account number">Bank Account Number</label>
              <input
                type="text"
                {...register("bank_account_number")}
                className={
                  errors.bank_account_number?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.bank_account_number?.message}
              </p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex md:flex-row flex-col gap-4 md:items-center">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="account name">Bank Account Name</label>
              <input
                type="text"
                {...register("bank_account_name")}
                className={
                  errors.bank_account_name?.message
                    ? "p-3 rounded-lg bg-main/5 border border-red-500 outline-none font-body"
                    : "p-3 rounded-lg border bg-main/5  border-blue-400 outline-none font-body"
                }
              />
              <p className="font-body text-red-500 capitalize">
                {errors.bank_account_name?.message}
              </p>
            </div>
          </div>
          {/*  */}
          <button
            disabled={!isValid}
            className={
              !isValid
                ? "bg-main/40 px-4 py-2 rounded-lg"
                : "bg-main px-4 py-2 rounded-lg"
            }
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  );
}
