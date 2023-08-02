import './Services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineEye, AiOutlineLink } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Services = () => {
    return (

        <Row xs={1} md={3} className="gx-0">
            <Col>
                <Card className='px-4 mainCard'>
                    <Card.Img variant="top" src="/Images/homebg.jpg" className='cardImg' />
                    <Card.Body className='cardBody'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div className="position-relative">
                            <div className='d-flex align-content-center justify-content-between btnGroup'>
                                <Link to="/" className='mainBtn border-0'> <AiOutlineEye className='me-1' />Preview</Link>
                                <Link to="/" className='mainBtn  border-0'> <AiOutlineLink className='me-1' /> Visit Site</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Services;