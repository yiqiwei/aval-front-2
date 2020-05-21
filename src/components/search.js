import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import "../index.css";

export default function SearchNav() {
  const { Search } = Input;

  return (
    <Search
      style={{ width: 400 }}
      placeholder="此处可根据热度显示推荐搜索内容"
    />
  );
}
