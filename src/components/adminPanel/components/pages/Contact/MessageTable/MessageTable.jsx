import "./MessageTable.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useDeleteServiceMutation, useDeleteWorkMutation } from "../../../../../../redux/api";
import Swal from "sweetalert2";

const MessageTable = ({ ind, data }) => {
  const [deleteWork, res] = useDeleteWorkMutation();
  const {
    title,
    description,
    shortDescription,
    link,
    projectType,
    tags,
    materialUsed,
    keyFeatures,
    createdAt,
    updatedAt,
    _id,
  } = data;
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
        const res = await deleteWork(_id).unwrap();
        console.log({ res });
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };
  return (
    <tr>
      <td>{ind + 1}</td>
      <td className="colspan-2">{title.length > 25 ? `${title.slice(0, 25)}...` : title}</td>
      <td>{shortDescription.length > 25 ? `${shortDescription.slice(0, 25)}...` : shortDescription}</td>
      <td>{projectType}</td>
      <td>{moment(createdAt).format("DD/MM/YYYY")}</td>
      <td>{moment(updatedAt).format("DD/MM/YYYY")}</td>
      <td className="d-flex" style={{ width: "135px" }}>
        <Link to={`/main-admin/private-route/abubakar/dashboard/work/${_id}`}>
          <h6 className="p-2 me-2 border rounded text-light bg-primary tableActionIcon">
            <AiOutlineEye />
          </h6>
        </Link>
        <Link to={`/main-admin/private-route/abubakar/dashboard/work/edit/${_id}`}>
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

export default MessageTable;
