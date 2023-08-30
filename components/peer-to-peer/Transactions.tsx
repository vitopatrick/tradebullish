import React from "react";
import Transaction from "./Transaction";
import transactions from "../../lib/transactions";

const Transactions = () => {
  return (
    <section className="text-white font-body">
      <div className="p-4">
        {transactions &&
          transactions.map((trades, index) => (
            <Transaction key={index} trade={trades} />
          ))}
      </div>
    </section>
  );
};

export default Transactions;
