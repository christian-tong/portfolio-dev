"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuFillIcon from "remixicon-react/MenuFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";

function Header() {
  const [Menu, setMenu] = useState(false);

  const menuClick = () => {
    setMenu(!Menu);
  };

  const pathname = usePathname();
  return (
    <header className="absolute z-10 top-0 right-0 w-full">
      <nav className="flex w-full justify-between items-center border rounded-t-xl border-lines-gunmetal ">
        <Link
          href="/hello"
          className="w-full max-w-[250px] max-lg:max-w-[180px] py-4 px-5">
          <h2>christian-tong </h2>
        </Link>

        <div className="flex justify-between w-full max-md:hidden">
          <ul className="flex">
            <Link href="/hello">
              <li
                className={
                  pathname === "/hello"
                    ? "border-b-accent-sandy-brown border-b-2 px-7 h-full flex items-center border-x border-lines-gunmetal "
                    : "px-7 h-full flex items-center border-x border-lines-gunmetal"
                }>
                _hello
              </li>
            </Link>
            <Link href="/about-me">
              <li
                className={
                  pathname === "/about-me"
                    ? "border-b-accent-sandy-brown border-b-2 px-7 h-full flex items-center border-x border-lines-gunmetal "
                    : "px-7 h-full flex items-center border-x border-lines-gunmetal"
                }>
                _about-me
              </li>
            </Link>
            <Link href="/projects">
              <li
                className={
                  pathname === "/projects"
                    ? "border-b-accent-sandy-brown border-b-2 px-7 h-full flex items-center border-x border-lines-gunmetal "
                    : "px-7 h-full flex items-center border-x border-lines-gunmetal"
                }>
                _projects
              </li>
            </Link>
          </ul>
          <Link href="/contact-me">
            <p
              className={
                pathname === "/contact-me"
                  ? "py-4 px-5 border-l border-lines-gunmetal border-b-accent-sandy-brown border-b-2"
                  : "py-4 px-5 border-l border-lines-gunmetal "
              }>
              _contact-me
            </p>
          </Link>
        </div>

        <button className="hidden py-4 px-5 max-md:block" onClick={menuClick}>
          {Menu ? <CloseFillIcon /> : <MenuFillIcon />}
        </button>
        {Menu && (
          <div className="absolute border border-lines-gunmetal right-0 top-[57px] w-full">
            <ul className="flex flex-col bg-primary-rich-black-200">
              <Link href="/hello" onClick={menuClick}>
                <li className=" border px-7 py-4 h-full flex items-center border-x border-lines-gunmetal text-white">
                  _hello
                </li>
              </Link>
              <Link href="/about-me" onClick={menuClick}>
                <li className=" border px-7 py-4 h-full flex items-center border-x border-lines-gunmetal text-white">
                  _about-me
                </li>
              </Link>
              <Link href="/projects" onClick={menuClick}>
                <li className=" border px-7 py-4 h-full flex items-center border-x border-lines-gunmetal text-white">
                  _projects
                </li>
              </Link>
              <Link href="/contact-me" onClick={menuClick}>
                <li className=" border px-7 py-4 h-full flex items-center border-x border-lines-gunmetal text-white">
                  _contact-me
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header;
