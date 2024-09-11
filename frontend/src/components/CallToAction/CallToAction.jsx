import './CallToAction.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const CallToAction = () => {
    return (
        <div className="call-to-action">
            <h2>Interested in working <br /> on a project together?</h2>
            <div className="call-to-action-divider"></div>
            <Link to="/contact">
                <Button
                    className="btn-secondary"
                    onClick={() => (window.location.href = "/contact")}
                    type="button"
                    disabled={false}
                >
                    Contact Me
                </Button>
            </Link>
        </div>
    );
};

export default CallToAction;
