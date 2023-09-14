import { useDispatch } from "react-redux";
import "./ResumeLayout.css";
import { filterResume } from "../../../../../redux/features/worksSlice";
import { NavLink, Outlet } from "react-router-dom";

const ResumeLayout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mb-3">
        <h1 className="resumeHeaderName py-4">MANAGE RESUME</h1>
        <div className="resumeHeader w-100 ">
          <NavLink
            to="/main-admin/private-route/abubakar/dashboard/resume/skill"
            className=" w-100"
          >
            Skills
          </NavLink>
          <NavLink
            to="/main-admin/private-route/abubakar/dashboard/resume/type"
            className=" w-100"
            onClick={() => dispatch(filterResume("type=programming&type=academic"))}
          >
            Education
          </NavLink>
          <NavLink
            to="/main-admin/private-route/abubakar/dashboard/resume/type"
            className=" w-100"
            onClick={() => dispatch(filterResume("type=training&type=job"))}
          >
            Experience
          </NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  );
};

export default ResumeLayout;
