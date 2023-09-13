import "./BlogEach.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDeleteBlogMutation, useGetABlogQuery } from "../../../../../../redux/api";
import { GrLinkNext } from "react-icons/gr";
import Swal from "sweetalert2";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Button } from "antd";

const BlogEach = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [deleteBlog] = useDeleteBlogMutation();
  const { data, isLoading } = useGetABlogQuery(blogId);
  if (isLoading) {
    return;
  }
  console.log(data);
  const { title, description, createdAt, updatedAt,category, _id, img } = data;
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
        const res = await deleteBlog(blogId).unwrap();
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
        <Link to={`/main-admin/private-route/abubakar/dashboard/blog/edit/${blogId}`}>
          <button className="btn btn-primary">Edit Project</button>
        </Link>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <img src={`/Images/${img}.webp`} alt="" className="img-for-admin" />
          <h6 className="pt-4 pb-3 mb-0">Title: {title}</h6>
          <h6 className="pt-4 pb-3 mb-0">Details: {description}</h6>
          <h6 className="pt-4 pb-3 mb-0">Category: {category?.name}</h6>
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

export default BlogEach;
