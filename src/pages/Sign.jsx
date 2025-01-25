import { useState } from "react";
import axios from "axios";
import { AppRoutes } from "../constant/constant";
import { notification } from "antd";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      notification.error({
        message: "Form Incomplete",
        description: "Please fill in both email and password.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(AppRoutes.login, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.status) {
        notification.success({
          message: "Login Successful",
          description: response.data.message || "Welcome back!",
        });

        Cookies.set("authToken", response.data.data.token, { expires: 7 });
        const { password, ...userData } = response.data.data.user;
        Cookies.set("user", JSON.stringify(userData), { expires: 7 });

        if (userData.role === "user") {
          navigate("/dashboard/user");
        } else if (userData.role === "admin") {
          navigate("/admin/dashboard");
        }
      } else {
        notification.error({
          message: "Login Failed",
          description:
            response.data.message || "Incorrect credentials, please try again.",
        });
      }
    } catch (error) {
      notification.error({
        message: "Login Failed",
        description:
          error.response?.data?.message ||
          "An error occurred while logging in.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      >
        <div className="text-center">
          {/* <img
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
            className="mx-auto h-12 w-auto"
          /> */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <button
              type="submit"
              className={`w-full rounded-md bg-indigo-600 px-4 py-2 text-lg font-medium text-white shadow-md transition ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-500"
              }`}
              disabled={loading}
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </motion.div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don{"'"}t have an account?{" "}
          <Link
            to={"/signup"}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signin;
