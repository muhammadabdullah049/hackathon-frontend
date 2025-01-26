// Admin/SidebarAdmin.js
import { Layout, Menu } from "antd";
import { FaHome, FaChartBar, FaUserAlt, FaCog } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";
import { Content } from "antd/es/layout/layout";

const { Sider } = Layout;

const SidebarAdmin = () => {
  return (
    <Layout>
      <Sider
        width={250}
        className="site-layout-background"
        style={{
          overflow: "hidden", // Prevents scrolling
          height: "100vh", // Ensures the height matches the viewport
          position: "fixed", // Keeps the sidebar fixed on the screen
          left: 0, // Aligns it to the left
          top: 0, // Aligns it to the top
          bottom: 0, // Ensures it spans the entire height
        }}
      >
        <div
          className="logo"
          style={{
            padding: 20,
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Admin Dashboard
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<FaHome />}>
            <Link to="/admin/dashboard">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FaChartBar />}>
            <Link to="/admin/add-loans">Add Loans</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FaUserAlt />}>
            <Link to="/admin/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FaCog />}>
            <Link to="/admin/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 250 }}>
        {/* Adjust content to account for fixed sidebar */}
        <NavbarAdmin />
        <Content style={{ minHeight: 280, overflowY: "auto", padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarAdmin;
