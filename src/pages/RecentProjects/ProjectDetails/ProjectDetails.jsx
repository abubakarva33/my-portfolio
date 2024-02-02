import { Link, useNavigate, useParams } from "react-router-dom";
import "./ProjectDetails.css";
import { useGetAWorkQuery } from "../../../redux/api";
import Spinner from "../../../components/adminPanel/components/Spinner/Spinner";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCheckSquare, AiOutlineDeploymentUnit } from "react-icons/ai";
import moment from "moment";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { ImShare } from "react-icons/im";
import { MdOutlineRefresh } from "react-icons/md";

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
  } = data;

  return (
    <div className="mx-2 mb-4">
      <div className=" serviceBox px-2 mb-3">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2 ms-2" onClick={() => navigate(-1)} />
        </div>
        <h4>PROJECT DETAILS</h4>
        <div>
          <MdOutlineRefresh className="fs-2 my-2 me-2" onClick={() => location.reload()} />
        </div>
      </div>

      <div className="serviceTable p-3">
        <Row xs={1} md={2}>
          <Col>
            <img src={`/Images/${img}.webp`} alt="" className="serviceEachImg rounded " />
          </Col>
          <Col>
            <div className="mt-2">
              <h3>{title}</h3>
              <p className="my-3">{shortDescription}</p>
              <div className="d-flex justify-content-between">
                <p>
                  <AiOutlineDeploymentUnit /> {projectType}
                </p>
                <p>
                  <AiOutlineDeploymentUnit /> {moment(createdAt).format("DD/MM/YYYY")}
                </p>
              </div>
              <div className="btnGroup">
                <p className="mt-3">
                  <Link
                    to="https://github.com/abubakarva33/mess-metrics"
                    className="itemLink previewBtn"
                  >
                    <ImShare /> Github Preview
                  </Link>
                </p>
                <p className="mt-3">
                  <Link to={link} className="itemLink previewBtn">
                    <ImShare /> Live Preview
                  </Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <p className="d-flex mt-4">
          <b>Tags:</b>
          <div className="tagMenu">
            {tags.map((tag, ind) => (
              <p key={ind} className="d-flex mx-2 px-3 py-1 tags">
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
              {materialUsed.map((material, ind) => (
                <p key={ind} className=" mb-1">
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
              {keyFeatures.map((feature, ind) => (
                <p key={ind} className=" mb-1">
                  <AiOutlineCheckSquare /> {feature}
                </p>
              ))}
            </p>
          </Col>
        </Row>
        <p className="">
          <b>Description:</b> {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails;
