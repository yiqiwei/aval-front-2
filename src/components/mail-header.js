import React from "react";
import ReactDOM from "react-dom";
import { Button, Dropdown, Menu, Badge } from "antd";
import {
  FileImageOutlined,
  FileOutlined,
  EditOutlined,
  LikeOutlined,
  StarOutlined,
  MailOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";

export default function MailHeader() {
  const menumail = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          <FileImageOutlined /> 推荐 <Badge count={5} />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          <FileOutlined /> 评论 <Badge count={6} />
        </a>
      </Menu.Item>

      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          <LikeOutlined /> 点赞 <Badge count={2} />
        </a>
      </Menu.Item>

      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          <StarOutlined /> 超赞 <Badge count={3} />
        </a>
      </Menu.Item>

      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          <MailOutlined /> 私信 <Badge count={3} />
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Badge dot>
      <Dropdown overlay={menumail} placement="bottomLeft">
        <MailOutlined />
      </Dropdown>
    </Badge>
  );
}
