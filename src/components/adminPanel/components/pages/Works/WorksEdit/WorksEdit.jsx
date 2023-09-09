
import "./WorksEdit.css";
import { useGetAWorkQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import WorkForm from "../WorkForm/WorksForm";

const WorkEdit = () => {
  const { workId } = useParams();
  const { data, isLoading } = useGetAWorkQuery(workId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <WorkForm {...props}> </WorkForm>
    </div>
  );
};

export default WorkEdit;
