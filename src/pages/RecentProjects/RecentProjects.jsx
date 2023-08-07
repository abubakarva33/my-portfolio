import './RecentProjects.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import Project from './Project/Project';

const RecentProjects = () => {
    const recentProjectsData = useLoaderData();
    return (
        <div className='mx-5'>
            <h1 className='resumeHeaderName py-4 '>My Recent Projects</h1>
            <Row md={2} xs={1} className='g-4'>
                {recentProjectsData.map((project) =>
                    <Col key={project.id}>
                        <Project
                            picture={project.picture}
                            serviceName={project.serviceName}
                            mainTag={project.mainTag}
                            registered={project.registered}
                            cliant={project.cliant}
                            shortDescription={project.shortDescription}
                            tags={project.tags}
                            about={project.about}
                            keyFeatures={project.keyFeatures}
                            materials={project.materials}
                        />
                    </Col>
                )}
            </Row>
        </div>
    );
};

export default RecentProjects;