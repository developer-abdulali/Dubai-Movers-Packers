import React, { useState, useEffect, useRef } from "react";
import ThankYou from "./components/ThankYou/ThankYou";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const MoversPackers = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        // "service_3tvcqgi",
        "service_18nwe79", //Dubai Movers Packers
        // "template_st1fs5h",
        "template_las1xt9", //Dubai Movers Packers
        form.current,
        // "gFg6G-PYYkiH3Thoe"
        "QuYYU9p6lzTs2VFyy" //Dubai Movers packers
      );
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    document.title = "Movers and Packers - Dubai Movers & Packers";
    AOS.init();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-3">
      {isSubmitted ? (
        <div className="mx-auto">
          <ThankYou />
        </div>
      ) : (
        <>
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
                Our Packers and Movers services in Dubai are a well-recognized
                packaging and moving service in the industry. We provide quick
                and reliable packing and best packers and movers services at
                very suitable moving prices in Dubai and other cities of
                Pakistan.
                <br />
                <br />
                <p className="mb-4 text-base font-medium md:text-md text-black">
                  Effective Solutions
                </p>
                Our range of services includes Home Relocation, Local shifting,
                and Industrial shifting, domestic packing and moving, Car
                transportation, Office shifting, Transport service in Dubai,
                Loading and Unloading service, Packing & unpacking Services, and
                warehouse & storage services, etc. Due to our quick and reliable
                household goods moving services, we have garnered a huge client
                base across Dubai. If you have any queries about packers and
                movers, please call us at +971 56 562 2978 or email us at
                dubaimoverspacker90@gmail.com
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
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-700 border-black focus:outline-none bg-[#E1E1E1]"
                      required
                    >
                      <option value="">Select a service</option>
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

export default MoversPackers;
