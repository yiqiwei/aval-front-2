import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Row, Avatar, Tabs, Pagination } from "antd";
import "antd/dist/antd.css";
import "../index.css";
import {
  CrownOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  TagsOutlined
} from "@ant-design/icons";
import Author from "./author";

export default function HomeTab() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <Card className="margin-1">
      <Tabs defaultActiveKey="1" onChange={callback} className="home-tab">
        <TabPane
          tab={
            <span>
              <CrownOutlined />
              推荐
            </span>
          }
          key="1"
        >
          <Author />
          <Author />
          <Author />
          <Pagination className="margin-1" defaultCurrent={1} total={50} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <HeartOutlined />
              关注
            </span>
          }
          key="2"
        >
          <Author />
          <Author />
          <Pagination className="margin-1" defaultCurrent={1} total={50} />
        </TabPane>
        <TabPane
          tab={
            <span>
              <TagsOutlined />
              订阅
            </span>
          }
          key="3"
        >
          <Author />
          <Author />
          <Pagination className="margin-1" defaultCurrent={1} total={50} />
        </TabPane>
      </Tabs>
    </Card>
  );
}
