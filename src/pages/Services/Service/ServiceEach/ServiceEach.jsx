import "./ServiceEach.css";
import {  useNavigate, useParams } from "react-router-dom";
import { useGetAServiceQuery } from "../../../../redux/api";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { MdOutlineRefresh } from "react-icons/md";
import Spinner from "../../../../components/Utilities/Spinner/Spinner";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { data, isLoading } = useGetAServiceQuery(serviceId);
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }
  const { title, description, img, } = data;
  return (
    <div className="mx-2 mb-4">
      <div className=" serviceBox px-2">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2 ms-2" onClick={() => navigate(-1)} />
        </div>
        <h4>SERVICE DETAILS</h4>
        <div>
          <MdOutlineRefresh className="fs-2 my-2 me-2" onClick={() => location.reload()} />
        </div>
      </div>

      <div className=" serviceTable mt-3">
        <div className="p-3">
          <img src={`/Images/${img}.webp`} alt="" className="serviceEachImg rounded " />

          <h3 className="pt-4 pb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
