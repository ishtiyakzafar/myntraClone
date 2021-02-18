import React from "react";

import img1 from "../../assets/images/prooffer.JPG";

const ProductOffer = () => {
  return (
    <div
      className="d-flex flex-column justify-content-evenly align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),url(${img1})`,
        width: "100%",
        height: "30vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h4 className="text-center text-white">
        Shopping with Brands Store & Get Instant Cashback
      </h4>
      <button className="shop_btn ">Shop Now</button>
    </div>
  );
};

export default ProductOffer;
