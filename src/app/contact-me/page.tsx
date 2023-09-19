"use client";

import React, { useState } from "react";

function ContactMePage() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const inputName = (event: { target: { value: any } }) => {
    const nameValue = event.target.value;
    setName(nameValue);
  };
  const inputEmail = (event: { target: { value: any } }) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
  };
  const inputMessage = (event: { target: { value: any } }) => {
    const messageValue = event.target.value;
    setMessage(messageValue);
  };

  const dateNow = Date.now();
  const formDate = new Date(dateNow).toDateString();

  return (
    <section className="h-full w-full ">
      <div className="h-full w-full flex max-2xl:flex-col">
        <div className="h-full w-1/2 max-2xl:w-full p-6 flex justify-center items-center border border-lines-gunmetal">
          <form className="flex flex-col gap-8 w-full max-w-md ">
            <div className="flex flex-col gap-4">
              <label htmlFor="_name">_name:</label>
              <input
                type="text"
                id="_name"
                value={Name}
                onChange={inputName}
                className="bg-primary-rich-black-300 border border-lines-gunmetal rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="_email">_email:</label>
              <input
                type="email"
                id="_email"
                value={Email}
                onChange={inputEmail}
                className="bg-primary-rich-black-300 border border-lines-gunmetal rounded-xl invalid:border-red-500"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="_message">_message:</label>
              <textarea
                rows={6}
                id="_message"
                value={Message}
                onChange={inputMessage}
                className="bg-primary-rich-black-300 border border-lines-gunmetal rounded-xl"
              />
            </div>
            <div>
              <button className="bg-[#1C2B3A] text-white p-4 rounded-xl">
                submit-message
              </button>
            </div>
          </form>
        </div>
        <div className="h-full w-1/2 max-2xl:w-full p-6 max-md:hidden flex justify-center items-center border border-lines-gunmetal">
          <div className="flex flex-col gap-4 max-w-xl max-lg:w-full p-4">
            <div>
              <p className="text-secondary-savoy-blue">
                <span className="text-accent-lavender-floral">const </span>{" "}
                button <span className="text-accent-lavender-floral"> = </span>{" "}
                document.querySelector{" "}
                <span className="text-secondary-slate-gray">{"("}</span>
                <span className="text-accent-sandy-brown">{"'#sendBtn'"}</span>
                <span className="text-secondary-slate-gray">{");"}</span>
              </p>
            </div>
            <div className="flex flex-col break-words">
              <p className="text-secondary-savoy-blue">
                <span className="text-accent-lavender-floral">const </span>{" "}
                message <span className="text-accent-lavender-floral"> = </span>{" "}
                <span className="text-secondary-slate-gray">{"{"}</span>
                <br />
                name<span className="text-secondary-slate-gray">
                  {":"}
                </span>{" "}
                <span className="text-accent-sandy-brown">{`"${Name}"`}</span>
                <span className="text-secondary-slate-gray">{","}</span>
                <br />
                email<span className="text-secondary-slate-gray">
                  {":"}
                </span>{" "}
                <span className="text-accent-sandy-brown">{`"${Email}"`}</span>
                <span className="text-secondary-slate-gray">{","}</span>
                <br />
                message<span className="text-secondary-slate-gray">
                  {":"}
                </span>{" "}
                <span className="text-accent-sandy-brown">{`"${Message}"`}</span>
                <span className="text-secondary-slate-gray">{","}</span>
                <br />
                date<span className="text-secondary-slate-gray">
                  {":"}
                </span>{" "}
                <span className="text-accent-sandy-brown">{`"${formDate}"`}</span>
                <span className="text-secondary-slate-gray">{","}</span>
                <br />
                <span className="text-secondary-slate-gray">{"};"}</span>
              </p>
            </div>
            <div>
              <p className="text-secondary-savoy-blue">
                button<span className="text-secondary-slate-gray">{"."}</span>
                addEventListener
                <span className="text-secondary-slate-gray">{"("}</span>
                <span className="text-accent-sandy-brown">{"'click'"}</span>
                <span className="text-secondary-slate-gray">{", ()"}</span>
                <span className="text-accent-lavender-floral">
                  {" => "}{" "}
                </span>{" "}
                <span className="text-secondary-slate-gray">{"{"}</span>
                <br />
                form
                <span className="text-secondary-slate-gray">{"."}</span> send
                <span className="text-secondary-slate-gray">{"("}</span>message
                <span className="text-secondary-slate-gray">{");"}</span>
                <br />
                <span className="text-secondary-slate-gray">{"}"}</span>
                <span className="text-secondary-slate-gray">{");"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMePage;
