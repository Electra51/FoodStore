import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import icon1 from "../../assets/Images/icon1.png";
import icon2 from "../../assets/Images/icon2.png";
import icon3 from "../../assets/Images/icon3.png";
import img from "../../assets/Images/img35.jpg";
import img2 from "../../assets/Images/img36.jpg";
import img3 from "../../assets/Images/img37.jpg";

const Gallery = () => {
  return (
    <PhotoProvider>
      <div className="grid grid-cols-1 lg:grid-cols-2 mb-32 gap-10 items-center lg:mx-20 mx-10 mt-16 lg:mt-36">
        <div
          className="grid grid-cols-3 gap-4"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
        >
          <PhotoView src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs=">
            <img
              src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs="
              alt=""
            />
          </PhotoView>
          <PhotoView src="https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?b=1&s=170667a&w=0&k=20&c=nnwH5XBvXSJalyZeHZzXwK7NnGch9BrC_0oTffi9gIA=">
            <img
              src="https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?b=1&s=170667a&w=0&k=20&c=nnwH5XBvXSJalyZeHZzXwK7NnGch9BrC_0oTffi9gIA="
              alt=""
            />
          </PhotoView>
          <PhotoView
            src={
              "https://cdn.pixabay.com/photo/2021/08/02/22/34/fish-6517941__340.jpg"
            }
          >
            <img
              src={
                "https://cdn.pixabay.com/photo/2021/08/02/22/34/fish-6517941__340.jpg"
              }
              alt=""
            />
          </PhotoView>
          <PhotoView src={img}>
            <img className="col-span-2" src={img} alt="" />
          </PhotoView>
          <PhotoView src={img2}>
            <img src={img2} alt="" />
          </PhotoView>
          <PhotoView src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs=">
            <img
              src="https://media.istockphoto.com/id/174988238/photo/chicken-fingers.jpg?s=612x612&w=0&k=20&c=lHzg50VtB4D7pv2FLSuHDP0i4EmScYhN_SeZx3274qs="
              alt=""
            />
          </PhotoView>
          <PhotoView src={img3}>
            <img className="col-span-2" src={img3} alt="" />
          </PhotoView>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="1500"
          data-aos-duration="1500"
        >
          <div className="text-start mt-10">
            <p className="text-2xl font-bold mb-[-13px]">Recipe Gallery</p>
            <p className="mb-8 lg:mb-12 w-48 lg:w-56 border-t-8 border-[#f88e1a] text-[14px] lg:text-[16px]">
              {" "}
            </p>
          </div>
          {/* <h3 className='text-3xl font-bold'>Recipe Gallery</h3> */}
          <p className="text-justify">
            Food is very important for every living being to stay alive. it is
            the basic material that the body needs for its survival and
            well-being. There are such various cooking styles and food
            inclinations topographical areas, and social classes. The human body
            needs a variety of the following five nutrients protein,
            carbohydrate, fat, vitamins, and minerals which comes from the Food
            we eat to stay healthy, active, and productive.{" "}
          </p>
          <div className="flex lg:gap-10 gap-5 mt-6 px-3 py-1">
            <div className="card w-32 bg-base-100 hover:bg-[#EF8E33] hover:text-white transition-all duration-500 shadow-xl pb-2 cursor-pointer rounded-md">
              <figure>
                <img src={icon1} alt="" />
              </figure>
              <p className="text-center">Delicious</p>
            </div>
            <div className="card w-32 bg-base-100 shadow-xl hover:bg-[#EF8E33] hover:text-white transition-all duration-500 pb-2 cursor-pointer rounded-md">
              <figure>
                <img src={icon2} alt="" />
              </figure>
              <p className="text-center">Testy</p>
            </div>
            <div className="card w-32 bg-base-100 shadow-xl hover:bg-[#EF8E33] hover:text-white transition-all duration-500 pb-2 cursor-pointer rounded-md">
              <figure>
                <img src={icon3} alt="" />
              </figure>
              <p className="text-center">Fresh</p>
            </div>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default Gallery;
