import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
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

  return (
    <div className="bg-white px-4 pb-5">
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-xl sm:mt-12 md:mt-16 lg:mt-20"
      >
        {/* Your form inputs go here... */}
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
                className="block w-full px-3.5 py-2 text-gray-900 border-2 border-black focus:outline-none placeholder:text-gray-800"
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
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-800"
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
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-800"
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
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-800"
              />
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
                className="block w-full border-2 px-3.5 py-2 text-gray-900 border-black focus:outline-none placeholder:text-gray-800"
              ></textarea>
            </div>
          </div>
        </div>

        {/* "Get in Touch" section */}

        <div className="mt-8">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
