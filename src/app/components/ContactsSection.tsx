"use client"

import { useState } from "react";
import ArrowDownSFillIcon from "remixicon-react/ArrowDownSFillIcon";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import WhatsappFillIcon from "remixicon-react/WhatsappFillIcon";

function ContactsSection() {
  const [Contacts, setContacts] = useState(true);

  const contactsClick = () => {
    setContacts(!Contacts);
  };
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

export default ContactsSection;
