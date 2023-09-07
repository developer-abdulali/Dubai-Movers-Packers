import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
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

  return (
    <div
      className="bg-white px-4"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      {isSubmitted ? (
        <div className="flex items-center justify-center">
          <div className="my-[200px] md:my-32 flex flex-col justify-center items-center">
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
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto mt-8 max-w-xl sm:mt-12 md:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="user_name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  autoComplete="name"
                  placeholder="Your Name"
                  className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder-text-gray-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="user_email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  autoComplete="email"
                  placeholder="Email"
                  className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder-text-gray-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phone-number"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder-text-gray-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="service"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Service
              </label>
              <div className="mt-2.5">
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-2 py-2 h-10 border-2 placeholder-text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
                >
                  <option value="">Select a Service</option>
                  <option value="House Shifting">House Shifting</option>
                  <option value="Domestic Shifting">Domestic Shifting</option>
                  <option value="Office Shifting">Office Shifting</option>
                  <option value="Movers and Packers">Movers and Packers</option>
                </select>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Message"
                  className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder-text-gray-500"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="my-5">
            <button
              type="submit"
              className="block w-full rounded-md bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;
