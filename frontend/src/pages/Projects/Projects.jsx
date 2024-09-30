import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import CallToAction from "../../components/CallToAction/CallToAction";
import PropTypes from "prop-types";
import "./Projects.scss";
import { GrPrevious, GrNext } from "react-icons/gr";

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
                  <ul className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <li className="project-technologies-item" key={index}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.link && (
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="btn-secondary mt-3" type="button">
                    Visit Website
                  </Button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="project-background-title">Project Background</h3>
            <p className="project-background">{project.background}</p>
            <h3 className="project-background-title">Static Previews</h3>
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

        {/* CAROUSEL NAVIGATION */}
        <div className="project-navigation border-top border-bottom my-5">
          <div className="row">
            <div className="col-md-6 border-end">
              {project.id > 1 && (
                <Link
                  to={`/project/${project.id - 1}`}
                  className="project-navigation-link prev"
                >
                  <span className="arrow prev-arrow">
                    <GrPrevious />
                  </span>
                  <div className="px-4 prev-content">
                    <h4>{projects[project.id - 2].title}</h4>
                    <p>Previous Project</p>
                  </div>
                </Link>
              )}
            </div>
            <div className="col-md-6 ">
              {project.id < projects.length && (
                <Link
                  to={`/project/${project.id + 1}`}
                  className="project-navigation-link next d-flex justify-content-end"
                >
                  <div className="px-4 next-content">
                    <h4>{projects[project.id].title}</h4>
                    <p>Next Project</p>
                  </div>
                  <span className="arrow next-arrow">
                    <GrNext />
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="pt-5">
          <CallToAction />
        </div>
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
