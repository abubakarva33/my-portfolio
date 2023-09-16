import "./SideHeader.css";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../../../redux/api";
import Spinner from "../../adminPanel/components/Spinner/Spinner";

const SideHeader = () => {
  const { data, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return
  }

  const { name, email, description } = data?.data[0];
  return (
    <div className="sideHeader">
      <div className="profilePic">
        <div className="profilePicInner"></div>
      </div>
      <div>
        <h3>{name}</h3>
        <h6>Professional web developer</h6>
        <Link
          to="https://www.google.com/maps/place/Dhaka/@23.8634965,90.2427756,11.75z/data=!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181!16zL20vMGZuYjQ?entry=ttu"
          target="_blank"
        >
          <div className="d-flex align-items-center">
            <MdOutlineLocationOn />
            <p className="mb-0 ">Dhaka, Bangladesh</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to="/contacts" className=" mainBtn w-100 mt-3 p-2">
          <FiMail className="me-2" />
          <span className="mainBtnSpan">HIRE ME</span>
        </Link>
        <hr className="w-100 bg-dark my-3 ms-2" />
        <h6 className="ms-3 pb-2">Find With Me</h6>
        <div className="d-flex my-4">
          <Link
            to="https://www.facebook.com/abubakar.siddik.79219754"
            target="_blank"
            className="contactIcon"
          >
            <FiFacebook />
          </Link>
          <Link to="mailto:abubakarsiddikl.info@gmail.com" target="_blank" className="contactIcon">
            <BiLogoGmail />
          </Link>
          <Link to="https://github.com/abubakarva33" target="_blank" className="contactIcon">
            <AiOutlineGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/abubakar-siddik-93a1261ab/"
            target="_blank"
            className="contactIcon"
          >
            <FiLinkedin />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideHeader;
