"use client";

import React, { useState } from "react";
import * as Md from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "How many confirmations does Nagamarkets need?",
    answer:
      "he deposit transaction will be automatic, and the Bitcoin transfer will need to be confirmed by the entire Bitcoin network, and your Bitcoin will be automatically deposited to your account after 6 confirmation",
  },
  {
    id: 2,
    question: "What is the minimum deposit",
    answer: "The deposit amount must be between $5 – $5,000 per trade.",
  },
  {
    id: 3,
    question: "How long does it take to deposit",
    answer:
      "Once there are enough confirmations on the blockchain, the nagamarkets system will start proceeding your deposit. This can take up to 2-3 hours.",
  },
  {
    id: 4,
    question: "Can i deposit without verification",
    answer:
      "Although you can technically use nagamarkets even without verifying your identity, a withdrawal limit will be imposed on you until you undergo the verification process",
  },
  {
    id: 5,
    question: "Why is my nagamarkets deposit taking so long?",
    answer:
      "Sometimes, there can be delays in the time needed for our system to record your deposit. If you still haven't received your deposit after the allotted time frame, please contact our online support and provide the following info",
  },
  {
    id: 6,
    question: "How long does Usdt deposit take on nagamarkets?",
    answer:
      "Sometimes, there can be delays in the time needed for our system to record your deposit. If you still haven't received your deposit after the allotted time frame, please contact our online support and provide the following info",
  },
  {
    id: 7,
    question: "How long does it take to receive BTC on nagamarkets?",
    answer:
      "nagamarkets tries to process all withdrawal requests within 30 minutes. However, withdrawals can take up to 2-3 hours to process when many transactions are taking place on a certain blockchain network.",
  },
];

const DepositFaq = () => {
  const [active, setActive] = useState(0);

  const showAnswer = (id: number) => {
    if (active === id) {
      return setActive(0);
    }
    setActive(id);
  };

  return (
    <AnimatePresence>
      <section className="flex-1 w-full">
        <div className="py-3 px-2">
          <h3 className="font-medium text-base text-white md:text-xl font-body underline">
            Faq
          </h3>
          <div className="space-y-6 font-body mt-4">
            {faqs.map((faq, index) => (
              <div key={faq.id}>
                <div
                  onClick={() => showAnswer(index)}
                  className="py-3 px-2 rounded shadow-xl bg-sideBar flex items-center justify-between"
                >
                  <h4 className="font-medium text-white text-sm cursor-pointer">
                    {faq.question}
                  </h4>
                  <div>
                    {active === index ? (
                      <Md.MdArrowDropUp color="#fff" />
                    ) : (
                      <Md.MdArrowDropDown color="#fff" />
                    )}
                  </div>
                </div>
                <motion.div
                  key={active}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                  }}
                  className={
                    active === index
                      ? "py-3 px-2 bg-bg/40 leading-loose text-neutral-300 text-xs"
                      : "hidden"
                  }
                >
                  {faq.answer}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default DepositFaq;
