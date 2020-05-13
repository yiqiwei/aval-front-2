import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";
import { Col, Row, Avatar, Button, Divider, Layout, Menu } from "antd";
import SearchNav from "./components/search";
import MainContent from "./components/main-content";
import {
  UserOutlined,
  EditOutlined,
  ShopOutlined,
  RocketOutlined
} from "@ant-design/icons";

export default function Home() {
  const { Header, Footer, Content } = Layout;
  return (
    <Router>
      <Layout>
        <Header>
          <div className="mainwidth">
            <Menu className="align-right" theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <RocketOutlined />
                登陆
              </Menu.Item>
              <Menu.Item key="2">
                <UserOutlined />
                注册
              </Menu.Item>

              <Button
                className="align-right"
                type="primary"
                size="small"
                className="margin-sm margin-l"
              >
                <EditOutlined />
                投稿
              </Button>
            </Menu>
          </div>
        </Header>
        <Content>
          {" "}
          <Route
            exact
            path="/"
            render={() => {
              return <MainContent />;
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return 123;
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return 456;
            }}
          />
        </Content>
        <Footer className="align-center">Footer content goes here...</Footer>
      </Layout>
    </Router>
  );
}
