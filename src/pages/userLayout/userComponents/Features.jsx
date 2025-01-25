import { Card, Row, Col } from "antd";
import { RocketOutlined, BulbOutlined, TeamOutlined } from "@ant-design/icons";

const featureData = [
  {
    icon: <RocketOutlined className="text-4xl text-blue-500" />,
    title: "Lightning Fast",
    description:
      "Experience unparalleled speed and efficiency with our optimized platform.",
  },
  {
    icon: <BulbOutlined className="text-4xl text-yellow-500" />,
    title: "Innovative Solutions",
    description:
      "Stay ahead of the curve with our cutting-edge features and technologies.",
  },
  {
    icon: <TeamOutlined className="text-4xl text-green-500" />,
    title: "Collaborative Environment",
    description:
      "Work seamlessly with your team and boost productivity like never before.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <Row gutter={[32, 32]}>
          {featureData.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;
