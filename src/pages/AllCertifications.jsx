import { Link } from "react-router";
import { certifications } from "../data/certifications";

function AllCertifications() {
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
          <p className="eyebrow">Credentials</p>

          <h1>All Certifications</h1>

          <p>
            Professional certifications and training completed across
            technology, research, and related areas.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
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
      </section>
    </main>
  );
}

export default AllCertifications;