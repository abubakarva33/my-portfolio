import { useLoaderData } from "react-router-dom";
import "./Skills.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Skill from "./Skill/Skill";

const Skills = () => {
    const skillsData = useLoaderData();
    return (
        <div>
            <Row>
                <Col>
                    <h1>Design Skill</h1>
                    <div>
                        {(skillsData[0].devSkills).map((skill)=>
                            <Skill
                            key={skill.id}
                            range={skill.range}
                            title={skill.title}
                            />
                        )}
                    </div>
                </Col>
                <Col>
                    <h1>Development Skill</h1>
                    <div>
                    {(skillsData[0].otherSkills).map((skill)=>
                            <Skill
                            key={skill.id}
                            range={skill.range}
                            title={skill.title}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Skills;