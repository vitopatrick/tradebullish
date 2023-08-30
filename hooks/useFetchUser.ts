"use client";

import { UserContext } from "@/context/UserAuthContext";
import { useState, useContext, useMemo } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { store } from "../firebase";

export const useFetchUser = () => {
  // context api
  const { user }: {} | null | any = useContext(UserContext);

  const [userState, setUserState] = useState<{} | null>();
  const [error, setError] = useState<{} | null | string>();
  const [loading, setLoading] = useState(false);

  // use Memo hook to fetch user
  useMemo(() => {
    const controller = new AbortController();
    setLoading(true);
    const fetchUser = async () => {
      //   create document ref
      const docRef = doc(store, "/users", `/${user.email}`);
      onSnapshot(
        docRef,
        (doc) => {
          setUserState({ ...doc.data(), meta: doc.metadata });
        },
        (error) => {
          setError(error.message);
        }
      );
    };

    fetchUser();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => controller.abort();
  }, [user.email]);

  const sideEffects = {
    error,
    loading,
  };

  return { ...sideEffects, userState };
};
