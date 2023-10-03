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
    <div className="mx-1 mb-4">
      <h2 className="resumeHeaderName mx-1 py-3">RECENT PROJECTS</h2>
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2">
              <Project key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default RecentProjects;
