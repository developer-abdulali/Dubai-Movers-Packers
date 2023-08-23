import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

const Footer = () => {
  // State to manage form input data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-black p-4 z-200">
      {/* Footer section */}
      <footer className="max-w-screen-xl mx-auto">
        {/* Flex container for layout */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {/* Logo and description */}
          <div className="md:w-1/3">
            {/* Company logo */}
            <img src="/images/logo.png" alt="logo" className="mb-4" />
            {/* Company description */}
            <p className="text-white font-medium">
              Dubai Movers & Packers has been one of the leading Packers &
              Movers in Karachi, Pakistan. Furqan Movers & Packers have a
              full-service relocation company that offers packing and
              transportation services for residential and commercial purposes.
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
                <a href="/moversPackers" className="hover:text-blue-500">
                  Movers and Packers
                </a>
              </li>
              <li>
                <a href="/houseShifting" className="hover:text-blue-500">
                  House Shifting
                </a>
              </li>
              <li>
                <a href="/officeRelocation" className="hover:text-blue-500">
                  Office Relocation
                </a>
              </li>
              <li>
                <a href="/domesticShifting" className="hover:text-blue-500">
                  Domestic Shifting
                </a>
              </li>
             
              {/* Add more services here */}
            </ul>
          </div>
          {/* Contact form */}
          <div className="md:w-1/3">
            {/* Section title */}
            <p className="text-white font-semibold mb-3">GET A QUOTE</p>
            {/* Form for user input */}
            <form onSubmit={handleSubmit} className="space-y-2">
              {/* Input field for user's name */}
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              {/* Input field for user's phone */}
              <input
                type="number"
                placeholder="Your Phone"
                className="w-full p-2 rounded"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {/* Input field for user's email */}
              <input
                type="email"
                placeholder="Your Email Add"
                className="w-full p-2 rounded"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
          <div className="w-full md:w-1/3">
            {/* Section title */}
            <p className="font-semibold text-white mb-4 mt-4">GET IN TOUCH</p>
            {/* Contact details */}
            <div className="text-white mb-3 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span>25 D Block 6, Shop # 3, Nursery P.E.C.H.S Karachi.</span>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaPhone className="mr-2" />
              <span>+92 300 1234567</span>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaEnvelope className="mr-2" />
              <span>info@dubaimoverspackers.com</span>
            </div>
            <div className="text-white mb-3 flex items-center">
              <FaClock className="mr-2" />
              <span>Mon - Sunday/9:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
