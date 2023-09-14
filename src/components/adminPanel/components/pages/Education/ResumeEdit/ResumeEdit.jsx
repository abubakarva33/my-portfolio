
import "./ResumeEdit.css";
import { useGetAResumeQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import ResumeForm from "../ResumeForm/ResumeForm";

const ResumeEdit = () => {
  const {resumeId } = useParams();
  const { data, isLoading } = useGetAResumeQuery(resumeId);

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
