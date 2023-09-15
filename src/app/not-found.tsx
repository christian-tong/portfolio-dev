import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found 404",
};

export default function NotFound() {
  return (
    <section className=" flex justify-center items-center flex-col gap-6">
      <h2 className="text-5xl">Not Found</h2>
      <p className="text-xl">Could not find requested resource</p>
    </section>
  );
}
