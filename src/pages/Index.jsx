import { Layout } from "antd";
import Header from "./userLayout/Header";
import Hero from "./userLayout/userComponents/Hero";
import Features from "./userLayout/userComponents/Features";
import Footer from "./userLayout/Footer";

const { Content } = Layout;

const Index = () => {
  return (
    <Layout className="min-h-screen">
      <Header />
      <Content>
        <Hero />
        <Features />
      </Content>
      <Footer />
    </Layout>
  );
};

export default Index;
