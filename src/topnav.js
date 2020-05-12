import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Col, Row, Avatar, Button, Divider, Modal } from "antd";
import SearchNav from "./search";
import { UserOutlined, EditOutlined } from "@ant-design/icons";

export default function Topnav() {
  return (
    <Row className="topnav mainwidth">
      <Col span={8} className="align-left">
        LOGO <SearchNav />
      </Col>
      <Col span={8} className="align-left">
        <SearchNav />
      </Col>
      <Col span={8} className="align-right">
        <Avatar className="margin-bt-sm" size={32} icon={<UserOutlined />} />
        <a href="#"> 登陆 </a> <Divider type="vertical" /> <a href="#"> 注册</a>
        <Button type="primary" size="small" className="margin-sm margin-l">
          <EditOutlined />
          投稿
        </Button>
      </Col>
    </Row>
  );
}
