import React, { useState } from "react";

const HouseShifting = () => {
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
        <p className="text-white font-medium text-2xl ml-5">House Shifting</p>
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
            House Shifting
          </h2>

          <p className="mb-4 text-base font-medium md:text-md text-black">
            Our packers and movers will help to relocation of your business to
            the new place with complete peace of mind without too much
            interruption in your business. Our team is proud to supply
            full-service packing solutions additionally to our native and long
            distance moving services. <br /> <br />
            Lots of planning and preparation is required for successful and
            hassle free home relocation in Karachi. Since the ultimate goal is
            to get all of your household articles packed and moved safely and in
            cost effective manner, you can’t afford to go wrong in planning and
            booking movers and packers for home relocation in Karachi. <br />{" "}
            <br />
            We Pack the Goods with Best Quality Material and Take Care that They
            are not Damaged During Transit. We Load the Goods into the
            Transportation Vehicle and thereafter Unload the Goods at
            Destination. At Destination We are able to Verify the Items with the
            Help of Checklist and there after We Move the Goods to the
            Destination Place. It does not matter if the Goods are to be Moved
            on the 1st Floor or 10th Floor. Our Team Takes utmost Care and
            Compliance so that no Damage Occurs to your Goods while the Goods
            are Moved to your Place.
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

export default HouseShifting;
