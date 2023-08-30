"use client";

import { useState } from "react";
import DepositHistory from "../deposit/DepositHistory";
import WithdrawalHistory from "../withdrawal/WIthdrawalHistory";

export default function TransactionTabs() {
  // set the views to be seen
  const [active, setActive] = useState(0);

  return (
    <section className="mx-3 mt-4 p-2">
      {/* three buttons */}
      <div className="fle gap-3 overflow-x-auto p-3">
        <button
          onClick={() => setActive(0)}
          className="font-body text-white mx-2 hover:text-main transition-all ease-out"
        >
          Deposits
        </button>
        <button
          onClick={() => setActive(1)}
          className="font-body text-white mx-2 hover:text-main transition-all ease-out"
        >
          Withdrawals
        </button>
        <button
          onClick={() => setActive(2)}
          className="font-body text-white mx-2 hover:text-main transition-all ease-out"
        >
          Trades
        </button>
      </div>
      {/* end of three buttons container */}
      {/* display based on state */}
      <main>
        {active == 0 && <DepositHistory />}
        {active == 1 && <WithdrawalHistory />}
      </main>
      {/* end display */}
    </section>
  );
}
