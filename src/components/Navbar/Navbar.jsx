import React, { useState, useRouter } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  return (
    <nav className="sticky top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 py-3">
            <a href="#" className="">
              <img
                src="/images/logo-removebg.png"
                alt="logo"
                className="w-[120px] sm:w-[200px]"
              />
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex ml-10 space-x-6 text-md font-medium">
            <a href="/" className="duration-200 hover:text-blue-500">
              HOME
            </a>
            <a href="/about" className="duration-200 hover:text-blue-500">
              ABOUT
            </a>
            <a href="/services" className="duration-200 hover:text-blue-500">
              SERVICES
            </a>
            <a
              href="/houseShifting"
              className="duration-200 hover:text-blue-500"
            >
              HOUSE SHIFTING 24/7
            </a>
            <a href="/getAQuote" className="duration-200 hover:text-blue-500">
              GET A QUOTE
            </a>
            <a href="/contact" className="duration-200 hover:text-blue-500">
              CONTACT
            </a>
          </div>
          {/* Mobile Menu Toggle */}
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
      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden px-2 pt-2 pb-3 mt-5 bg-black text-white text-center`}
      >
        <div className="flex flex-col space-y-5 text-lg font-medium">
          <a href="#" className="duration-200 hover:text-cyan-300">
            Home
          </a>
          <a href="#" className="duration-200 hover:text-cyan-300">
            Services
          </a>
          <a href="#" className="duration-200 hover:text-cyan-300">
            House Shifting 24/7
          </a>
          <a href="#" className="duration-200 hover:text-cyan-300">
            Get A Quote
          </a>
          <a href="#" className="duration-200 hover:text-cyan-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, {useState} from "react";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="sticky top-0 bg-white z-10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 py-3">
//             <a href="#" className="">
//               <img
//                 src="/images/logo-removebg.png"
//                 alt="logo"
//                 className="w-[120px] sm:w-[200px]"
//               />
//             </a>
//           </div>
//           {/* Mobile Menu Toggle */}
//           <div className="-mr-2 md:hidden">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:ring-offset-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           {/* Desktop Menu */}
//           <div className="hidden md:flex ml-10 space-x-6 text-md font-medium">
//             <a href="/" className="duration-200 hover:text-blue-500">
//               HOME
//             </a>
//             <a href="/about" className="duration-200 hover:text-blue-500">
//               ABOUT
//             </a>
//             {/* Services Dropdown */}
//             <div className="relative inline-block text-left">
//               <button
//                 onClick={toggleMenu}
//                 type="button"
//                 className="duration-200 hover:text-blue-500 focus:outline-none"
//               >
//                 SERVICES
//               </button>
//               <div
//                 className={`${
//                   isOpen ? "block" : "hidden"
//                 } origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
//               >
//                 <div className="py-1">
//                   <a
//                     href="/services"
//                     className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
//                   >
//                     Service 1
//                   </a>
//                   <a
//                     href="/services"
//                     className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100"
//                   >
//                     Service 2
//                   </a>
//                   {/* Add more services as needed */}
//                 </div>
//               </div>
//             </div>
//             <a href="/houseShifting" className="duration-200 hover:text-blue-500">
//               HOUSE SHIFTING 24/7
//             </a>
//             <a href="/getAQuote" className="duration-200 hover:text-blue-500">
//               GET A QUOTE
//             </a>
//             <a href="/contact" className="duration-200 hover:text-blue-500">
//               CONTACT
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:hidden px-2 pt-2 pb-3 mt-5 bg-black text-white text-center`}
//       >
//         <div className="flex flex-col space-y-5 text-lg font-medium">
//           <a href="/" className="duration-200 hover:text-cyan-300">
//             Home
//           </a>
//           {/* Services Dropdown */}
//           <div className="relative inline-block text-left">
//             <button
//               onClick={toggleMenu}
//               type="button"
//               className="duration-200 hover:text-cyan-300 focus:outline-none"
//             >
//               Services
//             </button>
//             <div
//               className={`${
//                 isOpen ? "block" : "hidden"
//               } origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-black text-white ring-1 ring-white ring-opacity-5`}
//             >
//               <div className="py-1">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-lg hover:text-cyan-300"
//                 >
//                   Service 1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-lg hover:text-cyan-300"
//                 >
//                   Service 2
//                 </a>
//                 {/* Add more services as needed */}
//               </div>
//             </div>
//           </div>
//           <a href="#" className="duration-200 hover:text-cyan-300">
//             House Shifting 24/7
//           </a>
//           <a href="#" className="duration-200 hover:text-cyan-300">
//             Get A Quote
//           </a>
//           <a href="#" className="duration-200 hover:text-cyan-300">
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
