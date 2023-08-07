import "./Blog.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import Modal from 'react-modal';
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Blog = ({ registered, mainTag, serviceName, picture, about }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="eduSection blog p-4">
            <img src={picture} alt="" className="img-fluid border rounded " />
            <div className="cardBody">
                <div className="d-flex justify-content-between py-4">
                    <small className="fs-6"><BiCategory className="me-1" /> {mainTag}</small>
                    <small className="fs-6"><MdOutlineCreate className="me-1" />{registered}</small>
                </div>
                <h3>{serviceName}</h3>
                <p className="mb-0">{(about.length) > 180 ? `${(about).slice(0, 180)}...` : about}</p>
            </div>
            <div className="position-relative">
                <div className="btnGroup">
                    <p className="fs-4" onClick={openModal}><GrLinkNext /></p>
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={`w-75 p-4 m-auto my-5 modalMain`}
            >
                <p className="crossBtn" onClick={closeModal}> <RxCross1 /> </p>
                <div className="service p-3">
                    <img src={picture} alt="" className="img-fluid border rounded " />
                    <div className="d-flex justify-content-between py-4">
                        <small className="fs-6"><BiCategory className="me-1" /> {mainTag}</small>
                        <small className="fs-6"><MdOutlineCreate className="me-1" />{registered}</small>
                    </div>
                    <h3 className="pt-4 pb-3">{serviceName}</h3>
                    <p>{about}</p>
                </div>
            </Modal>
        </div>
    );
};

export default Blog;