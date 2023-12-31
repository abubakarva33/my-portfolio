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
  if (devData?.isLoading && designData?.isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mb-3">
      <Row xs={1} md={2} className="skillContainer mx-1">
        <Col className="gx-0">
          <div className="skillSection mt-3">
            <h3 className="eachResumeSection">Design Skill</h3>
            <div>
              {Array.isArray(designData?.data?.data) &&
                designData?.data?.data?.map((skill) => (
                  <Skill key={skill.id} range={skill.value} title={skill.title} />
                ))}
            </div>
          </div>
        </Col>
        <Col className="gx-0">
          <div className="skillSection mt-3">
            <h3 className="eachResumeSection">Development Skill</h3>
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
