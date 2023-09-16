import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import SideHeader from "../components/shared/SideHeader/SideHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetProfileQuery } from "../redux/api";

const MainLayout = () => {
  const { data, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return;
  }
  const { name } = data?.data[0];
  return (
    <Row className="gx-0">
      <Col xs={3} className="sideNav">
        <SideHeader />
      </Col>
      <Col xs={9} className="mainNav">
        <Header />
        <div className="mainNavView ">
          <div>
            <Outlet />
          </div>
          <footer className="footer">
            <p>
              &copy; {new Date().getFullYear()}. All rights reserved by {name}
            </p>
          </footer>
        </div>
      </Col>
    </Row>
  );
};

export default MainLayout;
