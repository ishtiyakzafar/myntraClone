import { Col, Row } from "antd";
import React from "react";

const NewslatterSection = () => {
  return (
    <div className="Container py-5 text-center">
      <Row>
        <Col span={24}>
          <h1 style={{ color: "var(--primary-color)" }}>
            Get Upcoming Offer News
          </h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={24} sm={24} md={16} lg={10} xl={8}>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Enter your mial"
              style={{ paddingRight: "120px" }}
            />
            <button className="shop_btn " style={{ height: "40px" }}>
              SEND NOW
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewslatterSection;
