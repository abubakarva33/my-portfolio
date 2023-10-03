import "./Blog.css";
import { MdOutlineCreate } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { GrLinkNext } from "react-icons/gr";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import moment from "moment";
import { Link } from "react-router-dom";

const Blog = ({ data }) => {
  const { title, description, category, img, createdAt, _id } = data;
  return (
    <div className="cardBorder">
      <div className="eduSection service p-4">
        <img src={`/Images/${img}.webp`} alt="" className="serviceImg" />
        <div className="cardBody">
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
        </div>
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
