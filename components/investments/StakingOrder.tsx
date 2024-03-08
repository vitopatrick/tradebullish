"use client";

import { formatCurrency } from "../../utils/formatCurrency";
import { useFetchStakes } from "@/hooks/useFetchstaking";

const StakingOrder = () => {
  return (
    <section className="font-body my-3 mx-2 p-2 text-white">
      <div className="mx-2">
        <header>
          <h4 className="font-semibold text-2xl py-3 underline">
            Staking Orders
          </h4>
        </header>
        <StakingTable />
      </div>
    </section>
  );
};

const StakingTable = () => {
  const { stakes, loading } = useFetchStakes();

  return (
    <>
      {loading && <p className="text-center text-neutral-500">loading ...</p>}
      {!loading &&
        (stakes.length > 0 ? (
          <div>
            {stakes.map((stake: any) => (
              <StakingItem
                key={stake.amount + Math.random()}
                plan={stake.plan}
                amount={stake.amount}
                date={stake.date}
                return={stake.return}
              />
            ))}
          </div>
        ) : (
          <div className="font-semibold flex items-center justify-center my-8 text-base ">
            Opps Nothing here
          </div>
        ))}
    </>
  );
};

const StakingItem = ({ plan, date, amount }: any) => {
  return (
    <div className="my-3 p-4 flex justify-between items-center">
      <div>
        <div className="font-bold flex gap-2">
          <h4>{plan}</h4>
          <h4>{formatCurrency(amount)}</h4>
        </div>
        <div>{date}</div>
      </div>
      <div className="font-bold hidden md:block">{plan}</div>
    </div>
  );
};

export default StakingOrder;
