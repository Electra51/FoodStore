import React from "react";
import logo2 from "../../../src/assets/offerlogo/clock.png";
import logo1 from "../../../src/assets/offerlogo/logo3.png";
import logo4 from "../../../src/assets/offerlogo/logo4.png";
import logo3 from "../../../src/assets/offerlogo/secuirity.png";

const Offer = () => {
  return (
    <div data-aos="fade-up" className="mt-36" data-aos-duration="1000">
      <div className="text-center">
        <p className="text-2xl font-bold mb-[-13px]">Extra Facilities</p>
        <p className="mb-8 lg:mb-12 w-48 lg:w-56 mx-auto border-t-8 border-[#f88e1a] text-[14px] lg:text-[16px]">
          Our Provided Facilities{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 md:grid-cols-2 items-center my-10 mx-12 lg:mx-20">
        <div className="border p-8 hover:bg-gray-200">
          <div className="flex items-center">
            <img src={logo1} alt="" height={80} width={100} />
            <p className="pl-2 text-xl font-bold">Fast Delivery</p>
          </div>
        </div>
        <div className="border p-8 hover:bg-gray-200">
          <div className="flex items-center">
            <img src={logo2} alt="" height={70} width={87} />
            <p className="pl-2 text-xl font-bold">24/7 Services</p>
          </div>
        </div>
        <div className="border p-8 hover:bg-gray-200">
          <div className="flex items-center">
            <img src={logo3} alt="" height={80} width={105} />
            <p className="pl-2 text-xl font-bold">Secure Payment</p>
          </div>
        </div>
        <div className="border p-8 hover:bg-gray-200">
          <div className="flex items-center">
            <img src={logo4} alt="" height={80} width={60} />
            <p className="pl-2 text-xl font-bold">Online Delivery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
