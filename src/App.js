import React from "react";

import "antd/dist/antd.css";

import AppHeader from "./component/common/Header";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <div>
      <Layout style={{ background: "#fff" }} className="mainlayout">
        <Header style={{ background: "#fff" }}>
          <Row className="d-flex justify-content-between align-items-center ">
            <Col span={4} style={{}}>
              <div className="logo ">
                <h2>ZapEcom</h2>
              </div>
            </Col>
            <Col span={10} style={{}}>
              <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">MEN</Menu.Item>
                <Menu.Item key="2">WOMEN</Menu.Item>
                <Menu.Item key="3">KIDS</Menu.Item>
                <Menu.Item key="4">HOME & LIVING</Menu.Item>
                <Menu.Item key="5">OFFER</Menu.Item>
              </Menu>
            </Col>
            <Col span={6} style={{}}>
              <div className="searchBar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search Products..." />
              </div>
            </Col>
            <Col span={4} style={{}}>
              <div className="header_icon">
                <i class="fas fa-shopping-bag"></i>
                <i class="fas fa-heart"></i>
                <i class="fas fa-user"></i>
              </div>
            </Col>
          </Row>
        </Header>
        <Content className="">
          <AppHeader />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
