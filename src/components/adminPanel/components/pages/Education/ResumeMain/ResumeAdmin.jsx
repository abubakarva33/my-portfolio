import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import "./ResumeAdmin.css";
import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useGetResumeQuery } from "../../../../../../redux/api";
import ResumeTable from "../ResumeTable/ResumeTable";
import { Table } from "react-bootstrap";

const ResumeAdmin = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetResumeQuery();
  if (isLoading) {
    return;
  }
  return (
    <div>
      <div className="mb-3">
        <h1 className="resumeHeaderName py-4">MANAGE RESUME</h1>
        <div className="resumeHeader w-100 ">
          <NavLink to="/resume/skills" className=" w-100">
            Skills
          </NavLink>
          <NavLink to="/main-admin/private-route/abubakar/dashboard/resume" className=" w-100">
            Education
          </NavLink>
          <NavLink to="/resume/experience" className=" w-100">
            Experience
          </NavLink>
        </div>
      </div>
      <div className=" pageBox">
        <div className=" pageBoxInner px-3">
          <div>
            <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
          </div>
          <h4>MANAGE BLOGS</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/resume/create">
            <button className="btn btn-primary"> Add Blog</button>
          </Link>
        </div>
        <Table hover className="serviceTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date Created</th>
              <th>Date Edited</th>
              <th style={{ width: "135px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data?.data) &&
              data?.data?.map((data, ind) => <ResumeTable key={ind} ind={ind} data={data} />)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ResumeAdmin;
