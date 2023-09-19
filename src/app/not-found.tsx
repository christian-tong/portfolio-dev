import type { Metadata } from "next";
import { Header, Footer } from "@/app/components/_index";

export const metadata: Metadata = {
  title: "Not Found 404",
};

export default function NotFound() {
  return (
    <section className="h-[100dvh] flex flex-col justify-between">
      <Header />
      <main className=" flex justify-center items-center flex-col gap-6">
        <h2 className="text-5xl">Not Found</h2>
        <p className="text-xl">Pleas back to home</p>
      </main>
      <Footer />
    </section>
  );
}
