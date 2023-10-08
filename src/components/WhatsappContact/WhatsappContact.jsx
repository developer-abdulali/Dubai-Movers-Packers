import React from "react";
import { FaPhone } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappContact = () => {
  return (
    <div className="sticky bottom-0 bg-[#0772BD] text-3xl h-14 flex items-center justify-around">
      <div>
        <a
          href="https://wa.me/+971543563717"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp className="text-[#25D366]" />
        </a>
      </div>
      <div className="">
        <a href="tel:+971543563717">
          <FaPhone className="text-[#25D366]" />
        </a>
      </div>
    </div>
  );
};

export default WhatsappContact;
