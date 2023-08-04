import { Link } from 'react-router-dom';
import './Home.css';
import Typed from 'react-typed';

const Home = () => {
    return (
        <div>
            <div className='home p-5'>
                <h6>WELCOME TO MY WORLD</h6>
                <div className='homeHeading'>
                    <p>Hi, I’m <span className='homeHeadingSpan'>ABUBAKAR SIDDIK</span></p>
                    <div className='d-flex'>
                        <p className='homeHeadingSpan pe-3'>a</p>
                        <Typed
                            strings={['Developer',
                                'FrontEnd Developer',
                                'Designer']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </div>
                <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quia? Magnam quae fugiat ex placeat, nulla deleniti maiores aperiam sequi id dolorem veniam alias repellat corrupti? Doloremque sapiente assumenda dignissimos temporibus officia recusandae quam enim quod consequuntur accusamus odio optio quidem minima, sunt dolorem? Vel magni impedit ad distinctio saepe atque unde sunt earum sed! Nihil magni vero dicta enim exercitationem omnis natus harum.</p>
                <Link to="/contacts" className='mainBtn w-25 mt-4'> <p className='mainBtnSpan'> Contact Me</p> </Link>
            </div>
        </div>
    );
};

export default Home;