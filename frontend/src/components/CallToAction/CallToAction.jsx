import "./CallToAction.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <div className="call-to-action-text">
        <h2>
          Interested in working <br /> on a project together?
        </h2>
      </div>
      <div className="call-to-action-divider"></div>
      <div className="call-to-action-button">
        <Link to="/contact">
          <Button className="btn-secondary" type="button" disabled={false}>
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
