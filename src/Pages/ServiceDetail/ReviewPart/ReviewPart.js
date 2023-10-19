import React, { useContext, useEffect, useState } from "react";
import { BsFillChatFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo2 from "../../../../src/assets/logo/review.svg";
import img1 from "../../../assets/logo/download.png";
import { AuthContext } from "../../../contexts/AuthProvider";
import Star from "./Star";

const ReviewPart = ({ serveId, userimage }) => {
  const [reviewData, setReviewData] = useState([]);
  const [reviewDatain, setReviewDatain] = useState();
  const { user } = useContext(AuthContext);
  // console.log(reviewData);
  useEffect(() => {
    fetch("https://pick-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);

  const reviewMessage = reviewData?.filter(
    (item) => item.serviceId === serveId
  );

  const notify = () => {
    toast.warning("Please login to add a review", {
      theme: "colored",
    });
  };

  useEffect(() => {
    reviewData?.map((e) => setReviewDatain(e));
  }, [reviewData]);

  console.log(reviewDatain);
  // avarage functionality

  const totalRating = reviewMessage?.reduce(
    (total, item) => total + parseFloat(item.ratingPoint),
    0
  );

  // Calculate the average rating
  const averageRating = totalRating / reviewMessage?.length;
  // console.log(averageRating)

  return (
    <div className="">
      <div className="flex items-center mt-10">
        <img src={logo2} alt="" width={60} />
        <p className="text-xl font-semibold pl-2">Comment & Review</p>
      </div>
      <hr />
      <div className="flex justify-between items-start gap-12 my-5">
        <div className="font-medium">
          Average Rating:
          <p>
            <Star ratingPoint={averageRating.toFixed(1)} />
            <span className="text-[15px] text-gray-500">
              ({reviewMessage?.length} Reviews)
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <BsFillChatFill className="text-xl text-orange-500"></BsFillChatFill>
          {user?.email ? (
            <>
              {" "}
              <Link
                to={`/services/${serveId}/commentForm`}
                className="link text-[#EF8E33] font-semibold pl-1 "
              >
                Add a Comment
              </Link>
            </>
          ) : (
            <>
              <Link
                onClick={notify}
                className="link text-[#EF8E33] pl-2 font-medium"
              >
                Add a Comment
              </Link>
            </>
          )}
        </div>
      </div>
      {reviewMessage?.length === 0 ? (
        <p className="text-center mt-4">No Reviews here</p>
      ) : (
        reviewMessage &&
        reviewMessage
          ?.sort((a, b) => (b.currentDate > a.currentDate ? 1 : -1))
          ?.map((e) => (
            <div key={e} className="w-96 mt-3 bg-base-200">
              <div className="card-body p-3">
                <div className="flex justify-center items-start gap-8">
                  <div className="avatar">
                    <div className="w-14 rounded-full">
                      {reviewDatain?.userimage ? (
                        <img src={reviewDatain?.userimage} alt="" width={55} />
                      ) : (
                        <img src={img1} alt="" width={55} />
                      )}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[16px] font-semibold">{e?.customer}</h2>
                    <Star ratingPoint={e?.ratingPoint} />
                    <p className="text-gray-700 text-[14px]">{e?.message}</p>
                    <p className="text-gray-400 text-[14px] mt-3">
                      {e?.currentDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default ReviewPart;
