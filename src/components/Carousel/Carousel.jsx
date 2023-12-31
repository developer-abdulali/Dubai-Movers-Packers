import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Carousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      {/* Carousel items */}
      <div className="carousel-inner">
        {/* First carousel item (active) */}
        <div
          className="carousel-item active"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/images/carouselPic1.png"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 1"
          />
        </div>
        {/* Second carousel item */}
        <div
          className="carousel-item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/images/carouselPic2.png"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 2"
          />
        </div>
        {/* Third carousel item */}
        <div
          className="carousel-item"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <img
            src="/images/sliderimg3.jpeg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 3"
          />
        </div>
      </div>

      {/* Previous slide button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next slide button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
