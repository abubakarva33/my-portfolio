import "./ProfileTable.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { useDeleteBlogMutation, useDeleteProfileMutation, useDeleteSkillMutation } from "../../../../../../redux/api";
import Swal from "sweetalert2";

const ProfileTable = ({ ind, data }) => {
  const [deleteProfile] = useDeleteProfileMutation();
  const { name, email, createdAt, updatedAt, _id } = data;
  const deleteHandler = async () => {
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
        const res = await deleteProfile(_id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };
  return (
    <tr>
      <td>{ind + 1}</td>
      <td className="colspan-2">{name.length > 25 ? `${name.slice(0, 25)}...` : name}</td>
      <td>{email.length > 25 ? `${email.slice(0, 25)}...` : email}</td>
      <td>{moment(createdAt).format("DD/MM/YYYY")}</td>
      <td>{moment(updatedAt).format("DD/MM/YYYY")}</td>
      <td className="d-flex" style={{ width: "135px" }}>
        <Link to={`/main-admin/private-route/abubakar/dashboard/profile/${_id}`}>
          <h6 className="p-2 me-2 border rounded text-light bg-primary tableActionIcon">
            <AiOutlineEye />
          </h6>
        </Link>
        <Link to={`/main-admin/private-route/abubakar/dashboard/profile/edit/${_id}`}>
          <h6 className="p-2 me-2 border rounded text-light bg-success tableActionIcon">
            <AiOutlineEdit />
          </h6>
        </Link>
        <h6 className="p-2 me-2 border rounded text-light bg-secondary tableActionIcon bg-danger">
          <AiOutlineDelete onClick={deleteHandler} />
        </h6>
      </td>
    </tr>
  );
};

export default ProfileTable;
