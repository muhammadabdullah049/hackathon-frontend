import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  Select,
  Space,
  Divider,
  Steps,
  Tooltip,
  Modal,
  Progress,
} from "antd";
import {
  UserOutlined,
  MailOutlined,
  IdcardOutlined,
  CalendarOutlined,
  SafetyOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const primaryColor = "#0064AD";
const secondaryColor = "#8CC73A";

const LoanFormDetails = () => {
  const location = useLocation();
  const { loanAmount, loanTerm, initialAmount, details, emi } =
    location.state || {};
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formProgress, setFormProgress] = useState(0);
  const [countdown, setCountdown] = useState(180); // 3 minutes = 180 seconds
  const [submittedValues, setSubmittedValues] = useState(null);
  const [password, setPassword] = useState(""); // New state for password
  const [countdownFinished, setCountdownFinished] = useState(false); // State to track countdown finish
  //   const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const handleFinalSubmit = (values) => {
    setSubmittedValues(values); // Save the form data
    setIsModalVisible(true);
    startCountdown(); // Start countdown when the form is submitted
  };
  const isPasswordFilled = password.trim() !== "";
  const startCountdown = () => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(interval); // Stop countdown when it reaches 0
          setCountdownFinished(true); // Mark countdown as finished
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);
  };

  const yearsOptions = [1, 2, 3, 4, 5].map((year) => ({
    label: `${year} Year${year > 1 ? "s" : ""}`,
    value: year,
  }));

  const updateFormProgress = () => {
    const fieldsCompleted = form.getFieldsValue();
    const totalFields = Object.keys(fieldsCompleted).length;
    const completedFields =
      Object.values(fieldsCompleted).filter(Boolean).length;
    setFormProgress(Math.round((completedFields / totalFields) * 100));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Card
          className="shadow-2xl rounded-3xl overflow-hidden"
          bodyStyle={{ padding: 0 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-500 p-8 sm:p-12 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)" }}
            ></div>
            <Title
              level={2}
              className="text-white text-center m-0 font-extrabold relative z-10"
            >
              Complete Your Loan Application
            </Title>
            <Text className="text-white text-center block mt-4 relative z-10">
              You're just a few steps away from your loan approval
            </Text>
            <Progress
              percent={formProgress}
              status="active"
              strokeColor={{
                "0%": primaryColor,
                "100%": secondaryColor,
              }}
              className="mt-6 relative z-10"
            />
          </div>
          <div className="p-8 sm:p-12">
            <Steps
              current={1}
              className="custom-steps mb-12"
              style={{
                "--primary-color": primaryColor,
                "--secondary-color": secondaryColor,
              }}
            >
              <Step title="Loan Selection" />
              <Step title="Personal Details" />
              <Step title="Review & Submit" />
            </Steps>
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinalSubmit}
              onValuesChange={updateFormProgress}
              initialValues={{}}
              className="loan-form"
            >
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="CNIC"
                    name="cnic"
                    rules={[
                      { required: true, message: "Please enter your CNIC" },
                    ]}
                  >
                    <Input
                      prefix={<IdcardOutlined className="text-gray-400" />}
                      placeholder="Enter your CNIC"
                      className="rounded-lg h-12"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Full Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input
                      prefix={<UserOutlined className="text-gray-400" />}
                      placeholder="Enter your full name"
                      className="rounded-lg h-12"
                    />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input
                      prefix={<MailOutlined className="text-gray-400" />}
                      placeholder="Enter your email address"
                      className="rounded-lg h-12"
                    />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={12}>
                  <Form.Item
                    label="Loan Term"
                    name="loanTerm"
                    rules={[
                      { required: true, message: "Please select loan term" },
                    ]}
                  >
                    <Select
                      placeholder="Select loan term"
                      className="rounded-lg h-12"
                      suffixIcon={
                        <CalendarOutlined className="text-gray-400" />
                      }
                    >
                      {yearsOptions.map((option) => (
                        <Select.Option key={option.value} value={option.value}>
                          {option.label}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col> */}
              </Row>

              <Divider className="my-12" />

              <Card
                title={
                  <span
                    className="text-xl font-semibold flex items-center"
                    style={{ color: primaryColor }}
                  >
                    <SafetyOutlined className="mr-2" /> Loan Details Review
                  </span>
                }
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                extra={
                  <Tooltip title="Please review your loan details carefully before submitting">
                    <InfoCircleOutlined style={{ color: primaryColor }} />
                  </Tooltip>
                }
              >
                <Space direction="vertical" size="middle" className="w-full">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <Text strong className="text-lg">
                      Monthly Installment:
                    </Text>
                    <Text
                      className="text-lg font-medium"
                      style={{ color: secondaryColor }}
                    >
                      Rs{":"} {emi}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <Text strong className="text-lg">
                      Loan Amount:
                    </Text>
                    <Text
                      className="text-lg font-medium"
                      style={{ color: secondaryColor }}
                    >
                      {loanAmount}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <Text strong className="text-lg">
                      Loan Term:
                    </Text>
                    <Text
                      className="text-lg font-medium"
                      style={{ color: secondaryColor }}
                    >
                      {loanTerm} Years
                    </Text>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <Text strong className="text-lg">
                      Initial Amount:
                    </Text>
                    <Text
                      className="text-lg font-medium"
                      style={{ color: secondaryColor }}
                    >
                      {initialAmount}
                    </Text>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                    <Text strong className="text-lg">
                      Details:
                    </Text>
                    <Text
                      className="text-lg font-medium"
                      style={{ color: secondaryColor }}
                    >
                      {details}
                    </Text>
                  </div>
                </Space>
              </Card>

              <Form.Item className="mt-12">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  icon={<LockOutlined />}
                  className="w-full h-14 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                    border: "none",
                  }}
                >
                  Submit Application
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Card>
      </div>

      <Modal
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="custom-modal"
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
            <CheckCircleOutlined
              style={{ color: secondaryColor, fontSize: "2rem" }}
            />
          </div>
          <Title level={3} className="mb-4">
            Application Submitted Successfully!
          </Title>
          <Paragraph>Thank you for submitting your loan application.</Paragraph>
          <Text className="text-lg">
            Your application is being processed. We will send you your password
            soon.
          </Text>

          <Form layout="vertical" className="mt-6">
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-lg"
              />
            </Form.Item>
          </Form>
          <div className="text-xl font-bold text-red-500 mt-4 inline-flex items-center">
            <span>{formatTime(countdown)}</span>
            {countdownFinished && (
              <Button
                type="link"
                className="ml-4 text-blue-600"
                onClick={() => console.log("Resend password request")}
              >
                Resend password?
              </Button>
            )}
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button
              type="primary"
              onClick={() => setIsModalVisible(false)}
              className="w-full mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                border: "none",
              }}
            >
              Close
            </Button>
            <Button
              type="primary"
              onClick={() => {
                // Handle the "Proceed to Done" logic
                console.log("Proceeding to Done...");
                setIsModalVisible(false); // Optionally close the modal after proceeding
              }}
              className="w-full mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                border: "none",
              }}
              disabled={!isPasswordFilled}
            >
              Proceed to Done
            </Button>
          </div>
        </div>
      </Modal>

      <style jsx>{`
        .custom-steps .ant-steps-item-process .ant-steps-item-icon {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
        }
        .custom-steps .ant-steps-item-finish .ant-steps-item-icon {
          background-color: var(--secondary-color);
          border-color: var(--secondary-color);
        }
        .custom-steps .ant-steps-item-finish .ant-steps-item-tail::after {
          background-color: var(--secondary-color);
        }
        .loan-form .ant-form-item-label > label {
          font-weight: 600;
          color: #4a5568;
        }
        .loan-form .ant-input-affix-wrapper:hover,
        .loan-form .ant-input-affix-wrapper:focus,
        .loan-form .ant-select:hover .ant-select-selector,
        .loan-form .ant-select-focused .ant-select-selector {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(0, 100, 173, 0.1);
        }
        .custom-modal .ant-modal-content {
          border-radius: 1rem;
          overflow: hidden;
        }
        .custom-modal .ant-modal-body {
          padding: 32px;
        }
      `}</style>
    </div>
  );
};

export default LoanFormDetails;
