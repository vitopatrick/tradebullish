"use client";

import WithdrawalHistory from "@/components/withdrawal/WIthdrawalHistory";
import WithdrawalFaq from "@/components/withdrawal/WithdrawalFaq";
import WithdrawalForm from "@/components/withdrawal/WithdrawalForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function WithdrawalPage() {
  return (
    <section className="p-4">
      <main className="text-white flex md:flex-row flex-col">
        <WithdrawalForm />
        <WithdrawalFaq />
      </main>
      <WithdrawalHistory />
      <ToastContainer theme="colored" className="toast" />
    </section>
  );
}
