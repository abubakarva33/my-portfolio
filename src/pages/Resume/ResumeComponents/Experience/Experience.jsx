import "./Experience.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from "react-router-dom";
import ExperienceSection from "./ExperienceSection/ExperienceSection";

const Experience = () => {
    const experienceData = useLoaderData();
    return (
        <div>
            <Row xs={1} md={2} className="skillContainer mx-1 mt-0">
                <Col className="skillSection">
                    <div>
                        <h1 className="resumeHeaderName ">Job Experience</h1>
                        <div>
                            {(experienceData[0].academicEducation).map((skill) =>
                                <ExperienceSection
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
                        <h1 className="resumeHeaderName">Trainer Experience</h1>
                        <div>
                            {(experienceData[0].devEducation).map((skill) =>
                                <ExperienceSection
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

export default Experience;