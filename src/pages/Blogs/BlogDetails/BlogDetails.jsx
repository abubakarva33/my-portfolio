import { RxCross1 } from "react-icons/rx";
import "./BlogDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useGetABlogQuery } from "../../../redux/api";
import Spinner from "../../../components/adminPanel/components/Spinner/Spinner";

const BlogDetails = () => {
  const { blogId } = useParams();
  const { data, isLoading } = useGetABlogQuery(blogId);
  const navigate = useNavigate();
  if (isLoading) {
    return <Spinner />;
  }
  const { title, description, category, img, createdAt, _id } = data;
  return (
    <div className="mx-5 mb-4">
      <div className=" serviceBox px-2 mt-4">
        <div>
          <HiOutlineArrowLeft className="fs-2 my-2" onClick={() => navigate(-1)} />
        </div>
        <h4>BLOG DETAILS</h4>
        <button className="btn btn-primary" onClick={() => location.reload()}>
          Reload
        </button>
      </div>

      <div className=" serviceTable mt-3">
        <div className="p-3">
          <img src={`/Images/${img}.webp`} alt="" className="serviceEachImg rounded " />

          <p className="pt-4 pb-3"> Category : {category?.name}</p>
          <h3 className="pt-4 pb-3">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
