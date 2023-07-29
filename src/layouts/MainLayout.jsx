import './MainLayout.css';
import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import SideHeader from "../components/shared/SideHeader/SideHeader";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainLayout = () => {
    return (
        <Row className='gx-0'>
            <Col xs={3} > <SideHeader /></Col>
            <Col xs={9} className='mainNav'>
                <Header />
                <div className='mainNavView'>
                    <div>
                        <Outlet />
                    </div>
                    <footer>
                        <p> &copy; 2023. All rights reserved by Abubakar Siddik </p>
                    </footer>
                </div>
            </Col>
        </Row>
    );
};

export default MainLayout;