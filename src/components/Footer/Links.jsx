import React from "react";

function Links({ links, title }) {
  return (
    <>
      <ul>
        <h1 className="mb-1 font-semibold text-white">{title}</h1>
        {links.map((item) => (
          <li key={item.name}>
            <a
              className="text-gray-400 hover:text-accent duration-300 text-sm cursor-pointer leading-6"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))} 
      </ul>
    </>
  );
}

export default Links;
