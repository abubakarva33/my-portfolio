
import "./SkillEdit.css";
import { useGetABlogQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import BlogForm from "../BlogForm/BlogForm";

const SkillEdit = () => {
  const {blogId } = useParams();
  const { data, isLoading } = useGetABlogQuery(blogId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <SkillForm {...props}> </SkillForm>
    </div>
  );
};

export default SkillEdit;
