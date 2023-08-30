"use client";

import DepositFaq from "@/components/deposit/DepositFaq";
import DepositHistory from "@/components/deposit/DepositHistory";
import DepositForm from "@/components/forms/DepositForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export default function DepositPage() {
  return (
    <section>
      <section className="flex p-4">
        <DepositForm />
        <DepositFaq />
      </section>
      <DepositHistory />
      <ToastContainer theme="colored" className="toast" />
    </section>
  );
}
