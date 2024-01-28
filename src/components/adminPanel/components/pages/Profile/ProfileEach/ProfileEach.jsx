import "./ProfileEach.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteProfileMutation, useGetAProfileQuery } from "../../../../../../redux/api";
import Swal from "sweetalert2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Button } from "antd";
import Spinner from "../../../Spinner/Spinner";

const ProfileEach = () => {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [deleteProfile] = useDeleteProfileMutation();
  const { data, isLoading } = useGetAProfileQuery(profileId);
  if (isLoading) {
    return <Spinner />;
  }
  const { name, email, createdAt, anotherNumber, description, number, updatedAt } = data;
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
        const res = await deleteProfile(profileId).unwrap();
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
        <h4>PROFILE DETAILS</h4>
        <Link to={`/main-admin/private-route/abubakar/dashboard/profile/edit/${profileId}`}>
          <button className="btn btn-primary">Edit Profile</button>
        </Link>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <h6 className="pt-4 pb-3 mb-0">Name: {name}</h6>
          <h6 className="pt-4 pb-3 mb-0">Email: {email}</h6>
          <h6 className="pt-4 pb-3 mb-0">Number: {number}</h6>
          <h6 className="pt-4 pb-3 mb-0">Alternative Number: {anotherNumber}</h6>
          <h6 className="pt-4 pb-3 mb-0">Description: {description}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Created: {createdAt}</h6>
          <h6 className="pt-4 pb-3 mb-0">Date Updated :{updatedAt}</h6>
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

export default ProfileEach;
