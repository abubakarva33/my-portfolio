import "./RecentProjects.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project from "./sub-components/Project";
import { useGetWorksQuery } from "../../redux/api";
import { motion } from "framer-motion";
import SectionHeader from "../../components/utilities/SectionHeader";
import Spinner from "../../components/utilities/Spinner/Spinner";

const RecentProjects = () => {
  const { data, isLoading } = useGetWorksQuery();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.div
      className="mx-3 mb-4"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <SectionHeader title={"RECENT PROJECTS"} />
      <Row md={3} sm={2} xs={1} className="gx-3">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="g-3" key={ind}>
              <Project key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

export default RecentProjects;
