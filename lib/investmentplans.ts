import { formatCurrency } from "@/utils/formatCurrency";

export default [
  {
    id: 1,
    name: "Sliver",
    minAmount: formatCurrency(5000),
    duration: "1 week",
    return: "20%",
  },
  {
    id: 2,
    name: "Gold",
    minAmount: formatCurrency(20000),
    duration: "1 week",
    return: "30%",
  },
  {
    id: 3,
    name: "Platinum",
    minAmount: formatCurrency(50000),
    duration: "1 week",
    return: "42%",
  },
];
