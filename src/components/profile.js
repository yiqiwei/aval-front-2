import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  Col,
  Row,
  Avatar,
  Tabs,
  Button,
  Upload,
  message,
  Input,
  DatePicker,
  Form,
  Tooltip,
  Cascader,
  Select,
  Checkbox,
  AutoComplete
} from "antd";
import {
  FileOutlined,
  RobotOutlined,
  FileTextOutlined,
  LoadingOutlined,
  PlusOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "../index.css";
import { ThunderboltOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

class AvatarUpload extends React.Component {
  state = {
    loading: false
  };

  handleChange = info => {
    if (info.file.status === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false
        })
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    );
  }
}

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 8
    }
  },
  wrapperCol: {
    xs: {
      span: 24
    },
    sm: {
      span: 16
    }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const PersonalProfile = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const bloodtype = (
    <Form.Item name="bloodtype" noStyle>
      <Select>
        <Option value="A">A</Option>
        <Option value="B">B</Option>
        <Option value="AB">AB</Option>
        <Option value="O">O</Option>
        <Option value="other">其他</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="personalprofile"
      onFinish={onFinish}
      initialValues={{
        prefix: "86"
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="绑定邮箱"
        rules={[
          {
            type: "email",
            message: "请输入正确的邮箱"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="birthdate" label="出生日期" hasFeedback>
        <DatePicker />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="昵称"
        rules={[
          {
            required: true,
            message: "请输入昵称",
            whitespace: true
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="phone" label="绑定手机">
        <Input
          addonBefore={prefixSelector}
          style={{
            width: "100%"
          }}
        />
      </Form.Item>

      <Form.Item name="bloodtype" label="血型">
        <Select placeholder="请选择血型" allowClear>
          <Option value="A">A</Option>
          <Option value="B">B</Option>
          <Option value="AB">AB</Option>
          <Option value="O">O</Option>
          <Option value="other">其他</Option>
        </Select>
      </Form.Item>

      <Form.Item name="residence" label="所在地">
        <Input />
      </Form.Item>

      <Form.Item name={["user", "introduction"]} label="自我介绍">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name="sex" label="性别">
        <Select placeholder="请选择性别" allowClear>
          <Option value="A">男</Option>
          <Option value="B">女</Option>
          <Option value="AB">保密</Option>
        </Select>
      </Form.Item>

      <Form.Item name="permission" label="个人信息访问权限">
        <Select placeholder="请选择访问权限" allowClear>
          <Option value="A">全部可见</Option>
          <Option value="B">关注可见</Option>
          <Option value="AB">仅自己可见</Option>
        </Select>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          修改
        </Button>
      </Form.Item>
    </Form>
  );
};

const SocialProfile = () => {
  const [form] = Form.useForm();

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="personalprofile"
      onFinish={onFinish}
      initialValues={{
        prefix: "86"
      }}
      scrollToFirstError
    >
      <Form.Item name="permission" label="社交信息访问权限">
        <Select placeholder="请选择访问权限" allowClear>
          <Option value="A">全部可见</Option>
          <Option value="B">关注可见</Option>
          <Option value="AB">仅自己可见</Option>
        </Select>
      </Form.Item>

      <Form.Item name="weibo" label="微博">
        <Input addonBefore="http://www.weibo.com/u/" />

        <Button
          className="margin-t"
          type="primary"
          htmlType="submit"
          size="small"
        >
          关联
        </Button>
      </Form.Item>

      <Form.Item name="lofter" label="Lofter">
        <Input addonAfter=".loft.com" />

        <Button
          className="margin-t"
          type="primary"
          htmlType="submit"
          size="small"
        >
          关联
        </Button>
      </Form.Item>

      <Form.Item name="taobao" label="淘宝">
        <Input />

        <Button
          className="margin-t"
          type="primary"
          htmlType="submit"
          size="small"
        >
          关联
        </Button>
      </Form.Item>

      <Form.Item name="other" label="其他">
        <Input />

        <Button
          className="margin-t"
          type="primary"
          htmlType="submit"
          size="small"
        >
          关联
        </Button>
      </Form.Item>
    </Form>
  );
};

export default function Profile() {
  return (
    <Row className="mainwidth">
      <Col span={12}>
        <Card className="margin-1" title="基本信息">
          <Row>
            <Col span={4} className="gap">
              <AvatarUpload />
            </Col>
            <Col span={18}>
              <PersonalProfile />
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={12}>
        <Card title="社交信息" className="margin-1">
          <SocialProfile />
        </Card>
      </Col>
    </Row>
  );
}
