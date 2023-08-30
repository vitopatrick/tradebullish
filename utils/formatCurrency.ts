export const formatCurrency = (
  price: number = 0,
  fractionUnits: number = 0
) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    notation: "standard",
    maximumFractionDigits: fractionUnits,
  }).format(price);
};
