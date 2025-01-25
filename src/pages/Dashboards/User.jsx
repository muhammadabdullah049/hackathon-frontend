import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Card, Col, Layout, Row } from "antd";
import SidebarUser from "../../components/userComponents/SidebarUser";
import NavbarUser from "../../components/userComponents/NavbarUser";
import { FaChartBar, FaUserAlt } from "react-icons/fa";
import ChartUser from "../../components/userComponents/ChartUser.jsx";

const { Content } = Layout;

const User = () => {
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
      <SidebarUser />
      <Layout className="site-layout">
        <NavbarUser />
        <Content style={{ padding: "0 50px", marginTop: 20 }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <div style={{ fontSize: 30, textAlign: "center" }}>
                    <FaChartBar />
                  </div>
                }
              >
                <Card.Meta title="My Analytics" description="432" />
              </Card>
            </Col>
            <Col span={12}>
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <div style={{ fontSize: 30, textAlign: "center" }}>
                    <FaUserAlt />
                  </div>
                }
              >
                <Card.Meta title="My Profile" description="Complete" />
              </Card>
            </Col>
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Col span={24}>
              <ChartUser />
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default User;
