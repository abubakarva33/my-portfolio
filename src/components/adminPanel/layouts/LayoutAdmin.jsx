import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin";
import "./LayoutAdmin.css";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import { useState } from "react";

const LayoutAdmin = () => {
  const [time, setTime] = useState(moment().format("hh:mm A"));
  setInterval(() => {
    setTime(moment().format("hh:mm A"));
  }, 1000 * 60);

  return (
    <Row md={2} xs={1} className="admin-layout g-0">
      <Col xs={12} md={3}>
        <div className="navbarAdmin">
          <h1>Welcome Admin</h1>
          <NavbarAdmin />
        </div>
      </Col>
      <Col xs={12} md={9}>
        <div className="outlett">
          <div className="adminHeader d-flex align-items-center justify-content-between px-3 mb-3">
            <h3>WELCOME PORTFOLIO ADMIN</h3>
            <div className="d-flex  flex-column align-items-end mt-3">
              <img src="/Images/userImg2.webp" alt="" className="img-fluid navImg" />
              <div>
                <p>{time} | Admin Account</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mx-5 mb-4">
              <Outlet />
            </div>
            <footer className="footer">
              <p> &copy; {new Date().getFullYear()}. All rights reserved by Abubakar Siddik </p>
            </footer>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LayoutAdmin;
