import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu } from "antd";
import {
  CrownOutlined,
  HeartOutlined,
  PushpinOutlined,
  TransactionOutlined,
  RocketOutlined
} from "@ant-design/icons";

export default function Sidemenu() {
  const { SubMenu } = Menu;

  function handleClick(e) {
    console.log("click", e);
  }

  return (
    <Menu onClick={handleClick} mode="vertical">
      <SubMenu key="sub1" icon={<CrownOutlined />} title="推荐">
        <Menu.ItemGroup>
          <Menu.Item icon={<RocketOutlined />} key="1">
            按时间排序
          </Menu.Item>
          <Menu.Item icon={<RocketOutlined />} key="2">
            按热度排序
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<HeartOutlined />} title="关注">
        <Menu.ItemGroup>
          <Menu.Item icon={<RocketOutlined />} key="1">
            按时间排序
          </Menu.Item>
          <Menu.Item icon={<RocketOutlined />} key="2">
            按热度排序
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub3" icon={<PushpinOutlined />} title="订阅">
        <Menu.ItemGroup>
          <Menu.Item icon={<RocketOutlined />} key="1">
            按时间排序
          </Menu.Item>
          <Menu.Item icon={<RocketOutlined />} key="2">
            按热度排序
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub4" icon={<TransactionOutlined />} title="积分商城">
        <Menu.ItemGroup>
          <Menu.Item icon={<RocketOutlined />} key="1">
            按时间排序
          </Menu.Item>
          <Menu.Item icon={<RocketOutlined />} key="2">
            按热度排序
          </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}
