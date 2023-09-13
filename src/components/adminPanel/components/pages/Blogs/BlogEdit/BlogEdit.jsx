
import "./BlogEdit.css";
import { useGetABlogQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import BlogForm from "../BlogForm/BlogForm";

const BlogEdit = () => {
  const {blogId } = useParams();
  const { data, isLoading } = useGetABlogQuery(blogId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <BlogForm {...props}> </BlogForm>
    </div>
  );
};

export default BlogEdit;
