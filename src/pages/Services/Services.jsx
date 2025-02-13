import "./Services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "./Service/Service";
import { useGetServicesQuery } from "../../redux/api";
import { motion } from "framer-motion";
import SectionHeader from "../../components/Utilities/SectionHeader";
import Spinner from "../../components/Utilities/Spinner/Spinner";

const Services = () => {
  const { data, isLoading } = useGetServicesQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.div
      className="mx-3 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
      // exit={{ opacity: 0 }}
    >
      <SectionHeader title={"SERVICES"} />
      <Row md={3} sm={2} xs={1} className="gx-3">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="g-3" key={ind}>
              <Service key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

export default Services;
