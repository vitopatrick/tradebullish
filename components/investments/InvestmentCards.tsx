"use client";

import { UserContext } from "@/context/UserAuthContext";
import { store } from "@/firebase";
import { useFetchUser } from "@/hooks/useFetchUser";
import investmentplans from "@/lib/investmentplans";
import { addDoc, collection } from "firebase/firestore";
import Link from "next/link";
import { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Iinvestment {
  id: string | number;
  name: string;
  minAmount: number;
  duration: number | string;
  return: number | string;
}

export default function InvestmentCards() {
  const [visible, setVisible] = useState(false);

  const [selected, setSelected] = useState<Iinvestment>({
    id: "",
    name: "",
    minAmount: 0,
    duration: "",
    return: "",
  });

  function openModal(selected: Iinvestment) {
    setSelected({ ...selected });

    setVisible(!visible);
  }

  return (
    // parent div container
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 p-4">
        {investmentplans.map((plan) => (
          <div
            key={plan.id}
            className="bg-sideBar flex-1 basis-auto space-y-4 rounded-lg p-3 "
          >
            <h4 className="text-neutral-400 md:text-2xl text-2xl font-header font-semibold">
              {plan.name}
            </h4>
            <h4 className="text-neutral-200 text-4xl font-header font-bold">
              {plan.minAmount}
            </h4>
            <p className="font-header text-neutral-400 underline">
              ROI:{plan.return}
            </p>
            <p className="font-header text-neutral-400 underline">
              Duration:{plan.duration}
            </p>
            <div className="py-5">
              <button
                onClick={() =>
                  openModal({
                    id: plan.id,
                    duration: plan.duration,
                    minAmount: +plan.minAmount,
                    name: plan.name,
                    return: plan.return,
                  })
                }
                className="bg-main rounded-lg px-4 py-3 w-full font-header text-white font-bold"
              >
                Get started
              </button>
            </div>
          </div>
        ))}
      </section>
      <StakingModal
        visible={visible}
        setVisible={setVisible}
        selected={selected}
      />
    </>
  );
}

const StakingModal = ({
  visible,
  setVisible,
  selected,
}: {
  visible: boolean;
  setVisible: any;
  selected: Iinvestment;
}) => {
  const [amount, setAmount] = useState(0);

  const { user }: any = useContext(UserContext);

  const router = useRouter();

  const submitTrade = async () => {
    // check if the amount is less than the minimum amount
    if (amount < selected?.minAmount) {
      return toast("Amount is less than minimum", {
        position: "top-center",
        theme: "colored",
        bodyClassName: "toast",
        type: "error",
      });
    }

    try {
      // create collection ref
      const collectionRef = collection(
        store,
        "/users",
        `${user.email}`,
        "staking"
      );

      // create the new collection
      await addDoc(collectionRef, {
        plan: selected?.name,
        return: selected?.return,
        amount,
        date: new Date().toLocaleDateString(),
      });

      toast("Successful", {
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
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          visible
            ? "fixed top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[90%] md:w-[60%] mx-auto relative my-3 bg-sideBar text-white font-main rounded-lg shadow p-4 md:p-8">
          <div className="absolute top-0 right-0 p-4">
            <FaTimes onClick={() => setVisible(false)} />
          </div>
          {/* parent flex div */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Form */}
            <div className="flex-1 space-y-5">
              {/* APR */}
              <div>
                <div className="flex items-stretch justify-between">
                  <h4 className="font-semibold text-neutral-400">APR</h4>{" "}
                  <p className="font-semibold">{selected?.return}</p>
                </div>
              </div>
              {/* Term */}
              <div>
                <div className="flex items-stretch justify-between">
                  <h4 className="font-semibold text-neutral-400">Term</h4>{" "}
                  <p className="font-semibold">fixed</p>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="font-bold text-xl">Amount</h4>
                {/* form field */}
                <div className="my-3">
                  <input
                    type="number"
                    name="amount"
                    value={amount}
                    onChange={(e: any) => setAmount(e.target.value)}
                    className="w-full border border-neutral-400 outline-none p-3 rounded bg-transparent"
                  />
                </div>
                {/* Account */}
              </div>
            </div>
            {/*  */}

            {/* Preview */}
            <div className=" p-3 flex-1">
              {/* Header */}
              <h4 className="font-bold text-xl">Preview</h4>
              {/* Dates */}
              <section className="space-y-2 my-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Subscription Date
                    </h4>{" "}
                    <p className="font-semibold">{new Date().toDateString()}</p>
                  </div>
                </div>
              </section>
              {/* Dates */}
              <section className="space-y-2 my-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Redemption Period
                    </h4>{" "}
                    <p className="font-semibold">{selected?.duration}</p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-neutral-400">
                      Profit Received
                    </h4>{" "}
                    <p className="font-semibold">Daily</p>
                  </div>
                </div>
              </section>
              {/* Returns */}

              {/* submit button */}
              <button
                onClick={submitTrade}
                className="bg-blue-600 p-3 w-full rounded-full my-3 text-white capitalize font-bold"
              >
                subscribe
              </button>
              {/* Terms and agreement */}
              <div className="flex items-center gap-2">
                <p className="text-sm capitalize">
                  I have read and agree to the{" "}
                  <Link
                    href="/mining-agreement"
                    className="text-blue-600 font-semibold"
                  >
                    {" "}
                    cryptocurrency mining agreement
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
