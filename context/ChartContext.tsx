"use client";

import React, { createContext, useState, ReactNode } from "react";

export const ChartContext = createContext<{} | null>({});

const ChartProvider = ({ children }: ReactNode | any) => {
  const [coin, setCoin] = useState("bitcoin");

  return (
    <ChartContext.Provider value={{ coin, setCoin }}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
