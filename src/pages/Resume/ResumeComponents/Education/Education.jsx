import "./Education.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationSection from "./EducationSection/EducationSection";
import { useGetResumeQuery } from "../../../../redux/api";
import Spinner from "../../../../components/Utilities/Spinner/Spinner";

const Education = () => {
  const academicData = useGetResumeQuery("academic");
  const progData = useGetResumeQuery("programming");
  if (progData?.isLoading && academicData?.isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-3">
      <Row xs={1} md={2} className="gx-0">
        <Col className="gx-0">
          <div className="skillSection">
            <h3 className="resumeHeaderName ">Basic</h3>
            <div>
              {Array.isArray(academicData?.data?.data) &&
                academicData?.data?.data?.map((skill, ind) => (
                  <EducationSection key={ind} data={skill} />
                ))}
            </div>
          </div>
        </Col>
        <Col className="gx-0">
          <div className="skillSection">
            <h3 className="resumeHeaderName ">Professional</h3>
            <div>
              {Array.isArray(progData?.data?.data) &&
                progData?.data?.data?.map((skill, ind) => (
                  <EducationSection key={ind} data={skill} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
