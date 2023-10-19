import React, { useContext, useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { Link, useLoaderData } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hook/useTitle";
import ReviewPart from "./ReviewPart/ReviewPart";
import Star from "./ReviewPart/Star";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const [reViewDataEach, setReViewDataEach] = useState([]);
  const [reviewRatingServices, setReviewRatingServices] = useState(0.0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useTitle("ServiceDetail");
  const seviceData = useLoaderData();
  // console.log("seviceData", seviceData);
  const { _id, name, img, description, price, userimage } = seviceData;

  useEffect(() => {
    fetch("https://pick-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReViewDataEach(data));
  }, []);
  // console.log("reviewData", reViewDataEach);
  const notify = () => {
    toast.warning("Please login to add a review", {
      theme: "colored",
    });
  };
  useEffect(() => {
    const reviewMessage = reViewDataEach?.filter(
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
    setReviewRatingServices(averageRating.toFixed(1));
  }, [reViewDataEach]);

  return (
    <div>
      {loading ? (
        <DotLoader color={"#f88e1a"} loading={loading} size={100} />
      ) : (
        <>
          <div className="details mx-10">
            <div className="card-compact w-100 bg-base-100 shadow-xl my-10">
              <figure>
                <img className="w-full" src={img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold text-orange-600">
                    Price: $ {price}
                  </p>
                  <Star ratingPoint={reviewRatingServices} />
                </div>
                <hr />

                <h2 className="text-xl font-semibold mt-6">Description:</h2>
                <p className="text-[15px] text-gray-600 text-justify">
                  {description}
                </p>

                <div className="flex justify-center items-center gap-8 text-5xl my-8">
                  <div className="tooltip" data-tip="Like">
                    <SlLike className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
                  </div>
                  <div className="tooltip" data-tip="Share">
                    <AiOutlineShareAlt className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
                  </div>
                  {user?.email ? (
                    <>
                      <Link
                        to={`/services/${_id}/commentForm`}
                        className="link text-white font-semibold pl-1 "
                      >
                        {" "}
                        <div className="tooltip" data-tip="comment">
                          <AiOutlineComment className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
                        </div>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={notify}
                        className="link link-accent pl-2 font-medium"
                      >
                        {" "}
                        <div className="tooltip" data-tip="comment">
                          <AiOutlineComment className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="card-actions justify-center">
              <hr />
              <ReviewPart serveId={_id} userimage={userimage}></ReviewPart>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default ServiceDetail;
