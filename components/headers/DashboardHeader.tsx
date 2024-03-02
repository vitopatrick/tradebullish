"use client";

import Link from "next/link";
import TradingModal from "../modals/TradingModal";
import { Dispatch, SetStateAction, useState } from "react";
import { useFetchUser } from "@/hooks/useFetchUser";
import { FaBars } from "react-icons/fa";

type DashboardHeaderProps = {
  toggle: Dispatch<SetStateAction<boolean>>;
};

export default function DashboardHeader({ toggle }: DashboardHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  // get the user name using the useFetchUser hook
  const { userState: user, loading }: { userState: any; loading: boolean } =
    useFetchUser();

  return (
    <header className="flex items-center bg-sideBar justify-between p-4">
      {loading ? (
        <p className="font-body capitalize text-neutral-500">...loading</p>
      ) : (
        <div>
          <Link
            href="/dashboard/account"
            className="font-body uppercase text-white text-xl hover:underline transition-all ease-in-out"
          >
            {user?.name}
          </Link>
        </div>
      )}
      <div className="flex items-center gap-3">
        <div className="mx-3 p-2 md:hidden block">
          <FaBars
            className="text-white cursor-pointer"
            onClick={() => toggle(true)}
          />
        </div>
      </div>
      <TradingModal isOpen={isOpen} toggle={setIsOpen} />
    </header>
  );
}
