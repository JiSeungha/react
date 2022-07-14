import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/opensea.png";
import CategoryDropdown from "./buttons/CategoryDropdown";

const Header = ({}) => {
  const [hide, setHide] = useState(true);
  const [windowDimenion, detectHW] = useState({
    winWidth: 0,
    winHeight: 0,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    detectHW({ winWidth: window.innerWidth, winHeight: window.innerHeight });
  });

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white shadow-md p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Link href="/#">
          <a className="flex items-center">
            <Image className="fill-current h-8 w-8 mr-2 rounded-full" width="54" height="54" src={logo} alt="OpenSea" />
            <span className="font-bold text-xl tracking-tight">OpenSea</span>
          </a>
        </Link>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal mr-10"
          placeholder=" Search Here ... "
        />
      </form>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-black border-black"
          onClick={() => {
            setHide(!hide);
          }}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {windowDimenion.winWidth > 1024 || !hide ? (
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
            >
              <CategoryDropdown title={"Explore"} menus={[{ title: "Domain" }, { title: "Music" }]} />
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
            >
              Stats
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4"
            >
              Resources
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black">
              Create
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Button
            </a>
          </div>
        </div>
      ) : (
        <>{""}</>
      )}
    </nav>
  );
};

export default Header;
