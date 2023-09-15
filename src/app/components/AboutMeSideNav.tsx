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
import MailFillIcon from "remixicon-react/MailFillIcon";
import WhatsappFillIcon from "remixicon-react/WhatsappFillIcon";

function AboutMeSideNav() {
  const pathname = usePathname();

  const [PersonalInfo, setPersonalInfo] = useState(true);

  const [BioFolder, setBioFolder] = useState(true);
  const [EducationFolder, setEducationFolder] = useState(false);

  const [Contacts, setContacts] = useState(true);

  const personalInfoClick = () => {
    setPersonalInfo(!PersonalInfo);
  };

  const BioFolderClick = () => {
    setBioFolder(!BioFolder);
  };

  const EducationFolderClick = () => {
    setEducationFolder(!EducationFolder);
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
            <div>
              <div
                className="flex px-3 py-2 gap-2"
                onClick={EducationFolderClick}>
                {EducationFolder ? (
                  <ArrowDownSLineIcon />
                ) : (
                  <ArrowRightSLineIcon />
                )}
                <Folder3FillIcon color="#4D5BCE" />
                <h2 className={EducationFolder ? "text-white" : ""}>
                  education
                </h2>
              </div>
              {EducationFolder && (
                <div>
                  <Link
                    href="/about-me/education/index"
                    className={
                      pathname === "/about-me/education/index"
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

  const contactsClick = () => {
    setContacts(!Contacts);
  };

  function ContactsSection() {
    return (
      <div>
        <div
          className="flex p-3 border border-lines-gunmetal text-white"
          onClick={contactsClick}>
          {Contacts ? <ArrowDownSFillIcon /> : <ArrowRightSFillIcon />}
          <h2>contacts</h2>
        </div>
        {Contacts && (
          <div>
            <a
              href="mailto:christian.tongcruz96@outlook.com"
              className="flex p-3 gap-2">
              <MailFillIcon />
              <h2>christian.tongcruz96@outlook.com</h2>
            </a>
            <a
              href="https://wa.me/51926514175"
              target="_blank"
              className="flex p-3 gap-2">
              <WhatsappFillIcon />
              <h2>+51926514175</h2>
            </a>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="h-full w-96 max-xl:w-full border border-lines-gunmetal">
      <PersonalInfoSection />
      <ContactsSection />
    </section>
  );
}

export default AboutMeSideNav;
