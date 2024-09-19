import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import CallToAction from "../../components/CallToAction/CallToAction";
import PropTypes from "prop-types";
import "./Projects.scss";

const Projects = ({ projects }) => {
  const { id } = useParams();

  // Check if id is undefined or null
  if (id == null) {
    return (
      <div className="container mt-5">
        <h1>Error: Project ID is missing</h1>
        <p>URL parameter &quot;id&quot; is not present.</p>
      </div>
    );
  }

  const project = projects.find((p) => p.id.toString() === id.toString());

  if (!project) {
    return (
      <div className="container mt-5">
        <h1>Project Not Found</h1>
        <p>
          ID: {id}, Available projects: {projects.length}
        </p>
        <p>Available IDs: {projects.map((p) => p.id).join(", ")}</p>
      </div>
    );
  }

  return (
    <section className="project-details" id={`project-${project.id}`}>
      <div className="container mt-5">
        <img
          src={project.image1}
          alt={project.title}
          className="img-fluid mb-5"
        />
        <div className="row mt-5">
          <div className="col-md-6">
            <div className="project-details-text">
              <h2>{project.title}</h2>
              <p>{project.about}</p>
              {project.technologies && (
                <div>
                  <h2>Technologies Used</h2>
                  <ul>
                    {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.link && (
                <Link to={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="btn-secondary mt-3" type="button">
                    Visit Website
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <h3>Project Background</h3>
            <p>{project.background}</p>
            <h3>Challenges</h3>
            <p>{project.challenges}</p>
            <h3>Static Previews</h3>
            <img
              src={project.image2}
              alt={project.title}
              className="img-fluid my-4"
            />
            <img
              src={project.image3}
              alt={project.title}
              className="img-fluid my-4"
            />
          </div>
        </div>
        <CallToAction />
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
