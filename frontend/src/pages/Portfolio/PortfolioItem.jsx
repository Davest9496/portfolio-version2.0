import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../../components/Button/Button";

const PortfolioItem = ({ id, image, title, description, reverse }) => {
  return (
    <div className={`row mb-5 ${reverse ? "flex-row-reverse" : ""}`}>
      <div className="col-md-6 p-0">
        <img
          src={image}
          alt={title}
          className="img-fluid w-100 h-100 object-fit-cover"
        />
      </div>
      <div className="col-md-6 d-flex align-items-center">
        <div className="about-text-box">
          <h2 className="mb-5">{title}</h2>
          <p className="mb-5">{description}</p>
          <Link to={`/project/${id}`}>
            <Button className="btn-secondary" type="button">
              View Project Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

PortfolioItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

export default PortfolioItem;
