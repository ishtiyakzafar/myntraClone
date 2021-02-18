import React from "react";

const ProAccCard = ({ data }) => {
  return (
    <div
      className="d-flex flex-column justify-content-between align-items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.src})`,
        width: "100%",
        height: "45vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10px 0 15px 0",
        borderRadius: "5px",
      }}
    >
      <h4
        className="text-center text-white "
        style={{ background: "#f39c12", padding: "3px 5px 5px 5px" }}
      >
        {data.type}
        <span style={{ color: "black" }}>ACCESSORIES</span>
      </h4>
      <button className="shop_btn ">Shop Now</button>
    </div>
  );
};

export default ProAccCard;
