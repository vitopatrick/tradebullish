"use client";
import Footer from "@/components/footer/Footer";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import { useChatSupport } from "@/hooks/useChatSupport";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useChatSupport();

  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
