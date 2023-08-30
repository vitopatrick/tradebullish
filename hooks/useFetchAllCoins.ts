import { useMemo, useState } from "react";
import axios from "axios";

export const useFetchAllCoins = (length = 10) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useMemo(() => {
    const controller = new AbortController();

    const fetchAllCoins = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${length}&page=1&sparkline=false&price_change_percentage=24h`
        );

        const newData = data.map((d: any) => ({
          id: d.id,
          name: d.name,
          img: d.image,
          currentPrice: d.current_price,
          percentageChange: d.price_change_percentage_24h_in_currency,
          symbol: d.symbol,
        }));

        setCoins(newData);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchAllCoins();

    return () => controller.abort();
  }, []);

  return { coins, loading, error };
};
