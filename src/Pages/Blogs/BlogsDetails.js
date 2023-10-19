import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import img1 from "../../assets/logo/download.png";
import logo2 from "../../assets/logo/review.svg";
import { AuthContext } from "../../contexts/AuthProvider";
import Star from "../ServiceDetail/ReviewPart/Star";
import blogsAllData from "./fakeBlog";

const BlogsDetails = () => {
  const { user } = useContext(AuthContext);
  const [reviewData, setReviewData] = useState([]);
  const [reviewDatain, setReviewDatain] = useState();
  const { id } = useParams();
  const blog = blogsAllData?.find((item) => item.id === parseInt(id));

  useEffect(() => {
    fetch("https://pick-food-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviewData(data));
  }, []);
  console.log(reviewData);

  const reviewMessage = reviewData?.filter((item) => item.serviceId === id);

  useEffect(() => {
    reviewData?.map((e) => setReviewDatain(e));
  }, [reviewData]);

  const totalRating = reviewMessage?.reduce(
    (total, item) => total + parseFloat(item.ratingPoint),
    0
  );

  // Calculate the average rating
  const averageRating = totalRating / reviewMessage?.length;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const showDate = new Date();
  const dt = moment(showDate).format("LLL");

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = `${form.title.value}`;
    const email = user?.email || "unregistered";
    const message = form.message.value;
    const ratingPoint = form.ratingPoint.value;
    const serviceId = id || "No ServiceId";
    const currentDate = dt || "No Date Show";
    const userimage = user?.photoURL || "";

    const blogReview = {
      service: id,
      serviceId,
      currentDate,
      customer: title,
      email,
      message,
      ratingPoint,
      userimage,
    };

    fetch("https://pick-food-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    toast.success("Blogs Review Added Successfully");
    form.reset();
  };

  return (
    <div className="max-w-[1260px] mx-3 lg:mx-auto flex flex-col lg:flex-row my-10 justify-start items-start align-top gap-8">
      <div className="">
        <h2 className="card-title mb-2">Question: {blog?.question}</h2>
        <p className="text-justify">{blog?.answer}</p>
        <div className="flex items-center mt-10">
          <img src={logo2} alt="" width={60} />
          <p className="text-xl font-semibold pl-2">Comment & Review</p>
        </div>
        <div>
          <div className="font-medium">
            Average Rating:
            <p>
              <Star ratingPoint={averageRating.toFixed(1)} />
              <span className="text-[15px] text-gray-500">
                ({reviewMessage?.length} Reviews)
              </span>
            </p>
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
                            <img
                              src={reviewDatain?.userimage}
                              alt=""
                              width={55}
                            />
                          ) : (
                            <img src={img1} alt="" width={55} />
                          )}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-[16px] font-semibold">
                          {e?.customer}
                        </h2>
                        <Star ratingPoint={e?.ratingPoint} />
                        <p className="text-gray-700 text-[14px]">
                          {e?.message}
                        </p>
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
      </div>
      <div>
        <img src={blog?.img} alt="Shoes" width={4500} />
        <div className="flex justify-center items-center gap-8 text-5xl mb-10 mt-12">
          <div className="tooltip" data-tip="Like">
            <SlLike className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
          </div>
          <div className="tooltip" data-tip="Share">
            <AiOutlineShareAlt className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
          </div>
          <div className="tooltip" data-tip="comment">
            <AiOutlineComment className="border border-orange-500 text-white rounded-full p-3 bg-[#EF8E33] hover:bg-orange-500 hover:text-white" />
          </div>
        </div>
        <div>
          {user?.uid ? (
            <form onSubmit={handleReviewSubmit} className="card-body">
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Give Your Rating</span>
                </label>
                <input
                  name="ratingPoint"
                  type="text"
                  placeholder="Give Your Rating Like 4, 5, 4.4 ..."
                  className="input input-ghost w-full input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Your Comments</span>
                </label>
                <textarea
                  className="textarea textarea-bordered "
                  name="message"
                  cols="10"
                  rows="4"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Blog ID</span>
                </label>
                <input
                  name="serviceId"
                  type="text"
                  defaultValue={id}
                  placeholder="your tittle"
                  className="text-gray-400 input input-ghost w-full bg-base-200"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Current Date and Time</span>
                </label>
                <input
                  name="currentDate"
                  type="text"
                  defaultValue={dt}
                  placeholder="your currentDate"
                  className="text-gray-400 input input-ghost w-full bg-base-200"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Your Name</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="your Name"
                  className="text-gray-400 input input-ghost w-full bg-base-200"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Your Email</span>
                </label>
                <input
                  name="email"
                  type="text"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  className="text-gray-400 input input-ghost w-full bg-base-200"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label mb-0">
                  <span className="text-start">Your PhotoUrl</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Your photo"
                  defaultValue={user?.photoURL}
                  className="text-gray-400 input input-ghost w-full bg-base-200"
                  readOnly
                />
              </div>
              <div className="form-control mt-0">
                <button
                  type="submit"
                  className="an border !bg-[#EF8E33] !px-5 py-2 !text-white my-7"
                >
                  Add Blog Review
                </button>
              </div>
            </form>
          ) : (
            <div className="flex justify-end text-3xl p-0 m-0">
              <Link to="/login" className="link text-[#ef8e33]">
                Please login to add a review
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;
