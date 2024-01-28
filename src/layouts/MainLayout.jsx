import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import SideHeader from "../components/shared/SideHeader/SideHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useGetProfileQuery } from "../redux/api";

const MainLayout = () => {
  const { data } = useGetProfileQuery();

  return (
    <Row className="gx-0">
      <Col xs={3} className="sideNav">
        <SideHeader />
      </Col>
      <Col xs={9} className="mainNav">
        <div>
          <Header />
          <Outlet />
        </div>
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()}. All rights reserved by{" "}
            {data?.data?.[0].name ? data?.data?.[0].name : `Abubakar Siddik`}
          </p>
        </footer>
      </Col>
    </Row>
  );
};

export default MainLayout;
