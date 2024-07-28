import "./Skills.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Skill from "./Skill/Skill";
import { useGetSkillQuery } from "../../../../redux/api";
import Spinner from "../../../../components/adminPanel/components/Spinner/Spinner";

const Skills = () => {
  const designData = useGetSkillQuery("design");
  const devData = useGetSkillQuery("development");
  if (devData?.isLoading && designData?.isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mb-3 mx-3">
      <Row xs={1} md={2} className="skillContainer mx-1 ">
        <Col className="gx-0">
          <div className="skillSection mt-1">
            <h5 className="eachResumeSection">Technologies</h5>
            <div>
              {Array.isArray(devData?.data?.data) &&
                devData?.data?.data?.map((skill, ind) => (
                  <Skill key={ind} range={skill.value} title={skill.title} />
                ))}
            </div>
          </div>
        </Col>
        <Col className="gx-0">
          <div className="skillSection mt-1">
            <h5 className="eachResumeSection">Expertise</h5>
            <div>
              {Array.isArray(designData?.data?.data) &&
                designData?.data?.data?.map((skill, ind) => (
                  <Skill key={ind} range={skill.value} title={skill.title} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Skills;
