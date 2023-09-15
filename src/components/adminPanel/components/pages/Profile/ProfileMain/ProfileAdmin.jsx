import Table from "react-bootstrap/Table";
import "./ProfileAdmin.css";
import { Link, useNavigate } from "react-router-dom";
import { useGetProfileQuery } from "../../../../../../redux/api";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import ProfileTable from "../ProfileTable/ProfileTable";

const ProfileAdmin = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProfileQuery();
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
          <h4>MANAGE ADMIN PROFILE</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/profile/create">
            <button className="btn btn-primary"> Add Admin</button>
          </Link>
        </div>
        <Table hover className="serviceTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date Created</th>
              <th>Date Edited</th>
              <th style={{ width: "135px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data?.data) &&
              data?.data?.map((data, ind) => <ProfileTable key={ind} ind={ind} data={data} />)}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProfileAdmin;
