import type { Metadata } from "next";
import { Header, Footer, ContactsSection } from "../components/_index";

export const metadata: Metadata = {
  title: "Christian Tong | _contact-me",
};

export default function ContactMeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-[100dvh] max-xl:h-full w-full flex flex-col justify-between">
      <Header />
      <section className="flex h-full w-full max-xl:flex-col">
        <ContactsSection />
        <main className="h-full w-full border border-lines-gunmetal">
          {children}
        </main>
      </section>
      <Footer />
    </section>
  );
}
