// ContactUs.js
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div className="p-6 sm:px-20 bg-white">
              <div className="text-3xl">
                Contact Us
              </div>

              <div className="mt-6">
                <form>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none sm:text-sm"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none sm:text-sm"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="py-2 px-4 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring focus:ring-indigo-300 focus:outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
