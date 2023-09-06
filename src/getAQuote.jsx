import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const GetAQuote = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID_HERE", // Replace with your actual service ID
        "YOUR_TEMPLATE_ID_HERE", // Replace with your actual template ID
        form.current,
        "YOUR_USER_ID_HERE" // Replace with your actual user ID
      );
      console.log(result.text);
      setIsSubmitted(true);
      form.current.reset();
    } catch (error) {
      console.error("Email send error:", error);
    }
  };

  useEffect(() => {
    document.title = "GET A QUOTE - Dubai Movers & Packers";
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col md:flex-row my-3 max-w-screen-xl mx-auto px-3 gap-2">
      {/* Left Side (Why Us) */}
      {!isSubmitted && (
        <div
          className="w-full md:w-2/3 md:mt-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h2 className="text-2xl md:text-4xl font-medium mb-4 text-[#0C71B8]">
            WHY DUBAI MOVERS
          </h2>
          <p className="mb-4 text-base md:text-md text-black">
            <strong>AFFORDABLE YET HIGH-QUALITY MOVING SERVICES</strong>
          </p>
          <p className="mb-4 text-base font-medium md:text-md text-black">
            We watch our costs very closely and have become very efficient
            during our 10 years as a moving company. When we save money, we pass
            that along to our customers in the form of lower overall moving
            costs.
            <br />
            <br />
            WE HANDLE EVERYTHING FOR YOUR MOVE <br /> Movers and Packers is made
            up of highly prompt individuals who are eager about making a
            positive impression on other people's through relocation to a
            foreign country that they will never forget. <br /> <br />
            PROFESSIONAL AND PERSONAL CUSTOMER SUPPORT <br /> <br /> We
            cultivate a friendly attitude by treating our customers with respect
            and decency. We acknowledge that what truly matters is having a
            healthy and strong relationship with all of our customers.
          </p>
        </div>
      )}

      {/* Right Side (Form) */}
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
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-900 mb-8">
                Your form has been successfully submitted
              </p>
              <a
                href="/getAQuote"
                className="text-blue-400 hover:underline hover:text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl transition duration-300 ease-in-out"
              >
                &larr; Go Back
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="w-full md:w-[600px] bg-[#0872BB] p-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <p className="text-white text-3xl mt-2">REQUEST A QUOTE</p>
          <p className="text-white text-xs font-semibold mt-2">
            To inquire about our services further, kindly submit the form below.
          </p>

          <div className="md:max-w-xl mx-auto mt-4">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-2 py-2 h-10 border-2 mt-3 rounded-lg focus:outline-none bg-[#0C71B8] focus:border-white text-white"
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="w-full px-2 py-2 h-10 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-2 py-2 h-10 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                  required
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <select
                  id="service"
                  name="service"
                  className="w-full px-2 py-2 h-10 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="House Shifting">House Shifting</option>
                  <option value="Domestic Shifting">Domestic Shifting</option>
                  <option value="Office Shifting">Office Shifting</option>
                  <option value="Movers and Packers">Movers and Packers</option>
                </select>
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-2 py-2 border-2 rounded-lg focus:outline-none focus:border-white bg-[#0C71B8] text-white"
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
      )}
    </div>
  );
};

export default GetAQuote;
