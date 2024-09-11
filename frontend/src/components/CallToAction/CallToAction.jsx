import './CallToAction.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';


const CallToAction = () => {
    return (
        <div className="call-to-action">
            <h2>Interested in working <br /> on a project together?</h2>
            <div style={{ width: '33.33%', height: '1px', backgroundColor: '#000', margin: '20px 0', opacity: '0.3' }}></div>
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
