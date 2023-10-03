import React, { useState, useEffect, useRef } from "react";
import ThankYou from "./components/ThankYou/ThankYou"
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const OfficeShifting = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_3tvcqgi",

        // "service_18nwe79", //Dubai Movers Packers
        "template_st1fs5h",
        // "template_las1xt9", //Dubai Movers Packers
        form.current,
        "gFg6G-PYYkiH3Thoe"
        // "QuYYU9p6lzTs2VFyy" //Dubai Movers packers
      );
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Office Relocation - Dubai Movers & Packers";
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      {isSubmitted ? (
        // <div className="flex items-center justify-center mx-auto">
        //   <div className="my-[200px] md:my-32 flex flex-col justify-center items-center">
        //     <div className="text-center text-white">
        //       <img
        //         src="/images/greenTick.png"
        //         alt="Tick mark green"
        //         className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 mx-auto rounded-full border-4 border-green-600"
        //       />
        //       <h1 className="text-4xl font-extrabold">Thank You!</h1>
        //       <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-900 mb-8">
        //         Your form has been successfully submitted
        //       </p>
        //       <a
        //         href="/officeRelocation"
        //         className="text-blue-400 hover:underline hover:text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition duration-300 ease-in-out"
        //       >
        //         &larr; Go Back
        //       </a>
        //     </div>
        //   </div>
        // </div>
        <div className="mx-auto">
          <ThankYou />
        </div>
      ) : (
        <>
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
                  src="/images/ofcRelocation.png"
                  alt="combine"
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-normal mb-4 text-[#DD3333] mt-2">
                Office Relocation
              </h2>

              <p className="mb-4 text-base font-medium md:text-md text-black">
                With the increase in globalisation and technological
                advancement, office relocation is quite common these days. Often
                seen as a daunting task, office relocations if planned properly
                can be carried out smoothly. Furqan Movers & Packers offers
                customised office relocation services for a seamless relocation
                of office assets and business continuity.
                <br />
                <br />
                We have the expertise and resources for implementing effective
                business relocation solutions and move your office without
                disruption. We ensure that the downtime is minimum and your
                business remains uninterrupted. Our office relocation
                specialists are trained and qualified to relocate all sorts of
                office equipment, computers, high-end servers, plotters, files,
                records, furniture, electronic systems, and libraries in a
                hassle-free & organized manner. We also offer diverse forms of
                packaging such as anti-static packaging, vacuum packaging, or HD
                foam packaging & customized crating all under a single roof.
                <br />
                <br />
                Our dedication and will to serve customers better combined with
                our expertise in office relocation, infrastructure, and
                technology give us a cut above the rest. Each business has
                different office relocation requirements and can vary based on
                the business size. We help with domestic as well as
                international relocations. Whether you are a small company
                office moving across town or a multi-national corporate moving
                across the country or the globe, we can meet your needs with
                ease.
              </p>
            </div>

            {/* Right Side (Form) */}

            <div
              className="w-full md:w-1/3 bg-[#E1E1E1] p-2 mt-4 md:mt-0 h-full"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className="text-black text-2xl md:text-3xl mt-2 mb-4">
                QUICK INQUIRY
              </p>

              <div className="md:max-w-md mx-auto">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-4">
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black mt-3 focus:outline-none bg-[#E1E1E1] text-black"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
                      required
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      id="service"
                      name="service"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1] text-black"
                      required
                    >
                      <option value="">
                        Select a service
                      </option>
                      <option value="House Shifting">House Shifting</option>
                      <option value="Domestic Shifting">
                        Domestic Shifting
                      </option>
                      <option value="Office Shifting">Office Shifting</option>
                      <option value="Movers and Packers">
                        Movers and Packers
                      </option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <textarea
                      id="message"
                      name="message"
                      className="w-full px-2 py-2 border-2 border-black placeholder:text-gray-700 focus:outline-none bg-[#E1E1E1] text-black"
                      rows="6"
                      required
                      placeholder="Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0772BD] hover:bg-[#14649d] duration-300 ease-linear text-white px-4 py-3 text-sm w-full"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OfficeShifting;
