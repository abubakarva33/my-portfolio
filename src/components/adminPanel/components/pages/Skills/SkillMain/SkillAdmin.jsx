import Table from "react-bootstrap/Table";
import "./SkillAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { useGetSkillQuery } from "../../../../../../redux/api";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import SkillTable from "../SkillTable/SkillTable";

const SkillAdmin = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetSkillQuery();
  if (isLoading) {
    return;
  }
  return (
    <div>
      <div className=" pageBox">
        <div className=" pageBoxInner px-3">
          <div>
            <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
          </div>
          <h4>MANAGE SKILLS</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/resume/skill/create">
            <button className="btn btn-primary"> Add Skill</button>
          </Link>
        </div>
        <Table hover className="serviceTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date Created</th>
              <th>Date Edited</th>
              <th style={{ width: "135px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data?.data) &&
              data?.data?.map((data, ind) => <SkillTable key={ind} ind={ind} data={data} />)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SkillAdmin;
