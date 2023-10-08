import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import ThankYou from "./components/ThankYou/ThankYou";

const DomesticShifting = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "service_18nwe79", //Dubai Movers
        // "service_3tvcqgi",
        "template_las1xt9",  // Dubai Movers
        // "template_st1fs5h",
        form.current,
        "QuYYU9p6lzTs2VFyy", //Dubai Movers
        // "gFg6G-PYYkiH3Thoe"
      );
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  useEffect(() => {
    document.title = "Domestic Shifting - Dubai Movers & Packers";
    AOS.init();
  }, []);

  return (
    <>
      {isSubmitted ? (
        <div className="mx-auto">
          <ThankYou />
        </div>
      ) : (
        <div
          className="max-w-screen-xl mx-auto px-3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="bg-[#0772BD] py-3 mt-3">
            <p className="text-white font-medium text-2xl ml-5">
              Domestic Shifting
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
                Domestic Shifting
              </h2>

              <p className="mb-4 text-base font-medium md:text-md text-black">
                {/* Your content here */}
                Our professional movers and packers in Dubai can do it all. We
                are a one-stop shop, helping with all home moving and packing
                situations. Our large fleet of modern, fully-equipped truck
                keeps us on the cutting edge of convenience and reliability.
                Indian Movers and Packers offers full Packers and Movers service
                in Dubai.
                <br />
                <br />
                Our Services for home shifting at glance Pre-departure survey.
                <br /> <br />
                <p className="flex items-center gap-1">
                  1. pre-departure survey.
                </p>
                <p className="flex items-center gap-1">
                  2. Door to Door (full moving) service & personalized services.
                </p>
                <p className="flex items-center gap-1">
                  3. Proper packing solution using good quality packing
                  materials.
                </p>
                <p className="flex items-center gap-1">
                  4. Packing done by expert packers.
                </p>
                <p className="flex items-center gap-1">
                  5. Personalized loading & unloading services.
                </p>
                <p className="flex items-center gap-1">
                  6. Comprehensive insurance coverage policy with full moving
                  services.
                </p>
                <p className="flex items-center gap-1">
                  7. Safe transfer of goods at the respective destinations.
                </p>
                <p className="flex items-center gap-1">
                  8. Entire operation done under excellent supervision.
                </p>
                <p className="flex items-center gap-1">
                  9. Excellent customer support.
                </p>
                <p className="flex items-center gap-1">
                  10. Value for money services – competitive & reasonable price
                  quote.
                </p>
                <p className="flex items-center gap-1">
                  11. Happy home shifting guaranteed.
                </p>
                <p className="flex items-center gap-1">
                  12. Less stress level and more happy experiences.
                </p>
                <p className="flex items-center gap-1">
                  13. Safe warehousing & storage facility.
                </p>
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
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black mt-3 focus:outline-none bg-[#E1E1E1] text-black"
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="tel"
                      id="phone"
                      name="phoneNumber"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                      required
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      id="service"
                      name="service"
                      className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
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
                      className="w-full px-2 py-2 border-2 border-black placeholder:text-gray-500 focus:outline-none bg-[#E1E1E1] text-black"
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
        </div>
      )}
    </>
  );
};

export default DomesticShifting;
