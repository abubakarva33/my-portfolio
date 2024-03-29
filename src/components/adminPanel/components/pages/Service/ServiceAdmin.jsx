import { useGetServicesQuery } from "../../../../../redux/api";
import "./ServiceAdmin.css";
import Table from "react-bootstrap/Table";
import {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import ServiceTable from "./ServiceTable/serviceTable";
import Spinner from "../../Spinner/Spinner";

const ServiceAdmin = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading } = useGetServicesQuery(page);
  if (isLoading) {
    return <Spinner />;
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
          <h4>MANAGE SERVICES</h4>
          <Link to="/main-admin/private-route/abubakar/dashboard/services/create">
            <button className="btn btn-primary"> Add Service</button>
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
              data?.data?.map((data, ind) => <ServiceTable key={ind} ind={ind} data={data} />)}
          </tbody>
          {total > size && (
            <Pagination defaultCurrent={1} total={total} onChange={onChange} className="my-3" />
          )}
        </Table>
      </div>
    </div>
  );
};

export default ServiceAdmin;
