import "./Blog.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blog = ({ data }) => {
  const { title, description, category, img, createdAt, _id } = data;
  return (
    <div className="cardBorder">
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
          <div className="d-flex justify-content-between py-4">
            <small className="fs-6">
              <BiCategory className="me-1" /> {category?.name}
            </small>
            <small className="fs-6">
              <MdOutlineCreate className="me-1" />
              {moment(createdAt).format("DD/MM/YYYY")}
            </small>
          </div>
          <h3>{title}</h3>
          <p className="mb-0">
            {description.length > 180 ? `${description.slice(0, 180)}...` : description}
          </p>
        </motion.div>
        <div className="position-relative">
          <div className="btnGroup">
            <Link to={`/blogs/${_id}`}>
              <p className="fs-4">
                <GrLinkNext />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
