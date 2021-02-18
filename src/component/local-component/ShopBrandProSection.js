import React, { Component } from "react";

import img1 from "../../assets/images/brand-img1.JPG";
import img2 from "../../assets/images/brand-img2.JPG";
import img3 from "../../assets/images/brand-img3.JPG";
import img4 from "../../assets/images/brand-img4.JPG";

import { Row, Col, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import ShopBrandProCard from "./ShopBrandProCard";

class ShopBrandProSection extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }
  handleNext = () => this.carouselRef.current.next();

  handlePrev = () => this.carouselRef.current.prev();
  render() {
    let settings = {
      // dot: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const imgData = [
      {
        id: 0,
        src: img1,
        store: "Manyta Store",
      },
      {
        id: 1,
        src: img2,
        store: "Jayshree Store",
      },
      {
        id: 2,
        src: img3,
        store: "Rama Store",
      },
      {
        id: 3,
        src: img4,
        store: "Bitayon Store",
      },
      {
        id: 4,
        src: img2,
        store: "Rama Store",
      },
    ];
    return (
      <div style={{ background: "#ecf0f1" }}>
        <div style={{ overflow: "hidden" }} className="pb-5  Container">
          <h3 className="text-center py-5">Shopping Brands Product</h3>
          <Row>
            <Col span={20} className="mx-auto ">
              {imgData.length < 4 ? (
                <Row>
                  {imgData.map((img) => (
                    <Row>
                      <Col span={24} style={{ margin: "30px" }}>
                        <ShopBrandProCard key={img.id} dataImg={img} />
                      </Col>
                    </Row>
                  ))}
                </Row>
              ) : (
                <Carousel
                  {...settings}
                  ref={this.carouselRef}
                  className="carausal1"
                >
                  {imgData.map((img) => (
                    <Row key={img.id}>
                      <Col span={24}>
                        <ShopBrandProCard dataImg={img} />
                      </Col>
                    </Row>
                  ))}
                </Carousel>
              )}
            </Col>
          </Row>
          <Row className="py-4">
            <Col
              span={24}
              className="d-flex justify-content-center align-items-center"
            >
              <div>
                {imgData.length < 4 ? (
                  ""
                ) : (
                  <div
                    className="preBtn2"
                    style={{ marginRight: "10px" }}
                    onClick={this.handlePrev}
                  >
                    <LeftOutlined />
                  </div>
                )}
              </div>
              <div>
                {imgData.length < 4 ? (
                  ""
                ) : (
                  <div
                    className="nextBtn2"
                    style={{ marginLeft: "10px" }}
                    onClick={this.handleNext}
                  >
                    <RightOutlined />
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default ShopBrandProSection;
