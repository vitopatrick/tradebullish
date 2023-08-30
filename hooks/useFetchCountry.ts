import { useState, useEffect } from "react";

export function useFetchCountry() {
  const [countries, setCountries] = useState<[] | {} | any>();

  useEffect(() => {
    // subscribe
    const controller = new AbortController();
    const fetchCountry = async () => {
      const request = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      // convert the response to JSON
      const response = await request.json();

      //  transform the list
      const newList = response.data.map((res: unknown | any) => ({
        country: res.country,
      }));

      //  update the state
      setCountries(newList);
    };

    fetchCountry();

    return () => controller.abort();
  }, []);

  return { countries };
}
