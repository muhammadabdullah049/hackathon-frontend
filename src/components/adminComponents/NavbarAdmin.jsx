// Admin/NavbarAdmin.js
import { Layout, Button } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (clear tokens, session, etc.)
    navigate("/signin");
  };

  return (
    <Header className="site-layout-background fixed w-full z-10" style={{ padding: 0 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="text-white font-bold text-2xl my-4 mx-4">
          Welcome to Admin Dashboard
        </div>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default NavbarAdmin;
