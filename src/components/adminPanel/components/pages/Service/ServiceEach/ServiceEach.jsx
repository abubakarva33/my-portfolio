import { useParams } from "react-router-dom";
import "./ServiceEach.css";
import { useGetAServiceQuery } from "../../../../../../redux/api";
import { GrLinkNext } from "react-icons/gr";

const ServiceEach = () => {
  const { serviceId } = useParams();
  const { data, isLoading } = useGetAServiceQuery(serviceId);
  if (isLoading) {
    return;
  }
  const { serviceName, about, registered, picture } = data;
  return (
    <div className="cardBorder">
      <div className="eduSection service p-4">
        <img src={picture} alt="" className="img-fluid border rounded " />
        <div className="cardBody">
          <h3 className="pt-4 pb-3">{serviceName}</h3>
          <p className="mb-0">{about.length > 180 ? `${about.slice(0, 180)}...` : about}</p>
        </div>
        <div className="position-relative">
          <div className="btnGroup">
            <p className="fs-4">
              <GrLinkNext />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEach;
