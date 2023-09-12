import { Col, Row } from "react-bootstrap";
import { BiMessageDots } from "react-icons/bi";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { MdImportantDevices } from "react-icons/md";
import { Link,NavLink, Outlet, useNavigate } from "react-router-dom";

const ContactAdmin = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className=" pageBoxInner px-2">
          <div>
            <HiOutlineArrowLeft className="fs-2 my-2" onClick={()=>navigate(-1)}/>
          </div>
          <h4>MANAGE MESSAGES</h4>
            <button className="btn btn-primary" onClick={()=>location. reload()}> Reload</button>
        </div>
      <Row className="serviceTable mx-1 g-0" >
        <Col xs={12} md={2} className="short-message">
          <NavLink to="/main-admin/private-route/abubakar/dashboard/contact/all-message" className="text-decoration-none w-100">
            <h6 className="py-3 w-100 fs-5 ps-2">
              <BiMessageDots /> All Message
            </h6>
          </NavLink>
          <NavLink to="/main-admin/private-route/abubakar/dashboard/contact/important-message" className="text-decoration-none">
            <h6 className="py-3 w-100 fs-5 ps-2">
              <MdImportantDevices /> Important
            </h6>
          </NavLink>
        </Col>

        <Col xs={12} md={10}>
          <Outlet />
        </Col>
      </Row>
    </div>
  );
};

export default ContactAdmin;
