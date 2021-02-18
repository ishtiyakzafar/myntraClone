import React from "react";

import { Row, Col } from "antd";
const AppFooter = () => {
  return (
    <div>
      <Row>
        <Col span={6} className="brandFooter">
          <h5>ZapEcom</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <i
            style={{ color: " #3b5998" }}
            className="fab fa-facebook-square"
          ></i>
          <i style={{ color: "#00acee" }} className="fab fa-twitter-square"></i>
          <i style={{ color: "#0e76a8" }} className="fab fa-linkedin"></i>
          <i
            style={{ color: "#db4a39" }}
            className="fab fa-google-plus-square"
          ></i>
          <i
            style={{ color: "#c8232c" }}
            className="fab fa-pinterest-square"
          ></i>
        </Col>
        <Col span={6}>
          <h5>Quick Links</h5>
          <ul>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Shipping + Returns</a>
            </li>
            <li>
              <a href="">Afterpay</a>
            </li>
            <li>
              <a href="">In-Store Perks</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </Col>
        <Col span={6}>
          <h5>Shopping Now</h5>
          <ul>
            <li>
              <a href="">New Arrivals</a>
            </li>
            <li>
              <a href="">Clothing</a>
            </li>
            <li>
              <a href="">Accessories</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
            <li>
              <a href="">Gift Cards</a>
            </li>
          </ul>
        </Col>
        <Col span={6}>
          <h5>Contact Us</h5>
          <p>
            17 New emana Road, Park View, Hydrabad India Phone- +91 596 452 589
            Email-info@fashion4u.com
          </p>
        </Col>
      </Row>
      <Row>
        <Col span={24}>zafar</Col>
      </Row>
    </div>
  );
};

export default AppFooter;
