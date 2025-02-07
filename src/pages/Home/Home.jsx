import { Link } from "react-router-dom";
import "./Home.css";
import { useGetProfileQuery } from "../../redux/api";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";
import NeomorphicWord from "../../components/utilities/utilities";

const Home = () => {
  const { data } = useGetProfileQuery();
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
              display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              gap: "5px",
            }}
          >
            {"WELCOME  TO  MY  WORLD".split("").map((letter, index) => (
              <NeomorphicWord
                key={index}
                word={letter}
                styleProps={{
                  textColor: "#ffffff",
                }}
              />
            ))}
          </div> */}
          <div className="homeHeading">
            <div
              style={{
                display: "flex",
                gap: "5px",
              }}
            >
              {"Hi, I’m".split("").map((letter, index) => (
                <NeomorphicWord
                  key={index}
                  word={letter}
                  styleProps={{
                    textColor: "#ffffff",
                  }}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: "5px",
              }}
            >
              {name?.toUpperCase().split("").map((letter, index) => (
                <NeomorphicWord
                  key={index}
                  word={letter}
                  styleProps={{
                    // textColor: "#ffffff",
                  }}
                />
              ))}
            </div>
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
