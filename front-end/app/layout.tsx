import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./home-page/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "班级官网",
  description: "241042Y2班级的官网",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
      <footer
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          textAlign: "center",
        }}
      >
        © 2024 应用技术大学241042Y2班级 | 保留所有权利
      </footer>
    </html>
  );
}
