import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const OfficeShifting = () => {
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
      <div
        className="bg-[#0772BD] py-3 mt-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <p className="text-white font-medium text-2xl ml-5">
          Office Relocation
        </p>
      </div>
      <div
        className="flex flex-col md:flex-row  rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <div className="w-full md:w-2/3 md:pr-4 mt-4">
          <div className="p-1 border">
            <img
              src="/images/2combineimgs.png"
              alt="combine"
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#DD3333] mt-2">
            Office Relocation
          </h2>

          <p className="mb-4 text-base font-medium md:text-md text-black">
            With the increase in globalisation and technological advancement,
            office relocation is quite common these days. Often seen as a
            daunting task, office relocations if planned properly can be carried
            out smoothly. Furqan Movers & Packers offers customised office
            relocation services for a seamless relocation of office assets and
            business continuity.
            <br />
            <br />
            We have the expertise and resources for implementing effective
            business relocation solutions and move your office without
            disruption. We ensure that the downtime is minimum and your business
            remains uninterrupted.Our office relocation specialists are trained
            and qualified to relocate all sorts of office equipment, computers,
            high-end servers, plotters, files, records, furniture, electronic
            systems and libraries in a hassle free & organized manner. We also
            offer diverse forms of packaging such as anti-static packaging,
            vacuum packaging or HD foam packaging & customized crating all under
            a single roof.
            <br />
            <br />
            Our dedication and will to serve customers better combined with our
            expertise in office relocation, infrastructure, and technology gives
            us a cut above the rest. Each business has different office
            relocation requirements and can vary based on the business size. We
            help with domestic as well as international relocations. Whether you
            are a small company office moving across town or a multi-national
            corporate moving across the country or the globe we can meet your
            needs with ease.
          </p>
        </div>

        {/* Right Side (Form) */}

        <div
          className="w-full md:w-1/3 bg-[#E1E1E1] p-4 mt-4 md:mt-0 h-[650px]"
          data-aos="fade-left"
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
                  placeholder="Your Name *"
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
                  placeholder="Email Address *"
                />
              </div>
              <div className="mb-4">
                <select
                  id="service"
                  className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
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

export default OfficeShifting;
