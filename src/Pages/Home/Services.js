import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DotLoader } from "react-spinners";
import ServicesCard from "./ServicesCard";
import "./serviceStyle.css";
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://pick-food-server.vercel.app/services")
      .then((res) => res.json())

      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="mt-16 lg:mt-36">
      <div className="text-center">
        <div className="flex flex-col justify-center">
          <p className="text-2xl font-bold mb-[-13px] z-10">Our Services</p>
        </div>
        <p className="mb-8 lg:mb-12 w-48 lg:w-56 mx-auto border-t-8 border-[#f88e1a] text-[14px] lg:text-[16px]">
          You can select one easily
        </p>
      </div>

      {loading ? (
        <DotLoader color={"#F88E1A"} loading={loading} size={100} />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center mx-8">
          {services.slice(0, 4).map((service) => (
            <ServicesCard key={service._id} service={service}></ServicesCard>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center lg:justify-end lg:mr-12 my-10 lg:mx-8 mx-auto">
        <Link to="/services">
          <button className="flex an border border-[#EF8E33] rounded-none px-2 py-1 mr-8 hover:text-white hover:bg-[#EF8E33] text-[#EF8E33] ">
            See All <BsArrowRightShort className="arrow1 text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
