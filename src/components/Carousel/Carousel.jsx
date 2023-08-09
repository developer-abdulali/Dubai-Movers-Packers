import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      {/* <div className="absolute left-[50%] z-10 p-5 bg-white">
        <span className="mx-auto">The Best Movers and Packers</span> <br />
        <span> Our Packers and Movers services in Dubai is a well-recognized packaging and movng <br /> services in the industry we are providing quick and reliable packing</span>
      </div> */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/sliderimg1.jpeg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliderimg2.jpg"
            className="d-block w-100 h-[300px] md:h-[600px]"
            alt="Slider image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/sliderimg3.jpg"
            className="d-block w-100 h-[300px] md:h-[600px]"
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
