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
  Popover,
  BackTop
} from "antd";
import SearchNav from "./components/search";
import MainContent from "./components/main-content";
import TaskHeader from "./components/taskheader";
import ProfileHeader from "./components/profile-popover";
import AddNewArticle from "./components/add-article";
import MailHeader from "./components/mail-header";
import Author from "./components/author";
import AllTopTopics from "./components/all-top-topics/all-top-topics";

import Profile from "./components/profile-center/profile";
import Login from "./components/login";

import { HomeOutlined } from "@ant-design/icons";
import AllHotAuthors from "./components/all-hot-authors/all-hot-authors";
import Messagetab from "./components/message/message";
import TopicCenter from "./components/topic-center/topic-center";
import UserPage from "./components/user-page/user-page";
import Recharge from "./components/recharge/recharge";
import SignUp from "./components/signup/signup";
import ForgotPassword from "./components/forgot-password";

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
          <Route path="/all-top-topics" component={AllTopTopics} exact />
          <Route path="/login" component={Login} replace />
          <Route path="/profile" component={Profile} exact />
          <Route path="/sign-up" component={SignUp} exact />
          <Route path="/message" component={Messagetab} exact />
          <Route path="/topic-center" component={TopicCenter} exact />
          <Route path="/user" component={UserPage} exact />
          <Route path="/recharge" component={Recharge} exact />
          <Route path="/forgot-password" component={ForgotPassword} exact />
        </Content>
        <Footer className="align-center">
          Footer content goes here...
          <BackTop />
        </Footer>
      </Layout>
    </Router>
  );
}
