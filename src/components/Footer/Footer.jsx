import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import AOS from "aos";
import emailjs from "@emailjs/browser";

import "aos/dist/aos.css";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tvcqgi",

        "service_18nwe79", //Dubai Movers Packers
        // "template_st1fs5h",
        "template_las1xt9", //Dubai Movers Packers
        form.current,
        // "gFg6G-PYYkiH3Thoe"
        "QuYYU9p6lzTs2VFyy" //Dubai Movers packers
      )
      .then(
        (result) => {
          <div>{alert("Your form has been successfully submitted")}</div>;
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="bg-black p-4">
      {/* Footer section */}
      <footer
        className="max-w-screen-xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Logo and description */}
          <div className="md:w-1/3">
            {/* Company logo */}
            <img src="/images/logo.png" alt="logo" className="mb-4" />
            {/* Company description */}
            <p className="text-white font-medium">
              Dubai Movers & Packers have a full-service relocation company that
              offers packing for residential and commercial purposes.
            </p>
          </div>
          {/* List of services */}
          <div className="w-full md:w-1/3">
            {/* Section title */}
            <p className="text-white font-semibold mb-4">OUR SERVICES</p>
            {/* List of services */}
            <ul className="text-white font-medium space-y-5">
              {/* Individual service links */}
              <li>
                <a
                  href="/moversPackers"
                  className="hover:text-blue-500 hover:underline duration-300"
                >
                  Movers and Packers
                </a>
              </li>
              <li>
                <a
                  href="/houseShifting"
                  className="hover:text-blue-500 hover:underline duration-300"
                >
                  House Shifting
                </a>
              </li>
              <li>
                <a
                  href="/officeRelocation"
                  className="hover:text-blue-500 hover:underline duration-300"
                >
                  Office Relocation
                </a>
              </li>
              <li>
                <a
                  href="/domesticShifting"
                  className="hover:text-blue-500 hover:underline duration-300"
                >
                  Domestic Shifting
                </a>
              </li>
            </ul>
          </div>
          {/* Contact form */}
          <div
            className="md:w-1/3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Section title */}
            <p className="text-white font-semibold mb-3">GET A QUOTE</p>
            {/* Form for user input */}
            <form ref={form} onSubmit={sendEmail} className="space-y-2">
              {/* Input field for user's name */}
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                autoComplete="name"
                required
                className="w-full p-2 focus:outline-none rounded"
              />
              {/* Input field for user's phone */}
              <input
                type="text"
                placeholder="Your Phone"
                name="phoneNumber"
                autoComplete="tel"
                required
                className="w-full p-2 focus:outline-none rounded"
              />
              {/* Input field for user's email */}
              <input
                type="email"
                placeholder="Your Email Address"
                name="user_email"
                autoComplete="email"
                required
                className="w-full focus:outline-none p-2 rounded"
              />
              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-4 py-2 text-white rounded bg-[#0772BD] hover:bg-[#14649d] duration-300 ease-linear"
              >
                SUBMIT
              </button>
            </form>
          </div>
          {/* Contact information */}
          <div
            className="w-full md:w-1/3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {/* Section title */}
            <p className="font-semibold text-white mb-4 mt-4">GET IN TOUCH</p>
            {/* Contact details */}
            <div className="text-white mb-3 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>Al Quoz 1 Area in Dubai</span>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaPhone className="mr-2" />
              <a href="tel:+971543563717" className="hover:text-blue-500">
                +971 54 356 3717
              </a>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:dubaimoverspackers90@gmail.com"
                className="hover:text-blue-500"
              >
                dubaimoverspacker90@gmail.com
              </a>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaClock className="mr-2" />
              <span>Mon - Sunday/9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
        {/* Copyright and rights reserved */}
        <div className="text-white text-center mt-6">
          <p>
            &copy; {new Date().getFullYear()} Dubai Movers & Packers. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
