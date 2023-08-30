"use client";

import UsersDetails from "@/components/profile/UserDetails";
import UserNameCard from "@/components/profile/UserNameCard";
import UserVerification from "@/components/profile/UserVerification";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function UserProfile() {
  return (
    <div>
      <UserNameCard />
      <UserVerification />
      <UsersDetails />
      <ToastContainer theme="colored" className="toast" />
    </div>
  );
}
