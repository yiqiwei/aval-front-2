import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import "antd/dist/antd.css";
import "./index.css";
import {
  Col,
  Row,
  Avatar,
  Button,
  Divider,
  Layout,
  Menu,
  Badge,
  Dropdown,
  Popover
} from "antd";
import SearchNav from "./components/search";
import MainContent from "./components/main-content";
import TaskHeader from "./components/taskheader";
import ProfileHeader from "./components/profile-popover";
import AddNewArticle from "./components/add-article";
import MailHeader from "./components/mail-header";
import Author from "./components/author";

import { HomeOutlined } from "@ant-design/icons";
import AllHotAuthors from "./components/all-hot-authors";

const { Header, Footer, Content } = Layout;

export default function Home() {
  return (
    <Router>
      <Layout>
        <Header>
          <div className="mainwidth margin-1">
            <span className="logo">LOGO</span>
            <span className="margin-l logo">
              <Link to="/" replace>
                {" "}
                <HomeOutlined />{" "}
              </Link>
            </span>{" "}
            <span className="gap">
              <SearchNav />
            </span>
            <Menu className="align-right" theme="dark" mode="horizontal">
              <ProfileHeader />
              <span className="gap">
                <TaskHeader />
              </span>

              <MailHeader />
              <span className="gap">
                {" "}
                <AddNewArticle />{" "}
              </span>
            </Menu>
          </div>
        </Header>
        <Content>
          <Route path="/" component={MainContent} exact />
          <Route path="/all-hot-authors" component={AllHotAuthors} exact />
        </Content>
        <Footer className="align-center">Footer content goes here...</Footer>
      </Layout>
    </Router>
  );
}
