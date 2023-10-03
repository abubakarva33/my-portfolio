import "./Blogs.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog/Blog";
import { useGetBlogsQuery } from "../../redux/api";
import Spinner from "../../components/adminPanel/components/Spinner/Spinner";

const Blogs = () => {
  const { data, isLoading } = useGetBlogsQuery(1);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mx-1 mb-4">
      <h2 className="resumeHeaderName mx-2 py-3">BLOGS</h2>
      <Row md={2} xs={1} className="gx-0">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col className="gx-2">
              <Blog key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Blogs;
