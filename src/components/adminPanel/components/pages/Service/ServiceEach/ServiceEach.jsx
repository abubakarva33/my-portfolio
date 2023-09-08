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
  const { title, description, createdAt, updatedAt, _id, img } = data;

  return (
    <div className="cardBorder">
      <div className="eduSection service p-4">
        <img src={img} alt="" className="img-fluid border rounded " />
        <div className="cardBody">
          <h3 className="pt-4 pb-3">{title}</h3>
          <p className="mb-0">{description?.length > 180 ? `${description.slice(0, 180)}...` : description}</p>
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
