// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto flex flex-wrap">
//         <div className="w-full md:w-1/4 mb-8 md:mb-0">
//           <img src="/images/logo.png" alt="Logo" className="h-12 mb-4" />
//           <p className="text-gray-400">Your tagline or brief description here.</p>
//         </div>
//         <div className="w-full md:w-1/4 mb-8 md:mb-0">
//           <h2 className="text-xl font-semibold mb-4">Our Services</h2>
//           <ul className="space-y-2">
//             <li><a href="#">House Shifting</a></li>
//             <li><a href="#">Office Shifting</a></li>
//             <li><a href="#">Domestic Shifting</a></li>
//             {/* Add more services as needed */}
//           </ul>
//         </div>
//         <div className="w-full md:w-1/4 mb-8 md:mb-0">
//           <h2 className="text-xl font-semibold mb-4">Get a Quote</h2>
//           <form>
//             <input type="text" placeholder="Name" className="w-[300px] mb-2 p-2 rounded-md text-black" />
//             <input type="tel" placeholder="Phone Number" className="w-[300px] mb-2 p-2 rounded-md text-black" />
//             <input type="email" placeholder="Email" className="w-[300px] mb-2 p-2 rounded-md text-black" />
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
//           </form>
//         </div>
//         <div className="w-full md:w-1/4">
//           <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
//           <p className="mb-2">123 Main Street</p>
//           <p className="mb-2">City, State ZIP</p>
//           <p className="mb-2">Phone: (123) 456-7890</p>
//           <p>Email: info@example.com</p>
//           <p className="mt-4">Working Days: Monday - Friday</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-black">
//       <footer
//         className="text-white py-8 max-w-screen-xl mx-auto"
//         style={{
//           backgroundImage: "url('/images/forFooter.png')",
//           opacity: 0.9,
//           filter: "brightness(0.9)",
//         }}
//       >
//         div
//         <div className="container mx-auto flex flex-wrap">
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
//             <img
//               src="/images/logo.png"
//               alt="Logo"
//               className="h-12 w-[200px] mb-4"
//             />
//             <p className="text-white font-medium">
//               Furqan Movers & Packers has been one of the leading Packers &
//               Movers in Karachi, Pakistan. Furqan Movers & Packers have a
//               full-service relocation company that offers packing and
//               transportation services for residential and commercial purposes.
//             </p>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
//             <h2 className="text-xl font-medium mb-4">Our Services</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#">House Shifting</a>
//               </li>
//               <li>
//                 <a href="#">Office Shifting</a>
//               </li>
//               <li>
//                 <a href="#">Domestic Shifting</a>
//               </li>
//               {/* Add more services as needed */}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
//             <h2 className="text-xl font-medium mb-4">Get a Quote</h2>
//             <form className="mr-5">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full mb-2 p-2 rounded-md text-black"
//               />
//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full mb-2 p-2 rounded-md text-black"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full mb-2 p-2 rounded-md text-black"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//           <div className="w-full md:w-1/2 lg:w-1/4">
//             <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
//             <p className="mb-2">123 Main Street</p>
//             <p className="mb-2">City, State ZIP</p>
//             <p className="mb-2">Phone: (123) 456-7890</p>
//             <p>Email: info@example.com</p>
//             <p className="mt-4">Working Days: Monday - Friday</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <footer className="max-w-screen-xl mx-auto p-8 bg-cover bg-opacity-90 filter brightness-90">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-10">
          <div className="md:w-1/3">
            <img src="/images/logo.png" alt="logo" className="mb-4" />
            <p className="text-black font-medium">
              Dubai Movers & Packers has been one of the leading Packers &
              Movers in Karachi, Pakistan. Furqan Movers & Packers have a
              full-service relocation company that offers packing and
              transportation services for residential and commercial purposes.
            </p>
          </div>
          <div className="md:w-1/3">
            <p className="font-semibold mb-2">OUR SERVICES</p>
            <ul className="text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-500">Movers and Packers</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">House Shifting</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">Office Relocation</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">House Shifting</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">House Shifting</a>
              </li>
              {/* Add more li items here */}
            </ul>
          </div>
          <div className="md:w-1/3">
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded" />
            </div>
            {/* Add more input fields here */}
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
          <div className="md:w-1/3">
            <p className="font-semibold mb-2">GET IN TOUCH</p>
            <p className="text-gray-700">
              ADDRESS <br />
              25 D Block 6, Shop # 3, Nursery P.E.C.H.S Karachi.
            </p>
            {/* Add more address info here */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
