"use client";

import { formatCurrency } from "@/utils/formatCurrency";
import { FaCreditCard, FaDatabase, FaDownload, FaGift } from "react-icons/fa";
import Spinner from "../loaders/Spinner";
import { useFetchUser } from "@/hooks/useFetchUser";
import { useRouter } from "next/navigation";

export default function Cards() {
  const { userState: user, loading }: { userState: any; loading: boolean } =
    useFetchUser();

  return (
    <div className="p-5">
      {/* parent flex container */}
      {loading ? (
        <Spinner />
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {/* deposited card */}
          <div className="bg-sideBar px-3 py-6 rounded-lg flex items-center gap-2">
            <div>
              <FaDownload size="31px" color="#ffad46" />
            </div>
            <div className="text-white font-body">
              <p className="text-neutral-400">Deposited</p>
              <p>{formatCurrency(user?.deposited)}</p>
            </div>
          </div>
          {/* end of deposited card */}

          {/* Profit card */}
          <div className="bg-sideBar px-3 py-6 rounded-lg flex items-center gap-2">
            <div>
              <FaDatabase size="31px" color="#31ce36" />
            </div>
            <div className="text-white font-body">
              <p className="text-neutral-400">Profit</p>
              <p>{formatCurrency(user?.profit)}</p>
            </div>
          </div>
          {/* end of profit card */}

          {/* Bonus card */}
          <div className="bg-sideBar px-3 py-6 rounded-lg flex items-center gap-2">
            <div>
              <FaGift size="31px" color="#f25961" />
            </div>
            <div className="text-white font-body">
              <p className="text-neutral-400">Bonus</p>
              <p>{formatCurrency(user?.bonus)}</p>
            </div>
          </div>
          {/* end of bonus card */}

          {/* Balance card */}
          <div className="bg-sideBar px-3 py-6 rounded-lg flex items-center gap-2">
            <div>
              <FaCreditCard size="31px" color="#6861ce" />
            </div>
            <div className="text-white font-body">
              <p className="text-neutral-400">Balance</p>
              <p>{formatCurrency(user?.balance)}</p>
            </div>
          </div>
          {/* end of balance card */}
        </section>
      )}
      {/* end of parent flex container */}
    </div>
  );
}
