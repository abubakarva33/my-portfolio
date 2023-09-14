
import "./SkillEdit.css";
import { useGetABlogQuery, useGetASkillQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import SkillForm from "../SkillForm/SkillForm";

const SkillEdit = () => {
  const {skillId } = useParams();
  const { data, isLoading } = useGetASkillQuery(skillId);

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
