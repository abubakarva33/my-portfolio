import "./RecentProjects.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project/Project";
import { useGetWorksQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";

const RecentProjects = () => {
  const { data, isLoading } = useGetWorksQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mx-5 mb-4">
      <h1 className="resumeHeaderName py-4">RECENT PROJECTS</h1>
      <Row md={2} xs={1} className="g-4">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col>
              <Project key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default RecentProjects;
