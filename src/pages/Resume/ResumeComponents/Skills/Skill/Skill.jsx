import "./Skill.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skill = ({title,range}) => {
    return (
        <div>
            <div className="py-2">
                <h6 className="fs-5">{title}</h6>
                <ProgressBar now={range} />
            </div>
        </div>
    );
};

export default Skill;