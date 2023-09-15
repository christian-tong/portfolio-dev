import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Tong | _hello",
  description: "Portfolio Christian Tong Front-End Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
