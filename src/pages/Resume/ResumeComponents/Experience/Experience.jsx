import "./Experience.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import { useGetResumeQuery } from "../../../../redux/api";
import Spinner from "../../../../components/Utilities/Spinner/Spinner";

const Experience = () => {
  const trainData = useGetResumeQuery("training");
  const jobData = useGetResumeQuery("job");
  if (trainData?.isLoading && jobData?.isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mx-3">
      <Row xs={1} md={2} className="gx-0 gy-2 mx-2">
        <Col>
          <div className="exFirst">
            <h3 className="resumeHeaderName "> Training Experience </h3>
            <div>
              {Array.isArray(trainData?.data?.data) &&
                trainData?.data?.data?.map((skill, ind) => (
                  <ExperienceSection key={ind} data={skill} />
                ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="exSecond">
            <h3 className="resumeHeaderName ">Job Experience</h3>
            <div>
              {Array.isArray(jobData?.data?.data) &&
                jobData?.data?.data?.map((skill, ind) => (
                  <ExperienceSection key={ind} data={skill} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
