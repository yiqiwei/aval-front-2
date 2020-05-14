import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Row, Avatar, Tabs, Button } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";
import { FireOutlined, FileTextOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import AllHotAuthors from "./all-hot-authors";
import Home from "../home";

export default function Hotcontent() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="margin-1">
      <FireOutlined /> 人气榜单 Top5{" "}
      <Link to="/all-hot-authors" replace>
        <Button className="gap" type="link">
          <FileTextOutlined /> 查看全部
        </Button>
      </Link>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="综合榜" key="1">
          <Row>
            <Col span={11}>1. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>53w</Col>
          </Row>

          <Row>
            <Col span={11}>2. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>32.5w</Col>
          </Row>
          <Row>
            <Col span={11}>3. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>1.3w</Col>
          </Row>
          <Row>
            <Col span={11}>4. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>8,046</Col>
          </Row>
        </TabPane>
        <TabPane tab="图片榜" key="2">
          <Row>
            <Col span={11}>1. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>53w</Col>
          </Row>
          <Row>
            <Col span={11}>2. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>32.5w</Col>
          </Row>{" "}
        </TabPane>
        <TabPane tab="文字榜" key="3">
          <Row>
            <Col span={11}>1. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>53w</Col>
          </Row>
          <Row>
            <Col span={11}>2. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>32.5w</Col>
          </Row>{" "}
        </TabPane>
        <TabPane tab="Cos榜" key="3">
          <Row>
            <Col span={11}>1. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>53w</Col>
          </Row>
          <Row>
            <Col span={11}>2. XXXXXX</Col>
            <Col span={3}>
              <RobotOutlined className="margin-l-sm" />
            </Col>
            <Col span={3}>32.5w</Col>
          </Row>{" "}
        </TabPane>
      </Tabs>
    </Card>
  );
}
