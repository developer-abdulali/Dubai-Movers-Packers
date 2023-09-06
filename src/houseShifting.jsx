import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

const HouseShifting = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tvcqgi",
        "template_st1fs5h",
        form.current,
        "gFg6G-PYYkiH3Thoe"
      )
      .then(
        (result) => {
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    document.title = "House Shifting - Dubai Movers & Packers";
    AOS.init();
  }, []);

  return (
    <>
      {isSubmitted ? (
        <div className="flex items-center justify-center mx-auto">
          <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="text-center text-white">
              <img
                src="/images/greenTick.png"
                alt="Tick mark green"
                className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 mx-auto rounded-full border-4 border-green-600"
              />
              <h1 className="text-4xl font-extrabold">Thank You!</h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-blue-900 mb-8">
                Your form has been successfully submitted
              </p>
              <a
                href="/"
                className="text-blue-400 hover:underline hover:text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition duration-300 ease-in-out"
              >
                &larr; Go Back
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto px-3">
          <div className="bg-[#0772BD] py-3 mt-3">
            <p className="text-white font-medium text-2xl ml-5">
              House Shifting
            </p>
          </div>
          <div className="flex flex-col md:flex-row rounded-lg">
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
                House Shifting
              </h2>

              <p className="mb-4 text-base font-medium md:text-md text-black">
                {/* Add your content here */}
                Our packers and movers will help to relocation of your business
                to the new place with complete peace of mind without too much
                interruption in your business. Our team is proud to supply
                full-service packing solutions additionally to our native and
                long distance moving services.
                <br />
                <br />
                Lots of planning and preparation is required for successful and
                hassle-free home relocation in Dubai. Since the ultimate goal is
                to get all of your household articles packed and moved safely
                and in a cost-effective manner, you can’t afford to go wrong in
                planning and booking movers and packers for home relocation in
                Dubai. Our range of services includes Home Relocation, Local
                shifting and Industrial shifting, domestic packing and moving,
                Car transportation, Office shifting, Transport service Dubai,
                Loading and Unloading service, Packing & unpacking Services, and
                warehouse & storage services, etc. Due to our quick and reliable
                household goods moving services, we have garnered a huge client
                base across the Dubai city and long-distance cities of Pakistan.
                If you have any query about packers and movers then call us at
                +971 54 356 3717 or mail us at dubaimoverspackers90@gmail.com
              </p>
            </div>

            {/* Right Side (Form) */}

            <div
              className="w-full md:w-1/3 bg-[#E1E1E1] p-2 mt-4 md:mt-0 h-[650px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <p className="text-black text-2xl md:text-3xl mt-2 mb-4">
                QUICK INQUIRY
              </p>

              <div className="md:max-w-md mx-auto">
                <form onSubmit={sendEmail} ref={form}>
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
                      <option value="" disabled>
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
                    className="bg-[#585ccd] text-white px-4 py-3 text-sm w-full"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HouseShifting;
