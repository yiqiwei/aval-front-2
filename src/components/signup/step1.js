import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, InputNumber, Button, Card, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!"
  },
  number: {
    range: "${label} must be between ${min} and ${max}"
  }
};

const SignupForm = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "mobile"]}
        label="手机号码"
        rules={[
          {
            type: "number",
            required: true
          }
        ]}
      >
        <Input placeholder="请输入13位手机号码" />
      </Form.Item>
      <Form.Item
        name={["user", "imageverify"]}
        label="图片验证码"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input placeholder="请输入图片中的数字" />
      </Form.Item>
      <Form.Item
        name={["user", "messageverify"]}
        label="短信验证码"
        rules={[
          {
            type: "number",
            required: true
          }
        ]}
      >
        <Input placeholder="请输入短信验证码" />
        <Button type="primary">获取验证码</Button>
      </Form.Item>
      <Form.Item
        name={["user", "password"]}
        label="密码"
        rules={[
          {
            type: "password",
            required: true
          }
        ]}
      >
        <Input placeholder="请输入6-16位密码" />
      </Form.Item>

      <Form.Item name={["user", "agreement"]}>
        <Checkbox>
          勾选表示我已同意 <a href="">平台合作协议</a>
        </Checkbox>
      </Form.Item>
    </Form>
  );
};

export default function Step1() {
  return (
    <Card title="注册账号">
      <SignupForm />
    </Card>
  );
}
