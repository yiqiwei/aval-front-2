import React from "react";
import Login from "./login";
import ReactDOM from "react-dom";
import "./index.css";
import { Row, Col, Card } from "antd";

export default function Landing() {
  return (
    <body className="login-background">
      <Row>
        <Col span={24}>
          <Card className="login-card" bordered={false}>
            <h1 className="align-center">LOGO</h1>
            <Login />
          </Card>
        </Col>
      </Row>
    </body>
  );
}
