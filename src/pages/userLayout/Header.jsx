import { Image, Menu } from "antd";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600">
            <span>
              <Image
                src="https://res.cloudinary.com/dd2alel5h/image/upload/v1737360953/logo_saylaniwelfare.22bf709605809177256c_fm7fvu.png"
                height={50}
              />
            </span>
          </div>
          <Menu mode="horizontal" className="border-0">
            <Link to={"/signup"}>
              <Menu.Item key="signup">Signup</Menu.Item>
            </Link>
            <Link to={"/signin"}>
              <Menu.Item key="signin">Signin</Menu.Item>
            </Link>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
