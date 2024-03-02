"use client";

import { useState } from "react";
import VerificationModal from "../modals/VerificationModal";
import { useFetchUser } from "@/hooks/useFetchUser";

const UserVerification = () => {
  const [hide, setHide] = useState(false);
  const { userState: user }: { userState: any; loading: boolean } =
    useFetchUser();

  return (
    <section className=" my-2 flex items-center justify-center">
      {user?.verified ? null : (
        <>
          <div className="flex items-center gap-2 px-3 font-main">
            <div className="my-4">
              <button
                onClick={() => setHide(true)}
                className="font-body rounded-full block px-3 py-1 text-xs border-main border font-bold text-white"
              >
                Start verification
              </button>
            </div>
          </div>
          <VerificationModal hide={hide} setHide={setHide} />
        </>
      )}
    </section>
  );
};

export default UserVerification;
