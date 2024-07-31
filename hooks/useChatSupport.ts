"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/id4kvojopc5yoefszmbcypn6enz85oth.js";

    document.body.appendChild(script);
  }, []);
};