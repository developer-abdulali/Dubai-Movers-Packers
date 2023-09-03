import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


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
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div className="bg-[#0772BD] py-3 mt-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <p className="text-white font-medium text-2xl ml-5">House Shifting</p>
      </div>
      <div className="flex flex-col md:flex-row  rounded-lg"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div className="w-full md:w-2/3 md:pr-4 mt-4">
          <div className="p-1 border">
            <img
              src="/images/2combineimgs.png"
              alt="combine"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#DD3333] mt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            House Shifting
          </h2>

          <p className="mb-4 text-base font-medium md:text-md text-black" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Our packers and movers will help to relocation of your business to
            the new place with complete peace of mind without too much
            interruption in your business. Our team is proud to supply
            full-service packing solutions additionally to our native and long
            distance moving services. <br /> <br />
            Lots of planning and preparation is required for successful and
            hassle free home relocation in Dubai. Since the ultimate goal is to
            get all of your household articles packed and moved safely and in
            cost effective manner, you can’t afford to go wrong in planning and
            booking movers and packers for home relocation Dubai. <br />
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

        <div className="w-full md:w-1/3 bg-[#E1E1E1] p-4 mt-4 md:mt-0 h-[650px]" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
          <p className="text-black text-2xl md:text-3xl mt-2 mb-4">
            QUICK INQUIRY
          </p>

          <div className="md:max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black mt-3 focus:outline-none bg-[#E1E1E1] text-black"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <select
                  id="service"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="House Shifting">House Shifting</option>
                  <option value="Domestic Shifting">Domestic Shifting</option>
                  <option value="Office Shifting">Office Shifting</option>
                  <option value="Movers and Packers">Movers and Packers</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  className="w-full px-2 py-2 border-2 border-black placeholder:text-gray-500 focus:outline-none bg-[#E1E1E1] text-black"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="6"
                  required
                  placeholder="Message"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-3 text-sm w-full hover:bg-blue-600 duration-200"
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
