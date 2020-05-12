import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Col, Row } from "antd";
import SearchNav from "./search";

function onChange(a, b, c) {
  console.log(a, b, c);
}

export default function Topnav() {
  return (
    <Row>
      <Col space={8}>LOGO</Col>
      <Col space={8}>
        <SearchNav />;
      </Col>
      <Col space={8} />
    </Row>
  );
}
