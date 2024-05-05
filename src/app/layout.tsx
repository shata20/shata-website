import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shata20 - فروشگاه موبایل شما",
  description: "Shata20 فروشگاه یکپارچه موبایل شما است که دستگاه های موبایل و لوازم جانبی گوناگون را ارائه می دهد. مجموعه ما را کاوش کنید و دستگاه موبایل ایده آل خود را پیدا کنید.",
  keywords: "فروشگاه موبایل, دستگاه های موبایل, لوازم جانبی موبایل, فروشگاه موبایل آنلاین, گوشی های هوشمند, تبلت, خرید موبایل, Shata20",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
