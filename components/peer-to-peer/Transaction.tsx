import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const Transaction = ({ trade }: unknown | any) => {
  return (
    <div className=" my-4 bg-sideBar rounded-lg px-4 py-4 flex items-center justify-between">
      <div className="space-y-2">
        <h4 className="font-semibold text-xl">{trade.traderName}</h4>
        {trade.tradeType == "buy" ? (
          <h4 className="font-semibold capitalize text-teal-600">Buy</h4>
        ) : (
          <h4 className="font-semibold capitalize text-red-500">sell</h4>
        )}
      </div>
      <div className="flex gap-3">
        <div className="flex items-center gap-2">
          <h4>{trade.amount}</h4>
          <span className="font-bold">{trade.symbol}</span>
        </div>
        <h4 className="capitalize">
          traded at{" "}
          <span className="font-bold">{formatCurrency(trade.price)}</span>
        </h4>
      </div>
      <div className="flex flex-col items-center">
        <p>{trade.location}</p>
        <p className="font-bold">
          {new Date(trade.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default Transaction;
