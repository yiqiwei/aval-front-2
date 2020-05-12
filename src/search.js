import React from "react";
import ReactDOM from "react-dom";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./index.css";

export default function SearchNav() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff"
      }}
    />
  );

  return (
    <div className="padding-1">
      <Search
        placeholder="请输入搜索内容"
        onSearch={value => console.log(value)}
        enterButton
      />
    </div>
  );
}
