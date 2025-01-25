// User/SidebarUser.js
import { Layout, Menu } from "antd";
import { FaHome, FaChartBar, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SidebarUser = () => {
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
        User Dashboard
      </div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<FaHome />}>
          <Link to="/user/dashboard">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FaChartBar />}>
          <Link to="/user/analytics">My Analytics</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<FaUserAlt />}>
          <Link to="/user/profile">My Profile</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SidebarUser;
