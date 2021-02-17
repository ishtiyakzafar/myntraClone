import React, { Component } from "react";
import { Row, Col, Carousel } from "antd";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import hero from "../../assets/images/hero.jpg";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
  }
  handleNext = () => this.carouselRef.current.next();

  handlePrev = () => this.carouselRef.current.prev();
  render() {
    let settings = {
      dot: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const heroData = [
      {
        id: 0,
        title: "Women Dresses 40% off",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Ut enim ad minim veniam",
        src: hero,
      },
      {
        id: 0,
        title: "Women Dresses 40% off",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Ut enim ad minim veniam",
        src: hero,
      },
      {
        id: 0,
        title: "Women Dresses 40% off",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Ut enim ad minim veniam",
        src: hero,
      },
      {
        id: 0,
        title: "Women Dresses 40% off",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididuntlabore et dolore magna aliqua. Ut enim ad minim veniam",
        src: hero,
      },
    ];
    return (
      <div>
        <div className="preBtn" onClick={this.handlePrev}>
          {/* <ArrowLeftOutlined /> */}
        </div>

        <Carousel {...settings} ref={this.carouselRef} className="carausal">
          {heroData.map((data) => {
            return (
              <Row>
                <Col
                  className="d-flex flex-column justify-content-center align-items-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${data.src})`,
                    width: "100%",
                    height: "60vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h1 className="text-white">{data.title}</h1>
                  <p className="text-white w-50 text-center">{data.content}</p>
                  <button className="shop_btn ">Shop Now</button>
                </Col>
              </Row>
            );
          })}
        </Carousel>

        <div className="nextBtn" onClick={this.handleNext}>
          {/* <ArrowRightOutlined /> */}
        </div>
      </div>
    );
  }
}
export default Hero;
