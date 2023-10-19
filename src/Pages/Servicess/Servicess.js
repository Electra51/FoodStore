import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import DotLoader from "react-spinners/DotLoader";
import "../../Shared/login.css";
import useTitle from "../../hook/useTitle";
import "../Home/serviceStyle.css";
import AllServicess from "./AllServicess";

const Servicess = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useTitle("Servicess");
  const allServiceData = useLoaderData();
  // console.log(allServiceData);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(allServiceData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the services based on the search query
    const filtered = allServiceData?.filter((service) =>
      service?.name?.toLowerCase().includes(query)
    );
    // setFilteredServices(filtered);

    setData(filtered);
  };

  const [data, setData] = useState(filteredServices);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = (e) => {

    //search
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter the services based on the search query
    const filtered = allServiceData?.filter((service) =>
      service?.name?.toLowerCase().includes(query)
    );



    ///filter
    const filteredData = filtered.filter((item) => {
      const itemPrice = parseFloat(item.price);
      const min =
        minPrice === "" ? Number.MIN_SAFE_INTEGER : parseFloat(minPrice);
      const max =
        maxPrice === "" ? Number.MAX_SAFE_INTEGER : parseFloat(maxPrice);
      return itemPrice >= min && itemPrice <= max;
    });
    setData(filteredData);
  };

  const handleReset = () => {
    setMinPrice("");
    setMaxPrice("");
    setData(filteredServices);
  };

  return (
    <div>
      {loading ? (
        <DotLoader color={"#F88E1A"} loading={loading} size={100} />
      ) : (
        <>
          <div className="service-bread text-sm breadcrumbs bg-base-300 h-24 lg:px-10 px-7 py-10 overflow-hidden flex justify-between items-center gap-5">
            <ul className="ml-[2px] lg:ml-0">
              <li className="opacity-60">
                <Link to="/">Home</Link>
              </li>
              <li>Services</li>
            </ul>

            <div className="relative mr-[2px] lg:mr-0">
              <input
                type="text"
                placeholder="Search Food..."
                value={searchQuery}
                onChange={handleSearch}
                className="input input-bordered w-full max-w-xs relative"
              />
              <AiOutlineSearch className="absolute right-3 top-2 text-2xl" />
            </div>
          </div>
          <div className="flex flex-col justify-end ml-3 mt-4">
            <p className="mb-1">Filter by Price :</p>
            <div className="flex flex-row items-center">
              <input
                className="input w-28 mr-1 input-bordered p-1 my-0 h-6"
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <span className="mr-1">To</span>
              <input
                className="input w-28 mr-1 input-bordered p-1 my-0 h-6"
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />

              <button
                className={`bg-[#EF8E33] mr-1 hover:bg-[#bf680a] text-[14px] text-white !px-2 py-0.5 rounded-none`}
                onClick={handleFilter}
              >
                Filter
              </button>
              <button
                className={`bg-[#EF8E33] mr-1 hover:bg-[#bf680a] text-[14px] text-white !px-2 py-0.5 rounded-none`}
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-6 justify-items-center my-15 mx-5">
            {data?.map((serviceData) => (
              <AllServicess
                key={serviceData._id}
                serviceData={serviceData}
              ></AllServicess>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Servicess;
