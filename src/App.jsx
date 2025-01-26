import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Index from "./pages/Index";
import Signin from "./pages/Sign";
import Signup from "./pages/Signup";
import User from "./pages/Dashboards/User";
import AdminDashboard from "./pages/Dashboards/AdminDashboard.jsx";
import LoanFormDetails from "./components/userComponents/LoanFormDetails.jsx";
import AddLoans from "./pages/AddLoans.jsx";
import SidebarAdmin from "./components/adminComponents/SidebarAdmin.jsx";

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
        <Route path={"/admin"} element={<SidebarAdmin />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="add-loans" element={<AddLoans />} />
        </Route>
        <Route path="/user/dashboard" element={<User />} />
        <Route path="/loan-form-details" element={<LoanFormDetails />} />
      </Routes>
    </>
  );
}

export default App;
