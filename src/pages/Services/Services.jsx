import "./Services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "./Service/Service";
import { useGetServicesQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";

const Services = () => {
  const { data, isLoading } = useGetServicesQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mx-1 mb-4">
      <h2 className="resumeHeaderName mx-2 py-3">SERVICES</h2>
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2">
              <Service key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Services;
