import LeftSection from "../sub-components/LeftSection";
import MiddleSection from "../sub-components/MiddleSection";
import RightSection from "../sub-components/RightSection";
import "./MinimalView.css";

const MinimalView = () => {
  return (
    <div className="minimal-container">
      <div className="minimal-view">
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  );
};

export default MinimalView;
