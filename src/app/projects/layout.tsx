import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Tong | _projects",
};

export default function AboutMeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
