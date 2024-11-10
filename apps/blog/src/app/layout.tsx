import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cookies } from "next/headers";
import { Theme } from "@/types";
import Header from "./components/Header";

// add back in
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMonop = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { get: getCookies } = await cookies();

  const savedTheme: Theme =
    getCookies("x-ndeno-blog-theme")?.value === "dark" ? "dark" : "light";

  return (
    <html lang="en">
      <body className={savedTheme}>
        <Header />
        {children}
      </body>
    </html>
  );
}
