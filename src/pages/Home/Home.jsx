import { Link } from "react-router-dom";
import "./Home.css";
import {
  useGetProfileQuery,
  useGetResumeQuery,
  useGetServicesQuery,
  useGetSkillQuery,
  useGetWorksQuery,
} from "../../redux/api";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import ThreeDText from "../../components/utilities/utilities";
import Spinner from "../../components/Utilities/Spinner/Spinner";

const Home = () => {
  const { data, isLoading, isSuccess: profileSuccess } = useGetProfileQuery();
  const { isSuccess: workSuccess } = useGetWorksQuery(undefined, {
    skip: !profileSuccess,
  });
  const { isSuccess: serviceSuccess } = useGetServicesQuery(undefined, {
    skip: !workSuccess,
  });
  useGetSkillQuery("design", { skip: !serviceSuccess });
  useGetSkillQuery("development", { skip: !serviceSuccess });
  useGetResumeQuery("training", { skip: !serviceSuccess });
  useGetResumeQuery("job", { skip: !serviceSuccess });
  useGetResumeQuery("academic", { skip: !serviceSuccess });
  useGetResumeQuery("programming", { skip: !serviceSuccess });

  if (isLoading) {
    return <Spinner />;
  }

  const { name, description } = data?.data[0] || {};
  const handleDownload = () => {
    try {
      const publicFilePath = "/Resume.pdf";
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = publicFilePath;
      a.download = "Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      /* empty */
    }
  };
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
        exit={{ opacity: 0 }}
      >
        <div className="home p-3 p-md-5">
          {/* <div
            style={{
              // backgroundColor: "#212428",
              height: "100px",
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              gap: "10px",
            }}
          >
            {"Hi, I’m".split("").map((letter, index) => (
              <ThreeDText
                key={index}
                word={letter}
                styleProps={{
                  textColor: "#ffffff",
                  fontSize: "35px",
                  fontWeight: "900",
                  depth: 15,
                  perspective: 600,
                  rotateX: 15,
                  rotateY: -15,
                  shadowColor: "#000000aa",
                }}
              />
            ))}
            {`${name?.toUpperCase()}`.split("").map((letter, index) => (
              <ThreeDText
                key={index}
                word={letter}
                styleProps={{
                  textColor: "var(--color-primary)",
                  fontSize: "35px",
                  fontWeight: "900",
                  fontFamily: "jungleFont",
                  depth: 15,
                  perspective: 600,
                  rotateX: 15,
                  rotateY: -15,
                  shadowColor: "#000000aa",
                }}
              />
            ))}
          </div> */}
          <h6 className="welcome">WELCOME TO MY WORLD</h6>
          <div className="homeHeading">
            <p>
              Hi, I’m <span className="homeHeadingSpan">{name?.toUpperCase()}</span>
            </p>
            <div className="d-flex">
              <p className="homeHeadingSpan pe-3">a FrontEnd Developer</p>
              {/* <Typed
                strings={["Developer", "FrontEnd Developer", "Designer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              /> */}
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
      </motion.div>
      {/* <HomeTemplate data={data} handleDownload={handleDownload} /> */}
    </div>
  );
};

export default Home;
