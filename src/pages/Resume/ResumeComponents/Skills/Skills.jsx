import { useLoaderData } from "react-router-dom";
import "./Skills.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skill from "./Skill/Skill";
import { useGetResumeQuery, useGetSkillQuery } from "../../../../redux/api";
import Spinner from "../../../../components/adminPanel/components/Spinner/Spinner";

const Skills = () => {
  const devData = useGetSkillQuery("development");
  const designData = useGetSkillQuery("design");
  if (devData?.data?.isLoading && designData?.data?.isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <Row xs={1} md={2} className="skillContainer mx-1">
        <Col>
          <div className="skillSection">
            <h1 className="resumeHeaderName ">Design Skill</h1>
            <div>
              {Array.isArray(designData?.data?.data) &&
                designData?.data?.data?.map((skill) => (
                  <Skill key={skill.id} range={skill.value} title={skill.title} />
                ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="skillSection">
            <h1 className="resumeHeaderName ">Development Skill</h1>
            <div>
              {Array.isArray(devData?.data?.data) &&
                devData?.data?.data?.map((skill) => (
                  <Skill key={skill.id} range={skill.value} title={skill.title} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
