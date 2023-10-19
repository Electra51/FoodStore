import React, { useEffect, useState } from "react";
import useTitle from "../../hook/useTitle";
import AppPlayPart from "./AppPlayPart";
import Gallery from "./Gallery";
import Header from "./Header";
import Offer from "./Offer";
import ReviewHomeSection from "./ReviewHomeSection";
import Services from "./Services";

const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useTitle("Home");
  return (
    <>
      <Header />
      <Services />
      <Offer />
      <AppPlayPart />
      <ReviewHomeSection />
      <Gallery />
    </>
  );
};

export default Home;
