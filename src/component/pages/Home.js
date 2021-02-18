import React from "react";

import FeaturedCollection from "../local-component/FeaturedCollection";
import NewArrivalSection from "../local-component/NewArrivalSection";
import NewslatterSection from "../local-component/NewslatterSection";
import ProductAccSection from "../local-component/ProductAccSection";
import ProductOffer from "../local-component/ProductOffer";
import ShopBrandProSection from "../local-component/ShopBrandProSection";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
      <NewArrivalSection />
      <ShopBrandProSection />
      <ProductOffer />
      <ProductAccSection />
      <NewslatterSection />
    </div>
  );
};

export default Home;
