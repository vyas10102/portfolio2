import { Link } from "react-router";
import { projects } from "../data/projects";

function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section className="section" id="projects">
      <div className="section-heading">
        <p className="eyebrow">
          Selected Work
        </p>

        <h2>Featured Projects</h2>

        <p className="section-description">
          A selection of projects across software
          engineering, AI and computer vision.
        </p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <span className="project-category">
              {project.category}
            </span>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="skill-tags">
              {project.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}
            </div>

            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="view-all-container">
        <Link
          to="/projects"
          className="view-all-button"
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}

export default Projects;