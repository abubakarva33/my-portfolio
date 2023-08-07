import './Blogs.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import Blog from './Blog/Blog';

const Blogs = () => {
    const blogsData = useLoaderData();
    return (
        <div className='mx-5'>
            <h1 className='resumeHeaderName py-4'>Blogs</h1>
            <Row md={2} xs={1} className='g-4'>
                {blogsData.map((blog) =>
                    <Col key={blog.id}>
                        <Blog
                            picture={blog.picture}
                            serviceName={blog.serviceName}
                            mainTag={blog.mainTag}
                            registered={blog.registered}
                            about={blog.about}
                        />
                    </Col>

                )}
            </Row>
        </div>
    );
};

export default Blogs;