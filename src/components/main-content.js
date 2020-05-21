import React from "react";

import "antd/dist/antd.css";
import "../index.css";
import { Layout, Row, Col } from "antd";
import Imgslider from "./imgslider";

import Hotcontent from "./hotcontent";
import Toptopic from "./toptopic";
import HomeTab from "./home-tab";
import HomeShoppingTab from "./home-shopping-tab";

const { Content } = Layout;

export default function MainContent() {
  return (
    <Layout>
      <Content className="mainwidth">
        <Imgslider />

        <Row>
          <Col span={18}>
            <HomeTab />
          </Col>
          <Col span={6}>
            {" "}
            <HomeShoppingTab />
            <Hotcontent />
            <Toptopic />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
