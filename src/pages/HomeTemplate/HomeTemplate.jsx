import { Link } from "react-router-dom";
import "./HomeTemplate.css";
import { AiOutlineDownload } from "react-icons/ai";


const HomeTemplate = ({ data, handleDownload }) => {
  const { name, description } = data?.data[0] || {};

  return (
    <div className="homeContainer mb-3">
      <div className="home p-3 p-md-5">
        <h6 className="welcome">WELCOME TO MY WORLD</h6>
        <div className="homeHeading">
          <p>
            Hi, I’m <span className="homeHeadingSpan">{name?.toUpperCase()}</span>
          </p>
          <div className="d-flex">
            <p className="homeHeadingSpan pe-3">a</p>
            
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/main/contacts" className="mainBtn btnWidth mt-4 me-4">
            <span className="mainBtnSpan">Contact Me</span>
          </Link>
          <button className="mainBtn btnWidth mt-4" onClick={handleDownload}>
            <span className="mainBtnSpan">
              <AiOutlineDownload /> Resume
            </span>
          </button>
        </div>
      </div>
      <div className="designationContainer">
        <div className="designationInnerContainer">
          <h4 className="designationItem1">Web Developer</h4>
          <h4 className="designationItem2">Web Designer</h4>
          <h4 className="designationItem3">Front-End Developer</h4>
          <h4 className="designationItem4">Developer</h4>
          <div className="designationCircle"></div>
        </div>
        <div className="overlay"></div>
        {/* <img src="/Images/shape4.png" alt="" className="homeImg"/> */}
      </div>
    </div>
  );
};

export default HomeTemplate;
