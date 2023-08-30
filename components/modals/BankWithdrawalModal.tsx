import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import BankWithdrawalForm from "../forms/BankWithdrawalForm";

type BankWithdrawalModalTypes = {
  isOpen: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
};

export default function BankWithdrawalModal({
  isOpen,
  toggle,
}: BankWithdrawalModalTypes) {
  return (
    //   trading container ,animate the form
    <AnimatePresence>
      <div
        className={
          isOpen
            ? "fixed top-0 z-40 bottom-0 right-0 left-0 bg-white/5 backdrop-blur-md"
            : "hidden"
        }
      >
        {/* trading card container */}
        <motion.div
          key={isOpen ? 1 : 0}
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
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="md:w-[60%] w-[80%] mx-auto bg-bg mt-8 rounded-lg md:p-5 p-4"
        >
          <div className="flex items-center justify-between">
            <h4 className="font-body text-neutral-300 underline text-2xl">
              Bank Withdrawal Form
            </h4>
            <FaTimes
              color="#fff"
              className="text-white cursor-point"
              onClick={() => toggle(false)}
            />
          </div>

          <BankWithdrawalForm />
        </motion.div>
        {/* end of trading card container */}
      </div>
    </AnimatePresence>
  );
}
