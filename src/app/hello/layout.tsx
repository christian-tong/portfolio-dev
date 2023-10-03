import type { Metadata } from "next";
import { Header, Footer } from "@/app/components/_index";

export const metadata: Metadata = {
  title: "Christian Tong - Hello",
};

export default function HelloLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-[100dvh] w-full flex flex-col justify-between">
      <Header />
      <main className="h-full">{children}</main>
      <Footer />
    </section>
  );
}
