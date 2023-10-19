import React, { useState } from "react";
import {
  AiOutlineComment,
  AiOutlineSearch,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { Link } from "react-router-dom";
import useTitle from "../../hook/useTitle";
import blogsAllData from "./fakeBlog";

const Blogs = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState(blogsAllData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the blogs based on the search query
    const filtered = blogsAllData.filter((blog) =>
      blog.question.toLowerCase().includes(query)
    );
    setFilteredBlogs(filtered);
  };
  useTitle("Blogs");

  return (
    <div>
      {/* breadcrumbs and searchbar */}
      <div className="service-bread text-sm breadcrumbs bg-base-300 h-24 lg:px-10 px-7 py-10 overflow-hidden flex justify-between items-center gap-5">
        <ul>
          <li className="opacity-60">
            <Link to="/">Home</Link>
          </li>
          <li>Blogs</li>
        </ul>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Blogs..."
            value={searchQuery}
            onChange={handleSearch}
            className="input input-bordered w-full max-w-xs relative"
          />
          <AiOutlineSearch className="absolute right-3 top-2 text-2xl" />
        </div>
      </div>
      {/* blog card */}
      <div className="mx-8 grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10 my-14">
        {filteredBlogs?.map((blogData) => (
          <div
            key={blogData?.id}
            className="lg:h-[200px] h-[350px] block w-full lg:flex gap-2" style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
          >
            <div className="h-[200px] w-full lg:w-1/2">
              <img src={blogData?.img} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="p-2 h-[200px] w-full lg:w-1/2">
              <h2 className="pt-3 text-[17px] font-medium">
                {blogData?.question}
              </h2>
              <p className="py-2 text-[14px] text-gray-500">
                {blogData?.answer.length > 80 ? (
                  <p className="text-[14px]">
                    {blogData?.answer.slice(0, 80) + "..."}{" "}
                    <Link
                      to={`/blogs/${blogData?.id}`}
                      className="text-[#EF8E33] cursor-pointer"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                ) : (
                  <p className="text-[14px]">
                    {blogData?.answer}{" "}
                    <Link
                      to={`/blogs/${blogData?.id}`}
                      className="text-[#EF8E33] cursor-pointer"
                    >
                      {" "}
                      Read more
                    </Link>
                  </p>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* blog footer */}
      <h3 className="text-2xl font-bold text-center mt-16 mb-10">
        Thank you Everybody!
      </h3>
      <div className="flex justify-center items-center gap-8 text-5xl mb-10">
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
    </div>
  );
};

export default Blogs;
