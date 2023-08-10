// import React, { useState } from "react";

// const WhyUs = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", { name, email, phone, message });
//   };

//   return (
//     <div className="flex flex-col md:flex-row p-6 rounded-lg max-w-screen-xl mx-auto">
//       {/* Left Side (Why Us) */}
//       <div className="w-full md:w-2/3">
//         <h2 className="text-2xl md:text-4xl font-medium mb-4 text-[#0C71B8]">
//           WHY DUBAI MOVERS
//         </h2>
//         <p className="mb-4 text-base md:text-md text-black">
//           <strong>AFFORDABLE YET HIGH-QUALITY MOVING SERVICES</strong>
//         </p>
//         <p className="mb-4 text-base md:text-md text-black">
//           We watch our costs very closely and have become very efficient during
//           our 20 years as a moving company. When we save money, we pass that
//           along to our customers in the form of lower overall moving costs.
//           <br />
//           <br /> WE HANDLE EVERYTHING FOR YOUR MOVE <br /> Movers and Packers is
//           made up of highly prompt individual who are eager about making a
//           positive impression on other people's through relocation to a foreign
//           country that they will never forget. <br /> <br />
//           PROFESSIONAL AND PERSONAL CUSTOMER SUPPORT <br /> <br /> We cultivate
//           a friendly attitude by treating our customers with respect and decency.
//           We acknowledge that what truly matters is having a healthy and strong
//           relationship with all of our customers.
//         </p>
//       </div>

//       {/* Right Side (Form) */}
//       <div className="w-full md:w-1/3 bg-[#0872BB] p-4 rounded-lg">
//         <p className="text-white text-lg mt-2">
//           REQUEST A QUOTE
//         </p>
//         <p className="text-white text-xs font-semibold mt-2">
//           To inquire about our services further, kindly submit the form below.
//         </p>
//         <p className="text-white text-xs font-semibold mt-2">
//           We'd be as quick as possible to help you out.
//         </p>
//         <div className="md:max-w-sm mx-auto mt-4">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 id="name"
//                 className="w-full px-3 py-2 h-9 border-2 mt-3 rounded-lg focus:outline-none bg-[#0C71B8] focus:border-blue-500 text-white"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 placeholder="Your Name *"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="phone"
//                 id="phone"
//                 className="w-full px-3 py-2 h-9 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0C71B8] text-white"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone"
//               />
//             </div>
//             <div className="mb-4">
//               <input
//                 type="email"
//                 id="email"
//                 className="w-full px-3 py-2 h-9 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0C71B8] text-white"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 placeholder="Email Address *"
//               />
//             </div>
//             <div className="mb-4">
//               <textarea
//                 id="message"
//                 className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-blue-500 bg-[#0C71B8] text-white"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 rows="4"
//                 required
//                 placeholder="Message"
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
//             >
//               Get Quote
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyUs;

import React, { useState } from "react";

const WhyUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, phone, message });
  };

  return (
    <div className="flex flex-col md:flex-row p-6 mt-[-30px] rounded-lg max-w-screen-xl mx-auto">
      {/* Left Side (Why Us) */}
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-medium mb-4 text-[#0C71B8]">
          WHY DUBAI MOVERS
        </h2>
        <p className="mb-4 text-base md:text-md text-black">
          <strong>AFFORDABLE YET HIGH-QUALITY MOVING SERVICES</strong>
        </p>
        <p className="mb-4 text-base font-medium md:text-md text-black">
          We watch our costs very closely and have become very efficient during
          our 20 years as a moving company. When we save money, we pass that
          along to our customers in the form of lower overall moving costs.
          <br />
          <br /> WE HANDLE EVERYTHING FOR YOUR MOVE <br /> Movers and Packers is
          made up of highly prompt individual who are eager about making a
          positive impression on other people's through relocation to a foreign
          country that they will never forget. <br /> <br />
          PROFESSIONAL AND PERSONAL CUSTOMER SUPPORT <br /> <br /> We cultivate
          a friendly attitude by treating our customers with respect and
          decency. We acknowledge that what truly matters is having a healthy
          and strong relationship with all of our customers.
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full md:w-2/3 bg-[#0872BB] p-4">
        <p className="text-white text-3xl mt-2">REQUEST A QUOTE</p>
        <p className="text-white text-xs font-semibold mt-2">
          To inquire about our services further, kindly submit the form below.
        </p>
        <p className="text-white text-xs font-semibold mt-2">
          We'd be as quick as possible to help you out.
        </p>
        <div className="md:max-w-xl mx-auto mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 h-9 border-2 mt-3 rounded-lg focus:outline-none bg-[#0C71B8] focus:border-white text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name *"
              />
            </div>
            <div className="mb-4">
              <input
                type="phone"
                id="phone"
                className="w-full px-3 py-2 h-9 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 h-9 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email Address *"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#F05B54] text-white px-3 py-3 text-sm outline-none border-2 border-white rounded-md"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
