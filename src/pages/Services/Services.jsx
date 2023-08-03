import './Services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {
    const serviceData = useLoaderData();
    return (
        <div className='mx-5'>
            <h1 className='resumeHeaderName py-4'>Services</h1>
            <Row md={2} className='g-4'>
                {serviceData.map((service) =>
                    <Col key={service.id}>
                        <Service
                            picture={service.picture}
                            serviceName={service.serviceName}
                            mainTag={service.mainTag}
                            registered={service.registered}
                            about={service.about}
                        />
                    </Col>
                )}
            </Row>
        </div>
    )
}

export default Services;