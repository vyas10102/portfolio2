import { experiences } from "../data/experience";

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Professional Journey</p>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((experience) => (
          <article className="timeline-item" key={experience.company}>
            <div className="timeline-dot"></div>

            <span>{experience.period}</span>

            <h3>{experience.role}</h3>

            <h4>{experience.company}</h4>

            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;