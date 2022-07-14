import React, { useState } from "react";

export default function CategoryDropdown({ title, menus }) {
  const [hide, setHide] = useState<boolean>(true);

  return (
    <div
      onMouseEnter={() => {
        setHide(false);
      }}
      onMouseLeave={() => {
        setHide(true);
      }}
    >
      <div className="inline-block relative">
        <button className="bg-white text-gray-700 py-2 rounded inline-flex items-center">
          <span className="mr-1">{title}</span>
        </button>

        {hide ? null : (
          <ul className="border-2 absolute text-gray-700 pt-1">
            {menus.map((menu) => (
              <li className="" key={menu.title}>
                <a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
