import "./ServiceEach.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { Button } from "antd";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Swal from "sweetalert2";
import { useDeleteServiceMutation, useGetAServiceQuery } from "../../../../../../redux/api";

const ServiceEach = () => {
  const { serviceId } = useParams();
  const { data, isLoading } = useGetAServiceQuery(serviceId);
  const navigate = useNavigate();
  const [deleteService] = useDeleteServiceMutation();
  if (isLoading) {
    return;
  }
  const { title, description, createdAt, updatedAt, _id, img } = data;

  const handleSingleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteService(serviceId).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          navigate(-1);
        }
      }
    });
  };
  return (
    <div className="">
      <div className=" pageBoxInner px-2">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
        </div>
        <h4>SERVICE DETAILS</h4>
        <Link to={`/main-admin/private-route/abubakar/dashboard/services/edit/${serviceId}`}>
          <button className="btn btn-primary">
          Edit Service
          </button>
        </Link>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <h6 className="pt-4 pb-3 mb-0">Title: {title}</h6>
          <h6 className="pt-4 pb-3 mb-0">Details: {description}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Created: {createdAt}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Updated {updatedAt}</h6>
          <div className="d-flex justify-content-center pb-4">
            <Button className="me-3" type="primary">
              Mark as important
            </Button>
            <Button className="me-3" type="primary" danger onClick={handleSingleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceEach;
