import React from "react";

import FeaturedCollection from "../local-component/FeaturedCollection";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
    </div>
  );
};

export default Home;
