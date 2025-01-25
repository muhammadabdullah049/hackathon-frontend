import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Card, Col, Layout, Row, Typography } from "antd";
import SidebarAdmin from "../../components/adminComponents/SidebarAdmin";
import NavbarAdmin from "../../components/adminComponents/NavbarAdmin";
import { FaChartBar, FaUserAlt, FaUsers } from "react-icons/fa";
import ChartAdmin from "../../components/adminComponents/ChartAdmin";

const { Content } = Layout;
const { Title, Text } = Typography;

const AdminDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = Cookies.get("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarAdmin />
      <Layout className="site-layout">
        <NavbarAdmin />
        <Content style={{ padding: "20px 50px", marginTop: 20 }}>
          <Title level={2}>Admin Dashboard</Title>
          <Row gutter={16}>
            {/* Card for Users */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  borderRadius: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  background: "#f0f4f8",
                }}
                cover={
                  <div
                    style={{
                      fontSize: 30,
                      textAlign: "center",
                      color: "#4c6ef5",
                    }}
                  >
                    <FaUserAlt />
                  </div>
                }
              >
                <Card.Meta title="Total Users" description="1234" />
              </Card>
            </Col>
            {/* Card for Analytics */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  borderRadius: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  background: "#f0f4f8",
                }}
                cover={
                  <div
                    style={{
                      fontSize: 30,
                      textAlign: "center",
                      color: "#4c6ef5",
                    }}
                  >
                    <FaChartBar />
                  </div>
                }
              >
                <Card.Meta title="Analytics Overview" description="789" />
              </Card>
            </Col>
            {/* Card for Reports */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  borderRadius: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  background: "#f0f4f8",
                }}
                cover={
                  <div
                    style={{
                      fontSize: 30,
                      textAlign: "center",
                      color: "#4c6ef5",
                    }}
                  >
                    <FaUsers />
                  </div>
                }
              >
                <Card.Meta title="Active Reports" description="3" />
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 20 }}>
            <Col span={24}>
              <Card
                title="User Growth Analytics"
                bordered={false}
                style={{
                  borderRadius: 10,
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <ChartAdmin />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
