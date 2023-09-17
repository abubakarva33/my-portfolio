import { useState } from "react";
import "./Service.css";
import { GrLinkNext } from "react-icons/gr";
import Modal from "react-modal";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Service = ({ data }) => {
  const { title, description, img, createdAt, _id } = data; 

  return (
    <div>
      <div className="cardBorder">
        <div className="eduSection service p-4">
          <img src={`/Images/${img}.webp`} alt="" className="serviceImg" />
          <div className="cardBody">
            <h3 className="pt-4 pb-3">{title}</h3>
            <p className="mb-0">
              {description.length > 180 ? `${description.slice(0, 180)}...` : description}
            </p>
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
    </div>
  );
};

export default Service;
