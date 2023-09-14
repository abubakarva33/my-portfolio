
import "./ResumeEdit.css";
import { useGetABlogQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import ResumeForm from "../ResumeForm/ResumeForm";

const ResumeEdit = () => {
  const {blogId } = useParams();
  const { data, isLoading } = useGetABlogQuery(blogId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <ResumeForm {...props}> </ResumeForm>
    </div>
  );
};

export default ResumeEdit;
