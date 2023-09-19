import type { Metadata } from "next";
import { Header, Footer, ProjectsSideNav } from "../components/_index";

export const metadata: Metadata = {
  title: "Christian Tong | projects",
};

export default function ProjectsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-[100dvh] w-full max-lg:h-full flex flex-col justify-between">
      <Header />
      <section className="flex h-full w-full max-xl:flex-col">
        <ProjectsSideNav />
        <main className="h-full w-full border border-lines-gunmetal">{children}</main>
      </section>
      <Footer />
    </section>
  );
}
