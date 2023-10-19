import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Dubai Movers Packers";
    AOS.init();
  }, []);
  return (
    <div
      className="max-w-screen-xl mx-auto mt-3 px-3 md:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
    >
      <div className="bg-[#0772BD] py-3">
        <p className="text-white font-medium text-2xl ml-5">About Us</p>
      </div>
      <div className="mt-4 md:mt-8">
        <p className="text-2xl font-medium text-black my-4">
          Moving Services Across Town or Around the Globe
        </p>
        <p className="text-black font-medium">
          Dubai Movers & Packers have a full-service relocation company that
          offers packing and transportation services for residential and
          commercial purposes. We offer Free Quotation so that we can properly
          assess your moving requirement. For organizations, we also offer short
          and long term contracts that can help in your overall business
          functions. For private individuals, our package includes door to door
          delivery service.
        </p>
        <p className="mt-4 text-black font-medium">
          Our transportation services serve with a professional crew who are
          sure to get you moving at ease and on time. Need to disassemble some
          furniture? No problem. Got electronics that need careful packing ? We
          got it covered! Can’t load and unload items on the truck? We can carry
          them for you!
        </p>
        <p className="mt-4 text-black font-medium">
          Our mover and packer staff are fully experienced and equipped just
          like international standards. We always compensate our Crew Member
          based on their moving and packing performance. Our pre-relocation
          surveyors take a detailed inventory of all items to be moved and
          record special needs. Necessary pictures are taken to capture images
          of items that are fragile, large, heavy, or otherwise require special
          handling during the move. We also provide on-the-spot volume and
          weight estimates and make complete inventories for our clients and
          operational staff as they arrange for the removal.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 mb-3">
        <div className="border">
          <img
            src="/images/MoversPackers.jpeg"
            alt="Shifting"
            className="w-full"
          />
        </div>
        <div className="border">
          <img src="/images/img1.jpeg" alt="Shifting" className="w-full" />
        </div>
        <div className="border">
          <img src="/images/BARODA.jpeg" alt="Shifting" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default About;
