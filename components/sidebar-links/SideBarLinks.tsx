"use client";

import Link from "next/link";
import { transactionLinks, userLinks } from "./links";
import { MdLogout } from "react-icons/md";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase";

export default function SideBarLinks() {
  // next router
  const router = useRouter();

  const logOut = () => {
    localStorage.removeItem("token");
    signOut(auth);
    router.replace("/get-started");
  };

  return (
    <div className="text-white p-4 relative">
      {/* logo */}
      <div>
        <Link
          href="/dashboard"
          className="text-2xl underline text-main font-header tracking-widest"
        >
          <img
            src="https://irp.cdn-website.com/eacf0b23/dms3rep/multi/Trade bullish+Logo-01.svg"
            alt=""
          />
        </Link>
      </div>
      {/* links wrapper container*/}
      <div className="my-8">
        {/* user links */}
        <div>
          <h4 className="font-body text-lg font-semibold text-neutral-400 underline">
            Account
          </h4>
          <div className="space-y-4 my-4">
            {userLinks.map((link): any => (
              <Link
                href={link.path}
                key={link.id}
                className="flex items-center gap-2 p-4 font-body hover:bg-bg  transition-all ease-in rounded-lg"
              >
                {link.icons}
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* end of user links */}
        {/* transactions links */}
        <div>
          <h4 className="font-body text-lg font-semibold text-neutral-400 underline">
            Transactions
          </h4>
          <div className="space-y-4 my-4">
            {transactionLinks.map((link): any => (
              <Link
                href={link.path}
                key={link.id}
                className="flex items-center gap-2 p-4 font-body hover:bg-bg  transition-all ease-in rounded-lg"
              >
                {link.icons}
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* end of transactions links */}
        {/* logout button */}
        <div className="p-2 md:mt-[10rem]">
          <button
            onClick={logOut}
            className="flex items-center gap-1 font-body w-full hover:bg-bg px-2 py-4 rounded-lg"
          >
            <MdLogout size={"20px"} /> <span>Sign Out</span>
          </button>
        </div>
        {/* end of log out button */}
      </div>
      {/* end of links wrapper container */}
    </div>
  );
}
