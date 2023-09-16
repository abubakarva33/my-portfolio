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
  console.log(data.data);
  return (
    <div className="mx-5 mb-4">
      <h1 className="resumeHeaderName py-4">Services</h1>
      <Row md={2} xs={1} className="g-4">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col>
              <Service key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Services;
