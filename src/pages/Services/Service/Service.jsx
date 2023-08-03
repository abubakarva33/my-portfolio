import "./Service.css";
import { GrLinkNext } from "react-icons/gr";

const Service = ({ serviceName, picture ,about}) => {
    return (
        <div className="eduSection service p-4">
            <img src={picture} alt="" className="img-fluid border rounded " />

            <h3 className="pt-4 pb-3">{serviceName}</h3>
            <p>{(about.length) > 180 ? `${(about).slice(0, 180)}...` : about}</p>
            <p className="fs-4"><GrLinkNext/></p>
        </div>
    );
};

export default Service;