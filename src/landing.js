import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Row, Col, Card } from "antd";
import Login from "./components/login";

export default function Landing() {
  return (
    <body className="login-background">
      <Login />
    </body>
  );
}
