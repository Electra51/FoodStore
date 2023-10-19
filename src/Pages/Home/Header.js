import React, { Component } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img3 from "../../assets/Images/Group 12 (2).png";
import img2 from "../../assets/Images/Group 12 (3).png";
import img1 from "../../assets/Images/Group 8 1.png";
import "./header.css";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
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
      <Slider ref={(slider) => (this.slider = slider)} {...settings}>
        <div className="slide-img relative">
          <img src={img1} alt="" className="h-96 w-full object-cover" />
          <div className="absolute lg:top-28 top-28 lg:left-28 left-10">
            <h2 className="mb-3 text-[27px] lg:text-4xl font-bold">
              Fresh Foods
            </h2>
            <p className="mb-5">Stay Home & get your Daily Needs.</p>
            <Link to="/services">
              <button className="hello btn hover:bg-[#dc790f] border-none bg-[#EF8E33] text-white rounded-none hover:border-none shadow-md text-low">
                Get Started <BsArrowRightShort className="arrow1 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="slide-img relative">
          <img src={img2} alt="" className="h-96 w-full object-cover" />
          <div className="absolute lg:top-28 top-28 lg:left-28 left-10">
            <h1 className="mb-3 text-[27px] lg:text-4xl font-bold">
              Organic Foods
            </h1>
            <p className="mb-5">Customers also give their review.</p>
            <Link to="/services">
              <button className="hello btn hover:bg-[#dc790f] border-none bg-[#EF8E33] text-white rounded-none hover:border-none shadow-md text-low">
                See Reviews <BsArrowRightShort className="arrow1 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
        <div className="slide-img relative">
          <img src={img3} alt="" className="h-96 w-full object-cover" />
          <div className="absolute lg:top-28 top-20 lg:left-28 left-10">
            <h1 className="mb-3 text-[27px] lg:text-4xl font-bold">
              Snacks and Beverage Foods
            </h1>
            <p className="mb-5">
              A quick service where anyone get their needs easily.
            </p>
            <Link to="/services">
              <button className="hello btn hover:bg-[#dc790f] border-none bg-[#EF8E33] text-white rounded-none hover:border-none shadow-md text-low">
                See Details <BsArrowRightShort className="arrow1 text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </Slider>
    );
  }
}
