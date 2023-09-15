import type { Metadata } from "next";
import { Header, Footer, AboutMeSideNav } from "../components/_index";

export const metadata: Metadata = {
  title: "Christian Tong | _about-me",
};

export default function AboutMeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-full w-full flex flex-col justify-between">
      <Header />
      <section className="flex h-full w-full max-xl:flex-col">
        <AboutMeSideNav />
        <main className="h-full w-full">{children}</main>
      </section>
      <Footer />
    </section>
  );
}
