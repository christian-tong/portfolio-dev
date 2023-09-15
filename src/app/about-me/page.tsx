"use client";
import { redirect, usePathname } from "next/navigation";

function AboutMePage() {
  const pathname = usePathname();
  if (pathname === "/about-me") {
    redirect("/about-me/bio/index");
  }
}

export default AboutMePage;
