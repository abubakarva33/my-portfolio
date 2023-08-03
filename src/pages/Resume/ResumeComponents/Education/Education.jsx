import "./Education.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EducationSection from "./EducationSection/EducationSection";
import { useLoaderData } from "react-router-dom";

const Education = () => {
    const educationData=useLoaderData();
    return (
        <div>
            <Row>
                <Col>
                    <h1>Educational Quality</h1>
                    <div>
                        {(educationData[0].academicEducation).map((skill)=>
                            <EducationSection
                            key={skill.id}
                            range={skill.range}
                            title={skill.title}
                            institute={skill.institute}
                            location={skill.location}
                            details={skill.details}
                            />
                        )}
                    </div>
                </Col>
                <Col>
                    <h1>Developer Quality</h1>
                    <div>
                    {(educationData[0].devEducation).map((skill)=>
                            <EducationSection
                            key={skill.id}
                            range={skill.range}
                            title={skill.title}
                            institute={skill.institute}
                             location={skill.location}
                            details={skill.details}
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Education;