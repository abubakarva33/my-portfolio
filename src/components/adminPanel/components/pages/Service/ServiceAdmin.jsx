import { useGetServicesQuery } from "../../../../../redux/api";
import "./ServiceAdmin.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import ServiceTable from "./serviceTable/serviceTable";

const ServiceAdmin = () => {
  const { data } = useGetServicesQuery();
  console.log(data);
  return (
    <div>
      <div className=" pageBox">
        <div className=" pageBoxInner">
          <div>
            <h4>MANAGE SERVICES</h4>
            <p>All Services</p>
          </div>
          <button className="btn btn-primary"> Add Service</button>
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
            {data?.map((data, ind) => (
              <ServiceTable key={ind} ind={ind} data={data}/>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ServiceAdmin;
