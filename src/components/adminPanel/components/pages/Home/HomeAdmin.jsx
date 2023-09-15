import { Col, Row } from "react-bootstrap";
import "./HomeAdmin.css";
import {
  useGetBlogsQuery,
  useGetMessageQuery,
  useGetServicesQuery,
  useGetWorksQuery,
} from "../../../../../redux/api";
import { Button } from "antd";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdDesignServices, MdOutlineLocalPostOffice } from "react-icons/md";
import { BsSignpost2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeAdmin = () => {
  const works = useGetWorksQuery(1);
  const blogs = useGetBlogsQuery(1);
  const services = useGetServicesQuery(1);
  const messages = useGetMessageQuery({ page: 1, filter: "" });

  if (works?.isFetching && blogs.isLoading) {
    return "Loading";
  }
  const totalWorks = works?.data?.meta?.total;
  const totalBlogs = blogs?.data?.meta?.total;
  const totalServices = services?.data?.meta?.total;
  const totalMessages = messages?.data?.meta?.total;

  return (
    <div>
      <h1 className="resumeHeaderName py-4">MY DASHBOARD</h1>
      <Row className="gy-4">
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                <AiOutlineAntDesign className="fs-1 text-danger me-1" /> Total Projects
              </h4>
              <Link to="/main-admin/private-route/abubakar/dashboard/work/create">
                <Button> Add Project</Button>
              </Link>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-danger">{totalWorks}+ </span> Project Completed
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                <BsSignpost2 className="fs-1 text-primary me-1" /> Total Blogs
              </h4>
              <Link to="/main-admin/private-route/abubakar/dashboard/blog/create">
                <Button> Add Blog</Button>
              </Link>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-primary">{totalBlogs}+ </span> Blogs Published
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                <MdOutlineLocalPostOffice className="fs-1 text-warning me-1" /> Available Messages
              </h4>
              <Link to="/main-admin/private-route/abubakar/dashboard/contact/all-message">
                <Button> Check Messages</Button>
              </Link>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-warning">{totalMessages}+ </span> Messages
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="dashboardTotal p-4">
            <div className="d-flex justify-content-between">
              <h4>
                <MdDesignServices className="fs-1 text-danger me-1" /> Available Services
              </h4>
              <Link to="/main-admin/private-route/abubakar/dashboard/services/create">
                <Button> Add Service</Button>
              </Link>
            </div>
            <p className="d-flex align-items-center">
              <span className="fs-1 me-2 text-danger">{totalServices}+ </span> Service Providing
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeAdmin;
