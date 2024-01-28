import "./Services.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service from "./Service/Service";
import { useGetServicesQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";
import { motion } from "framer-motion";

const Services = () => {
  const { data, isLoading } = useGetServicesQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.div
      className="mx-1 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
      // exit={{ opacity: 0 }}
    >
      <motion.h2
        className="resumeHeaderName mx-1 py-3"
        initial={{ x: "-100px" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "-100px" }}
      >
        SERVICES
      </motion.h2>
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2" key={ind}>
              <Service key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

export default Services;
