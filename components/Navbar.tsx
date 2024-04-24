"use client";

import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDoubleDropdownOpen, setIsDoubleDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleDoubleDropdown = () => {
    setIsDoubleDropdownOpen(!isDoubleDropdownOpen);
  };

  return (
    <header>
      <nav
        className="bg-white border-grey-100  fixed w-full nav
        dark:bg-black dark:border-black-100"
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Image
              src={"https://flowbite.com/docs/images/logo.svg"}
              width={40}
              height={40}
              alt="logo"
            />
            <span className="self-center  text-2xl font-semibold whitespace-nowrap dark:text-white">
              Nixon
            </span>
          </a>
          <button
            onClick={toggleNavbar}
            type="button"
            className="flex flex-col justify-center items-center md:hidden md:flex-row md:items-center md:space-x-2 md:ml-auto md:space-y-0"
            aria-controls="navbar-multi-level"
          >
            <span className="sr-only">Open main menu</span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm dark:bg-white ${
                      isDropdownOpen
                        ? "rotate-45 translate-y-1"
                        : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 dark:bg-white ${
                      isDropdownOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm dark:bg-white ${
                      isDropdownOpen
                        ? "-rotate-45 -translate-y-1"
                        : "translate-y-0.5"
                    }`}
            ></span>
          </button>
          <div
            className={`${
              isDropdownOpen
                ? "block transition-all duration-500 ease-in-out"
                : "hidden transition-all duration-300 delay-1000 ease-out"
            } w-full md:block md:w-auto transition-max-height duration-300 ease-in-out`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black dark:text-white">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black transition-all duration-300 delay-1000 ease-out bg-gray-50 text-center rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-gray-50 text-center  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-gray-50 text-center  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-gray-50 text-center  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-gray-50 text-center  rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-black bg-gray-50 text-center  rounded md:bg-transparent md:text-white md:p-0 md:dark:text-white dark:bg-black dark:text-white md:dark:bg-transparent"
                  aria-current="page"
                >
                  Blogs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
