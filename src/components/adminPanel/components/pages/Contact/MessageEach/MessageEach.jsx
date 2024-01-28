import "./MessageEach.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteMessageMutation, useGetAMessageQuery } from "../../../../../../redux/api";
import { Button } from "antd";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import Swal from "sweetalert2";

const MessageEach = () => {
  const { contactId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetAMessageQuery(contactId);
  const [deleteMessage] = useDeleteMessageMutation();
  if (isLoading) {
    return;
  }
  const { name, email, message } = data;


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
        const res = await deleteMessage(contactId).unwrap();
        if (res?.success) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          navigate(-1)
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
        <h4>Message from {name}</h4>
        <button className="btn btn-primary" onClick={() => location.reload()}>
          Reload
        </button>
      </div>
      <div className="serviceTable">
        <div className="px-3">
          <h6 className="pt-4 pb-3 mb-0">Email: {email}</h6>
          <p className="pt-4 pb-3">
            <b> Full-Message: </b> {message}
          </p>
          <div className="d-flex justify-content-center pb-4">
            <Button className="me-3" type="primary">
              Mark as important
            </Button>
            <Button className="me-3" type="primary" danger onClick={handleSingleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageEach;
