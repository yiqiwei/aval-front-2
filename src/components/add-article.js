import React from "react";
import ReactDOM from "react-dom";
import { Button, Dropdown, Menu } from "antd";
import {
  FileImageOutlined,
  FileOutlined,
  EditOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";

export default function AddNewArticle() {
  const menuarticle = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          <FileImageOutlined /> 图片投稿
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          <FileOutlined /> 文章投稿
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menuarticle} placement="bottomLeft">
      <Button type="primary" size="small">
        {" "}
        <EditOutlined />
        投稿
      </Button>
    </Dropdown>
  );
}
