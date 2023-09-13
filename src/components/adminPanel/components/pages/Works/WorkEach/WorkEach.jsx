import "./WorkEach.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteWorkMutation, useGetAWorkQuery } from "../../../../../../redux/api";
import { GrLinkNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Button } from "antd";

const WorkEach = () => {
  const { workId } = useParams();
  const navigate = useNavigate();
  const [deleteWork] = useDeleteWorkMutation();
  const { data, isLoading } = useGetAWorkQuery(workId);
  if (isLoading) {
    return;
  }
  const { title, description, createdAt,updatedAt, _id, img } = data;
  console.log(img);
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
        const res = await deleteWork(workId).unwrap();
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
        <h4>PROJECT DETAILS</h4>
        <Link to={`/main-admin/private-route/abubakar/dashboard/work/edit/${workId}`}>
          <button className="btn btn-primary">Edit Project</button>
        </Link>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <img src={`/Images/${img}.webp`} alt=""  className="img-for-admin"/>
          <h6 className="pt-4 pb-3 mb-0">Title: {title}</h6>
          <h6 className="pt-4 pb-3 mb-0">Details: {description}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Created: {createdAt}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Updated {updatedAt}</h6>
          <div className="d-flex justify-content-center pb-4">
            <Button className="me-3" type="primary" danger onClick={handleSingleDelete}>
              Delete
            </Button>
            <Button className="me-3" type="primary" onClick={() => location.reload()}>
              Reload
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkEach;
