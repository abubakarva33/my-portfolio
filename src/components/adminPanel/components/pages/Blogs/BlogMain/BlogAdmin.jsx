import Table from "react-bootstrap/Table";
import "./BlogAdmin.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { useGetBlogsQuery } from "../../../../../../redux/api";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import BlogTable from "../BlogTable/BlogTable";
import Spinner from "../../../Spinner/Spinner";

const BlogAdmin = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading } = useGetBlogsQuery(page);
  if (isLoading) {
    return <Spinner/>
  }
  const { total, size } = data?.meta || {};
  const onChange = (current) => {
    setPage(current);
  };
  return (
    <div>
      <div className=" pageBox">
        <div className=" pageBoxInner px-3">
          <div>
            <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
          </div>
          <h4>MANAGE BLOGS</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/blog/create">
            <button className="btn btn-primary"> Add Blog</button>
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
              data?.data?.map((data, ind) => <BlogTable key={ind} ind={ind} data={data} />)}
          </tbody>
        </Table>
        {total > size && <Pagination defaultCurrent={1} total={total} onChange={onChange} />}
      </div>
    </div>
  );
};

export default BlogAdmin;
