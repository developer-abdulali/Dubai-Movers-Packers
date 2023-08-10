import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative overflow-hidden bg-black px-6 py-10 sm:py-28 lg:px-8 mb-5 h-[450px]">
      <span className="flex items-center justify-center text-4xl text-white mb-5">
        TESTIMONIALS
      </span>
      <div className="absolute inset-0 z-[-10] opacity-20 bg-radial-gradient"></div>
      <div className="absolute inset-y-0 right-1/2 z-[-10] mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Slider {...settings}>
          <div>
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>
                I think this is the best of all Movers and Packers. All boys did unlimited job either of Dubai or Sharjah. All are good and did smart and fantastic job everywhere.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Shahzad</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle cx="1" cy="1" r="1" className="text-white" />
                </svg>
                <div className="text-white">Client</div>
              </div>
            </figcaption>
          </div>

          {/* Add more testimonial slides */}

          <div>
            <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
              <p>
                “All the service men who came for packing did and excellent job. Very patient, throught and calm. Their calmness made my parents calm in the hour of constant stress.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">Saba</div>
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <div className="text-white">Client</div>
              </div>
            </figcaption>
          </div>

          {/* Add more testimonial slides */}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
