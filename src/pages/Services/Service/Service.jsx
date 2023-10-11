import { useState } from "react";
import "./Service.css";
import { GrLinkNext } from "react-icons/gr";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Service = ({ data }) => {
  const { title, description, img, createdAt, _id } = data;

  return (
    <div className="cardBorder">
      <div className="eduSection service p-4">
        <div>
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
            <h3 className="pt-4 pb-3">{title}</h3>
            <p className="mb-0">
              {description.length > 180 ? `${description.slice(0, 180)}...` : description}
            </p>
          </motion.div>
        </div>
        <div className="position-relative">
          <div className="btnGroup">
            <Link to={`/services/${_id}`}>
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

export default Service;
