import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import { useGetAWorkQuery } from "../../../redux/api";
import Spinner from "../../../components/adminPanel/components/Spinner/Spinner";
import { Col, Row } from "react-bootstrap";
import { AiOutlineArrowRight, AiOutlineCheckSquare, AiOutlineDeploymentUnit, AiOutlineLike } from "react-icons/ai";
import moment from "moment";

const ProjectDetails = () => {
  const { workId } = useParams();
  const { data, isLoading } = useGetAWorkQuery(workId);
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }
  const {
    title,
    description,
    shortDescription,
    link,
    projectType,
    tags,
    materialUsed,
    keyFeatures,
    img,
    createdAt,
    _id,
  } = data;
  return (
    <div>
      <Row xs={1} md={2} className="">
        <Col>
          <img src={`/Images/${img}.webp`} alt="" className="img-fluid border rounded " />
        </Col>
        <Col>
          <div>
            <h3>{title}</h3>
            <h6 className="my-3">{shortDescription}</h6>
            <div className="d-flex justify-content-between">
              <p>
                <AiOutlineDeploymentUnit /> {projectType}
              </p>
              <p>
                <AiOutlineDeploymentUnit /> {moment(createdAt).format("DD/MM/YYYY")}
              </p>
            </div>
            <div className="btnGroup mt-3">
              <p className="mt-3 mainBtn">
                Like This <AiOutlineLike className="ms-1" />
              </p>
              <p className="mt-3 mainBtn">
                <Link to={link}>
                  Visit Site <AiOutlineArrowRight className="ms-1" />
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <p className="d-flex align-items-center mt-4">
        <b>Tags:</b>
        <div className="d-flex flex-wrap">
          {tags.map((tag) => (
            <p key={tag.id} className="d-flex mx-2 mb-0 px-3 py-1 tags">
              {tag}
            </p>
          ))}
        </div>
      </p>
      <Row xs={1} md={2} className="">
        <Col className="border-right">
          <p>
            <b>Materials Used:</b>
          </p>
          <p>
            {materialUsed.map((material) => (
              <p key={material.id} className=" mb-1">
                <AiOutlineCheckSquare /> {material}
              </p>
            ))}
          </p>
        </Col>
        <Col>
          <p>
            <b>Key Features:</b>
          </p>
          <p>
            {keyFeatures.map((feature) => (
              <p key={feature.id} className=" mb-1">
                <AiOutlineCheckSquare /> {feature}
              </p>
            ))}
          </p>
        </Col>
      </Row>
      <p className="">
        <b>Description:</b> {description}
      </p>

      {/* <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
        <Toast show={show} onClose={toggleShow} delay={3000} autohide className="toastMain">
          <Toast.Header className="toastt">
            <strong className="me-auto">Thanks!!! </strong>
          </Toast.Header>
          <Toast.Body className="toastt">Thanks for like it</Toast.Body>
        </Toast>
      </ToastContainer> */}
    </div>
  );
};

export default ProjectDetails;
