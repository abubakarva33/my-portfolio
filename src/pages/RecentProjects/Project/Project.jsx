import "./Project.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineLink } from "react-icons/ai";
import moment from "moment";
import { motion } from "framer-motion";
import { nullLinkWarning } from "../../../components/utilities/utilities";

const Project = ({ data }) => {
  const {
    title,
    description,
    link,
    projectType,
    img,
    createdAt,
    _id,
  } = data;

  return (
    <div className="cardBorder ">
      <div className="eduSection service p-4">
        <motion.img
          src={`/Images/${img}.webp`}
          alt=""
          className="serviceImg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ opacity: 0, scale: 0.5 }}
        />
        <motion.div
          className="cardBody"
          initial={{ y: "100px", opacity: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ y: "100px", opacity: 0.5 }}
        >
          <div className="d-flex justify-content-between pt-3">
            <small className="fs-6">
              <BiCategory className="me-1" /> {projectType}
            </small>
            <small className="fs-6">
              <MdOutlineCreate className="me-1" />
              {moment(createdAt).format("DD/MM/YYYY")}
            </small>
          </div>
          <h3 className="pt-3 pb-2">{title}</h3>
          <p className="mb-0">
            {description.length > 180 ? `${description.slice(0, 180)}...` : description}
          </p>
        </motion.div>
        <div className="position-relative">
          <div className="btnGroup">
            <Link to={`/main/recent-works/${_id}`} className="itemLink previewBtn">
              <AiOutlineEye className="me-1" />
              Preview
            </Link>
            <p className="mt-3">
              <Link
                to={link != "null" && link}
                target={link != "null" && "_blank"}
                className="itemLink previewBtn"
                onClick={
                  link === "null" &&
                  (() =>
                    nullLinkWarning({
                      title: "Repository Access Restricted",
                      text: "Due to client confidentiality, access to the GitHub repository is not available.",
                    }))
                }
              >
                <AiOutlineLink /> Visit Site
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
