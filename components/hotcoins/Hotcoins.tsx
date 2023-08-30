"use client";

import { formatCurrency } from "@/utils/formatCurrency";
import Spinner from "../loaders/Spinner";
import { useFetchAllCoins } from "@/hooks/useFetchAllCoins";

export default function HotCoins() {
  const { coins, loading } = useFetchAllCoins(4);
  return (
    <div className="bg-bg rounded font-body text-white flex-1 w-full p-4">
      <div>
        <div>
          <h1 className="underline text-xl">Hot Coins</h1>
        </div>
        <div>
          {loading && <Spinner />}
          {!loading && (
            <div>
              <div className="flex items-center justify-between mt-3 bg-sideBar py-3 px-2 rounded">
                <div className="font-sec font-bold text-paper">Coin</div>
                <div className="font-sec font-bold text-paper">Price</div>
              </div>
              {coins.map((coin: any) => (
                <div
                  key={coin.id}
                  className="flex items-center my-9 justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-[8%]">
                      <img src={coin.img} />
                    </div>
                    <h2 className="font-sec text-paper font-bold">
                      {coin.name}
                    </h2>
                  </div>
                  <div>
                    <h3 className="font-sec text-paper font-bold">
                      {formatCurrency(coin.currentPrice)}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
