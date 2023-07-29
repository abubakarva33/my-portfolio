import './SideHeader.css';
import { BiLogoInstagram } from 'react-icons/bi';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineGithub } from 'react-icons/ai';
import { FiFacebook, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { mainContext } from '../../../contexts/UserContext';


const SideHeader = () => {
    const { isDarkModeActive } = useContext(mainContext)
    return (
        <div className='sideHeader'>
            <img src="/Images/userImg.png" alt="" />
            <div>
                <h3>Abubakar Siddik</h3>
                <h6>Professional web developer</h6>
                <div className='d-flex align-items-center'>
                    <MdOutlineLocationOn />
                    <p className='mb-0 '>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <Link to="/contacts" className=' hireBtn hireBtnMain d-flex  align-items-center justify-content-center w-100 mt-3 p-2'><FiMail className='me-2' /><span className='hireBtnSpan'>HIRE ME</span></Link>
                <hr className='w-100 bg-dark my-3 ms-2' />
                <h6 className='ms-3 pb-2'>Find With Me</h6>
                <div className='my-4'>
                    <Link to="https://www.facebook.com/abubakar.siddik.79219754" target="_blank" className='contactIcon'> <FiFacebook /></Link>
                    <Link to="https://github.com/abubakarva33" target="_blank" className='contactIcon'><AiOutlineGithub /></Link>
                    <Link to="#" target="_blank" className='contactIcon'><BiLogoInstagram /></Link>
                    <Link to="#" target="_blank" className='contactIcon'><FiLinkedin /></Link>
                </div>
            </div>
        </div>
    );
};

export default SideHeader;