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
    <div className="mx-5 mb-4">
      <h1 className="resumeHeaderName py-4">Blogs</h1>
      <Row md={2} xs={1} className="g-4">
        {Array.isArray(data?.data) &&
          data?.data?.map((data, ind) => (
            <Col>
              <Blog key={ind} ind={ind} data={data} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Blogs;
