import React from "react";
import ReactDOM from "react-dom";
import { Card, Col, Row, Avatar, Tabs, Button, Input } from "antd";
import { UserOutlined, RobotOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";
import { FireOutlined, FileTextOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "../home";

export default function ForgotPassword() {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="margin-1 forgot-password">
      <div className="margin-t-b ">
        {" "}
        <Input
          size="large"
          placeholder="请输入登陆名"
          prefix={<UserOutlined />}
        />
      </div>
      <div className="margin-t-b ">
        {" "}
        <Input placeholder="请输入验证码" />
        <Button>发送验证码</Button>
      </div>

      <div className="margin-t-b ">
        {" "}
        <Button type="primary">立即验证</Button>
      </div>
    </Card>
  );
}
