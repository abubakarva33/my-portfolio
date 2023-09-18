import "./Education.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EducationSection from "./EducationSection/EducationSection";
import { useGetResumeQuery, useGetSkillQuery } from "../../../../redux/api";
import Spinner from "../../../../components/adminPanel/components/Spinner/Spinner";
import { useState } from "react";

const Education = () => {
  const academicData = useGetResumeQuery("academic");
  const progData = useGetResumeQuery("programming");
  console.log(progData?.data);
  if (progData?.isLoading && academicData?.isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Row xs={1} md={2} className="">
        <Col>
          <div className="">
            <h1 className="resumeHeaderName ">Educational Quality</h1>
            <div>
              {Array.isArray(academicData?.data?.data) &&
                academicData?.data?.data?.map((skill) => (
                  <EducationSection key={skill.id} data={skill} />
                ))}
            </div>
          </div>
        </Col>
        <Col>
          <div className="">
            <h1 className="resumeHeaderName ">Developer Quality</h1>
            <div>
              {Array.isArray(progData?.data?.data) &&
                progData?.data?.data?.map((skill) => (
                  <EducationSection key={skill.id} data={skill} />
                ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Education;
