import "./ProfileEdit.css";
import { useGetAProfileQuery } from "../../../../../../redux/api";
import { useParams } from "react-router-dom";
import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileEdit = () => {
  const { profileId } = useParams();
  const { data, isLoading } = useGetAProfileQuery(profileId);

  const props = {
    data,
    isLoading,
    mode: "update",
  };
  return (
    <div>
      <ProfileForm {...props}> </ProfileForm>
    </div>
  );
};

export default ProfileEdit;
