import { Link } from "react-router";
import { certifications } from "../data/certifications";

function Certifications() {
  const featuredCertifications = certifications
    .filter((certification) => certification.featured)
    .slice(0, 4);

  return (
    <section className="section" id="certifications">
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">
        {featuredCertifications.map((certification) => (
          <article
            className="certification-card"
            key={certification.id}
          >
            <span className="certification-year">
              {certification.year}
            </span>

            <h3>{certification.title}</h3>

            <h4>{certification.organization}</h4>
          </article>
        ))}
      </div>

      <div className="view-all-container">
        <Link
          to="/certifications"
          className="view-all-button"
        >
          View All Certifications →
        </Link>
      </div>
    </section>
  );
}

export default Certifications;