import "./EducationSection.css";
import { ImLocation2 } from "react-icons/im";
import { MdOutlineSchool } from "react-icons/md";

const EducationSection = ({ data }) => {
  const { title, details, endYear, startYear, institute, location } = data;
  return (
    <div className="eduSection p-4 my-2 ">
      <div>
        <h3>{title}</h3>
        <p className="mb-0">
          <ImLocation2 /> {location}
        </p>
        <div className="d-flex border-bottom pb-4 flex-wrap">
          <small className="fs-6">
            <MdOutlineSchool /> {`${institute} | ${startYear}-${endYear}`}
          </small>
        </div>
      </div>
      <p className="pt-4">{details.length > 225 ? `${details.slice(0, 225)}...` : details}</p>
    </div>
  );
};

export default EducationSection;
