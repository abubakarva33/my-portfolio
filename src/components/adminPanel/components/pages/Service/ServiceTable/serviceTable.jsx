import "./serviceTable.css";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useDeleteServiceMutation } from "../../../../../../redux/api";
import Swal from "sweetalert2";

const ServiceTable = ({ ind, data }) => {
  const [deleteService, res] = useDeleteServiceMutation();
  const { title, description, createdAt, updatedAt, _id } = data;
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
        const res = await deleteService(_id).unwrap();
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
      <td className="colspan-2">{title.length > 30 ? `${title.slice(0, 30)}...` : title}</td>
      <td>{description.length > 25 ? `${description.slice(0, 30)}...` : description}</td>
      <td>{moment(createdAt).format("DD/MM/YYYY")}</td>
      <td>{moment(updatedAt).format("DD/MM/YYYY")}</td>
      <td className="d-flex" style={{ width: "135px" }}>
        <Link to={`/main-admin/private-route/abubakar/dashboard/services/${_id}`}>
          <h6 className="p-2 me-2 border rounded text-light bg-primary tableActionIcon">
            <AiOutlineEye />
          </h6>
        </Link>
        <Link to={`/main-admin/private-route/abubakar/dashboard/services/edit/${_id}`}>
          <h6 className="p-2 me-2 border rounded text-light bg-success tableActionIcon">
            <AiOutlineEdit />
          </h6>
        </Link>
        <h6 className="p-2 me-2 border rounded text-light bg-secondary tableActionIcon bg-danger">
          <AiOutlineDelete onClick={deleteHandler} />
        </h6>
      </td>

      {/* 

      <Modal
        isOpen={isOpenModalTwo}
        onRequestClose={closeModalTwo}
        contentLabel="Example Modal"
        className={`w-75 p-4 m-auto my-5 modalMain`}
      >
        <p className="crossBtn" onClick={closeModalTwo}>
          <RxCross1 />
        </p>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <input
            type="text"
            name="serviceName"
            value={formData.serviceName}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Title"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="shortDescription"
            value={formData.shortDescription}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Short Description"
            onChange={changeHandler}
          />
          <textarea
            name="about"
            value={formData.about}
            id=""
            cols="30"
            className="mb-3 border-0 py-2 px-3 rounded"
            rows="10"
            placeholder="Enter Full Description"
            onChange={changeHandler}
          ></textarea>
          <input
            type="text"
            name="cliant"
            value={formData.cliant}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Client Name"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="registeredDate"
            value={formData.registeredDate}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Project Registered  Date"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="liveLink"
            value={formData.liveLink}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Project Live Link"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="mainTag"
            value={formData.mainTag}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Project Tag"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="mainFeatures"
            value={formData.mainFeatures}
            id=""
            className="mb-3 border-0 py-2 px-3 rounded"
            placeholder="Enter Key Features"
            onChange={changeHandler}
          />
          <div>
            <button>Cancel </button>
            <button type="submit">Save Changes </button>
          </div>
        </form>
      </Modal> */}
    </tr>
  );
};

export default ServiceTable;
