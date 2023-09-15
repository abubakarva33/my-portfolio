import "./Spinner.css"
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
};

export default Spinner;
