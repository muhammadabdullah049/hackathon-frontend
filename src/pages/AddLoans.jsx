import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  notification,
  Card,
  Typography,
} from "antd";
import {
  DollarCircleOutlined,
  PercentageOutlined,
  CalendarOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

const AddLoans = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    // Simulate API call or logic to save the loan
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: "Loan Added Successfully",
        description: `Loan Details: Title: ${values.title}, Amount: ${values.amount}, Interest: ${values.interest}, Term: ${values.term} months`,
      });
      form.resetFields(); // Reset form after successful submission
    }, 2000);
  };

  return (
    <div
      style={{
        padding: "50px 20px",
        background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "800px",
          borderRadius: "16px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
        hoverable
      >
        <Title
          level={2}
          style={{ textAlign: "center", fontWeight: "600", color: "#00796b" }}
        >
          Add a New Loan
        </Title>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            amount: "",
            interest: "",
            term: "",
            title: "",
            description: "",
            maxAmount: "",
            maxPeriod: "",
          }}
        >
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Loan Title"
                name="title"
                rules={[
                  { required: true, message: "Please input the loan title!" },
                ]}
              >
                <Input
                  prefix={<FileTextOutlined />}
                  placeholder="Enter loan title"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Description"
                name="description"
                rules={[
                  {
                    required: true,
                    message: "Please provide a description for the loan!",
                  },
                ]}
              >
                <Input.TextArea
                  prefix={<InfoCircleOutlined />}
                  placeholder="Enter loan description"
                  rows={4}
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col>

            {/* <Col span={24} md={8}>
              <Form.Item
                label="Loan Amount"
                name="amount"
                rules={[
                  { required: true, message: "Please input the loan amount!" },
                ]}
              >
                <Input
                  prefix={<DollarCircleOutlined />}
                  type="number"
                  placeholder="Enter loan amount"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col>

            <Col span={24} md={8}>
              <Form.Item
                label="Interest Rate (%)"
                name="interest"
                rules={[
                  {
                    required: true,
                    message: "Please input the interest rate!",
                  },
                ]}
              >
                <Input
                  prefix={<PercentageOutlined />}
                  type="number"
                  placeholder="Enter interest rate"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col> */}

            {/* <Col span={24} md={8}>
              <Form.Item
                label="Term (Months)"
                name="term"
                rules={[
                  { required: true, message: "Please input the loan term!" },
                ]}
              >
                <Input
                  prefix={<CalendarOutlined />}
                  type="number"
                  placeholder="Enter loan term"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col> */}

            <Col span={24} md={8}>
              <Form.Item
                label="Maximum Loan Amount"
                name="maxAmount"
                rules={[
                  {
                    required: true,
                    message: "Please input the maximum loan amount!",
                  },
                ]}
              >
                <Input
                  prefix={<DollarCircleOutlined />}
                  type="number"
                  placeholder="Enter maximum loan amount"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col>

            <Col span={24} md={8}>
              <Form.Item
                label="Maximum Loan Term (Months)"
                name="maxPeriod"
                rules={[
                  {
                    required: true,
                    message: "Please input the maximum loan term!",
                  },
                ]}
              >
                <Input
                  prefix={<CalendarOutlined />}
                  type="number"
                  placeholder="Enter maximum loan term"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    padding: "12px",
                    transition: "all 0.3s",
                  }}
                  onFocus={(e) => (e.target.style.border = "1px solid #00796b")}
                  onBlur={(e) => (e.target.style.border = "1px solid #ccc")}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  loading={loading}
                  style={{
                    borderRadius: "8px",
                    fontSize: "16px",
                    padding: "14px",
                    backgroundColor: "#00796b",
                    borderColor: "#00796b",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#004d40")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#00796b")
                  }
                >
                  Add Loan
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
};

export default AddLoans;
