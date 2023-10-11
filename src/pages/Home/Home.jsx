import { Link } from "react-router-dom";
import "./Home.css";
import Typed from "react-typed";
import { useGetProfileQuery } from "../../redux/api";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Home = () => {
  const { data, isLoading } = useGetProfileQuery();
  const { name, email, description } = data?.data[0];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay:0.25 , duration: 0.5 ,ease: "easeOut"}}
      exit={{ opacity: 0 }}
    >
      <div className="home p-3 p-md-5">
        <h6 className="welcome">WELCOME TO MY WORLD</h6>
        <div className="homeHeading">
          <p>
            Hi, I’m <span className="homeHeadingSpan">{name.toUpperCase()}</span>
          </p>
          <div className="d-flex">
            <p className="homeHeadingSpan pe-3">a</p>
            <Typed
              strings={["Developer", "FrontEnd Developer", "Designer"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/contacts" className="mainBtn btnWidth mt-4 me-4">
            <span className="mainBtnSpan">Contact Me</span>
          </Link>
          <Link to="/contacts" className="mainBtn btnWidth mt-4">
            <span className="mainBtnSpan">
              {" "}
              <AiOutlineDownload /> Resume
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
