import { AiOutlineDashboard } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { SiMarketo } from "react-icons/si";
import { RiLuggageDepositFill } from "react-icons/ri";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";

export const userLinks = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icons: <AiOutlineDashboard />,
  },
  {
    id: 2,
    title: "Profile",
    path: "/dashboard/user-profile",
    icons: <FiUser />,
  },
];

export const transactionLinks = [
  {
    id: 1,
    title: "Deposit",
    path: "/dashboard/deposit",
    icons: <RiLuggageDepositFill />,
  },
  {
    id: 2,
    title: "Withdraw",
    path: "/dashboard/withdraw",
    icons: <BiMoneyWithdraw />,
  },
  {
    id: 3,
    title: "Staking",
    path: "/dashboard/staking",
    icons: <BsBriefcaseFill />,
  },
  {
    id: 4,
    title: "P2P trading",
    path: "/dashboard/trading",
    icons: <SiMarketo />,
  },
];
