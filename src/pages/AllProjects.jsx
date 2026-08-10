import { useState } from "react";
import { Link } from "react-router";

import {
  projects,
} from "../data/projects";

function AllProjects() {
  const [filter, setFilter] =
    useState("All");

  const categories = [
    "All",
    ...new Set(
      projects.map(
        (project) => project.category
      )
    ),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === filter
        );

  return (
    <main className="page-container">
      <section className="section">

        <Link
          to="/"
          className="back-link"
        >
          ← Back Home
        </Link>

        <div className="page-header">
          <p className="eyebrow">
            Portfolio
          </p>

          <h1>
            All Projects
          </h1>

          <p>
            Explore my complete collection
            of software engineering, AI,
            full-stack and computer vision
            projects.
          </p>
        </div>

        <div className="project-filters">
          {categories.map(
            (category) => (
              <button
                key={category}

                className={
                  filter === category
                    ? "active"
                    : ""
                }

                onClick={() =>
                  setFilter(category)
                }
              >
                {category}
              </button>
            )
          )}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(
            (project) => (
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
                      <span
                        key={technology}
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {project.github !== "#" && (
                  <a
                    href={
                      project.github
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    GitHub ↗
                  </a>
                )}
              </article>
            )
          )}
        </div>

      </section>
    </main>
  );
}

export default AllProjects;