import { skills } from "../data/skills";

function TechStack() {
  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Technical Toolkit</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <article className="skill-card" key={group.category}>
            <h3>{group.category}</h3>

            <div className="skill-tags">
              {group.technologies.map((technology) => (
                <span key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TechStack;