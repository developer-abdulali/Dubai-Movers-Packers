import React, { useState } from "react";
import {BsDot} from "react-icons/bs"

const DomesticShifting = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { name, email, phone, message, service });
  };

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="bg-[#0772BD] py-3 mt-3">
        <p className="text-white font-medium text-2xl ml-5">
          Domestic Shifting
        </p>
      </div>
      <div className="flex flex-col md:flex-row  rounded-lg">
        <div className="w-full md:w-2/3 md:pr-4 mt-4">
          <div className="p-1 border">
            <img
              src="/images/2combineimgs.png"
              alt="combine"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#DD3333] mt-2">
            Domestic Shifting
          </h2>

          <p className="mb-4 text-base font-medium md:text-md text-black">
            Our professional movers and packers in Karachi can do it all. We’re
            a one-stop shop, helping with all home moving and packing
            situations. Our large fleet of modern, fully-equipped truck keeps us
            on the cutting edge of convenience and reliability. Indian Movers
            and Packers offers full Packers and Movers service in Karachi.{" "}
            <br />
            <br />
            Our Services for home shifting at glance Pre-departure survey.{" "}
            <br />
            <ul>
              <li>Pre-departure survey</li>
              <li>Pre-departure survey</li>
            </ul>
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/3 bg-[#E1E1E1] p-4 mt-4 md:mt-0 h-[650px]">
          <p className="text-black text-2xl md:text-3xl mt-2 mb-4">
            QUICK INQUIRY
          </p>

          <div className="md:max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 h-9 border-2 placeholder:text-gray-500 border-black mt-3 focus:outline-none bg-[#E1E1E1] text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 h-9 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 h-9 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address *"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="service"
                  className="w-full px-3 py-2 h-9 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  placeholder="Enter service like Office Shifting etc"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  className="w-full px-3 py-2 border-2 border-black placeholder:text-gray-500 focus:outline-none bg-[#E1E1E1] text-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  required
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="bg-[#585ccd] text-white px-4 py-3 text-sm w-full"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomesticShifting;
