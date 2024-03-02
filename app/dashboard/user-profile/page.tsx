import UsersDetails from "@/components/profile/UserDetails";
import UserNameCard from "@/components/profile/UserNameCard";
import UserVerification from "@/components/profile/UserVerification";

export default function UserProfile() {
  return (
    <div>
      <UserNameCard />
      <UserVerification />
      <UsersDetails />
    </div>
  );
}
