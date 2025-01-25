// DashboardCard.js (Shared between Admin and User)
import { Card } from "antd";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<div style={{ fontSize: 30, textAlign: "center" }}>{icon}</div>}
    >
      <Card.Meta title={title} description={value} />
    </Card>
  );
};

export default DashboardCard;
