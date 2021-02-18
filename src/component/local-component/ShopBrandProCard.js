import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const ShopBrandProCard = ({ dataImg }) => {
  return (
    <div>
      <Card
        style={{ cursor: "pointer", width: "100%" }}
        cover={
          <img
            alt="example"
            style={{
              height: "170px",
              width: "170px",
              borderRadius: "50%",
              margin: "auto",
              marginTop: "30px",
              // padding: "50px",
            }}
            src={dataImg.src}
          />
        }
      >
        <div className="text-center">
          <h5>{dataImg.store}</h5>
          <i
            style={{ color: "var(--primary-color)", lineHeight: "15px" }}
            class="fa-2x fas fa-shopping-bag"
          ></i>
        </div>
      </Card>
    </div>
  );
};

export default ShopBrandProCard;
