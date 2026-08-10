import { education } from "../data/education";

function Education() {
  return (
    <section className="section" id="education">
      <div className="section-heading">
        <p className="eyebrow">Academic Background</p>
        <h2>Education</h2>
      </div>

      <div className="education-grid">
        {education.map((item) => (
          <article
            className="education-card"
            key={item.degree}
          >
            <span className="education-duration">
              {item.duration}
            </span>

            <h3>{item.degree}</h3>

            <h4>{item.school}</h4>

            <p className="education-location">
              {item.location}
            </p>

            {item.gpa && (
              <p className="education-gpa">
                GPA: {item.gpa}
              </p>
            )}

            <p>{item.description}</p>

            <div className="skill-tags">
              {item.highlights.map((highlight) => (
                <span key={highlight}>
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;