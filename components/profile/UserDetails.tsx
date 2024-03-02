"use client";

import { TfiEmail } from "react-icons/tfi";
import { MdOutlineVerified, MdPublishedWithChanges } from "react-icons/md";
import { useFetchUser } from "@/hooks/useFetchUser";

const UsersDetails = () => {
  // fetch user details
  const { userState: user, loading }: { userState: any; loading: boolean } =
    useFetchUser();

  return (
    <>
      {/* parent grid container */}
      <div className="md:w-[60%] mx-auto  md:grid grid-cols-2 gap-4 px-2 text-white font-body">
        {/* grid children */}
        {/* grid child one */}
        <div className="my-2 p-4 flex items-center gap-6 bg-sideBar rounded shadow">
          <div className="bg-card p-3 md:p-5 rounded-full">
            <TfiEmail color="#4ade80" className="text-base md:text-2xl" />
          </div>
          <div className="space-y-3">
            <h2 className="text-neutral-400 text-sm md:text-base underline">
              Email
            </h2>
            {loading && (
              <p className="font-body text-neutral-400">...loading</p>
            )}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">
                {user?.Email}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 2 */}
        {/* grid child 2 */}
        <div className="my-2 p-4 flex items-center gap-6 bg-sideBar rounded shadow">
          <div className="bg-card p-3 md:p-5 rounded-full">
            <MdOutlineVerified className="text-[#dc2626] text-base md:text-2xl" />
          </div>

          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base underline">
              Account Status
            </h2>
            {loading && (
              <p className="font-body text-neutral-400">...loading</p>
            )}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base text-paper">
                {user?.verified ? "Verified" : "Not Verified"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 3 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-sideBar rounded shadow">
          <div className="bg-card p-3 md:p-5 rounded-full">
            <MdPublishedWithChanges className="text-[#fbbf24] text-base md:text-2xl" />
          </div>

          <div className="space-y-3 font-medium">
            <h2 className="text-neutral-400 text-sm md:text-base underline">
              Withdrawal Limit
            </h2>
            {loading && (
              <p className="font-body text-neutral-400">...loading</p>
            )}
            {!loading && (
              <h1 className="font-medium text-sm md:text-base">
                {user?.verified
                  ? "unlimited"
                  : "No withdrawal please verify account"}
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
