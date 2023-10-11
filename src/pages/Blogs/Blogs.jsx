import "./Blogs.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Blog from "./Blog/Blog";
import { useGetBlogsQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";
import { motion } from "framer-motion";

const Blogs = () => {
  const { data, isLoading } = useGetBlogsQuery(1);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <motion.div
      className="mx-1 mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="resumeHeaderName mx-1 py-3"
        initial={{ x: "-100px" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeInOut" }}
        exit={{ x: "-100px" }}
      >
        BLOGS
      </motion.h2>
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2">
              <Blog key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

export default Blogs;
