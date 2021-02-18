import React from "react";

import img1 from "../../assets/images/menAcc-img.JPG";
import img2 from "../../assets/images/womAcc-img.JPG";

import { Row, Col } from "antd";
import ProAccCard from "./ProAccCard";

const ProductAccSection = () => {
  const proAccData = [
    { id: 0, type: "MENS ", src: img1 },
    { id: 1, type: "WOMENS ", src: img2 },
  ];
  return (
    <div className="Container py-5">
      <Row
        gutter={[16, 16]}
        className="d-flex justify-content-center align-items-center"
      >
        {proAccData.map((data, ind) => (
          <Col xs={24} sm={12} md={11} lg={10} xl={9} key={data.id}>
            <ProAccCard data={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductAccSection;
