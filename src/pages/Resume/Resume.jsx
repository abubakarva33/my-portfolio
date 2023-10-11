import "./Resume.css";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="mx-1 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="mb-3 mx-1">
        <h2 className="resumeHeaderName py-3">MY RESUME</h2>
        <div className="resumeHeader w-100">
          <NavLink to="/resume/skills" className=" w-100">
            {" "}
            Skills{" "}
          </NavLink>
          <NavLink to="/resume/educations" className=" w-100">
            {" "}
            Education{" "}
          </NavLink>
          <NavLink to="/resume/experience" className=" w-100">
            {" "}
            Experience{" "}
          </NavLink>
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
};

export default Resume;
