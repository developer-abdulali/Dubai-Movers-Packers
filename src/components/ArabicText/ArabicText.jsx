import React from "react";

const ArabicText = () => {
  return (
    // A container with a hidden display on small screens and visible on medium and larger screens
    <div className="hidden bg-[#0772BD] text-3xl h-14 md:flex items-center justify-center">
      {/* The Arabic text with white color */}
      <span className="text-[#ffffff]">وَاللَّهُ خَيْرُ الرَّازِقِينَ</span>
    </div>
  );
};

export default ArabicText;
