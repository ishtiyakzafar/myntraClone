import React, { Component } from "react";

import img1 from "../../assets/images/newArr-img1.JPG";
import img2 from "../../assets/images/newArr-img2.JPG";
import img3 from "../../assets/images/newArr-img3.JPG";
import img4 from "../../assets/images/newArr-img4.JPG";

import { Row, Col, Carousel } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import NewArrivalCard from "./NewArrivalCard";

class NewArrivalSection extends Component {
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
        title: "Green Print Saree",
        price: "3200.00 ",
      },
      {
        id: 1,
        src: img2,
        title: "Churidar Kameez",
        price: "1620.00 ",
      },
      {
        id: 2,
        src: img3,
        title: "Traditional  Saree",
        price: "4520.00 ",
      },
      {
        id: 3,
        src: img4,
        title: "Churidar Kameez",
        price: "9620.00 ",
      },
      {
        id: 4,
        src: img2,
        title: "Churidar Kameez",
        price: "5620.00 ",
      },
    ];
    return (
      <div style={{ overflow: "hidden" }} className="pb-5 Container">
        <h3 className="text-center pb-5">New Arrivals</h3>
        <Row>
          <Col span={2}>
            {imgData.length < 4 ? (
              ""
            ) : (
              <div className="preBtn1" onClick={this.handlePrev}>
                <LeftOutlined />
              </div>
            )}
          </Col>
          <Col span={20} className="mx-auto">
            {imgData.length < 4 ? (
              <Row>
                {imgData.map((img) => (
                  <Row style={{ margin: "10px" }}>
                    <Col span={24}>
                      <NewArrivalCard key={img.id} dataImg={img} />
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
                  <Row gutter={[16, 16]} key={img.id}>
                    <Col span={24}>
                      <NewArrivalCard dataImg={img} />
                    </Col>
                  </Row>
                ))}
              </Carousel>
            )}
          </Col>
          <Col span={2}>
            {imgData.length < 4 ? (
              ""
            ) : (
              <div className="nextBtn1" onClick={this.handleNext}>
                <RightOutlined />
              </div>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
export default NewArrivalSection;
