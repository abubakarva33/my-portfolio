import "./ResumeEach.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteResumeMutation, useGetAResumeQuery } from "../../../../../../redux/api";
import { GrLinkNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Button } from "antd";

const ResumeEach = () => {
  const { resumeId } = useParams();
  const navigate = useNavigate();
  const [deleteResume] = useDeleteResumeMutation();
  const { data, isLoading } = useGetAResumeQuery(resumeId);
  if (isLoading) {
    return;
  }
  const {
    title,
    details,
    institute,
    startYear,
    endYear,
    type,
    createdAt,
    updatedAt,
    _id,
  } = data;
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
        const res = await deleteResume(resumeId).unwrap();
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
        <h4>RESUME DETAILS</h4>
        <Link to={`/main-admin/private-route/abubakar/dashboard/resume/edit/${resumeId}`}>
          <button className="btn btn-primary">Edit</button>
        </Link>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <h6 className="pt-4 pb-3 mb-0">Title: {title}</h6>
          <h6 className="pt-4 pb-3 mb-0">Details: {details}</h6>
          <h6 className="pt-4 pb-3 mb-0">Category: {institute}</h6>
          <h6 className="pt-4 pb-3 mb-0">Category: {startYear}</h6>
          <h6 className="pt-4 pb-3 mb-0">Category: {type}</h6>
          <h6 className="pt-4 pb-3 mb-0">Category: {endYear}</h6>
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

export default ResumeEach;