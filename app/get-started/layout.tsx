import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get started with Nagamarkets",
  description: "Start your easy trading Today",
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
