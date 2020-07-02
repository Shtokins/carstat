import React, { useState, useContext } from "react";
import { Layout, Menu } from "antd";
import { MainChartBlock } from "../MainChartBlock";
import { UIContext } from "../../context/ui/UIContext";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

export const RootApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { setUI, uiName } = useContext(UIContext);

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "#f2f2f2" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="logo">Logo</div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[uiName]}
          onClick={setUI}
        >
          <Menu.Item key="antd" icon={<UserOutlined />}>
            Antd
          </Menu.Item>
          <Menu.Item key="semantic" icon={<VideoCameraOutlined />}>
            Semantic
          </Menu.Item>
          <Menu.Item key="material" icon={<UploadOutlined />}>
            Material
          </Menu.Item>
          <Menu.Item key="atlassian" icon={<UploadOutlined />}>
            Atlassian
          </Menu.Item>
        </Menu>
      </Sider>
      <div className="dashboard container">
        <MainChartBlock />
      </div>
    </Layout>
  );
};
