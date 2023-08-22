import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      {/* Carousel items */}
      <div className="carousel-inner">
        {/* First carousel item (active) */}
        <div className="carousel-item active">
          <img
            src="/images/sliderimg1.jpeg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 1"
          />
        </div>
        {/* Second carousel item */}
        <div className="carousel-item">
          <img
            src="/images/sliderimg2.jpg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider Pic 2"
          />
        </div>
        {/* Third carousel item */}
        <div className="carousel-item">
          <img
            src="/images/sliderimg3.jpg"
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
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
