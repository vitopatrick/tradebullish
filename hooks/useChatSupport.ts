"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    // script.src = "//code.tidio.co/rehlmbne8cgi1pqhiwbbha0h09brpc3m.js";

    document.body.appendChild(script);
  }, []);
};
