
import Table from "react-bootstrap/Table";
import "./WorkAdmin.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { useGetWorksQuery } from "../../../../../../redux/api";
import WorkTable from "../WorksTable/WorksTable";

const WorkAdmin = () => {
  const [page, setPage] = useState(1);
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
        <div className=" pageBoxInner">
          <div>
            <h4>MANAGE RECENT WORKS</h4>
            <p>All Recent-Works</p>
          </div>
          <Link to="/main-admin/private-route/abubakar/dashboard/work/create">
            <button className="btn btn-primary"> Add Works</button>
          </Link>
        </div>
        <Table hover className="">
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
