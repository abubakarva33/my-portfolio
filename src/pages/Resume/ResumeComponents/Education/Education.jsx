import "./Education.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EducationSection from "./EducationSection/EducationSection";
import { useLoaderData } from "react-router-dom";

const Education = () => {
    const 
    return (
        <div>
            <Row xs={1} md={2} className="skillContainer mx-1">
                <Col>
                    <div className="skillSection">
                        <h1 className="resumeHeaderName ">Educational Quality</h1>
                        <div>
                            {(educationData[0].academicEducation).map((skill) =>
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
                    </div>
                </Col>
                <Col>
                    <div className="skillSection">
                        <h1 className="resumeHeaderName ">Developer Quality</h1>
                        <div>
                            {(educationData[0].devEducation).map((skill) =>
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
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Education;