"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type Props = {};

let faqs = [
  {
    id: 1,
    question: "What is Trade bullish?",
    answer:
      "Trade bullish is a one-stop-shop solution for Cryptocurrency brokers, offering services such as a CRM system, webtrader, PBX and VoIP system, RDP services, and quality leads.",
  },
  {
    id: 2,
    question: "How can Trade bullish help my Cryptocurrency brokerage?",
    answer:
      "Trade bullish can help your brokerage by providing all the necessary solutions in one place, streamlining your operations and making it easier to manage your clients and leads.",
  },
  {
    id: 3,
    question: "What kind of leads does Trade bullish provide?",
    answer:
      "Trade bullish provides quality leads that are verified and targeted to your specific requirements.",
  },
  {
    id: 4,
    question: "Can I customize the services I receive from Trade bullish?",
    answer:
      "Yes, Trade bullish offers customized solutions tailored to your specific needs and requirements.",
  },
  {
    id: 5,
    question: "How secure are the RDP services provided by Trade bullish?",
    answer:
      "Trade bullish offers flexible pricing options based on the specific services and solutions you require.",
  },
];

const ContactFaq = (props: Props) => {
  return (
    <div>
      {/* container */}
      <section className="w-[80%] mx-auto p-3 flex md:flex-row flex-col gap-8 md:gap-4">
        <div className="flex-1 w-full">
          <h4 className="text-6xl font-headerTwo font-bold">FAQ</h4>
        </div>
        <div className="flex-1 w-full">
          {faqs.map((faq) => (
            <Faq
              key={faq.id}
              start={faq.id}
              answer={faq.answer}
              question={faq.question}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const Faq = ({ question, answer, start }: any) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-[2rem]">
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="flex justify-between items-center py-4 cursor-pointer"
      >
        <h4 className="font-headerTwo font-semibold text-xl">{question}</h4>
        {isVisible ? <FaMinus /> : <FaPlus />}
      </div>
      <hr />
      {isVisible && (
        <div>
          <p className="font-body text-base font-light text-neutral-500 leading-relaxed py-4">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactFaq;
