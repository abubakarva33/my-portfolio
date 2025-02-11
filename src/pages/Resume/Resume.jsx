import "./Resume.css";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "../../components/Utilities/SectionHeader";

const Resume = () => {
  return (
    <motion.div
      className="mx-3 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <SectionHeader title={"MY RESUME"} />
      <div className="mb-3">
        <div className="resumeHeader w-100">
          <NavLink to="/main/resume/skills" className=" w-100">
            Skills
          </NavLink>
          <NavLink to="/main/resume/educations" className=" w-100">
            Education
          </NavLink>
          <NavLink to="/main/resume/experience" className=" w-100">
            Experience
          </NavLink>
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
};

export default Resume;
