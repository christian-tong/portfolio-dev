import "./globals.css";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Header, Footer } from "./components/_index";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Tong - Portfolio",
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
        <Header />
        <main className="h-[100dvh] pt-14 pb-11 max-sm:px-4 flex items-center justify-center border border-lines-gunmetal rounded-xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
