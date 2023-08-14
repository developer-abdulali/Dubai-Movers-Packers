import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-white z-10 px-3 md:p-0">
      <div className="max-w-screen-xl mx-auto mt-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 py-3">
            <a href="/">
              <img
                src="/images/logo-removebg.png"
                alt="logo"
                className="w-[120px] sm:w-[200px]"
              />
            </a>
          </div>
          <div className="hidden md:flex ml-10 space-x-6 text-md font-medium">
            <a
              href="/"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              HOME
            </a>
            <a
              href="/about"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/about" ? "text-blue-500" : ""
              }`}
            >
              ABOUT
            </a>
            <a
              href="/services"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/services" ? "text-blue-500" : ""
              }`}
            >
              SERVICES
            </a>
            <a
              href="/houseShifting"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/houseShifting" ? "text-blue-500" : ""
              }`}
            >
              HOUSE SHIFTING 24/7
            </a>
            <a
              href="/getAQuote"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/getAQuote" ? "text-blue-500" : ""
              }`}
            >
              GET A QUOTE
            </a>
            <a
              href="/contact"
              className={`duration-200 hover:text-blue-500 ${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
            >
              CONTACT
            </a>
          </div>
          <div className="-mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:ring-offset-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden px-2 pt-2 pb-3 text-black`}
      >
        <div className="flex flex-col space-y-5 text-lg font-medium">
          <a
            href="/"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/" ? "text-blue-500" : ""
            }`}
          >
            Home
          </a>
          <a
            href="/about"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/about" ? "text-blue-500" : ""
            }`}
          >
            About
          </a>
          <a
            href="/services"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/services" ? "text-blue-500" : ""
            }`}
          >
            Services
          </a>
          <a
            href="/houseShifting"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/houseShifting" ? "text-blue-500" : ""
            }`}
          >
            House Shifting 24/7
          </a>
          <a
            href="/getAQuote"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/getAQuote" ? "text-blue-500" : ""
            }`}
          >
            Get A Quote
          </a>
          <a
            href="/contact"
            className={`duration-200 hover:text-cyan-300 ${
              location.pathname === "/contact" ? "text-blue-500" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
