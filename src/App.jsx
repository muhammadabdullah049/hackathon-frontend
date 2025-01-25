import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Index from "./pages/Index";
import Signin from "./pages/Sign";
import Signup from "./pages/Signup";
import User from "./pages/Dashboards/User";
import AdminDashboard from "./pages/Dashboards/AdminDashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = Cookies.get("authToken");
    const userData = Cookies.get("user");

    if (userData) {
      const parsedData = JSON.parse(userData);
      const userRole = parsedData.role;

      if (token && userRole) {
        setIsAuthenticated(true);
        setRole(userRole);
      } else {
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate
                to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
              />
            ) : (
              <Index />
            )
          }
        />
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate
                to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
              />
            ) : (
              <Signin />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate
                to={role === "admin" ? "/admin/dashboard" : "/user/dashboard"}
              />
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/user/dashboard" element={<User />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default App;
