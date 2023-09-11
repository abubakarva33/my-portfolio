import { Col, Row } from "react-bootstrap";
import { BiMessageDots } from "react-icons/bi";
import { MdImportantDevices } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const ContactAdmin = () => {
  return (
    <div>
      <div className=" pageBoxInner">
        <div>
          <h4>MANAGE RECENT WORKS</h4>
          <p>All Recent-Works</p>
        </div>
      </div>
      <Row>
        <Col xs={12} md={2}>
          <Link to="/main-admin/private-route/abubakar/dashboard/contact/all-message">
            <h6>
              <BiMessageDots /> All Message
            </h6>
          </Link>
          <Link to="/main-admin/private-route/abubakar/dashboard/contact/important-message">
            <h6>
              <MdImportantDevices /> Important
            </h6>
          </Link>
        </Col>
        <Col xs={12} md={10}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default ContactAdmin;
