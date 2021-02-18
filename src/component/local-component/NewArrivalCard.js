import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const NewArrivalCard = ({ dataImg }) => {
  return (
    <div>
      <Card
        style={{ cursor: "pointer" }}
        cover={<img alt="example" style={{ height: 260 }} src={dataImg.src} />}
      >
        <div className="text-center">
          <h6>{dataImg.title}</h6>
          <p style={{ color: "var(--primary-color)", lineHeight: "10px" }}>
            Rs. {dataImg.price}
          </p>
          <i
            style={{ color: "var(--primary-color)", lineHeight: "15px" }}
            class="fa-2x fas fa-shopping-bag"
          ></i>
        </div>
      </Card>
    </div>
  );
};

export default NewArrivalCard;
