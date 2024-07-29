import "./RecentProjects.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./Project/Project";
import { useGetWorksQuery } from "../../redux/api";
import { motion } from "framer-motion";
import SectionHeader from "../../components/Utilities/SectionHeader";
import Spinner from "../../components/Utilities/Spinner/Spinner";

const RecentProjects = () => {
  const { data, isLoading } = useGetWorksQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.div
      className="mx-1 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <SectionHeader title={"RECENT PROJECTS"} />
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2" key={ind}>
              <Project key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

export default RecentProjects;
