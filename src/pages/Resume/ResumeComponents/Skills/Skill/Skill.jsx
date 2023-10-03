import "./Skill.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skill = ({title,range}) => {
    return (
        <div>
            <div className="py-2">
                <p className="fs-5 mb-1">{title}</p>
                <ProgressBar now={range} />
            </div>
        </div>
    );
};

export default Skill;