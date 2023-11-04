"use client";
import "./globals.css";
import { useChatSupport } from "@/hooks/useChatSupport";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChatSupport();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
