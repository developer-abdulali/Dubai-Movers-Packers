import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/sliderimg1.jpeg"
            className="d-block w-100 h-[300px] md:h-[700px]"
            alt="Slider image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliderimg2.jpg"
            className="d-block w-100 h-[300px] md:h-[700px]"
            alt="Slider image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliderimg3.jpg"
            className="d-block w-100 h-[300px] md:h-[700px]"
            alt="Slider image 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
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
