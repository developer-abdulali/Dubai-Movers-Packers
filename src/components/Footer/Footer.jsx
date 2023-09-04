import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import AOS from "aos";
import emailjs from "@emailjs/browser";

import "aos/dist/aos.css"; // Import the AOS CSS file

const Footer = () => {
  const form = useRef();

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
          <div>{alert("form submitted")}</div>;
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
              Furqan Movers & Packers have a full-service relocation company
              that offers packing for residential and commercial purposes.
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
                className="w-full p-2 rounded"
                name="user_name"
             
                autoComplete="name"
                required
              />
              {/* Input field for user's phone */}
              <input
                type="number"
                placeholder="Your Phone"
                className="w-full p-2 rounded"
                name="phoneNumber"
                autoComplete="tel"
                required
              />
              {/* Input field for user's email */}
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-2 rounded"
                
                name="user_email"
                
                autoComplete="email"
                required
              />
              {/* Submit button */}
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
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
              <span>+971 54 356 3717</span>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:dubaimoverspackers90@gmail.com"
                className="hover:text-blue-500"
              >
                dubaimoverspackers90@gmail.com
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
