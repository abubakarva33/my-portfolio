import "./MainSpinner.css";
import { ThreeDots } from "react-loader-spinner";

const MainSpinner = () => {
  return (
    <div className="spinnerMain">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default MainSpinner;
