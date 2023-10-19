import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";
import Star from "../ServiceDetail/ReviewPart/Star";

const ServicesCard = ({ service }) => {
  const { name, img, price, description, _id } = service;
  const [reviewFirstService, setReviewFirstService] = useState([]);
  const [reviewRatingFistServices, setReviewRatingFirstServices] =
    useState(0.0);
  useEffect(() => {
    fetch("https://pick-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviewFirstService(data));
  }, []);
  // console.log("reviewFirstService", reviewFirstService);
  useEffect(() => {
    const reviewMessage = reviewFirstService?.filter(
      (item) => item.serviceId === _id
    );
    let ratingServices = [];

    // console.log(reviewMessage)
    reviewMessage?.map((e) => {
      ratingServices.push(e?.ratingPoint);
      // console.log("reviewRatingServices", e?.ratingPoint)
    });
    const totalRating = ratingServices?.reduce(
      (total, item) => total + parseFloat(item),
      0
    );

    // Calculate the average rating
    const averageRating = totalRating / ratingServices?.length;
    // console.log(averageRating)
    setReviewRatingFirstServices(averageRating.toFixed(1));
  }, [reviewFirstService]);

  return (
    <PhotoProvider>
      <div className="w-80 h-96 bg-base-100 shadow-xl relative mt-2 overflow-y-hidden">
        <div className="h-56">
          <PhotoView src={img}>
            <img src={img} alt="Shoes" className="w-full h-full object-cover" />
          </PhotoView>
        </div>
        <div className="flex-grow-0 px-3 py-2 ">
          <div className="flex justify-between">
            {" "}
            <h2 className="text-[18px] font-medium mb-1">{name}</h2>
            <div className="flex align-middle justify-items-center">
              <Star ratingPoint={reviewRatingFistServices} />
            </div>
          </div>
          <p className="font-semibold text-[#F88E1A]">Price: $ {price}</p>

          {description.length > 70 ? (
            <p className="text-[14px]">{description.slice(0, 70) + "..."}</p>
          ) : (
            <p className="text-[14px]">{description}</p>
          )}

          <div className="card-actions justify-end">
            <Link to={`/services/${_id}`}>
              <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3">
                View Detail
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServicesCard;
