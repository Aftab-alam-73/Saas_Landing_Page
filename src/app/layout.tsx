import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
// clsx is a small utility for conditionally combining class names in JavaScript. It’s commonly used in React projects to help manage class name composition based on dynamic conditions.
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sass Dark Landing Page",
  description: "It's a sass Dark landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased  ")}>{children}</body>
    </html>
  );
}
