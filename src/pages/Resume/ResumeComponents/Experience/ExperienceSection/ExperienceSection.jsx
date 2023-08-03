import "./ExperienceSection.css";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineSchool } from "react-icons/md";

const ExperienceSection = ({ details, institute, title, range, location }) => {
    return (
        <div>
            <div className="eduSection p-4 my-4">
            <div>
                <h3>{title}</h3>
                <p className="mb-0"><ImLocation2 /> {location}</p>
                <div className="d-flex border-bottom pb-4">
                    <small className="fs-6"> <MdOutlineSchool/> {institute}</small>
                    <small className="fs-6 ps-1">{`( ${range})`}</small>
                </div>
            </div>
            <p className="pt-4">{(details.length) > 180? `${(details).slice(0,180)}...` : details }</p>
        </div>
        </div>
    );
};

export default ExperienceSection;