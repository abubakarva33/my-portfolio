import "./Blog.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";

const Blog = ({ registered, mainTag, serviceName, picture ,about}) => {
    return (
        <div className="eduSection blog p-4">
            <img src={picture} alt="" className="img-fluid border rounded " />
            <div className="d-flex justify-content-between py-4">
                <small className="fs-6"><BiCategory className="me-1" /> {mainTag}</small>
                <small className="fs-6"><MdOutlineCreate className="me-1" />{registered}</small>
            </div>
            <h3>{serviceName}</h3>
            <p>{(about.length) > 180? `${(about).slice(0,180)}...` : about }</p>
            <p className="fs-4"><GrLinkNext/></p>
        </div>
    );
};

export default Blog;