import { formatCurrency } from "@/utils/formatCurrency";

export default [
  {
    id: 1,
    name: "Bronze",
    minAmount: formatCurrency(500),
    duration: "25-30days",
    return: "15%",
  },
  {
    id: 2,
    name: "Sliver",
    minAmount: formatCurrency(5000),
    duration: "25-30days",
    return: "20%",
  },
  {
    id: 3,
    name: "Gold",
    minAmount: formatCurrency(20000),
    duration: "25-30days",
    return: "30%",
  },
  {
    id: 4,
    name: "Platinum",
    minAmount: `${formatCurrency(50000)} & Above`,
    duration: "25-30days",
    return: "42%",
  },
];
