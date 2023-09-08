import { useGetServicesQuery } from "../../../../../redux/api";
import "./ServiceAdmin.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import ServiceTable from "./serviceTable/serviceTable";
import { Link } from "react-router-dom";
import { Pagination } from "antd";

const ServiceAdmin = () => {
  const { data ,isLoading} = useGetServicesQuery();
  if (isLoading) {
    return 
  }
  const { total, size } = data?.meta;
  console.log(data);
  return (
    <div>
      <div className=" pageBox">
        <div className=" pageBoxInner">
          <div>
            <h4>MANAGE SERVICES</h4>
            <p>All Services</p>
          </div>
          <Link to="/main-admin/private-route/abubakar/dashboard/services/create">
            {" "}
            <button className="btn btn-primary"> Add Service</button>{" "}
          </Link>
        </div>
        <Table hover className="">
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
        </Table>
        {console.log(total > 1, total)}
        {total > size && <Pagination defaultCurrent={1} total={total} />}
      </div>
    </div>
  );
};

export default ServiceAdmin;
