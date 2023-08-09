import './TableProject.css';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import { useState } from 'react';
import Modal from 'react-modal';
import { RxCross1 } from "react-icons/rx";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineLink, AiOutlineDeploymentUnit, AiOutlineArrowRight, AiOutlineLike, AiOutlineCheckSquare } from 'react-icons/ai';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const TableProject = ({ ind, registered, mainTag, serviceName, picture, tags, about, shortDescription, cliant, keyFeatures, materials }) => {
    const [isOpenModalOne, setIsOpenModalOne] = useState(false);
    const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);
    const [show, setShow] = useState(false);
    const [position, setPosition] = useState('middle-center');
    const toggleShow = () => setShow(!show);
    const openModalOne = () => setIsOpenModalOne(true);
    const openModalTwo = () => setIsOpenModalTwo(true);
    const closeModalOne = () => setIsOpenModalOne(false);
    const closeModalTwo = () => setIsOpenModalTwo(false);

    const [title,setTitle]=useState();
    const [semiDescription,setSemiDescription]=useState();
    const [description,setDescription]=useState();
    const [client,setClient]=useState();
    const [registeredDate,setRegisteredDate]=useState();
    const [liveLink,setLiveLink]=useState();
    const [projectTag,setProjectTag]=useState();
    const [mainFeatures,setMainFeatures]=useState();
    
    console.log(title,semiDescription,description,client,registeredDate,liveLink,projectTag,mainFeatures);
    const submitHandelar=(e)=>{
        e.preventDefault()
        const form= e.target;
        setTitle(form.title.value);
        setSemiDescription(form.semiDescription.value);
        setDescription(form.description.value);
        setClient(form.client.value);
        setRegisteredDate(form.registeredDate.value);
        setLiveLink(form.liveLink.value);
        setProjectTag(form.projectTag.value);
        setMainFeatures(form.mainFeatures.value);
    }

    return (

        <tr>
            <td>{ind + 1}</td>
            <td className='colspan-2'>{serviceName}</td>
            <td>{mainTag}</td>
            <td>{registered}</td>
            <td>--</td>
            <td className='d-flex' style={{ width: '135px' }}>
                <h6 className='p-2 me-2 border rounded text-light bg-primary tableActionIcon' ><AiOutlineEye onClick={openModalOne} /></h6>
                <h6 className='p-2 me-2 border rounded text-light bg-success tableActionIcon' onClick={openModalTwo} ><AiOutlineEdit /></h6>
                <h6 className='p-2 me-2 border rounded text-light bg-secondary tableActionIcon'><AiOutlineDelete /></h6>
            </td>

            <Modal
                isOpen={isOpenModalOne}
                onRequestClose={closeModalOne}
                contentLabel="Example Modal"
                className={`w-75 p-4 m-auto my-5 modalMain`}
            >
                <p className="crossBtn" onClick={closeModalOne}> <RxCross1 /> </p>
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
                                <p className="mt-3 mainBtn"><Link to="/">Visit Site <AiOutlineArrowRight className="ms-1" /></Link></p>
                            </div>
                        </div>
                    </Col>
                </Row >
                <p className="d-flex align-items-center mt-4">
                    <b>Tags:</b>
                    <div className="d-flex flex-wrap">
                        {tags.map((tag) => (
                            <p key={tag.id} className="d-flex mx-2 mb-0 px-3 py-1 tags"> {tag} </p>
                        ))}
                    </div>
                </p>
                <Row xs={1} md={2} className="">
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
                    <Toast show={show} onClose={toggleShow} delay={3000} autohide className="toastMain">
                        <Toast.Header className="toastt">
                            <strong className="me-auto">Thanks!!! </strong>
                        </Toast.Header>
                        <Toast.Body className="toastt">Thanks for like it</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Modal>

            <Modal
                isOpen={isOpenModalTwo}
                onRequestClose={closeModalTwo}
                contentLabel="Example Modal"
                className={`w-75 p-4 m-auto my-5 modalMain`}
            >
                <p className="crossBtn" onClick={closeModalTwo}> <RxCross1 /> </p>
                <form className='d-flex flex-column' onSubmit={submitHandelar}>
                    <input type="text" name="title" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Title' />
                    <input type="text" name="semiDescription" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Short Description' />
                    <textarea name="description" id="" cols="30"className='mb-3 border-0 py-2 px-3 rounded'  rows="10" placeholder='Enter Full Description' ></textarea>
                    <input type="text" name="client" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Client Name' />
                    <input type="text" name="registeredDate" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Project Registered  Date' />
                    <input type="text" name="liveLink" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Project Live Link' />
                    <input type="text" name="projectTag" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Project Tag' />
                    <input type="text" name="mainFeatures" id="" className='mb-3 border-0 py-2 px-3 rounded' placeholder='Enter Key Features' />
                    <div>
                        <button>Cancel </button>
                        <button>Save Changes </button>
                    </div>
                </form>
            </Modal>
        </tr>



    );
};

export default TableProject;