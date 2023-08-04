import "./Project.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineLink, AiOutlineDeploymentUnit, AiOutlineArrowRight, AiOutlineLike, AiOutlineCheckSquare } from 'react-icons/ai';
import Modal from 'react-modal';
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Project = ({ registered, mainTag, serviceName, picture, tags, about, shortDescription, cliant, keyFeatures, materials }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState('middle-center');


    const toggleShow = () => setShow(!show);

    const openModal = () => {
        setIsOpen(true)
    }
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <div className="eduSection p-4">
            <img src={picture} alt="" className="img-fluid border rounded " />
            <div className="d-flex justify-content-between py-4">
                <small className="fs-6"><BiCategory className="me-1" /> {mainTag}</small>
                <small className="fs-6"><MdOutlineCreate className="me-1" />{registered}</small>
            </div>
            <h3>{serviceName}</h3>
            <div className="">
                <div className='btnGroup mt-4'>
                    <Link className="mt-3 mainBtn" onClick={openModal}> <AiOutlineEye className="me-1" />Preview</Link>
                    <Link to="/" className="mt-3 mainBtn"> <AiOutlineLink className="me-1" />Visit Site</Link>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={`w-75 p-4 m-auto bg-primary my-5 modalMain`}
            >
                <Row xs={1} md={2} className="">
                    <Col>
                        <img src={picture} alt="" className="img-fluid border rounded " />
                    </Col>
                    <Col>
                        <div>
                            <h3>{serviceName}</h3>
                            <h6 className="my-3">{shortDescription}</h6>
                            <div className="d-flex justify-content-between">
                                <p> <AiOutlineDeploymentUnit /> {cliant}</p>
                                <p> <AiOutlineDeploymentUnit /> {registered}</p>
                            </div>
                            <div className='btnGroup mt-3'>
                                <p className="mt-3 mainBtn" onClick={toggleShow}> Like This <AiOutlineLike className="ms-1" /></p>
                                <Link to="/" className="mt-3 mainBtn">Visit Site <AiOutlineArrowRight className="ms-1" /></Link>
                            </div>
                        </div>
                    </Col>
                </Row >
                <p className="d-flex align-items-center mt-4">
                    <b>Tags:</b>
                    {tags.map((tag) => (
                        <p key={tag.id} className="d-flex mx-2 mb-0 px-3 py-1 border rounded"> {tag} </p>
                    ))}
                </p>
                <Row xs={1} md={2} className="mx-5">
                    <Col className="border-right">
                        <p> <b>Materials Used:</b></p>
                        <p>
                            {materials.map((material) => (
                                <p key={material.id} className=" mb-1"> <AiOutlineCheckSquare /> {material} </p>
                            ))}
                        </p>
                    </Col>
                    <Col>
                        <p><b>Key Features:</b></p>
                        <p>
                            {keyFeatures.map((feature) => (
                                <p key={feature.id} className=" mb-1"> <AiOutlineCheckSquare /> {feature} </p>
                            ))}
                        </p>
                    </Col>
                </Row>
                <p className=""> <b>Description:</b> {about}</p>

                <ToastContainer
                    className="p-3"
                    position={position}
                    style={{ zIndex: 1 }}
                >
                    <Toast show={show} onClose={toggleShow} delay={3000} autohide>
                        <Toast.Header>
                            <strong className="me-auto">Thanks!!! </strong>
                        </Toast.Header>
                        <Toast.Body>Thanks for like it</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Modal>
        </div >
    );
};

export default Project;