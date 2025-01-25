// Navbar.js (Shared between Admin and User)
import { Layout, Button } from "antd";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const Navbar = ({ role }) => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic (clear tokens, session, etc.)
    history.push("/signin");
  };

  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, backgroundColor: "white" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: "bold" }}>
          {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
        </div>
        <Button type="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
