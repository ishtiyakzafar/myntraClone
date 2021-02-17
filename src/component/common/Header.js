import React from "react";

import { Menu, Row, Col } from "antd";

const AppHeader = () => {
  return (
    <div className="">
      <Row className="d-flex justify-content-between align-items-center ">
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={4}
          // style={{ border: "1px solid red" }}
        >
          <div className="logo ">
            <h2>ZapEcom</h2>
          </div>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={0}
          lg={0}
          xl={10}
          className=""
          // style={{ border: "1px solid red" }}
        >
          <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">MEN</Menu.Item>
            <Menu.Item key="2">WOMEN</Menu.Item>
            <Menu.Item key="3">KIDS</Menu.Item>
            <Menu.Item key="4">HOME & LIVING</Menu.Item>
            <Menu.Item key="5">OFFER</Menu.Item>
          </Menu>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={8}
          lg={8}
          xl={6}
          // style={{ border: "1px solid red" }}
        >
          <div className="searchBar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search Products..." />
          </div>
        </Col>
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={4}
          // style={{ border: "1px solid red" }}
        >
          <div className="header_icon">
            <i class="fas fa-shopping-bag"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-user"></i>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppHeader;
