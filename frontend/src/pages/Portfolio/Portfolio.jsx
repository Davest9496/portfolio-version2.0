import PortfolioItem from "./PortfolioItem";
// import PropTypes from "prop-types";
import { projects } from "../../App";


const Portfolio = () => {
  

  return (
    <section className="container">
      <div className="container-fluid">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
