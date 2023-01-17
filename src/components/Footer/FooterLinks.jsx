import React, { useEffect, useState } from "react";
import Links from "./Links";
import { Community, Services, AboutUs } from "./data";
import { FaChevronCircleDown } from "react-icons/fa";

function FooterLinks() {
  const [language, setLanguage] = useState(null);
  // console.log(language);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("https://libretranslate.de/languages")
      .then((res) => res.json())
      .then((data) => setLanguage(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1  sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
        <Links links={Community} title="Community" />
        <Links links={Services} title="Services" />
        <Links links={AboutUs} title="About Us" />
        <form action="">
          <div className="relative z-0 mb-6 w-full group">
            <div
              className="text-white w-full p-2 flex items-center justify-between"
              onClick={() => setOpen(!open)}
            >
              {selected ? selected : "select language"}
              <FaChevronCircleDown size={20} />
            </div>
            <hr />
            <ul
              className={`bg-white mt-2 overflow-y-auto ${
                open ? "max-h-60 " : "max-h-0"
              }`}
            >
              {language?.map((lang, id) => (
                <li
                  key={id}
                  className="p-2 text-sm hover:bg-sky-500 hover:text-white"
                  onClick={() => {
                    if (lang.name !== selected) {
                      setSelected(lang.name);
                    }
                  }}
                >
                  {lang.name}
                </li>
              ))}
            </ul>
          </div>
          <p className="mb-1  text-white">
            AIM is a suite of open source business apps that cover all your
            company needs.
          </p>
        </form>
        <ul>
          <h1 className="mb-1 font-semibold text-white">Open Source</h1>
          <li>
            <a
              className="text-gray-400 hover:text-accent duration-300 text-sm cursor-pointer leading-6"
              href=""
            >
              Download
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FooterLinks;
