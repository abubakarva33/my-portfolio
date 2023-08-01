import './Services.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
    return (

        <Row xs={1} md={3} className="gx-0">
            <Col>
                <div className="container">
                    <div className="card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="/Images/homebg.jpg" />
                            </div>
                            <div className="contentBx">
                                <h3>Lion<br /><span>Happy Birthday</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="">happy</a>
                            </li>
                            <li>
                                <a href="">birth</a>
                            </li>
                            <li>
                                <a href="">day</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="container">
                    <div className="card">
                        <div className="content">
                            <div className="imgBx">
                                <img src="https://image.flaticon.com/icons/png/256/4213/4213732.png" />
                            </div>
                            <div className="contentBx">
                                <h3>Lion<br /><span>Happy Birthday</span></h3>
                            </div>
                        </div>
                        <ul className="sci">
                            <li>
                                <a href="">happy</a>
                            </li>
                            <li>
                                <a href="">birth</a>
                            </li>
                            <li>
                                <a href="">day</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Services;