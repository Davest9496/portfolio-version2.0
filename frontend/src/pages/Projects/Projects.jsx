import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Projects = ({ projects }) => {
  const { id } = useParams();
  console.log("Current ID from URL params:", id);
  console.log("Projects array:", projects);
  console.log(
    "Project IDs available:",
    projects.map((p) => p.id)
  );

  // Check if id is undefined or null
  if (id == null) {
    return (
      <div className="container mt-5">
        <h1>Error: Project ID is missing</h1>
        <p>URL parameter 'id' is not present.</p>
      </div>
    );
  }

  const project = projects.find((p) => p.id.toString() === id.toString());
  console.log("Found project:", project);

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
        <h1>{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid my-4"
        />
        <p>{project.fullDescription}</p>
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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            View Project
          </a>
        )}
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
