import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img2 from "../../assets/logo/download.png";
import quote from "../../assets/logo/text-quotes-svgrepo-com.svg";
import Star from "../ServiceDetail/ReviewPart/Star";
import "./header.css";

const ReviewHomeSection = () => {
  const [homeReview, setHomeReview] = useState([]);
  useEffect(() => {
    fetch("https://pick-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setHomeReview(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mt-16 lg:mt-36">
      <div className="text-center mt-24">
        <p className="text-2xl font-bold mb-[-13px]">Client Reviews</p>
        <p className="mb-8 lg:mb-12 w-48 lg:w-56 mx-auto border-t-8 border-[#f88e1a] text-[14px] lg:text-[16px]">
          Our Blessing Customer Reviews
        </p>
      </div>
      <Slider {...settings} style={{ overflow: "hidden" }}>
        {homeReview?.map((reviewer) => (
          <div key={reviewer.id}>
            <div className="text-center flex flex-col justify-center items-center border bg-gray-300 lg:!mx-16 mx-12 p-4 relative hover:bg-[#EF8E33] hover:text-white transition-all duration 500">
              <div className="avatar">
                <div className="lg:w-40 w-24 rounded-full">
                  {reviewer?.userimage ? (
                    <img src={reviewer?.userimage} alt="Reviewer Image" />
                  ) : (
                    <img src={img2} alt="Reviewer Image" />
                  )}
                </div>
              </div>
              <img
                src={quote}
                alt=""
                className="absolute right-4 top-1 lg:w-12 w-7"
              />
              <h3 className="lg:text-xl text-[16px] font-semibold mt-3">
                {reviewer?.customer.charAt(0).toUpperCase() +
                  reviewer?.customer.slice(1)}
              </h3>
              <Star ratingPoint={reviewer?.ratingPoint} />
              <div className="px-3 py-2 mt-2 text-[14px] lg:text-[16px]">
                {reviewer?.message.length > 70 ? (
                  <p className="text-[14px]">
                    {reviewer?.message.slice(0, 70) + "..."}
                  </p>
                ) : (
                  <p className="text-[14px]">{reviewer?.message}</p>
                )}
              </div>
              <div className="text-black opacity-40">
                {reviewer?.currentDate}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewHomeSection;
