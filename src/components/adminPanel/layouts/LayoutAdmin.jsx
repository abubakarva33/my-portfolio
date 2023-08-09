import { Outlet } from "react-router-dom";
import NavbarAdmin from "../components/NavbarAdmin/NavbarAdmin";
import './LayoutAdmin.css';
import { Col, Row } from "react-bootstrap";

const LayoutAdmin = () => {
    return (
        <Row md={2} xs={1} className="admin-layout g-0">
            <Col xs={12} md={3}>
                <div className="navbarAdmin">
                    <h1>Welcome Admin</h1>
                    <NavbarAdmin />
                </div>
            </Col>
            <Col xs={12} md={9}>
                <div className="mx-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <h3>WELCOME PORTFOLIO ADMIN</h3>
                        <div className="d-flex  flex-column align-items-end mt-3">
                            <img src='/Images/userImg2.webp' alt="" className="img-fluid navImg" />
                            <div>
                                <p>{`${new Date().getHours()} : ${new Date().getMinutes()} | ${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()} | Admin Account`}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default LayoutAdmin;