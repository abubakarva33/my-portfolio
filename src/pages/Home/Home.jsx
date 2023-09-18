import { Link } from "react-router-dom";
import "./Home.css";
import Typed from "react-typed";
import { useGetProfileQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  const { data, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return <Spinner />;
  }

  const { name, email, description } = data?.data[0];
  return (
    <div>
      <div className="home p-5">
        <h6>WELCOME TO MY WORLD</h6>
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
        <p className="fs-5">{description}</p>
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
    </div>
  );
};

export default Home;
