import React from "react";
import ServiceForm from "./ServiceForm";
import { useGetAServiceQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";

const ServiceEdit = () => {
  const { serviceId } = useParams();
  const { data, isLoading } = useGetAServiceQuery(serviceId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <ServiceForm {...props}> </ServiceForm>
    </div>
  );
};

export default ServiceEdit;
