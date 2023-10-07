import React from "react";

import { BsWhatsapp } from "react-icons/bs";

const WhatsappContact = () => {
  return (
    <div className="sticky bottom-0 bg-[#0772BD] text-3xl h-14 flex items-center justify-center">
      <a
        href="https://wa.me/+971543563717"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="text-[#25D366]" />
      </a>
    </div>
  );
};

export default WhatsappContact;
