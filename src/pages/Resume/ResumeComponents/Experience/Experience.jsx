import "./Experience.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import { useGetResumeQuery } from "../../../../redux/api";
import Spinner from "../../../../components/adminPanel/components/Spinner/Spinner";

const Experience = () => {
  const jobData = useGetResumeQuery("job");
  const trainData = useGetResumeQuery("training");
  if (trainData?.isLoading && jobData?.isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Row xs={1} md={2} className="skillContainer mx-1">
        <Col>
          <div className="skillSection">
            <h1 className="resumeHeaderName ">Training Experience</h1>
            <div>
              {Array.isArray(jobData?.data?.data) &&
                jobData?.data?.data?.map((skill) => (
                  <ExperienceSection key={skill.id} data={skill} />
                ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="skillSection">
            <h1 className="resumeHeaderName ">Job Experience</h1>
            <div>
              {Array.isArray(trainData?.data?.data) &&
                trainData?.data?.data?.map((skill) => (
                  <ExperienceSection key={skill.id} data={skill} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
