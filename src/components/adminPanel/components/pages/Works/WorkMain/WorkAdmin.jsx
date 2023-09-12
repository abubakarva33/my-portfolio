
import Table from "react-bootstrap/Table";
import "./WorkAdmin.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { useGetWorksQuery } from "../../../../../../redux/api";
import WorkTable from "../WorksTable/WorksTable";
import { HiOutlineArrowLeft } from "react-icons/hi2";

const WorkAdmin = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate()
  const { data, isLoading } = useGetWorksQuery(page);
  if (isLoading) {
    return;
  }
  const { total, size } = data?.meta;
  const onChange = (current) => {
    setPage(current);
  };
  console.log(data);
  return (
    <div>
      <div className=" pageBox">

      <div className=" pageBoxInner px-3">
          <div>
            <HiOutlineArrowLeft className="fs-2 my-2" onClick={()=>navigate(-1)}/>
          </div>
          <h4>MANAGE RECENT WORKS</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/work/create">
            <button className="btn btn-primary"> Add Works</button>
          </Link>
        </div>
        <Table hover className="serviceTable">
          <thead>
            <tr>
              <th>No.</th>
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Date Created</th>
              <th>Date Edited</th>
              <th style={{ width: "135px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data?.data) &&
              data?.data?.map((data, ind) => <WorkTable key={ind} ind={ind} data={data} />)}
          </tbody>
        </Table>
        {console.log(total > 1, total)}
        {total > size && <Pagination defaultCurrent={1} total={total} onChange={onChange} />}
      </div>
    </div>
  );
};

export default WorkAdmin;
