import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS CSS file

const Carousel = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
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
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" // Specify the animation type here
        >
          <img
            src="/images/carouselPic1.png"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 1"
            loading="lazy" // Enable lazy loading for this image
          />
        </div>
        {/* Second carousel item */}
        <div
          className="carousel-item"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"// Specify the animation type here
        >
          <img
            src="/images/carouselPic2.png"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 2"
            loading="lazy" // Enable lazy loading for this image
          />
        </div>
        {/* Third carousel item */}
        <div
          className="carousel-item"
          data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"// Specify the animation type here
        >
          <img
            src="/images/sliderimg2.jpg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 3"
            loading="lazy" // Enable lazy loading for this image
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
