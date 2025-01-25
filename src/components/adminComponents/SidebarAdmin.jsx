// Admin/SidebarAdmin.js
import { Layout, Menu } from "antd";
import { FaHome, FaChartBar, FaUserAlt, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarAdmin = () => {
  return (
    <Sider width={250} className="site-layout-background">
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
          <Link to="/admin/analytics">Analytics</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FaUserAlt />}>
          <Link to="/admin/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<FaCog />}>
          <Link to="/admin/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarAdmin;
