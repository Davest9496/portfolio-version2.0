import { useParams } from "react-router-dom";
import { projects } from "../../data/ProjectData";
import PortfolioItem from "./PortfolioItem";
import Projects from "../Projects/Projects";

const Portfolio = () => {
  const { id } = useParams();
  console.log("Current ID from URL params:", id);

  if (id) {
    const project = projects.find((p) => String(p.id) === id);
    return <Projects project={project} />;
  }

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
