import React from "react";
import ReactDOM from "react-dom";
import {
  Col,
  Row,
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  Badge,
  Dropdown,
  Popover
} from "antd";
import "antd/dist/antd.css";
import "../index.css";
import {
  CrownOutlined,
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  RotateRightOutlined,
  MailOutlined,
  SmileOutlined
} from "@ant-design/icons";

export default function AllHotAuthors() {
  return (
    <Row>
      <Col span={2}>
        {" "}
        <Avatar className="margin-bt-sm" size={64} icon={<UserOutlined />} />
      </Col>

      <Col span={3}>53w</Col>
    </Row>
  );
}
