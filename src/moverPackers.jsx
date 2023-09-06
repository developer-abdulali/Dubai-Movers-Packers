import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const MoversPackers = () => {
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
    <div
      className="max-w-screen-xl mx-auto px-3"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="bg-[#0772BD] py-3 mt-3">
        <p className="text-white font-medium text-2xl ml-5">
          Movers and Packers
        </p>
      </div>
      <div className="flex flex-col md:flex-row  rounded-lg">
        <div
          className="w-full md:w-2/3 md:pr-4 mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="p-1 border">
            <img
              src="/images/2combineimgs.png"
              alt="combine"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#DD3333] mt-2">
            Movers and Packers
          </h2>

          <p className="mb-4 text-base font-medium md:text-md text-black">
            Our Packers and Movers services in Karachi is a well-recognized
            packaging and moving service in the industry we are providing quick
            and reliable packing and best packers and movers services at very
            suitable moving price in karachi and other cities of Pakistan
            <br />
            <br />
            <p className="mb-4 text-base font-medium md:text-md text-black">
              Effective Solutions
            </p>
            Our range of services includes Home Relocation, Local shifting and
            Industrial shifting, domestic packing and moving, Car
            transportation, Office shifting, Transport service in Karachi,
            Loading and Unloading service, Packing & unpacking Services and
            warehouse & storage services etc. Due to our quick and reliable
            household goods moving services, we have garnered a huge client base
            across the Karachi city and long distance cities of Pakistan. If you
            have any query about packers and movers then call us at +92 300
            1500211 or mail us at info@dubaimoverspackers.com
          </p>
        </div>

        {/* Right Side (Form) */}

        <div
          className="w-full md:w-1/3 bg-[#E1E1E1] p-4 mt-4 md:mt-0 h-[650px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-black text-2xl md:text-3xl mt-2 mb-4">
            QUICK INQUIRY
          </p>

          <div className="md:max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black mt-3 focus:outline-none bg-[#E1E1E1] text-black"
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
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <select
                  id="service"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1]"
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
                  className="w-full px-2 py-2 border-2 border-black placeholder:text-gray-700 focus:outline-none bg-[#E1E1E1] text-black"
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

export default MoversPackers;
