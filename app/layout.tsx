import Footer from "@/components/footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import Nav from "@/components/nav/Nav";

export const metadata: Metadata = {
  title: "Nagamarket",
  description: "Start your easy trading Today",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
