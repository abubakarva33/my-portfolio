import "./Project.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineLink } from 'react-icons/ai';

const Project = ({ registered, mainTag, serviceName, picture }) => {
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
                    <Link to="/" className="mt-3 mainBtn"> <AiOutlineEye className="me-1"/>Preview</Link>
                    <Link to="/" className="mt-3 mainBtn"> <AiOutlineLink className="me-1"/>Visit Site</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;