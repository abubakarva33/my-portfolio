import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import moment from "moment";
import { motion } from "framer-motion";

const Project = ({ data }) => {
  const { title, description, link, projectType, img, createdAt, _id } = data;

  return (
    <div className="h-100">
      <div className="cardContainer">
        <motion.img
          src={img}
          loading="lazy"
          maxHeight="350px"
          alt={title}
          className="cardImg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ opacity: 0, scale: 0.5 }}
        />
        <motion.div
          initial={{ y: "100px", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ y: "100px", opacity: 0.5 }}
        >
          <div className="cardDetailsContainer">
            <div className="d-flex justify-content-between pt-3">
              <small className="cardSmallText">
                <BiCategory className="me-1" /> {projectType}
              </small>
              <small className="cardSmallText">
                <MdOutlineCreate className="me-1" />
                {moment(createdAt).format("DD/MM/YYYY")}
              </small>
            </div>
            <p className="cardTitle">{title}</p>
            <p className="cardDetails">{description}</p>
          </div>
          <div
            className="d-flex items-center justify-content-between"
            style={{ borderTop: "5px var(--color-bg-primary) groove", padding: 0 }}
          >
            <Link to={`/main/recent-works/${_id}`} className="navlinkA p-0 w-100 text-center">
              PREVIEW
            </Link>
            <div style={{ borderRight: "5px var(--color-bg-primary) groove" }}></div>
            <Link to={link} target="_blank" className="navlinkA p-0 w-100 text-center">
              VISIT
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
