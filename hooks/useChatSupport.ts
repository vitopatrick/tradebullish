"use client";

import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//code.tidio.co/km2upoiehybx9p9w5joga2e8lew0alxc.js";

    document.body.appendChild(script);
  }, []);
};

