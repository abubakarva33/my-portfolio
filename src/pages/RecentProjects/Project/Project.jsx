import "./Project.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  AiOutlineEye,
  AiOutlineLink,
  AiOutlineDeploymentUnit,
  AiOutlineArrowRight,
  AiOutlineLike,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import Modal from "react-modal";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import moment from "moment";

const Project = ({ data }) => {
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
    <div className="cardBorder">
      <Link to={`/recent-works/${_id}`} className="text-decoration-none">
        <div className="eduSection service p-4">
          <img src={`/Images/${img}.webp`} alt="" className="serviceImg" />
          <div className="cardBody">
            <div className="d-flex justify-content-between py-4">
              <small className="fs-6">
                <BiCategory className="me-1" /> {projectType}
              </small>
              <small className="fs-6">
                <MdOutlineCreate className="me-1" />
                {moment(createdAt).format("DD/MM/YYYY")}
              </small>
            </div>
            <h3 className="pt-4 pb-3">{title}</h3>
            <p className="mb-0">
              {description.length > 180 ? `${description.slice(0, 180)}...` : description}
            </p>
          </div>
        </div>
      </Link>
      {/* <div className="position-relative">
        <div className="btnGroup">
          <Link className="mt-3 ">
            <AiOutlineEye className="me-1" />
            Preview
          </Link>
          <Link to={link} className="mt-3 ">
            <AiOutlineLink className="me-1" />
            Visit Site
          </Link>
        </div>
      </div> */}
    </div>

    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={closeModal}
    //   contentLabel="Example Modal"
    //   className={`w-75 p-4 m-auto my-5 modalMain`}
    // >
    //   <p className="crossBtn" onClick={closeModal}>
    //
    //     <RxCross1 />
    //   </p>
    //   <Row xs={1} md={2} className="">
    //     <Col>
    //       <img src={picture} alt="" className="img-fluid border rounded " />
    //     </Col>
    //     <Col>
    //       <div>
    //         <h3>{serviceName}</h3>
    //         <h6 className="my-3">{shortDescription}</h6>
    //         <div className="d-flex justify-content-between">
    //           <p>
    //
    //             <AiOutlineDeploymentUnit /> {cliant}
    //           </p>
    //           <p>
    //
    //             <AiOutlineDeploymentUnit /> {registered}
    //           </p>
    //         </div>
    //         <div className="btnGroup mt-3">
    //           <p className="mt-3 mainBtn" onClick={toggleShow}>
    //
    //             Like This <AiOutlineLike className="ms-1" />
    //           </p>
    //           <p className="mt-3 mainBtn">
    //             <Link to="/">
    //               Visit Site <AiOutlineArrowRight className="ms-1" />
    //             </Link>
    //           </p>
    //         </div>
    //       </div>
    //     </Col>
    //   </Row>
    //   <p className="d-flex align-items-center mt-4">
    //     <b>Tags:</b>
    //     <div className="d-flex flex-wrap">
    //       {tags.map((tag) => (
    //         <p key={tag.id} className="d-flex mx-2 mb-0 px-3 py-1 tags">
    //
    //           {tag}
    //         </p>
    //       ))}
    //     </div>
    //   </p>
    //   <Row xs={1} md={2} className="">
    //     <Col className="border-right">
    //       <p>
    //
    //         <b>Materials Used:</b>
    //       </p>
    //       <p>
    //         {materials.map((material) => (
    //           <p key={material.id} className=" mb-1">
    //
    //             <AiOutlineCheckSquare /> {material}
    //           </p>
    //         ))}
    //       </p>
    //     </Col>
    //     <Col>
    //       <p>
    //         <b>Key Features:</b>
    //       </p>
    //       <p>
    //         {keyFeatures.map((feature) => (
    //           <p key={feature.id} className=" mb-1">
    //
    //             <AiOutlineCheckSquare /> {feature}
    //           </p>
    //         ))}
    //       </p>
    //     </Col>
    //   </Row>
    //   <p className="">
    //
    //     <b>Description:</b> {about}
    //   </p>

    //   <ToastContainer className="p-3" position={position} style={{ zIndex: 1 }}>
    //     <Toast show={show} onClose={toggleShow} delay={3000} autohide className="toastMain">
    //       <Toast.Header className="toastt">
    //         <strong className="me-auto">Thanks!!! </strong>
    //       </Toast.Header>
    //       <Toast.Body className="toastt">Thanks for like it</Toast.Body>
    //     </Toast>
    //   </ToastContainer>
    // </Modal>
  );
};

export default Project;
