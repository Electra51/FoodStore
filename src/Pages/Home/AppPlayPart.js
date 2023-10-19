import React from "react";
import imgPlay from "../../assets/Images/istockphoto-1190330112-612x612-removebg-preview.png";
import googlePlayLogo from "../../assets/logo/GooglePlay.svg";
import appStore from "../../assets/logo/appSote.svg";

const AppPlayPart = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mt-16 lg:mt-36">
      <div className="text-center bg-[#EF8E33] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 items-center justify-center h-[500px]">
        <div className="lg:mx-20 mx-10 my-auto">
          <p className="text-gray-100">Download Mobile App and</p>
          <h2 className="text-white text-2xl lg:text-3xl font-bold mt-2 overflow-y-hidden">
            SAVE UP TO 20%
          </h2>
          <p className="text-gray-100 mx-auto mt-2 text-[14px]">
            Fresh and Organic food service and also review your comment.Lorem
            Ipsum has been the when an unknown printer took a galley of type and
            scrambled
          </p>
          <div className="flex justify-center align-middle items-center gap-4">
            <img
              src={googlePlayLogo}
              alt=""
              className="cursor-pointer lg:w-52 w-28"
            />
            <img
              src={appStore}
              alt=""
              className="cursor-pointer lg:w-52 w-28"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <img src={imgPlay} alt="" className="lg:w-1/2 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default AppPlayPart;
