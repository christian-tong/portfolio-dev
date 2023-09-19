"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import ArrowRightSLineIcon from "remixicon-react/ArrowRightSLineIcon";
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import Folder3FillIcon from "remixicon-react/Folder3FillIcon";
import MarkdownFillIcon from "remixicon-react/MarkdownFillIcon";
import ContactsSection from "./ContactsSection";

function AboutMeSideNav() {
  const pathname = usePathname();

  const [PersonalInfo, setPersonalInfo] = useState(true);

  const [BioFolder, setBioFolder] = useState(true);

  const personalInfoClick = () => {
    setPersonalInfo(!PersonalInfo);
  };

  const BioFolderClick = () => {
    setBioFolder(!BioFolder);
  };

  function PersonalInfoSection() {
    return (
      <div>
        <div
          className="flex p-3 border border-lines-gunmetal text-white"
          onClick={personalInfoClick}>
          {PersonalInfo ? <ArrowDownSFillIcon /> : <ArrowRightSFillIcon />}
          <h2>personal-info</h2>
        </div>
        {PersonalInfo && (
          <div>
            <div>
              <div className="flex px-3 py-2 gap-2" onClick={BioFolderClick}>
                {BioFolder ? <ArrowDownSLineIcon /> : <ArrowRightSLineIcon />}
                <Folder3FillIcon color="#E99287" />
                <h2 className={BioFolder ? "text-white" : ""}>bio</h2>
              </div>
              {BioFolder && (
                <div>
                  <Link
                    href="/about-me/bio/index"
                    className={
                      pathname === "/about-me/bio/index"
                        ? "flex px-11 py-2 gap-2 text-white"
                        : "flex px-11 py-2 gap-2"
                    }>
                    <MarkdownFillIcon />
                    <h2>index.md</h2>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="h-full w-[450px] max-xl:w-full border border-lines-gunmetal">
      <PersonalInfoSection />
      <ContactsSection />
    </section>
  );
}

export default AboutMeSideNav;
