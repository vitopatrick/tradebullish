import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useAuth() {
  const router = useRouter();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : false;

  useEffect(() => {
    if (!token) router.push("/login");
  }, []);
}
