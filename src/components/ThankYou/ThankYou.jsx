import React from "react";

const ThankYou = () => {
  return (
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
  );
};

export default ThankYou;
