import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb, Card, Row, Col, Pagination } from "antd";
import Imgslider from "./imgslider";
import Topnav from "./topnav";
import Sidemenu from "./sidemenu";
import Author from "./author";
import Hotcontent from "./hotcontent";
import Toptopic from "./toptopic";

const { Header, Content, Footer, Sider } = Layout;

export default function Home() {
  return (
    <Layout>
      <Header>
        <Topnav />
      </Header>
      <Layout className="mainwidth padding-1">
        <Sider>
          <Sidemenu />
        </Sider>

        <Content>
          <Imgslider />
        </Content>
      </Layout>

      <Layout className="mainwidth">
        <Row>
          <Col span={18}>
            {" "}
            <Author />
            <Author />
            <Pagination className="margin-1" defaultCurrent={1} total={50} />
          </Col>
          <Col span={6}>
            {" "}
            <Hotcontent />
            <Toptopic />
          </Col>
        </Row>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
