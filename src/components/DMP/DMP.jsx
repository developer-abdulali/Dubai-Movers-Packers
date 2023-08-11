import React from "react";

const DMP = () => {
  return (
    <>
      {/* Welcome section */}
      <div className="flex flex-col items-center justify-between md:flex-row max-w-screen-xl mx-auto mt-5">
        <div>
          {/* Heading */}
          <h1 className="font-base text-3xl px-3 md:px-0 text-[#494949]">
            WELCOME TO DUBAI MOVERS AND PACKERS
          </h1>
          <br />
          <div className="font-medium text-[#000000] text-base px-3">
            {/* Introduction */}
            <span>
              Dubai packers and Movers provides you reliable and efficient
              packing and moving services across Dubai at competitive rates.
              Being a professional packers and movers company we care about your
              valuable items and carefully pack & move them to your desired
              destination.
            </span>
            <br /> <br />
            {/* Additional Information */}
            <span>
              Dubai Packers and Movers are highly specialized in providing you
              the best packers and movers across Dubai at reasonable rates. We
              also provide clearing services in Dubai and let you make sure that
              your goods are to be packed carefully under the supervision of our
              experts. We also help you in providing packing, moving,
              overcrowded transportation, goods packing, warehouse storage,
              corporate and commercial relocation.
            </span>
          </div>
        </div>
        {/* Image */}
        <div>
          <img
            src="/images/dubai-mover-img.png"
            alt="image"
            className="w-[1500px] px-3"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto mt-5 space-x-5 px-3 md:px-0">
        {/* Border with images */}
        <div className="border p-1">
          <img src="/images/2combineimages.png" alt="Images" />
        </div>
        {/* Reliable Services Image */}
        <div>
          <img
            src="/images/Reliable Services.png"
            alt="Images"
            className="w-[600px] h-[285px] md:h-[162px] lg:h-[280px]"
          />
        </div>
      </div>
    </>
  );
};

export default DMP;
