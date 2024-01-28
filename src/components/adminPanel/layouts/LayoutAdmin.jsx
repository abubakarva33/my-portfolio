import { Link, Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin";
import "./LayoutAdmin.css";
import { Col, Row } from "react-bootstrap";
import moment from "moment";
import { useState } from "react";
import { Avatar, Badge } from "antd";
import { useGetMessageQuery } from "../../../redux/api";
import { MessageOutlined } from "@ant-design/icons";

const LayoutAdmin = () => {
  const { data } = useGetMessageQuery({ page: 1, filter: "" });
  const [time, setTime] = useState(moment().format("hh:mm A"));
  setInterval(() => {
    setTime(moment().format("hh:mm A"));
  }, 1000 * 60);

  return (
    <Row md={2} xs={1} className="admin-layout g-0">
      <Col xs={12} md={2}>
        <div className="navbarAdmin">
          <div className=" pb-2 border">
            <h3 className="py-4 px-3">PORTFOLIO</h3>
          </div>
          <NavbarAdmin />
        </div>
      </Col>
      <Col xs={12} md={10}>
        <div className="layout">
          <div>
            <div className="adminHeader d-flex align-items-center justify-content-between px-3 mb-3">
              <h3>WELCOME PORTFOLIO ADMIN</h3>
              <div className="d-flex  flex-column align-items-end mt-3">
                <div>
                  <Link to="/main-admin/private-route/abubakar/dashboard/contact" className="me-3">
                    <Badge count={data?.meta?.total} >
                      <Avatar size="large" shape="square" className="bg-secondary" icon={<MessageOutlined />} />
                      {/* <Avatar shape="square" size="large" icon={<SiMessenger />} /> */}
                    </Badge>
                  </Link>
                  <Link to="/main-admin/private-route/abubakar/dashboard/profile">
                    <img src="/Images/userImg2.webp" alt="" className="img-fluid navImg" />
                  </Link>
                </div>
                <div>
                  <p>{time} | Admin Account</p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-4">
              <Outlet />
            </div>
          </div>

          <footer className="footer">
            <p> &copy; {new Date().getFullYear()}. All rights reserved by Abubakar Siddik </p>
          </footer>
        </div>
      </Col>
    </Row>
  );
};

export default LayoutAdmin;
