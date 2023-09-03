import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="bg-white px-4 pb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-xl sm:mt-12 md:mt-16 lg:mt-20"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                placeholder="Your name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="block w-full px-3.5 py-2 text-gray-900 border-2 border-black focus:outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                placeholder="Your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleInputChange}
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
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
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-500"
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
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-2 py-2 h-10 border-2 placeholder:text-gray-500 border-black focus:outline-none bg-[#E1E1E1] text-black"
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
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-500"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-600 duration-200"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
