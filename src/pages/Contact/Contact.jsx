import './Contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';

const Contact = () => {
    return (
        <div className='px-5'>
            <h1 className='resumeHeaderName py-4'>Blogs</h1>
            <Row xs={1} md={2} className="g-4">
                <Col xs={12} md={5}>
                    <div>
                        <img src="/Images/contactHand.avif" alt="" className='img-fluid' />
                        <h1>Abubakar Siddik</h1>
                        <small>Web Developer</small>
                        <p>I am available for freelance work. Connect with me via and call in to my account.</p>
                        <div>
                            <Link to="https://www.google.com/maps/place/Dhaka/@23.8634965,90.2427756,11.75z/data=!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.810332!4d90.4125181!16zL20vMGZuYjQ?entry=ttu" target="_blank">
                                <div className='d-flex align-items-center'>
                                    <MdOutlineLocationOn />
                                    <p className='mb-0 '>Dhaka, Bangladesh</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={7}>
                    fgjhfgh
                </Col>
            </Row>
        </div>
    );
};

export default Contact;