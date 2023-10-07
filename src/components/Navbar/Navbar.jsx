import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArabicText from "../ArabicText/ArabicText";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scroll threshold based on your needs
      const scrollThreshold = 100;
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-10 ">
      {isScrolled ? null : <ArabicText />}
      <nav className="bg-white shadow-sm">
        <div className="max-w-screen-xl mx-auto px-3 h-full ">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-between h-full">
              <div className="flex-shrink-0 py-3">
                <img
                  src="/images/logo-removebg.png"
                  alt="logo"
                  className="w-[120px] sm:w-[200px] mt-2 cursor-pointer"
                />
              </div>
              {/* ... Main navigation links for larger screens ... */}
              <div className="hidden md:flex ml-10 space-x-6 text-md font-medium">
                <Link
                  to="/"
                  className={`duration-200 hover:text-blue-500 ${
                    location.pathname === "/" ? "text-blue-500" : ""
                  }`}
                >
                  HOME
                </Link>
                <Link
                  to="/about"
                  className={`duration-200 hover:text-blue-500 ${
                    location.pathname === "/about" ? "text-blue-500" : ""
                  }`}
                >
                  ABOUT
                </Link>
                <Link
                  to="/services"
                  className={`duration-200 hover:text-blue-500 ${
                    location.pathname === "/services" ? "text-blue-500" : ""
                  }`}
                >
                  SERVICES
                </Link>

                <Link
                  to="/houseShifting"
                  className={`duration-200 hover:text-blue-500 hidden lg:block ${
                    location.pathname === "/houseShifting"
                      ? "text-blue-500"
                      : ""
                  }`}
                >
                  HOUSE SHIFTING 24/7
                </Link>
                <Link
                  to="/getAQuote"
                  className={`duration-200 hover:text-blue-500 ${
                    location.pathname === "/getAQuote" ? "text-blue-500" : ""
                  }`}
                >
                  GET A QUOTE
                </Link>
                <Link
                  to="/contact"
                  className={`duration-200 hover:text-blue-500 ${
                    location.pathname === "/contact" ? "text-blue-500" : ""
                  }`}
                >
                  CONTACT
                </Link>
              </div>
              <div className="-mr-2 md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 "
                >
                  <span className="sr-only">Open main menu</span>
                  {/* ... Your menu icon SVGs ... */}
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-9 w-9`}
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
                    className={`${isOpen ? "block" : "hidden"} h-9 w-9`}
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
        </div>
        {/* Mobile navigation sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } w-60 sm:w-7/12 bg-black opacity-90 text-white transition duration-300 ease-in-out md:hidden`}
        >
          <div className="flex-shrink-0 py-4 px-4">
            <Link to="/">
              <img
                src="/images/logo-removebg.png"
                alt="logo"
                className="w-[120px] sm:w-[200px] mt-2"
              />
            </Link>
          </div>
          <div className="px-4 py-10 space-y-5 sm:space-y-8 text-lg sm:text-2xl font-medium">
            <Link
              href="/"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/" ? "text-blue-500" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/about" ? "text-blue-500" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/services" ? "text-blue-500" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/houseShifting"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/houseShifting" ? "text-blue-500" : ""
              }`}
            >
              House Shifting 24/7
            </Link>
            <Link
              href="/getAQuote"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/getAQuote" ? "text-blue-500" : ""
              }`}
            >
              Get A Quote
            </Link>
            <Link
              href="/contact"
              className={`block duration-200 hover:text-blue-500 ${
                location.pathname === "/contact" ? "text-blue-500" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
