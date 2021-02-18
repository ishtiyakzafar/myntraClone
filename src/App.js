import React from "react";

import "antd/dist/antd.css";

import AppHeader from "./component/common/Header";
import { Layout } from "antd";
import AppContent from "./component/common/AppContent";
import AppFooter from "./component/common/AppFooter";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <div>
      <Layout style={{ background: "#fff" }} className="mainlayout">
        <Header style={{ background: "#fff" }}>
          <AppHeader />
        </Header>
        <Content className="">
          <AppContent />
        </Content>
        <Footer style={{}}>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
};

export default App;
