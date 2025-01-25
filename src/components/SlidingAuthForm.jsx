import React, { useState } from "react";
import { Form, Input, Button, message, Checkbox, Tooltip } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GithubOutlined,
  GoogleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const SlidingAuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);


  const onFinish = (values) => {
    console.log("Received values:", values);
    // Handle form submission
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="w-full max-w-5xl">
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-12 lg:p-12 relative overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
            <div className="absolute inset-0 bg-opacity-20 backdrop-filter backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="text-white mb-8">
                <h1 className="text-4xl font-bold mb-4">
                  {isLogin ? "Welcome Back!" : "Join Us Today!"}
                </h1>
                <p className="text-lg opacity-80">
                  {isLogin
                    ? "Sign in to access your account and continue your journey with us."
                    : "Create an account and start exploring our amazing features."}
                </p>
              </div>
              <div className="flex space-y-4">
                <Button
                  onClick={toggleForm}
                  className="w-auto mx-auto bg-transparent border-2 mt-18 border-white text-white hover:bg-white hover:text-purple-600 transition-all duration-300 rounded-lg text-lg font-semibold transform hover:scale-105"
                >
                  {isLogin ? "Create an Account" : "Sign In"}
                </Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-700 to-transparent"></div>
          </div>
          <div className="w-full lg:w-1/2 p-10 lg:pb-18 bg-gray-50">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                  {isLogin ? "Sign in to your account" : "Create your account"}
                </h2>
              </div>
              <div className="mt-8 relative">
                <div
                  className={`transition-all duration-500 ease-in-out transform ${
                    isLogin
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  <Form name="login" onFinish={onFinish} layout="vertical">
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined className="text-gray-400" />}
                        placeholder="Username"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input.Password
                        prefix={<LockOutlined className="text-gray-400" />}
                        placeholder="Password"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    {/* <Form.Item>
                      <div className="flex items-center justify-between">
                        <Form.Item
                          name="remember"
                          valuePropName="checked"
                          noStyle
                        >
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a
                          className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300"
                          href=""
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </Form.Item> */}
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full mt-24 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-300 rounded-lg py-3 px-4 text-white font-semibold text-lg transform hover:scale-105"
                      >
                        Sign in
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <div
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out transform ${
                    isLogin
                      ? "translate-x-full opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <Form name="register" onFinish={onFinish} layout="vertical">
                    <Form.Item
                      name="email"
                      rules={[
                        { required: true, message: "Please input your Email!" },
                        {
                          type: "email",
                          message: "Please enter a valid email!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<MailOutlined className="text-gray-400" />}
                        placeholder="Email"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined className="text-gray-400" />}
                        placeholder="Username"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                        {
                          min: 6,
                          message:
                            "Password must be at least 6 characters long!",
                        },
                      ]}
                    >
                      <Input.Password
                        prefix={<LockOutlined className="text-gray-400" />}
                        placeholder="Password"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    <Form.Item
                      name="confirm"
                      dependencies={["password"]}
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error("The two passwords do not match!")
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        prefix={<LockOutlined className="text-gray-400" />}
                        placeholder="Confirm Password"
                        className="rounded-lg py-3 px-4 bg-gray-100 focus:bg-white transition-all duration-300 border-2 border-transparent focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Tooltip title="We use industry-standard encryption to protect your data">
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <InfoCircleOutlined className="mr-1" /> Your
                          information is secure with us
                        </div>
                      </Tooltip>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full bottom-0 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition-all duration-300 rounded-lg py-3 px-4 text-white font-semibold text-lg transform hover:scale-105"
                      >
                        Sign up
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingAuthPage;
