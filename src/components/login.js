import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox, Card, Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Loginform = () => {
  const onFinish = values => {
    console.log("Success:", values);
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="手机号码"
        name="mobile"
        rules={[
          {
            required: true,
            message: "请输入手机号"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="登陆密码"
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码"
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>记住密码</Checkbox>
      </Form.Item>
      <Router>
        <Form.Item>
          <Link to="/" replace>
            <Button type="primary" htmlType="submit" block>
              登陆
            </Button>
          </Link>
          <Link to="/sign-up">
            {" "}
            <Button className="margin-t" block>
              注册
            </Button>
          </Link>
        </Form.Item>
      </Router>
    </Form>
  );
};

export default function Login() {
  return (
    <div className="login-card">
      <Row>
        <Col span={15} className="login-panel-bg" />
        <Col span={9} className="padding-1">
          <Loginform />
        </Col>
      </Row>
    </div>
  );
}
