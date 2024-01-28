import { HiOutlineArrowLeft } from "react-icons/hi2";
import "./Category.css";
import { useNavigate } from "react-router-dom";
import {
    useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoryQuery,
  useUpdateCategoryMutation,
} from "../../../../../../redux/api";
import { Table } from "react-bootstrap";
import moment from "moment";
import { AiOutlineDelete, AiOutlineEdit,  } from "react-icons/ai";
import Swal from "sweetalert2";
import Spinner from "../../../Spinner/Spinner";

const Category = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const [createCategory]=useCreateCategoryMutation()
  if (isLoading) {
    return <Spinner/>
  }

  const deleteHandler = async (id) => {
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
        const res = await deleteCategory(id).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      }
    });
  };

  const updateHandler = async (id) => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Category",
      inputPlaceholder: "Enter category here...",
      inputAttributes: {
        "aria-label": "Enter Category here",
      },
      showCancelButton: true,
    });

    if (text) {
      const res = await updateCategory({ _id: id, name: text }).unwrap();
      if (res?.success) {
        Swal.fire("Updated!", "Category has been updated.", "success");
      }
    }
  };
  const createHandler = async () => {
    const { value: text } = await Swal.fire({
      input: "text",
      inputLabel: "Category",
      inputPlaceholder: "Enter category here...",
      inputAttributes: {
        "aria-label": "Enter Category here",
      },
      showCancelButton: true,
    });

    if (text) {
      const res = await createCategory({ name: text }).unwrap();
      if (res?.success) {
        Swal.fire("Created!", "Category has been created.", "success");
      }
    }
  };
  return (
    <div className=" pageBox">
      <div className=" pageBoxInner px-3">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
        </div>
        <h4>MANAGE BLOGS</h4>
        <button className="btn btn-primary" onClick={createHandler}>
          {" "}
          Add Category
        </button>
      </div>
      <Table hover className="serviceTable">
        <thead>
          <tr>
            <th>No.</th>
            <th>Category</th>
            <th>Date Created</th>
            <th>Date Edited</th>
            <th style={{ width: "135px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data?.data) &&
            data?.data?.map((data, ind) => (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{data?.name}</td>
                <td>{moment(data?.createdAt).format("DD/MM/YYYY")}</td>
                <td>{moment(data?.updatedAt).format("DD/MM/YYYY")}</td>
                <td className="d-flex" style={{ width: "135px" }}>
                  <h6 className="p-2 me-2 border rounded text-light bg-success tableActionIcon">
                    <AiOutlineEdit onClick={() => updateHandler(data._id)} />
                  </h6>
                  <h6 className="p-2 me-2 border rounded text-light bg-secondary tableActionIcon bg-danger">
                    <AiOutlineDelete onClick={() => deleteHandler(data._id)} />
                  </h6>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Category;
