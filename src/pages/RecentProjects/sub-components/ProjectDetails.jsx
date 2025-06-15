import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAWorkQuery } from "../../../redux/api";
import { Col, Row } from "react-bootstrap";
import { AiOutlineCheckSquare, AiOutlineDeploymentUnit } from "react-icons/ai";
import moment from "moment";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { ImShare } from "react-icons/im";
import { MdOutlineRefresh } from "react-icons/md";
import ReactPlayer from "react-player";
import Spinner from "../../../components/Utilities/Spinner/Spinner";
import { Skeleton } from "antd";
import { useState } from "react";

const ProjectDetails = () => {
  const { workId } = useParams();
  const { data, isLoading } = useGetAWorkQuery(workId);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }
  const {
    title,
    description,
    shortDescription,
    link,
    gitLink,
    projectType,
    tags,
    materialUsed,
    keyFeatures,
    img,
    video,
    createdAt,
  } = data;

  return (
    <div className="mx-3 mb-4">
      <div className="sectionHeader px-2 mb-3 mt-3 justify-content-between">
        <div className="cursor-pointer">
          <HiOutlineArrowLeft className="fs-2" onClick={() => navigate(-1)} />
        </div>
        <h4>PROJECT DETAILS</h4>
        <div className="cursor-pointer">
          <MdOutlineRefresh className="fs-2" onClick={() => location.reload()} />
        </div>
      </div>

      <div className="serviceTable py-1">
        <Row xs={1} md={2}>
          <Col>
            {video ? (
              <>
                {loading && <Skeleton.Image active className="!h-full !w-full" />}
                <ReactPlayer
                  url={video}
                  width="100%"
                  height="100%"
                  loop={true}
                  playing={true}
                  muted={true}
                  controls={true}
                  onReady={() => setLoading(false)}
                  style={{ display: loading ? "none" : "block" }}
                />
              </>
            ) : (
              <img src={img} alt="" style={{ width: "100%", height: "100%" }} className="rounded" />
            )}
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
                {gitLink && (
                  <p className="mt-3">
                    <Link to={gitLink} className="itemLink previewBtn" target="_blank">
                      <ImShare /> Github Preview
                    </Link>
                  </p>
                )}
                <p className="mt-3">
                  <Link to={link} className="itemLink previewBtn" target="_blank">
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
