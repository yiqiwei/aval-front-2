import React from "react";
import ReactDOM from "react-dom";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Col,
  Row,
  Avatar,
  Tag
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";
import {
  CrownOutlined,
  HeartOutlined,
  LikeOutlined,
  MessageOutlined,
  RotateRightOutlined
} from "@ant-design/icons";

export default function Author() {
  return (
    <Card className="margin-1">
      <Row>
        <Col className="align-center" span={4}>
          <Avatar className="margin-bt-sm" size={64} icon={<UserOutlined />} />
          <p>作者昵称</p>
          <div className="icons-list">
            <HeartOutlined className="margin-sm" />
            <HeartOutlined className="margin-sm" />
            <HeartOutlined className="margin-sm" />
          </div>
        </Col>
        <Col span={20}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus
          mollis orci, sed rhoncus pronin sapien nunc accuan eget.
        </Col>
      </Row>

      <Row className="margin-1">
        <Tag>
          <RotateRightOutlined className="margin-sm" />
          3,049
        </Tag>
        <Tag>
          <MessageOutlined className="margin-sm" />
          249
        </Tag>
        <Tag>
          <LikeOutlined className="margin-sm" />
          2,149
        </Tag>
        <Tag>
          <CrownOutlined className="margin-sm" />
          149
        </Tag>
        <Tag>
          <HeartOutlined className="margin-sm" />
          收藏
        </Tag>
      </Row>
    </Card>
  );
}
